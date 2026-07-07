<script lang="ts">
    import ExternalLink from "../../ExternalLink.svelte";
    import routerLogo from "@svelte-router/core/logo48";
    import projectStructure from "../../../assets/project-structure.txt?raw";
    import CollageJS from "../../CollageJs.svelte";
    import { getLayoutCtx } from "../../LayoutContext.svelte";
    import Trash from "@lucide/svelte/icons/trash";
    import Pyramid from "@lucide/svelte/icons/pyramid";

    getLayoutCtx().fileUrl = import.meta.url;
</script>

<h1><CollageJS /> Root Project</h1>
<p>
    This is a root project template for <CollageJS withLink /> applications. It includes
    basic routing setup using
    <ExternalLink href="https://svelte-router.dev"
        >webJose's Svelte Router</ExternalLink
    >.
</p>
<h2 class="with-logo">
    <img src={routerLogo} alt="webJose's Svelte Router" />webJose's Svelte
    Router
</h2>
<p>
    Learn about the one-of-a-kind features of this router:
</p>
<ul>
    <li>
        <ExternalLink
            href="https://svelte-router.dev/docs/routing-with-components#Disconnected-Pieces-of-User-Interface-(DPUI)"
        >
            Disconnected Pieces of User Interface (DPUI)
        </ExternalLink>
    </li>
    <li>
        <ExternalLink href="https://svelte-router.dev/docs/routing-modes">
            Simultaneous path and hash routing
        </ExternalLink>
    </li>
    <li>
        <ExternalLink
            href="https://svelte-router.dev/docs/routing-modes#Universes-Defined"
        >
            Multiple paths in the hashtag
        </ExternalLink>
    </li>
</ul>
<h3>Router Settings</h3>
<ul>
    <li>Default Routing Mode: <em>Path-based routing</em></li>
    <li>Library Mode: <em>Lite</em></li>
</ul>
<details>
    <summary><h2 class="cjs-inline-block"><Pyramid /> Project Structure</h2></summary>
    <pre>{projectStructure}</pre>
    <h3>Key notes:</h3>
    <ul>
        <li>
            The <code>src/lib/routes</code> folder contains the route components
            for the application.
        </li>
        <li>
            The <code>NavBar.svelte</code> component provides navigation links
            to different routes. It uses
            <code>&lt;Link&gt;</code> components from
            <code>@svelte-router/core</code>.
        </li>
        <li>
            The <code>ExternalLink.svelte</code> component is used for links that
            navigate to external websites.
        </li>
        <li>
            The <code>App.svelte</code> component sets up the router and defines
            the main routes using
            <code>&lt;Router&gt;</code>, <code>&lt;Route&gt;</code> and
            <code>&lt;Fallback&gt;</code> components.
        </li>
        <li>
            The <code>NotFound.svelte</code> component is what is shown when no route
            matches (fallback).
        </li>
        <li>
            The <code>main.ts</code> file contains the router's initialization
            function call. This is where the router is configured and started.
            Exchange the <code>init()</code> function with the
            <code>initFull()</code> function to enable the full library features
            to account for external routers.
        </li>
    </ul>
</details>

<div class="card">
    <div class="card-header">
        <h2><Trash /> Cleaning Up</h2>
    </div>
    <div class="card-body">
        <ul>
            <li>
                Clear the <code>src/lib/routes</code> folder.
            </li>
            <li>
                Remove the file <code>src/app.css</code> or repurpose it for <em>TailwindCSS</em>,
                <em>Bootstrap</em> or similar.
            </li>
            <li>
                Remove the contents of the <code>src/App.svelte</code> file, just leaving the routing structure.
            </li>
            <li>
                Clean the <code>src/assets</code> and <code>/public</code> folders.
            </li>
            <li>
                Clean up or remove remaining components like the <code>MainBoundaryHandler.svelte</code>
                error handler if not needed.
            </li>
            <li>
                <strong>Very important:</strong> Clean up and update the
                <code>package.json</code>
                file to reflect your new project's metadata, dependencies, and scripts.
                Of special importance if the <code>name</code> property.
            </li>
            <li>
                <strong>Optional:</strong>  Maybe fix a <code>@collagejs/imo</code> version in
                <code>vite.config.ts</code> with the <code>imo</code> configuration option.
            </li>
        </ul>
    </div>
</div>

<style>
    h2.with-logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    ul {
        list-style-type: lower-greek;
    }

    .card {
        border: 1px solid var(--cjs-primary);
        border-radius: var(--cjs-radius-xl);

        & .card-header {
            border-top-left-radius: var(--cjs-radius-xl);
            border-top-right-radius: var(--cjs-radius-xl);
            padding: 1em;
            color: var(--cjs-primary);
            font-weight: bold;
            font-size: larger;
            & > * {
                margin: 0;
            }
        }

        & .card-body {
            padding: 1em;
        }
    }
</style>
