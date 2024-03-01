const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
.then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error(`Error connecting to database ${err}`);
})   

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner:"65e0680172a96dbcad470e88"}));
   await Listing.insertMany(initData.data);
   console.log("Data was initialized")
}
initDB();