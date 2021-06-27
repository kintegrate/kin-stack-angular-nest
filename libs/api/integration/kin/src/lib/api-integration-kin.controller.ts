import { Environment } from '@kinecosystem/kin-sdk-v2'
import { CreateAccountHandler, EventsHandler, SignTransactionHandler } from '@kinecosystem/kin-sdk-v2/dist/webhook'
import { Controller, Post, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { ApiIntegrationKinService } from './api-integration-kin.service'

@Controller('kin')
export class ApiIntegrationKinController {
  private readonly env: Environment =
    process.env.KIN_DEFAULT_NETWORK === 'mainnet' ? Environment.Prod : Environment.Test
  private readonly secret = process.env.KIN_WEBHOOK_SECRET
  constructor(private readonly service: ApiIntegrationKinService) {}

  @Post('sign-transaction')
  signTransactionHook(@Req() req: Request, @Res() res: Response) {
    return SignTransactionHandler(
      this.env,
      (req, resp) => this.service.signTransactionHandler(req, resp),
      this.secret,
    )(req, res)
  }

  @Post('transaction-events')
  transactionEventsHook(@Req() req: Request, @Res() res: Response) {
    return EventsHandler((events) => this.service.eventsHandler(events), this.secret)(req, res)
  }

  @Post('create-account')
  createAccountHook(@Req() req: Request, @Res() res: Response) {
    return CreateAccountHandler(
      this.env,
      (req, resp) => this.service.createAccountHandler(req, resp),
      this.secret,
    )(req, res)
  }
}
