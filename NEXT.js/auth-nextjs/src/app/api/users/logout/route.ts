import { dbConnect } from '@/dbConfig/dbConfig';
import httpStatus from 'http-status';
import { NextResponse } from 'next/server';

dbConnect(); // NOTE: Connected with Database

export const GET = async (response: NextResponse) => {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Logout successful',
    });

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(0),
    };
    //! Remove accessToken from cookie by setting empty value
    response.cookies.set('accessToken', '', cookieOptions);
    return response;
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      error: error.message,
    });
  }
};
