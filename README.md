# Markdown rendering using the new WASI support for workers

This project uses the [new WASI support for workers](https://blog.cloudflare.com/announcing-wasi-on-workers/) to render Markdown using a (much faster than JS) WASM module. All the markdown rendering is done by [pulldown-cmark](https://docs.rs/crate/pulldown-cmark/latest) in the WASM module. A hosted preview is available [here](https://markdown.zegevlier.workers.dev/).

## Usage

First, compile the rust program. `cd mark`, then run

```bash
cargo build --target wasm32-wasi --release
```

You may need to install the toolchain first, but it will prompt you for that.

Then, for local development, run

```bash
npx wrangler run dev
```

Now you can visit the preview in your browser.

If you submit a POST request, the content will be converted to from Markdown to HTML.
