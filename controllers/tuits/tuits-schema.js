import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,  //data type
    liked: Boolean,
}, {collection: 'tuits'});  //collection name where tuits are stored
export default schema;