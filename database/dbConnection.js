import mongoose from "mongoose";

export const connection = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/Anyware-Software-Task')
        .then(() => console.log("Database connection established"))
        .catch(err => console.log(`Database connection error: ${err}`));
};