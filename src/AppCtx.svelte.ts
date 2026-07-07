import { createContext } from "svelte";

export class AppCtx {
    theme = $state<'royal' | 'accent' | 'nature' | 'sky'>('accent');
}

export const [getAppCtx, setAppCtx] = createContext<AppCtx>();
