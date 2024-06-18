export default defineAppConfig({
  myLayer: {
    name: "Search layer",
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
