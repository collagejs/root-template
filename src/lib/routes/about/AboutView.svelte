<script lang="ts">
    import ExternalLink from "../../ExternalLink.svelte";
    import CollageJS from "../../CollageJs.svelte";
    import { getLayoutCtx } from "../../LayoutContext.svelte";
    import Info from "@lucide/svelte/icons/info";
    import SquareCheck from "@lucide/svelte/icons/square-check-big";

    getLayoutCtx().fileUrl = import.meta.url;
</script>

<h1><Info /> About <CollageJS /> Root Project</h1>
<p>
    This project is a template for creating <CollageJS withLink /> applications. It provides a project configured to use
    <ExternalLink href="https://svelte-router.dev">webJose's Svelte Router</ExternalLink> for client-side routing,
    ready to take on the task to build a <CollageJS /> micro-frontends application.
</p>
<h2>Out of the Box...</h2>
<ul>
    <li><SquareCheck /> <CollageJS /> library integration:  Core library, Svelte adapter and Vite plugin</li>
    <li><SquareCheck /> Svelte Router setup with basic routes</li>
    <li><SquareCheck /> Navigation bar with links to <strong>Home</strong> and <strong>About</strong> pages</li>
    <li>
        <SquareCheck /> A "Feature" route that falls back until removed or made functional, perhaps by mounting your first
        <CollageJS /> micro-frontend
    </li>
</ul>
<p>
    Start building your <CollageJS /> application by expanding upon this template. Add more routes, components, and
    <CollageJS /> features as needed.
</p>

<style>
    ul {
        list-style-type: none;
    }
</style>
