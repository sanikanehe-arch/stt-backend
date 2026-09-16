const mongoose = require("mongoose");

mongoose.connect("mongodb://sanikanehe2006_db_user:8TVHlJGWkZR1BYPW@ac-havcs7f-shard-00-00.h8ceu0f.mongodb.net:27017,ac-havcs7f-shard-00-01.h8ceu0f.mongodb.net:27017,ac-havcs7f-shard-00-02.h8ceu0f.mongodb.net:27017/?ssl=true&replicaSet=atlas-u0x3sj-shard-0&authSource=admin&appName=Cluster0");

const tripSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  location: String,
  duration: String
});

const Trip = mongoose.model("Trip", tripSchema);

async function insertTrip() {
  const trip = new Trip({
    title: "Goa Trip",
    description: "5N | 6D",
    price: 3000,
    image: "https://www.goa.jpg",
    location: "Goa",
    duration: "6 Days"
  });

  await trip.save();
  console.log("Trip saved successfully!");
  mongoose.connection.close();
}

insertTrip();