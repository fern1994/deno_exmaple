import { serve } from "https://deno.land/std/http/server.ts";
// create servre
const server = serve({ port: 3001 });
console.log("http://localhost:3001/");
for await (const req of server) {
  req.respond({ body: "Hello World 🦕\n" });
}
// เมื่อพิมพ์คำสั่ง deno run simpleServer.ts จะขึ้นว่า Uncaught PermissionDenied: network access to "0.0.0.0:3001"
// ให้ deno run --allow-net simpleServer.ts
