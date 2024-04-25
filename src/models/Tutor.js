import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cidade: { type: String },
  },
  { versionKey: false }
);

const tutor = mongoose.model("tutores", tutorSchema);

<<<<<<< HEAD
export { tutor, tutorSchema };
=======
export { tutor, tutorSchema };
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
