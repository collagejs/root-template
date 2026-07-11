<script lang="ts">
    import { Fallback, Route, Router } from "@svelte-router/core";
    import NavBar from "./lib/NavBar.svelte";
    import HomeView from "./lib/routes/home/HomeView.svelte";
    import IntroView from "./lib/routes/intro/IntroView.svelte";
    import AboutView from "./lib/routes/about/AboutView.svelte";
    import NotFound from "./lib/routes/NotFound.svelte";
    import MainBoundaryHandler from "./lib/MainBoundaryHandler.svelte";
    import logo from "@collagejs/core/logo/16";
    import PinPadInstructions from "./lib/routes/pin-pad/PinPadInstructions.svelte";
    import Layout from "./lib/routes/Layout.svelte";
    import PinPadTesting from "./lib/routes/pin-pad/PinPadTesting.svelte";
    import { AppCtx, setAppCtx } from "./AppCtx.svelte";
    import { MediaQuery } from "svelte/reactivity";
    import './app.css';

    // Setup for styling
    document.body.setAttribute("data-collagejs-theme", "");
    const mq = new MediaQuery("(prefers-color-scheme: dark)");

    $effect.pre(() => {
        if (mq.current) {
            document.body.classList.add('cjs-theme-dark');
        }
        else {
            document.body.classList.remove('cjs-theme-dark');
        }
    });

    const PinPadView = () =>
        import("./lib/routes/pin-pad/PinPadView.svelte").then(
            (module) => module.default,
        );

    const ctx = setAppCtx(new AppCtx());

    async function pingPinPadServer() {
        try {
            const response = await fetch("http://localhost:6101");
            return true;
        } catch (error) {
            return false;
        }
    }
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<div class="cjs-theme-{ctx.theme}">
    <Router>
        <NavBar />
        <svelte:boundary>
            <main>
                <div class="routes">
                    <Layout>
                        <Route key="home" path="/">
                            <HomeView />
                        </Route>
                        <Route key="intro" path="/intro">
                            <IntroView />
                        </Route>
                        <Route key="pin-pad" path="/pin-pad">
                            {#await pingPinPadServer()}
                                <PinPadTesting />
                            {:then serverAvailable}
                                {#if !serverAvailable}
                                    <PinPadInstructions />
                                {:else}
                                    {#await PinPadView() then Component}
                                        <Component />
                                    {/await}
                                {/if}
                            {/await}
                        </Route>
                        <Route key="about" path="/about">
                            <AboutView />
                        </Route>
                        <Fallback>
                            <NotFound />
                        </Fallback>
                    </Layout>
                </div>
            </main>
            {#snippet failed(_error, reset)}
                <MainBoundaryHandler {reset} />
            {/snippet}
        </svelte:boundary>
    </Router>
</div>

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
