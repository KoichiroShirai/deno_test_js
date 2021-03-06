import { serve } from "https://deno.land/std@0.61.0/http/server.ts";
import { readFileStr } from "https://deno.land/std@0.61.0/fs/read_file_str.ts";
const s: any = serve({ port: 8000 });
const template: string = await readFileStr("app/html/hello.html");
console.log("server starting on http://localhost:5000/\nCtrl-C to shutdown container");
for await (const req of s) {
    req.respond({ body: template });
}
