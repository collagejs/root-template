declare module "@cjs-gallery/pinPad" {
    import type { CorePiece } from '@collagejs/core';

    export function pinPadPiece(base?: string): CorePiece<{
        pinDispatched?: (pin: string) => void;
        maxPinLength?: number;
        clearOnDispatch?: boolean;
    }>;
}
