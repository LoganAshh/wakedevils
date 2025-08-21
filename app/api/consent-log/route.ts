export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzaLow8aA6jD7xUtUPNqr0pZT4CMzpQrC10BLV2js8IqZ0G6dy2opzv_9bycgmcq_z2/exec",
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
