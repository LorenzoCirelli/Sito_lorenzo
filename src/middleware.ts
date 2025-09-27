import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === "/") {
    const acceptLang = context.request.headers.get("accept-language") || "";
    const preferred = acceptLang.split(",")[0].split("-")[0];
    const locale = ["it", "en"].includes(preferred) ? preferred : "it";

    return Response.redirect(`${context.url.origin}/${locale}`, 301);
  }
  return next();
});