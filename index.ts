import figlet from "figlet"

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url =  new URL(req.url)
    if (url.pathname == '/') {
      const body = figlet.textSync("video")
      return new Response(body)
    }

    if (url.pathname === '/about') {
      return new Response("About me!")
    }

    if (url.pathname === '/contact') {
      return new Response("contact us!")
    }

    return new Response("404!")
  }
})

console.log(`Listening on Port http://localhost:${server.port}`)