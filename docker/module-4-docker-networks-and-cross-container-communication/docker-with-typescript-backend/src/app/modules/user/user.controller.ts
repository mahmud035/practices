import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { UserServices } from './user.services.js';

const createUser = catchAsync(async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const user = await UserServices.createUser({
    ...JSON.parse(req.body),
    profilePhoto: req.file?.path,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User created successfully',
    data: user,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrieved successfully',
    data: users,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const user = await UserServices.getSingleUserFromDB(req.params.id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrieved successfully',
    data: user,
  });
});

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
