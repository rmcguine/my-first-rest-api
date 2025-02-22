import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, require: true },
    authentication: {
        password: { type: String, required: true, select: false }, // "select: false" helps avoid pulling authenticiation object by accident when controller fetches the user
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});

