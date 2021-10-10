import { Context } from 'aws-lambda';
import { Model } from 'mongoose';
import { MessageUtil } from '../helpers/message';
import { PermissionsService } from '../service/permissions';

export class PermissionsController extends PermissionsService {
  constructor (permissions: Model<any>) {
    super(permissions);
  }

  /**
   * List permissions
   * @param {*} event
   */
   async list (context?: Context) {
    console.log('functionName', context.functionName);

    try {
      const result = await this.listPermissions();

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
