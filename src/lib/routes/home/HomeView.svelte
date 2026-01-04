<script lang="ts">
    import ExternalLink from "../../ExternalLink.svelte";
    import routerLogo from '@svelte-router/core/logo48';
    import projectStructure from '../../../assets/project-structure.txt?raw';
</script>

<h1>CollageJS Root Project</h1>
<p>
    This is a root project template for CollageJS applications. It includes basic routing setup using
    <ExternalLink href="https://svelte-router.dev">webJose's Svelte Router</ExternalLink>.
</p>
<h2><img src={routerLogo} alt="webJose's Svelte Router">webJose's Svelte Router</h2>
<p>
    This router is unlike any other routers you may have used before. It is designed to be simple, fast, and
    flexible. It supports many popular features like nested routes/routers and route parameters, plus it can
    do 3 things no other router on Earth can do:
</p>
<ul>
    <li>
        <em>Disconnected Pieces of User Interface (DPUI).</em>  Add extra <code>&lt;Route&gt;</code> components
        anywhere in your component tree and repeat the route key you want.  Then all <code>&lt;Route&gt;</code>
        components with the same key will render when that route is active, no mater their position in the
        document.
    </li>
    <li>
        <em>Simultaneous path and hash routing.</em>  The library allows you to mix routers and routes that operate
        on the path and hash portions of the URL.  This allows you to create complex routing scenarios with ease.
    </li>
    <li>
        <em>Multiple paths in the hashtag.</em>  Referred to as "multi-hash routing", this feature allows you to define
        multiple paths within the hash portion of the URL, separated by semicolons.  This enables you to create more
        complex routing scenarios within a single page application.
    </li>
</ul>
<h3>Initial Router Settings</h3>
<ul>
    <li><em>Default Routing Mode:</em>  Path-based routing</li>
    <li><em>Library Mode:</em>  Lite</li>
</ul>
<h2>Project Structure</h2>
<pre>{projectStructure}</pre>
<p>
    Key notes:
</p>
<ul>
    <li>The <code>src/lib/routes/</code> folder contains the route components for the application.</li>
    <li>
        The <code>NavBar.svelte</code> component provides navigation links to different routes.  It uses
        <code>&lt;Link&gt;</code> components from <code>@svelte-router/core</code>.
    </li>
    <li>
        The <code>ExternalLink.svelte</code> component is used for links that navigate to external websites.
    </li>
    <li>
        The <code>App.svelte</code> component sets up the router and defines the main routes using
        <code>&lt;Router&gt;</code>, <code>&lt;Route&gt;</code> and <code>&lt;Fallback&gt;</code> components.
    </li>
    <li>
        The <code>NotFound.svelte</code> component is what is shown when no route matches (fallback).
    </li>
    <li>
        The <code>main.ts</code> file contains the router's initialization function call.  This is where the
        router is configured and started.  Exchange the <code>init()</code> function with the
        <code>initFull()</code> function to enable the full library features to account for external routers.
    </li>
</ul>
<h2>Cleaning Up</h2>
<p>
    So you now want to start building your CollageJS application using this root template.  Here is how you can
    clean up the project:
</p>
<ul>
    <li>Clear the <code>src/lib/routes</code>, maybe just leaving the <code>home</code> route.</li>
    <li>
        Remove all CSS from <code>src/app.css</code> and then use it for your own purposes, like importing a
        global CSS framework like <em>TailwindCSS</em> or <em>Bootstrap</em>.
    </li>
    <li>Clean the <code>src/assets</code> and <code>/public</code> folders.</li>
    <li>
        Update the project metadata in the <code>index.html</code> and <code>App.svelte</code> files.  The
        latter sets the favicon for the application inside a <code>&lt;svelte:head&gt;</code> special element.
    </li>
    <li>
        Clean up or remove remaining components like the <code>MainBoundaryHandler.svelte</code> error handler if you
        don't need them.  Feel free to learn from them (like how to use links from <code>NavBar.svelte</code>) and
        then dispose of them if you wish.
    </li>
    <li>
        <strong>Very important:</strong>  Clean up and update the <code>package.json</code> file to reflect your
        new project's metadata, dependencies, and scripts.  Of special importance if the <code>name</code> property.
    </li>
    <li>
        TODO - Things related to Vite plug-ins.
    </li>
</ul>

<style>
    h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    em {
        font-style: italic;
        font-weight: bold;
    }

    ul {
        list-style-type: lower-greek;
    }
</style>
