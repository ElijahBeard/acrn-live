

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DBnh4pdA.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BQ3ZOtLA.js"];
export const stylesheets = ["_app/immutable/assets/app.DVb1l-an.css"];
export const fonts = [];
