import { Model } from 'mongoose';
import { PermissionsInterface } from '../model/interfaces/permissionsInterface';

export class PermissionsService {
  private permissions: Model<PermissionsInterface>;
  constructor(permissions: Model<PermissionsInterface>) {
    this.permissions = permissions;
  }

  /**
   * List permissions
   * @param params
   */
   protected async listPermissions (): Promise<PermissionsInterface[]> {
    try {
      const result: PermissionsInterface[]  = await this.permissions.find({});

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }
}
