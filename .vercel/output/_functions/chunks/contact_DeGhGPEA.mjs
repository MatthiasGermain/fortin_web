import 'resend';

const prerender = false;
const redirect = (url, status) => {
  const target = new URL("/contact", url);
  target.searchParams.set("status", status);
  return new Response(null, {
    status: 303,
    headers: { Location: target.toString() + "#form" }
  });
};
const POST = async ({ request, url }) => {
  let data;
  try {
    data = await request.formData();
  } catch {
    return redirect(url, "error");
  }
  const honeypot = data.get("company")?.toString().trim();
  if (honeypot) {
    return redirect(url, "ok");
  }
  const name = data.get("name")?.toString().trim() ?? "";
  const email = data.get("email")?.toString().trim() ?? "";
  data.get("type")?.toString().trim() ?? "";
  const message = data.get("message")?.toString().trim() ?? "";
  const consent = data.get("consent");
  if (!name || !email || !message || !consent) {
    return redirect(url, "error");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return redirect(url, "error");
  }
  {
    console.error("RESEND_API_KEY missing");
    return redirect(url, "error");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
