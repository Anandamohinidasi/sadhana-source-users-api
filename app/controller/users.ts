import { Context } from 'aws-lambda';
import { Model } from 'mongoose';
import { MessageUtil } from '../helpers/message';
import { UsersService } from '../service/users';
import { CreateUserDTO } from '../model/interfaces/createUserInterface';
import { encodeSession } from '../helpers/autorization/autorizationHelper';

export class UsersController extends UsersService {
  constructor (users: Model<any>) {
    super(users);
  }

  /**
   * List users
   * @param {*} event
   */
   async list (context?: Context) {
    console.log('functionName', context.functionName);

    try {
      const result = await this.listUser();

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Create user
   * @param {*} event
   */
  async create (event: any, context?: Context) {
    console.log('functionName', context.functionName);
    const {name, document, email, spiritualName, guru, permissions, password}: CreateUserDTO = JSON.parse(event.body);

    try {
      const result = await this.createUser({
        name,
        document,
        password,
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

    /**
   * Authenticate user
   * @param {*} event
   */
     async authenticate (event: any, context?: Context) {
      console.log('functionName', context.functionName);
      const {email, password}: any = JSON.parse(event.body);
  
      try {
        const {_id, name, permissions = []}: CreateUserDTO = await this.authenticateUser({
          email,
          password
        });
  
        return MessageUtil.success(encodeSession(process.env.JWT_SECRET_KEY, {
          id: _id,
          permissions,
          name
        }));
      } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
    }
}
