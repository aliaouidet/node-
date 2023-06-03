import express, { json } from "express";
const app = express();
import cors from "cors";
import { config } from "dotenv";
import { sequelize } from "./models";
import articleRouter from "./routes/article.route"; 
import scategorieRouter from "./routes/scategorie.route"; 
import categorieRouter from "./routes/categorie.route"; 
import loginRouter from "./routes/login.route"; 
config();
app.use(json());
app.use(cors());
sequelize.authenticate().then(() => {
    console.log("Connection to DB has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
app.get("/", (req, res) => {
  res.send("formation");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/logins', loginRouter);
app.use('/api/articles', articleRouter);


