const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/TravelQuest";

main()
  .then(() => {
    console.log("Connected to DB, starting seed...");
    initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    
    // Find or create a default user to own these listings
    let defaultUser = await User.findOne({ username: "admin" });
    if (!defaultUser) {
      defaultUser = new User({ email: "admin@travelquest.com", username: "admin" });
      defaultUser = await User.register(defaultUser, "admin123");
      console.log("Created seed admin user (username: 'admin', password: 'admin123')");
    }

    const seededListings = initData.data.map((obj) => ({
      ...obj,
      owner: defaultUser._id,
    }));
    
    await Listing.insertMany(seededListings);
    console.log("Database was successfully seeded with sample listings.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
};
