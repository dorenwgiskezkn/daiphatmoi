export async function onRequest(context) {
  // fallback tất cả route về sub-index.html
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  try {
    // Thử fetch file thật (nếu tồn tại)
    const response = await context.next();
    if (response.status === 404 && !pathname.includes(".")) {
      // Nếu là route ảo như /abc, fallback về sub-index.html
      return context.env.ASSETS.fetch("http://localhost/sub-index.html");
    }
    return response;
  } catch (err) {
    return context.env.ASSETS.fetch("http://localhost/sub-index.html");
  }
}
