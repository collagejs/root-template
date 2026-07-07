<script lang="ts">
    import CollageJs from "../../CollageJs.svelte";


</script>

<section>
    <h2>You're Missing a Step</h2>
    <p>
        You have arrived here because the preview server for the PIN pad piece has not been started.  Please build the
        PIN pad project in the <code>pieces/svelte-pinpad</code> directory and run the preview server for the PIN pad piece.
    </p>
    <h3>Building the PIN Pad <CollageJs /> Piece</h3>
    <p>
        Open a new terminal window, then move to the <code>pieces/svelte-pinpad</code> directory, then install dependencies
        and build the Vite project as per usual:
    </p>
    <pre>cd pieces/svelte-pinpad/
npm install
npm run build</pre>
    <h3>Running the PIN Pad <CollageJs /> Piece Preview Server</h3>
    <p>
        After building the piece, run the preview server for the PIN pad piece:
    </p>
    <pre>npm run preview</pre>
    <p>
        Once the preview server is running, simply
        <button class="cjs-btn cjs-btn-primary cjs-btn-sm" onclick={() => location.reload()}>
            reload
        </button> this page to see the PIN pad piece in action.
    </p>
</section>
