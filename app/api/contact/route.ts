import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = (body?.name ?? "").toString().trim();
    const email = (body?.email ?? "").toString().trim();
    const topic = (body?.topic ?? "visiteur").toString().trim();
    const message = (body?.message ?? "").toString().trim();

    if (!message) {
      return new Response(JSON.stringify({ ok: false, error: "Message requis." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return new Response(
        JSON.stringify({ ok: false, error: "CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL manquant." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const subject = `Contact — ${topic}${name ? ` — ${name}` : ""}`;

    const text = [
      `Sujet : ${topic}`,
      `Nom : ${name || "-"}`,
      `Email : ${email || "-"}`,
      "",
      message,
    ].join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system; line-height:1.5">
        <h2>Message — ${topic}</h2>
        <p><b>Nom :</b> ${name || "-"}</p>
        <p><b>Email :</b> ${email || "-"}</p>
        <hr />
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject,
      text,
      html,
    });

    if (error) {
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: "Erreur serveur." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// petit helper pour éviter les injections HTML dans l’email
function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}