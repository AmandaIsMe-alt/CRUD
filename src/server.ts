import "dotenv/config";
import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      app.listen(3000, () => {
        console.log("Servidor rodando");
      });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
})();
