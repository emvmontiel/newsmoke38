import mongoose, { Schema } from 'mongoose';
// Schema means structure
// Models are the code version of the structure of your data
// User Schema is User Structure

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true, 
            trim: true, 
            minLength: 1,
            maxLength: 30
        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50
        },

        email: {
            type: String,
            required: true, 
            unique: true, 
            lowercase: true, 
            trim: true
        }
    },

    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)
// Mongoose is talking to MongoDB at Line 39
// "User" is being extracted from the model
// User is the User model

// Routes are the addresses; address book; paths
// Examples of Routes
// https://www.ycombinator.com/companies
// https://www.ycombinator.com/library