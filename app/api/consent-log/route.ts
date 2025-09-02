export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzYe2tZcKsYbMZD-iC7u_LUqmlAwpq6q3kxSvI7CVKAJXeDc6vnpD_hCY7Lm_BAGPfl/exec",
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
