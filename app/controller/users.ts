import { Context } from 'aws-lambda';
import { Model } from 'mongoose';
import { MessageUtil } from '../utils/message';
import { UsersService } from '../service/users';
import { CreateUserDTO } from '../model/dto/createUserDTO';

export class UsersController extends UsersService {
  constructor (users: Model<any>) {
    super(users);
  }

  /**
   * Create user
   * @param {*} event
   */
  async create (event: any, context?: Context) {
    console.log('functionName', context.functionName);
    const {name, document, email, spiritualName, guru, permissions}: CreateUserDTO = JSON.parse(event.body);

    try {
      const result = await this.createUser({
        name,
        document,
        email,
        spiritualName,
        guru,
        permissions
      });

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Update user
   * @param {*} event
   */
   async update (event: any, context?: Context) {
    console.log('functionName', context.functionName);
    const {id, permissions, status_id}: any = JSON.parse(event.body);

    try {
      const result = await this.updateUser({
        id,
        permissions,
        status_id
      });

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
