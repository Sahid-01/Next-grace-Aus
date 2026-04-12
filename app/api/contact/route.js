// app/api/contact/route.js
// POST handler for contact form submissions.
// Uses Resend if RESEND_API_KEY is set, otherwise logs to console.

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // ── Server-side validation ──
    if (!name || !name.trim()) {
      return Response.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }
    if (!email || !email.trim()) {
      return Response.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // ── Send via Resend (if API key is configured) ──
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Grace International <onboarding@resend.dev>",
          to: ["melbourne@graceintlgroup.com"],
          subject: `New Consultation Request from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message || "No message provided."}</p>
          `,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Resend API error:", err);
        return Response.json(
          { error: "Failed to send email. Please try again later." },
          { status: 500 }
        );
      }

      console.log(`✅ Email sent via Resend to melbourne@graceintlgroup.com from ${name} <${email}>`);
      } else {
        // ── Fallback: log to server console ──
        console.log("");
        console.log("╔══════════════════════════════════════════════╗");
        console.log("║     NEW CONTACT FORM SUBMISSION              ║");
        console.log("╠══════════════════════════════════════════════╣");
        console.log(`║  Name:    ${name}`);
        console.log(`║  Email:   ${email}`);
        console.log(`║  Phone:   ${phone || "Not provided"}`);
        console.log(`║  Message: ${message || "No message"}`);
        console.log("╚══════════════════════════════════════════════╝");
        console.log("");
        console.log("ℹ️  Set RESEND_API_KEY in .env.local to send real emails.");
      }

      return Response.json({ success: true });
    } catch (err) {
      console.error("Contact API error:", err);
      return Response.json(
        { error: "Internal server error. Please try again." },
        { status: 500 }
      );
    }
  }
