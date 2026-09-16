const mongoose = require("mongoose");

mongoose.connect(
"mongodb://sanikanehe2006_db_user:8TVHlJGWkZR1BYPW@ac-havcs7f-shard-00-00.h8ceu0f.mongodb.net:27017,ac-havcs7f-shard-00-01.h8ceu0f.mongodb.net:27017,ac-havcs7f-shard-00-02.h8ceu0f.mongodb.net:27017/?ssl=true&replicaSet=atlas-u0x3sj-shard-0&authSource=admin&appName=Cluster0"
)
.then(async () => {
    console.log("Connected");

    const Student = mongoose.model("Student", {
        name: String,
        age: Number
    });

    await Student.create({
        name: "Sanika",
        age: 20
    });

    console.log("Data inserted");
})
.catch(err => console.log(err));