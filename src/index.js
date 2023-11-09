import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import app from "./app.js"

dotenv.config({
    path:'./env'
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server Started on port: ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed!! ",error);
    })































// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listeningon port ${process.env.PORT}`);
//         })
        
//     } catch (error) {
//         console.log("Error: ", error);
//         throw error;
//     }
// })()