import { getDataFromToken } from '@/helpers/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/user.model';
import { dbConnect } from '@/dbConfig/dbConfig';
import httpStatus from 'http-status';

dbConnect(); // NOTE: Connected with Database

export const GET = async (request: NextRequest) => {
  try {
    const userId = await getDataFromToken(request);
    console.log({ userId });

    // get saved user from database
    const user = await User.findById({ _id: userId }).select('-password');

    return NextResponse.json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User found',
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
};
