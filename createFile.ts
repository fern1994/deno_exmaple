const encoder = new TextEncoder();

const greetText = encoder.encode("Hello may name is Deno");
// เราสามารถใช้ Await ได้เลยโดยไม่ต้อง wrap (top level)
// deno.writeFile เป็นการสร้าง file
await Deno.writeFile("greet.txt", greetText);

// ตอนแรกถ้าเรา deno run createFile.ts จะขึ้นว่า Uncaught PermissionDenied: write access
// ให้เรา deno run --allow-write createFile.ts
