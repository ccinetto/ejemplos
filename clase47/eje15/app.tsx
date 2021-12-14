// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();
let visitas: number = 0;

const response = (
  <html>
    <head>
      <meta charSet="utf-8" />
      <title>servest</title>
    </head>
    <body>
      <h1 style={{ color: "blue" }}>Hello Servest con React!</h1>
      <h2 style={{ color: "brown" }}>Visitas: {++visitas}</h2>
      <h3 style={{ color: "purple" }}>
        FyH: {new Date().toLocaleString()}
      </h3>
    </body>
  </html>
);

const headers = {
  "content-type": "text/html; charset=UTF-8",
};

app.handle('/', async (req) => {
  console.log("LLEGO REQUEST");
  return await req.respond({
    status: 200,
    headers: new Headers(headers),
    body: ReactDOMServer.renderToString(response),
  });
})



// app.handle("/bienvenido", async (req: {
//   respond: (arg0: { status: number; headers: Headers; body: any }) => any;
// },
// ) => {
//   await req.respond({
//     status: 200,
//     headers: new Headers(headers),
//     body: ReactDOMServer.renderToString(response),
//   });
// },
// );

app.listen({ port: 8899 });
