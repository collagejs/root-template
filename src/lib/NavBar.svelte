<script lang="ts">
    import logo from '@collagejs/core/logo/48';
    import { Link, LinkContext } from '@svelte-router/core';
    import routerLogo from '@svelte-router/core/logo48';
    import ExternalLink from './ExternalLink.svelte';
</script>

<nav>
    <div class="brand">
        <ExternalLink href="https://collagejs.dev">
            <img src={logo} alt="CollageJS" />
        </ExternalLink>
        CollageJS
    </div>
    <div class="nav-items">
        <ExternalLink href="https://svelte-router.dev">
            <img src={routerLogo} alt="webJose's Svelte Router" />
        </ExternalLink>
        <LinkContext activeState={{ class: 'active', aria: { current: 'page' } }}>
        <div class="nav-item">
            <Link activeFor="home" href="/">Home</Link>
        </div>
        <div class="nav-item">
            <Link activeFor="feature" href="/feature">Feature</Link>
        </div>
        <div class="nav-item">
            <Link activeFor="about" href="/about">About</Link>
        </div>
        </LinkContext>
    </div>
</nav>

<style>
    nav {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        & .brand {
            display: flex;
            gap: 0.3rem;
            align-items: center;
            font-size: larger;
            font-weight: bold;
        }

        & .nav-items {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-left: auto;

            & .nav-item {

                & :global(a) {
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }

                    :global(&.active) {
                        font-weight: bold;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
