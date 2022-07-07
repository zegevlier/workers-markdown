import { WASI } from '@cloudflare/workers-wasi';
import mywasm from '../mark/target/wasm32-wasi/release/mark.wasm';
import indexhtml from './form';

export interface Env {

}

export default {
	async fetch(request: Request, _env: Env, ctx: ExecutionContext): Promise<Response> {
		// Creates a TransformStream we can use to pipe our stdout to our response body.
		if (request.method == "POST") {
			const stdout = new TransformStream();
			const wasi = new WASI({
				args: [],
				stdin: request.body ? request.body : undefined,
				stdout: stdout.writable,
			});

			// Instantiate our WASM with our demo module and our configured WASI import.
			const instance = new WebAssembly.Instance(mywasm, {
				wasi_snapshot_preview1: wasi.wasiImport,
			});

			// Keep our worker alive until the WASM has finished executing.
			ctx.waitUntil(wasi.start(instance));

			// Finally, let's reply with the WASM's output.
			return new Response(stdout.readable);
		} else {
			return new Response(indexhtml, {
				headers: {
					"Content-Type": "text/html",
				},
			});
		}

	},
};