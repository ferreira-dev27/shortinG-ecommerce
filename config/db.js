import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected database on ", connection.connection.host);
  } catch (error) {
    console.log("Error na conexão do mongoDB: ", error);
  }
};
