const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title :{ 
        type :String,
        required : true
    },
    description : String,
    image :{
        type : String,
        default : "https://images.unsplash.com/photo-1755371034010-51c25321312d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price : Number,
    location : String,
    country : String
})

const Lisiting = mongoose.model("Listing",listingSchema);
module.exports = Lisiting;
