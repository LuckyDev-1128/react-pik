import mongoose from "mongoose";


const Schema = mongoose.Schema;

const postAtSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  saleOrRent: {
    type: String,
    required:true
  }
},{
    timestamps: true
});

const PostAt = mongoose.model("PostAt", postAtSchema);

export default PostAt;