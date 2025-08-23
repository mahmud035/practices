import { dbConnect } from '@/dbConfig/dbConfig';
import { jwtHelper } from '@/helpers/jwtHelper';
import { User } from '@/models/user.model';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

dbConnect(); // NOTE: Connect with Database

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    //* Check if user exist
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        error: 'User does not exist',
        statusCode: httpStatus.NOT_FOUND,
      });
    }

    //* Check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({
        error: 'Password is incorrect',
        statusCode: httpStatus.BAD_REQUEST,
      });
    }

    //* Generate accessToken
    const tokenData = {
      userId: user._id,
      username: user.username,
      email: user.email,
    };

    const accessToken = jwtHelper.createToken(
      tokenData,
      process.env.ACCESS_TOKEN_SECRET as Secret,
      process.env.ACCESS_TOKEN_EXPIREIN as string
    );

    //* IMPORTANT: Store accessToken into Cookie inside NextResponse. So that we can retrieve the token from NextResponse.
    const response = NextResponse.json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Login successful',
    });

    const cookieOptions = {
      httpOnly: true,
    };
    // set accessToken into cookie
    response.cookies.set('accessToken', accessToken, cookieOptions);

    return response;
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};
