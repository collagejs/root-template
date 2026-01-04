<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    type Props = Omit<HTMLAnchorAttributes, 'target' | 'rel'>;

    let {
        children,
        ...restProps
    }: Props = $props();
</script>

<a
    target="_blank"
    rel="noopener noreferrer"
    {...restProps}
>
    {@render children?.()}
</a>
