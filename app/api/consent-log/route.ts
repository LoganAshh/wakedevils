export async function POST(req: Request) {
  try {
    const body = await req.json()

    const response = await fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjdofCnx-kNjBP4ac7GrmOagNvQvFHm20SpQau9M7jR_enxfEtVRVW71qjho7zHnOtJlwOEC9THOHakfw2zjeNO1abG7QTQI7VgdczCtcy6jspk_C71JbhA_AX8vyEQK0cyUhKLwfxaC60SRmcbMAtk3dzCUCad1f_QYTr5nmLxeyiEf_vrCl_dOPeiyfBxBIew4F7cASZBwg-6jHKtFRNkLd0ah_PnCROhCZmL5v-AlZVPuyjO3xi4KIkt3FUPWdruOxJ1v6aO3V91_bgnqi-1GQ4U9w&lib=MdvoWplYCNWgBTQ3yjpFP6V8SLOz3GMtV',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    if (!response.ok) {
      console.error('Google Sheets webhook failed:', await response.text())
      return new Response('Failed to log', { status: 500 })
    }

    return new Response('Logged successfully', { status: 200 })
  } catch (err) {
    console.error('API error:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}