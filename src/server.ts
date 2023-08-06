import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    app.listen(3001, () => {
      console.log("server is running");
    });
  })
  .catch((err) => console.log(err));
