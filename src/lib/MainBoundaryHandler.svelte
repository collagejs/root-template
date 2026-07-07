<script lang="ts">
    type Props = {
        reset?: () => void;
    };

    let {
        reset
    }: Props = $props();
</script>

<h1>Oops!  An Error Occurred</h1>
<p>
    You're seeing this because the <code>&lt;svelte:boundary&gt;</code> component caught an error in its child
    component tree (it is set up in <code>src/App.svelte</code>).
</p>
<p>
    After fixing the problem, click this <button class="cjs-btn cjs-btn-primary cjs-btn-sm" onclick={reset}>reset</button> button to try again.
</p>
