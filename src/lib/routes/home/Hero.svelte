<script lang="ts">
    import bigLogo from "@collagejs/core/logo/512";
    import ExternalLink from "../../ExternalLink.svelte";
</script>

<div class="hero">
    <div class="hero-content">
        <ExternalLink href="https://collagejs.dev">
            <img src={bigLogo} alt="CollageJS" />
        </ExternalLink>
        <h1>CollageJS</h1>
        <div class="cjs-text-muted">
            <p>Micro-frontend library for web applications.</p>
            <p>Build with any framework.</p>
            <p>Route with multiple paths.</p>
        </div>
    </div>
</div>

<style>
    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-content {
        text-align: center;

        & p {
            margin: 0;
        }
    }

    .hero-content h1 {
        font-size: 3rem;
    }

    .hero-content p {
        font-size: 1.5rem;
        font-style: italic;
    }
</style>
