const User = require('../models/user.model');
const {v4: uuidv4} = require('uuid');

module.exports.createUser = async (request, response) => {
    const { lastname, firstname, email, password } = request.body;
    const slug = uuidv4();
    const user = await User.create({
        lastname,
        firstname,
        email,
        password,
        slug
    });
    response.status(201).json({
        message: "User created successfully",
        user
    })
}

module.exports.getAllUsers = async (request, response) => {
    const users = await User.find();
    response.status(200).json({
        message: "Users fetched successfully",
        users
    })
}

module.exports.getUserBySLug = async (request, response) => {
    const { slug } = request.params;
    const user = await User.findOne({ slug: slug })
    response.status(200).json({
        message: 'User fetched by slug successfully',
        user
    })
}


module.exports.getUserByEmail = async (request, response) => {
    const { email } = request.params;
    const user = await User.findOne({ email: email });
    response.status(200).json({
        message: "User fetch by email",
        user
    })
}


module.exports.getUserFirstname = async (request, response) => {
    const { firstname } = request.params;
    const user = await User.findOne({ firstname: firstname });
    response.status(200).json({
        message: "User fetch by firstname",
        user
    })
}

module.exports.getUserLastname = async (request, response) => {
    const { lastname } = request.params;
    const user = await User.findOne({ lastname: lastname });
    response.status(200).json({
        message: "User fetch by lastname",
        user
    })
}