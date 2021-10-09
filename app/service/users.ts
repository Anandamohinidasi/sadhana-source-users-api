import { Model } from 'mongoose';
import { CreateUserDTO } from '../model/dto/createUserDTO';

export class UsersService {
  private users: Model<any>;
  constructor(users: Model<any>) {
    this.users = users;
  }

  /**
   * Create user
   * @param params
   */
  protected async createUser ({name, document, email, spiritualName, guru, permissions}: CreateUserDTO): Promise<object> {
    try {
      const result = await this.users.create({
        name,
        document,
        email,
        spiritualName,
        guru,
        permissions
      });

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }

    /**
   * Update user
   * @param params
   */
     protected async updateUser ({id, status_id = "61612add6fa4d7ac743be63b", permissions}: any): Promise<object> {
      try {
        const result = await this.users.updateOne(
          {_id: id},
           {
            permissions,
            status_id
          });
  
        return result;
      } catch (err) {
        console.error(err);
  
        throw err;
      }
    }
}
