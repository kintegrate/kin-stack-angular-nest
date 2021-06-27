import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@kin-nxpm-stack/api/core/data-access'

@Injectable()
export class ApiTransactionDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
