import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email is already taken"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    canPost: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: [String],
      default: "user",
      enum: ["user", "seller", "admin"],
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
