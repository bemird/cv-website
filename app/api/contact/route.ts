import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  try {
    const response = await fetch("http://backend:8000/contact", {
      method: "POST",
      body: new URLSearchParams({ name, email, message }),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
  console.error("Contact API error:", err);
  return new Response(JSON.stringify({ error: "Failed to send message." }), {
    status: 500,
  });
}
}

