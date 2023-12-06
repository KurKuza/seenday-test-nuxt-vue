import { defineNitroPlugin } from "nitropack/runtime/plugin";

export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    // html.bodyAppend.push()
    // html.head.unshift(`<style>${minifiedCss}</style>`)
    // html.htmlAttrs.push()
  });
});
