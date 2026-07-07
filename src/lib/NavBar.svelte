<script lang="ts">
    import logo from '@collagejs/core/logo/48';
    import { Link, LinkContext } from '@svelte-router/core';
    import ExternalLink from './ExternalLink.svelte';
    import { getAppCtx } from '../AppCtx.svelte';
    import Palette from '@lucide/svelte/icons/palette';

    const themes = ['royal', 'accent', 'nature', 'sky'] as const;
    let curTheme = $state(1);
    const appCtx = getAppCtx();

    $effect(() => {
        appCtx.theme = themes[curTheme];
    });
</script>

<nav>
    <div class="brand">
        <ExternalLink href="https://collagejs.dev">
            <img src={logo} alt="CollageJS" />
        </ExternalLink>
        <span
            class="theme-toggle"
            onkeydown= {() => { }}
            tabindex={-1}
            onclick={() => curTheme = (curTheme + 1) % themes.length}
            role="button"
        >
            CollageJS <Palette />
        </span>
    </div>
    <div class="nav-items">
        <LinkContext activeState={{ class: 'active', aria: { current: 'page' } }}>
        <div class="nav-item">
            <Link activeFor="home" href="/">Home</Link>
        </div>
        <div class="nav-item">
            <Link activeFor="intro" href="/intro">Intro</Link>
        </div>
        <div class="nav-item">
            <Link activeFor="pin-pad" href="/pin-pad">PIN Pad</Link>
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
        padding: 0.5rem 1rem;
        gap: 0.5rem;
        align-items: center;

        & .brand {
            display: flex;
            gap: 0.3rem;
            align-items: center;
            font-size: larger;
            font-weight: bold;
            background: var(--cjs-primary-gradient);
            padding-left: 0.5rem;
            padding-right: 1.5rem;
            padding-top: 0.2rem;
            border-radius: var(--cjs-radius-lg);
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

        & .theme-toggle {
            cursor: pointer;
        }
    }
</style>
