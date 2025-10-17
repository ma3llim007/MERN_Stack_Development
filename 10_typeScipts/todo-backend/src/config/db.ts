import mongoose from "mongoose";

const connectDataBase = async (): Promise<void> => {
    const connectionInstance = await mongoose.connection
};
