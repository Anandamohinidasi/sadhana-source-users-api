import { Model } from 'mongoose';
import { CreateUserDTO } from '../model/interfaces/createUserInterface';
import * as bcrypt from 'bcrypt';

export class UsersService {
  private users: Model<any>;
  constructor(users: Model<any>) {
    this.users = users;
  }

  /**
   * List users
   * @param params
   */
   protected async listUser (): Promise<object> {
    try {
      const result = await this.users.find({});

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }

  /**
   * Create user
   * @param params
   */
  protected async createUser ({name, document, email, spiritualName, guru, permissions, password}: CreateUserDTO): Promise<object> {
    try {
      const result = await this.users.create({
        name,
        document,
        email,
        password,
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

   /**
   * Update user
   * @param params
   */
     protected async authenticateUser ({email, password}: any): Promise<CreateUserDTO> {
      try {
        const result = await this.users.find({
          email
        });
        const passwordMatches = await bcrypt.compare(password, result[0].password);

        if(!passwordMatches) {
          throw new Error('Invalid credentails combination')
        }
  
        return result[0];
      } catch (err) {
        console.error(err);
  
        throw err;
      }
    }
}
