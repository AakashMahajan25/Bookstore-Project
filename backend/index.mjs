// System Requirements
import express from "express";
import dotenv from "dotenv";

// Modular Imports
import connectDB from "./src/db/connectDB.mjs";
import booksSchema from "./src/models/books.model.mjs";

// import PORT from "./constants.mjs";

// Configurations
dotenv.config();
const app = express();
app.use(express.json());

//Connecting to Database
connectDB();

//API's
app.get("/get", async (req, res) => {
  try {
    const booksData = await booksSchema.find();
    res.status(200).json(booksData);
  } catch (error) {
    console.log("Error trying to get details from database", error);
  }
});

app.get("/api/v1/get/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const  data = await booksSchema.findById(id);
    res.json(data);
  } catch (error) {
    console.log("Error trying to get a specific book: ", error);
  }
})

app.post("/post", async (req, res) => {
  try {
    const createdBook = await booksSchema.create(req.body);
    res.json(createdBook);
    console.log("Data Posted Successfully!");
  } catch (error) {
    console.log("Error while posting data to database", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await booksSchema.findByIdAndDelete(id);
    res.json(deletedBook);
  } catch (error) {
    console.log("Error while trying to delete an object: ", error);
  }
})

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data =req.body;
    const changedBook = await booksSchema.findByIdAndUpdate(id, data);
    res.json(changedBook);
  } catch (error) {
    console.log("Error while Updating an Object: ", error);
  } 
})

//__main__
try {
  app.listen(3000, () => {
    console.log(`Server successfully listening at port 3000`);
  });
} catch (error) {
  console.log("Error in starting the Server: ", error);
}
