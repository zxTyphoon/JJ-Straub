// PostToolUse hook: run prettier on the file Claude just wrote or edited, so
// agent-written files match what Ctrl+S produces in the editor.
//
// Reads the hook payload from stdin, formats one file, and always exits 0 -
// a formatter must never fail a tool call. Honours .prettierignore
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

function read() {
	return new Promise((resolve) => {
		let raw = '';
		process.stdin.setEncoding('utf8');
		process.stdin.on('data', (chunk) => (raw += chunk));
		process.stdin.on('end', () => resolve(raw));
		process.stdin.on('error', () => resolve(''));
	});
}

const payload = await read();

let file;
try {
	const parsed = JSON.parse(payload);
	file = parsed?.tool_response?.filePath ?? parsed?.tool_input?.file_path;
} catch {
	process.exit(0);
}
if (!file) process.exit(0);

let prettierBin;
try {
	prettierBin = createRequire(path.join(repoRoot, 'package.json')).resolve(
		'prettier/bin/prettier.cjs'
	);
} catch {
	// prettier not installed yet - stay silent rather than nagging on every edit
	process.exit(0);
}

// --ignore-unknown: prettier has no parser for .yaml-adjacent or binary files
const run = spawnSync(process.execPath, [prettierBin, '--write', '--ignore-unknown', file], {
	cwd: repoRoot,
	stdio: ['ignore', 'pipe', 'pipe'],
	encoding: 'utf8'
});

if (run.status !== 0 && run.stderr?.trim()) {
	// Surface a genuine syntax error, but never block the turn.
	process.stdout.write(
		JSON.stringify({
			systemMessage: `prettier could not format ${path.basename(file)}: ${run.stderr.trim().split('\n')[0]}`,
			suppressOutput: true
		})
	);
}
process.exit(0);
