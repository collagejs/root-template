<script lang="ts">
    import PinPad from './lib/PinPad.svelte';

    let userPin = $state('');
    
    function handlePinDispatched(pin: string) {
        userPin = pin;
    }
</script>

<main class="content">
    <section class="section">
        <h1>PIN Pad CollageJS Piece Playground</h1>
        <p>
            This is the playground for the <code>PinPad</code> piece. Enter a PIN using the on-screen buttons or your 
            keyboard, and click "Ok" or press ENTER on your keyboard to dispatch the PIN. The dispatched PIN will be displayed 
            below.
        </p>
        <PinPad pinDispatched={handlePinDispatched} />
        <div class="pin">
            <dl>
                <dt>User's PIN:</dt>
                <dd>{userPin}</dd>
            </dl>
        </div>
    </section>
</main>

<style>
    .pin {
        margin-top: 1rem;
        font-size: x-large;

        & dt {
            font-weight: lighter;
        }
        & dd {
            font-weight: bold;
        }
    }
</style>