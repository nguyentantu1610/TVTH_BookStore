const User = require("../models/userModel");


const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        // Create new USER
        const newUser = User.create(req.body);
        res.json(newUser);
    }
    else {
        // USER Already Exits
        res.json({
            msg: "User Already Exists",
            success: false,
        });
    }
};

module.exports = { createUser };