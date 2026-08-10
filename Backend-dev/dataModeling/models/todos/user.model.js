import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    // we also write as username:String <-- but in this we are not velidating username so we use object insted of direct dataType
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'], // it also contains error message
      unique: true, // Keeps account usernames distinct
      lowercase: true, // Ensures consistent lookup behavior
      trim: true, // Trims leading/trailing accidental whitespaces
      validate: {
        validator: function (v) {
          // Standard email structural match regex
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'], // it also contain error message
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
