require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./routers/blogRoutes');
const app = express();

//middleware
app.use(express.json());

//use mongo
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CRUD",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MongoDB");
    }
});
app.use("/api/blogs",blogRouter);

app.listen(3000,()=>{
    console.log("server is running.");
});