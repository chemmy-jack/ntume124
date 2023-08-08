import mongoose from "mongoose";
import dotenv from "dotenv-defaults";
// import { error } from "console";

export default {
	connect: () => {
		dotenv.config();
		if (process.env.MONGO_URL === undefined) {
			throw new Error("url not provided !")
		}
		else {
			let url: string = process.env.MONGO_URL
			mongoose
				.connect(url, {
					// useNewUrlParser: true,
					// useUnifiedTopology: true,
					// serverSelectionTimeoutMS: 30000,
					dbName: "ntume124"
				})
				.then((res) => console.log("mongo db connection created"));
			mongoose.connection.on(
				"error",
				console.error.bind(console, "connection error:"),
			);
		}

	},
};
