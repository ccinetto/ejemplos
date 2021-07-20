import {expressive} from "./deps.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

const port = 8080;
const app = new expressive.App();

//Para loguear el estado de la solicitud
app.use(expressive.simpleLog());
// app.use(expressive.static_("./public"));

//Para trabajar con el body de la request
app.use(expressive.bodyParser.json());

//Creacion de las rutas
app.get("/api/products/", getProducts);
app.get("/api/products/{id}", getProduct);
app.post("/api/products", addProduct);
app.put("/api/products/{id}", updateProduct);
app.delete("/api/products/{id}", deleteProduct);

//Asignacion del puerto
const server = await app.listen(port);
console.log("app listening on port " + server.port);
