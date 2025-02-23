import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false }, // "select: false" helps avoid pulling authenticiation object by accident when controller fetches the user
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});

// Turn schema into model
export const UserModel = mongoose.model('User', UserSchema);

// Actions for controller
export const getUsers = () => UserModel.find();

// see if exact user exists; accept "email" parameter; "find one by email"
export const getUserByEmail = (email: string) => UserModel.findOne({ email }); 

// confirm whether user is logged in or not
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ 
    'authentication.sessionToke': sessionToken,
 });

export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);
