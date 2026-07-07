<script lang="ts">
    import type { Snippet } from "svelte";
    import { LayoutContext, setLayoutCtx } from "../LayoutContext.svelte";
    import { location } from "@svelte-router/core";

    type Props = {
        children?: Snippet;
    }

    let {
        children
    }: Props = $props();

    const ctx = setLayoutCtx(new LayoutContext());

    $effect.pre(() => {
        location.url.pathname;
        ctx.fileUrl = '';
    })
</script>

<section>
    {#if ctx.fileUrl}
        <aside>
            File: <code>{new URL(ctx.fileUrl).pathname}</code>
        </aside>
    {/if}
    {@render children?.()}
</section>

<style>
    aside {
        font-size: 0.8em;
        color: var(--color-text-muted);
        margin-bottom: 1em;
    }
</style>
