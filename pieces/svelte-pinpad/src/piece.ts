import PinPad from './lib/PinPad.svelte';
import { CssFactory } from '@collagejs/vite-css/ex';
import { buildPiece } from '@collagejs/svelte';
import type { CorePiece } from '@collagejs/core';
import type { ComponentProps } from 'svelte';

const css = new CssFactory(import.meta.url);

export function pinPadPiece() {
    const lc = buildPiece(PinPad);
    const { mount, relocate } = css.instantiate();
    return {
        ...lc,
        mount: [mount, lc.mount],
        relocate: [relocate, lc.relocate!],
    } satisfies CorePiece<ComponentProps<typeof PinPad>>;
}
