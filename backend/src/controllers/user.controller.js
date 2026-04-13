// Routes handle the path; controllers take over after that
// Controllers decide what kind of response is provided to the request
// Decision-makers
// Handles the request

// Controller for register model
import { User } from "../models/user.model.js"

const registerUser = async (req, res) => {
    try {
        // User will be asked for three things: username, email, and password
        // These three will be stored in the 'req.body'
        const { username, email, password } = req.body;

        // Basic Validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are important!" })
        }

        // Checks if user already exists in the system
        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Create user
        // Note: User with a capital U pertains to the User model while the one with the lowercase u pertains to a single user
        const user = await User.create({
            username,
            email: email.toLowerCase,
            password,
            loggedIn: false
        });

        // Response for when user creation is successful
        res.status(201).json({ 
            message: "User successfully registered",

            // Next line is what gets stored in the response after successful registration of the user
            user: {id: user._id, email: user.email, username: user.username }
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message})
    }
}

export { registerUser }