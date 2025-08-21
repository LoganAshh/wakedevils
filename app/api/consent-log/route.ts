export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzAdXqRaYnl2w8v0xHnCr_9DZX-axJ7ITKgO0U4ezqhNEe7J4tSSei4In5Yrn1gMuH0/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      console.error("Google Sheets webhook failed:", await response.text());
      return new Response("Failed to log", { status: 500 });
    }

    return new Response("Logged successfully", { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
