import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const RECIPIENTS = [
  "germain-mat25@orange.fr",
  "thibautgarcia25300@gmail.com",
];

const FROM_ADDRESS = "Fortin <noreply@fortin-projet.fr>";

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const redirect = (url: URL, status: "ok" | "error") => {
  const target = new URL("/contact", url);
  target.searchParams.set("status", status);
  return new Response(null, {
    status: 303,
    headers: { Location: target.toString() + "#form" },
  });
};

export const POST: APIRoute = async ({ request, url }) => {
  let data: FormData;
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
  const type = data.get("type")?.toString().trim() ?? "";
  const message = data.get("message")?.toString().trim() ?? "";
  const consent = data.get("consent");

  if (!name || !email || !message || !consent) {
    return redirect(url, "error");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return redirect(url, "error");
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY missing");
    return redirect(url, "error");
  }

  const resend = new Resend(apiKey);
  const subject = `Nouvelle proposition Fortin${type ? ` — ${type}` : ""}`;

  const html = `
    <h2 style="font-family:serif">Nouvelle proposition reçue via le site Fortin</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${type ? `<p><strong>Nature :</strong> ${escapeHtml(type)}</p>` : ""}
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const text = [
    `Nouvelle proposition reçue via le site Fortin`,
    ``,
    `Nom : ${name}`,
    `Email : ${email}`,
    type ? `Nature : ${type}` : null,
    ``,
    `Message :`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: RECIPIENTS,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return redirect(url, "error");
    }

    return redirect(url, "ok");
  } catch (err) {
    console.error("Send failed:", err);
    return redirect(url, "error");
  }
};
