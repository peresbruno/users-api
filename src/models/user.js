import mongoose from "mongoose";
const { Schema } = mongoose;

const uri =
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.wumr7.mongodb.net/users-api?retryWrites=true&w=majority";

var db = mongoose.createConnection(uri);

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: false,
    min: 12,
  },
});

const user = db.model("users", userSchema);

export default user;
