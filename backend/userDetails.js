const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        firstname: String,
        email: String,
        password: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsSchema);