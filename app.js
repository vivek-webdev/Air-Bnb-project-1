const express = require("express")
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose');
const Lisiting = require("./models/listing.js")
const path = require("path");
const Listing = require("./models/listing.js");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
  console.log("Connected to MongoDB successfully!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res) => {
    res.send("working")
})


//Index route
app.get("/listing", async (req,res) => {
  const allListings = await Lisiting.find({})
  res.render("./listings/index.ejs",  { allListings })
})

//Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// app.get("/testListening",async (req,res) => {
//     sampleListing = new Lisiting({
//     title : "andabam nicobar",
//     description : "nice island",
//     price : 10009,
//     location : "somewhere in the ocean",
//     country : "India"
//   })
//   await sampleListing.save();
//   console.log("data is saved")
//   res.send("db is wokring")
// })

app.listen(8080 , ()=> {
    console.log("wrver is live")
})