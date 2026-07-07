<script lang="ts">
    import { pinPadPiece } from "@cjs-gallery/pinPad";
    import { Piece, piece } from "@collagejs/svelte";
    import CollageJS from "../../CollageJs.svelte";
    import { getLayoutCtx } from "../../LayoutContext.svelte";
    import LightBulb from "@lucide/svelte/icons/lightbulb";

    getLayoutCtx().fileUrl = import.meta.url;
    const pinPad = pinPadPiece();

    let userPin = $state("");
    let maxLength = $state(4);
    let clearOnDispatch = $state(true);
    let tipVisible = $state(true);

    function handlePinDispatched(pin: string) {
        userPin = pin;
    }

    function handlePieceFocus(focus: boolean) {
        tipVisible = !focus;
    }
</script>

<h1><CollageJS /> PIN Pad Piece</h1>
<p>
    This is a <CollageJS /> piece that provides a PIN pad interface. It allows users
    to input a PIN, which is then dispatched to the parent component, outside the
    shadow DOM where the piece has been mounted.
</p>
<div class="pinPad-controls">
    <label>
        Max PIN Length:
        <input type="range" min="2" max="10" bind:value={maxLength} />
    </label>
    <label>
        <input type="checkbox" bind:checked={clearOnDispatch} />
        Clear on Dispatch
    </label>
</div>
<div class="tip" style:visibility={tipVisible ? "visible" : "hidden"}>
    <LightBulb color="var(--cjs-primary)" /> You can use the keyboard to type the PIN if you focus on it.
</div>
<Piece
    {...piece(pinPad, {
        shadow: true,
        containerProps: {
            onfocusin: () => handlePieceFocus(true),
            onfocusout: () => handlePieceFocus(false),
        },
    })}
    pinDispatched={handlePinDispatched}
    maxPinLength={maxLength}
    {clearOnDispatch}
/>
<dl>
    <dt>User PIN:</dt>
    <dd>{userPin}</dd>
</dl>

<style>
    dl {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
        font-size: larger;

        & dd {
            font-weight: bold;
            color: var(--cjs-primary);
        }
    }

    .pinPad-controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;

        & label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    .tip {
        font-size: smaller;
        color: var(--cjs-text-muted);
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        width: fit-content;
    }
</style>
