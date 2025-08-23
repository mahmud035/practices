import { dbConnect } from '@/dbConfig/dbConfig';
import { sendEmail } from '@/helpers/mailer';
import { User } from '@/models/user.model';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { NextRequest, NextResponse } from 'next/server';

dbConnect(); // NOTE: Connect with Database

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    //* Check if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        error: 'User already exists',
        statusCode: httpStatus.BAD_REQUEST,
      });
    }

    //* Hashed password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    //* Create user with hashed password
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //* Finally save the user to Database
    const savedUser = await newUser.save();
    console.log({ savedUser });

    //* Send verification email
    await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id });

    return NextResponse.json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User created successfully',
      data: savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};
