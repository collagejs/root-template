<script lang="ts">
    import type { PinPadProps } from "../types.js";
    import svelteLogo from "../assets/svelte.svg";

    let { pinDispatched, maxPinLength, clearOnDispatch }: PinPadProps = $props();

    let pin = $state("");

    function handleButtonClick(value: string) {
        if (maxPinLength && pin.length >= maxPinLength) return;
        pin += value;
    }

    function handleClear() {
        pin = "";
    }

    function handleKeyPress(event: KeyboardEvent) {
        switch (event.key) {
            case "Enter":
                dispatchPin();
                break;
            default:
                if (/^\d$/.test(event.key)) {
                    handleButtonClick(event.key);
                }
        }
    }

    function handleKeyDown(event: KeyboardEvent) {
        switch (event.key) {
            case "Backspace":
                pin = pin.slice(0, -1);
                break;
            case "Escape":
                handleClear();
                break;
        }
    }

    function dispatchPin() {
        pinDispatched?.(pin);
        if (clearOnDispatch) {
            handleClear();
        }
    }
</script>

<div
    class="pinPad"
    onkeypress={handleKeyPress}
    onkeydown={handleKeyDown}
    role="textbox"
    tabindex="-1"
    aria-label="PIN Pad"
>
    <div class="pinPadInput">
        <img src={svelteLogo} alt="Powered by Svelte" />
        <input type="text" class="pinPadInput" readonly bind:value={pin} />
    </div>
    <div class="pinPadButtons">
        {#each { length: 9 } as _, index}
            <button
                class="pinPadButton"
                onclick={() => handleButtonClick((index + 1).toString())}
                tabindex={-1}
            >
                {index + 1}
            </button>
        {/each}
        {#each [{ t: "Clear", h: () => handleClear() }, { t: "0", h: () => handleButtonClick("0") }, { t: "Ok", h: () => dispatchPin() }] as btnInfo}
            <button class="pinPadButton" onclick={btnInfo.h} tabindex={-1}>
                {btnInfo.t}
            </button>
        {/each}
    </div>
</div>

<style>
    .pinPad {
        display: inline-block;
        border: 1px solid #659ab5;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #ddedff;
    }

    .pinPadInput {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        margin-bottom: 1rem;
        gap: 1rem;
        & input {
            font-size: 1.5rem;
            text-align: center;
            margin: 0;
        }
    }

    .pinPadButtons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .pinPadButton {
        padding: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        border: 1px solid #659ab5;
        border-radius: 0.5rem;
        background: linear-gradient(to bottom, #daecff, #7ca9d0);
        color: #111;
        transition: background-color 0.7s;
    }

    .pinPadButton:hover {
        background: linear-gradient(to bottom, #cadbed, #638aaa);
    }

    @media (prefers-color-scheme: dark) {
        .pinPad {
            border-color: #4a6b7c;
            background-color: #1e2a33;
        }

        .pinPadInput input {
            background-color: #1e2a33;
            color: #fff;
            border: 1px solid #4a6b7c;
        }

        .pinPadButton {
            border-color: #4a6b7c;
            background: linear-gradient(to bottom, #3a4b5c, #1e2a33);
            color: #fff;
        }

        .pinPadButton:hover {
            background: linear-gradient(to bottom, #2a3b4c, #0e1a23);
        }
    }
</style>
