import { Application, config } from "./deps.ts";
import router from "./routes.ts";

const { PORT } = config();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: Number(PORT) });
console.log(`Server escuchando en el puerto ${PORT}`);
