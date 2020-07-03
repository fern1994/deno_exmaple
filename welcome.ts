// import { serve } from "https://deno.land/std@0.59.0/http/server.ts";
// const s = serve({ port: 3001 });
// console.log("http://localhost:3001/");
// for await (const req of s) {
//   req.respond({ body: "Hello Deno 🦕\n" });
// }

let message: string = "Hello deno  🦕 !!!!";
console.log(message);

// ถ้าเรา run ตอนแรกจะ run ไม่ได้เพราะมันขึ้นว่า uncautch persmissionDenied network access เพราะว่าเราไม่ได้ allow-net
// ให้ deno run --allow-net welcome.ts
