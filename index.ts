import figlet from "figlet"

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url =  new URL(req.url)
    const body = figlet.textSync("video")
    return new Response(body)
    
  }
})

console.log(`Listening on Port http://localhost:${server.port}`)