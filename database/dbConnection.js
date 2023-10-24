import mongoose from "mongoose";

export const connection = async () => {
    await mongoose.connect(process.env.DATABASE_ATLAS)
        .then(() => console.log("Database connection established"))
        .catch(err => console.log(`Database connection error: ${err}`));
};