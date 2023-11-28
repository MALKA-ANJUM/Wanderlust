const mongoose = require('mongoose');
const initData = require('./data.js')
const Listing = require('../models/listing.js')

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
    .then(()=>{
        console.log('connected to db');
    }).catch((err) => {
        console.log(err);
    })
async function main(){
    await mongoose.connect(MONGO_URL)
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "65521bea148e031fe20cd9f7"}))
    await Listing.insertMany(initData.data);
    console.log("data was initiazise");
}

initDB()