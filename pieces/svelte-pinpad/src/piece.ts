import PinPad from './lib/PinPad.svelte';
import { cssMountFactory } from '@collagejs/vite-css/ex';
import { buildPiece } from '@collagejs/svelte';
import type { CorePiece } from '@collagejs/core';
import type { ComponentProps } from 'svelte';

const cssMount = cssMountFactory('piece');

export function pinPadPiece(base?: string) {
    const lc = buildPiece(PinPad);
    return {
        ...lc,
        mount: [base ? cssMount.bind({ base }) : cssMount, lc.mount],
    } satisfies CorePiece<ComponentProps<typeof PinPad>>;
}
