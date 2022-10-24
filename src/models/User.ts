import { Schema, model } from 'mongoose';

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser> ({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const User = model<IUser>('User', userSchema);

export { User }