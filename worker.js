const CLIENT_ID = 'Ov23ligMXPK1OBgtNdVQ'
const CLIENT_SECRET = 'ce78213d'

export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname === '/auth') {
      const redirectUri = `${url.origin}/callback`
      const ghUrl = new URL('https://github.com/login/oauth/authorize')
      ghUrl.searchParams.set('client_id', CLIENT_ID)
      ghUrl.searchParams.set('redirect_uri', redirectUri)
      ghUrl.searchParams.set('scope', 'repo')
      return Response.redirect(ghUrl.toString(), 302)
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code')
      if (!code) return new Response('Missing code', { status: 400 })
      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code })
      })
      const data = await tokenRes.json()
      const token = data.access_token
      if (!token) return new Response(JSON.stringify(data), { status: 400 })
      return new Response(
        `<html><body><script>
          window.opener.postMessage('${token}', '*')
          window.close()
        </script></body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      )
    }

    if (url.pathname === '/token') {
      const body = await request.text()
      const params = new URLSearchParams(body)
      const code = params.get('code')
      if (!code) return new Response('Missing code', { status: 400 })
      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code })
      })
      const data = await tokenRes.json()
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response('Not found', { status: 404 })
  }
}
