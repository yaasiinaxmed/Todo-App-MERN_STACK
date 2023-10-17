import mongoose from "mongoose";

const todoScheme = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    isComplate: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const todoModel = mongoose.model("todos", todoScheme)

export default todoModel;