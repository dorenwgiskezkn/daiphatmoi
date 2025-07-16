export async function onRequest(context) {
  return await context.env.ASSETS.fetch("https://your-site.pages.dev/sub-index.html");
}
