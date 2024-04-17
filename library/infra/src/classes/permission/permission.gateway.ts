import { inject, injectable } from 'inversify';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { HttpClient, HttpClientSymbol } from '../../helpers/HttpClient';

import { ResultEntity } from './entity/result.entity.ts';

export const PermissionGatewaySymbols = Symbol.for('PermissionGateway');

@injectable()
export class PermissionGateway {
  constructor(@inject(HttpClientSymbol) private readonly httpClient: HttpClient) {}

  async getAll(): Promise<ResultEntity> {
    const result = await this.httpClient.get<ResultEntity>(import.meta.env.VITE_GATEWAY_API + '/permissions');
    const resultInstance = plainToInstance(ResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  getByUuid(): any {}

  create() {}

  update() {}

  delete() {}
}
