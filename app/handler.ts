
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
dotenv.config();

import { users } from './model';
import { permissions } from './model';
import { UsersController } from './controller/users';
import { PermissionsController } from './controller/permissions';
const usersController = new UsersController(users);
const permissionsController = new PermissionsController(permissions);

export const list: Handler = (context: Context) => {
  return usersController.list(context);
};

export const create: Handler = (event: any, context: Context) => {
  return usersController.create(event, context);
};

export const update: Handler = (event: any, context: Context) => {
  return usersController.update(event, context);
};

export const authenticate: Handler = (event: any, context: Context) => {
  return usersController.authenticate(event, context);
}

export const listPermissions: Handler = (context: Context) => {
  return permissionsController.list(context);
}
