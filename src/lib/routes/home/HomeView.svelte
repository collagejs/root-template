<script lang="ts">
    import Hero from "./Hero.svelte";
    import { getLayoutCtx } from "../../LayoutContext.svelte";

    getLayoutCtx().fileUrl = import.meta.url;
</script>

<Hero />
