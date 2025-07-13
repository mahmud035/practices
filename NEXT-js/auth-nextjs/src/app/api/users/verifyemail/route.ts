import { dbConnect } from '@/dbConfig/dbConfig';
import { User } from '@/models/user.model';
import httpStatus from 'http-status';
import { NextRequest, NextResponse } from 'next/server';

dbConnect(); // NOTE: Connected with Database

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    // console.log({ reqBody });

    // IMPORTANT: accessToken jeta jwt use kore create korechi seita r mailer.ts file je hashed token create kore ei 2 ta alada token. Ekhane mailer.ts file a create kore token ta receive kortechi

    const { token } = reqBody;
    console.log({ token });

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        message: 'Invalid token',
        statusCode: httpStatus.BAD_REQUEST,
      });
    }
    console.log('Before Verify:', user);

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    console.log('After Verify:', user);

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully',
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      statusCode: httpStatus.BAD_REQUEST,
    });
  }
};
