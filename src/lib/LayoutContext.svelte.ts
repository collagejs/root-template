import { createContext } from "svelte";

export class LayoutContext {
    fileUrl = $state('');
}

export const [getLayoutCtx, setLayoutCtx] = createContext<LayoutContext>();
