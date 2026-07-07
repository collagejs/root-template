<script lang="ts">
    import logo from '@collagejs/core/logo/16';
    import ExternalLink from './ExternalLink.svelte';

    type Props = {
        withLink?: boolean;
    };

    let {
        withLink = false
    }: Props = $props();
</script>

{#snippet contents()}
    <span class="collage-js"><img src={logo} alt="CollageJS Logo" />CollageJS</span>
{/snippet}

{#if withLink}
    <ExternalLink href="https://collagejs.dev">
        {@render contents()}
    </ExternalLink>
{:else}
    {@render contents()}
{/if}

<style>
    span {
        display: inline-flex;
        align-items: baseline;
        gap: 0.1em;
        font-weight: bold;

        & img {
            width: 1em;
            height: 1em;
        }
    }
</style>
