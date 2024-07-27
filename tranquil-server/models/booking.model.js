import { model, Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    phone: {
      required: true,
      type: String,
    },

    months: {
      type: Number,
      required: true,
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Booking", bookingSchema);
