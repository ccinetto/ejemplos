import { Application, config } from "../deps.ts";

import router from "./routes/index.ts";
import { logger } from "./middleware/index.ts";

const { PORT } = config();

// console.log(Deno.env.get('PORT'));
const app = new Application();

app.use(logger);
app.use(router);

await app.listen({ port: Number(PORT) });
console.log(`Server up on port ${PORT}`);
