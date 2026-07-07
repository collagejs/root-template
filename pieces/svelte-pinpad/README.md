# CollageJS PinPad Piece

This projects exposes a single piece factory function:  `pinPadPiece()`.  It creates a pin pad-like HTML component that happens to be very simple but illustrative on how easy it is to create a Vite project for *CollageJS*.

## CSS Mounting

CSS is handled by the `cssMountFactory` from `@collagejs/vite-css`, and the code in `src/piece.ts` shows a neat trick that can be achieved with this (and any) factory function:  The ability to specify the base URL for the generated CSS link elements.

To explain a bit further:  `cssMountFactory` will respect whichever `base` is configured in Vite's configuration file for building.  This means that you may use Vite's own `base` configuration property without issues.

However, it is a bit more cumbersome to use than the trick in the piece's factory function.  One has to use the default function export variant in Vite's configuration file:

```ts
import { defineConfig, type ConfigEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { cjsCssPlugin } from '@collagejs/vite-css';

// https://vite.dev/config/
export default function (env: ConfigEnv) {
    return defineConfig({
        plugins: [svelte(), cjsCssPlugin({
            serverPort: 6100,
            aim: false
        })],
        base: env.command === 'build' ? 'http://localhost:6100/' : '/',
    });
}
```

See?  We must convert to use the function version so we can use a base during serve mode (`npm run dev`) and then another for the built product.

But there's one more thing:  Liberty.  Vite's base become hardcoded, and maybe this is fine for many cases.  However, for highly reusable pieces, the trick in the factory function excels because it even allows for *CollageJS* pieces to be packaged as NPM packages, and then served via CDN's.  This trick is found in the `@collagejs/imo` package.