<script lang="ts">
    import { Fallback, Route, Router } from "@svelte-router/core";
    import NavBar from "./lib/NavBar.svelte";
    import HomeView from "./lib/routes/home/HomeView.svelte";
    import AboutView from "./lib/routes/about/AboutView.svelte";
    import NotFound from "./lib/routes/NotFound.svelte";
    import MainBoundaryHandler from "./lib/MainBoundaryHandler.svelte";
    import logo from '@collagejs/core/logo/16';
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<Router>
    <NavBar />
    <svelte:boundary>
        <main>
            <div class="routes">
                <Route key="home" path="/">
                    <HomeView />
                </Route>
                <Route key="about" path="/about">
                    <AboutView />
                </Route>
                <Fallback>
                    <NotFound />
                </Fallback>
            </div>
        </main>
        {#snippet failed(error, reset)}
            <MainBoundaryHandler {reset} />
        {/snippet}
    </svelte:boundary>
</Router>

<style>
    main {
        display: flex;
        flex-direction: column;
        margin: 1.5rem;
        align-items: center;

        & > .routes {
            display: inline-block;
            flex-grow: 1;
        }
    }
</style>
