import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@productsmanagement.ckfio.mongodb.net/?retryWrites=true&w=majority&appName=ProductsManagement`;
app.listen(PORT, () => {
  return console.log(`Server is listening on ${PORT}`);
});
