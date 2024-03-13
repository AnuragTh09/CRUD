import connectDB from "./db/index.db.js";
import app from "./app.js";
import config from "./config/index.config.js";

connectDB()
.then( () => {
    app.listen(config.PORT || 4000, () => {
        console.log(`server listening on ${config.PORT}`);
    })
})
.catch( (err) => {
    console.log("connection failed", err)
})