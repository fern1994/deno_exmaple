let file = await Deno.open("greet.txt");
// deno.studout is optional reader & closer
await Deno.copy(file, Deno.stdout);
file.close();
// ตอนแรกถ้าเรา deno run readFile.ts จะขึ้น Uncaught PermissionDenied: read access
// ให้ deno run --allow-read readFile.ts
