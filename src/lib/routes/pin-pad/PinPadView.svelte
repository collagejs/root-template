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
    let shadow = $state<boolean | ShadowRootInit>(true);
    let containerBgColor = $state("#1b9d60");
    let containerPadding = $state(15);

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
    <div>
        <h4>Piece Properties</h4>
        <div class="controls-container">
            <label>
                Max PIN Length:
                <input type="range" min="2" max="10" bind:value={maxLength} />
            </label>
            <label>
                <input type="checkbox" bind:checked={clearOnDispatch} />
                Clear on PIN Dispatch
            </label>
        </div>
    </div>
    <div>
        <h4>Container Settings</h4>
        <div class="controls-container">
            <label>
                <input
                    type="radio"
                    name="shadow"
                    value={false}
                    bind:group={shadow}
                />
                <span
                    class="color-legend dom cjs-rounded-circle"
                    title="The piece container's border will be this color if it successfully mounts in the Light DOM."
                ></span>
                Light DOM
            </label>
            <label>
                <input
                    type="radio"
                    name="shadow"
                    value={true}
                    bind:group={shadow}
                />
                <span
                    class="color-legend open cjs-rounded-circle"
                    title="The piece container's border will be this color if it successfully mounts in the Open Shadow DOM."
                ></span>
                Open Shadow Root
            </label>
            <label>
                <input
                    type="radio"
                    name="shadow"
                    value={{ mode: "closed" }}
                    bind:group={shadow}
                />
                <span
                    class="color-legend closed cjs-rounded-circle"
                    title="The piece container's border will be this color if it successfully mounts in the Closed Shadow DOM."
                ></span>
                Closed Shadow Root
            </label>
            <label>
                Background Color:
                <input type="color" bind:value={containerBgColor} />
                <span class="cjs-text-muted">(transparency is applied)</span>
            </label>
            <label>
                Padding (in px):
                <input type="range" min="5" max="40" list="padding-values" bind:value={containerPadding} />
                <datalist id="padding-values">
                    <option value="15"></option>
                    <option value="25"></option>
                    <option value="35"></option>
                </datalist>
            </label>
        </div>
    </div>
</div>
<div class="tip" style:visibility={tipVisible ? "visible" : "hidden"}>
    <LightBulb color="var(--cjs-primary)" /> You can use the keyboard to type the
    PIN if you focus on it.
</div>
<Piece
    {...piece(pinPad, {
        shadow,
        containerProps: {
            onfocusin: () => handlePieceFocus(true),
            onfocusout: () => handlePieceFocus(false),
            style: `background-color: ${containerBgColor}55; padding: ${containerPadding}px;`,
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
        align-items: start;
        gap: 2rem;
        margin-bottom: 1rem;

        & label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        & .controls-container {
            display: flex;
            flex-direction: column;
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

    .color-legend {
        display: inline-block;
        width: 1rem;
        height: 1rem;

        &.dom {
            background-color: var(--cjs-primary);
        }

        &.open {
            background-color: var(--cjs-primary-700);
        }

        &.closed {
            background-color: var(--cjs-primary-800);
        }
    }

    :global {
        [data-cjs-piece-host] {
            display: block !important;
            width: fit-content;
            border: 2px solid var(--cjs-primary);
            border-radius: 0.5rem;
            padding: 0.5rem;
        }

        [data-cjs-piece-host="dom"] {
            border-color: var(--cjs-primary);
        }

        [data-cjs-piece-host="open"] {
            border-color: var(--cjs-primary-700);
        }

        [data-cjs-piece-host="closed"] {
            border-color: var(--cjs-primary-800);
        }
    }
</style>
