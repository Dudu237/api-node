import mongoose from "mongoose";

async function conectarDataBase() {
  mongoose.connect(
    "mongodb+srv://thiagoxx:8hyDFU0keB9wHdlF@cluster0.htfsk8t.mongodb.net/senacPetShop?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}

export default conectarDataBase;
