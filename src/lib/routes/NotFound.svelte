<script lang="ts">
    import { getLayoutCtx } from "../LayoutContext.svelte";
    import CircleOff from "@lucide/svelte/icons/circle-off";

    getLayoutCtx().fileUrl = import.meta.url;
</script>

<h1><CircleOff /> Nothing to See Here</h1>
<p>
    You have reached fallback content.  This happens because the current URL does not match any defined routes.
</p>
<p>
    To add routes, open <code>src/App.svelte</code> and add more <code>&lt;Route&gt;</code> components within the
    <code>&lt;Router&gt;</code>.
</p>
