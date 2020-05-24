import {
  PayByPrimeRequest,
  PayByTokenRequest,
  RefundRequest,
  GetRecordsRequest,
  GetRecordHistoryRequest,
  CapTodayRequest,
  BindCardRequest,
  RemoveCardRequest,
} from './Request';

import {
  PayByPrimeResponse,
  PayByTokenResponse,
  RefundResponse,
  GetRecordsResponse,
  GetRecordHistoryResponse,
  CapTodayResponse,
  BindCardResponse,
  RemoveCardResponse,
} from './Response';

/**
 * @description Service Interface
 * @interface
 */

export interface ServiceInterface {
  payByPrime(data: PayByPrimeRequest): Promise<PayByPrimeResponse>;
  payByToken(data: PayByTokenRequest): Promise<PayByTokenResponse>;
  refund(data: RefundRequest): Promise<RefundResponse>;
  getRecords(data: GetRecordsRequest): Promise<GetRecordsResponse>;
  getRecordHistory(data: GetRecordHistoryRequest): Promise<GetRecordHistoryResponse>;
  capToday(data: CapTodayRequest): Promise<CapTodayResponse>;
  bindCard(data: BindCardRequest): Promise<BindCardResponse>;
  removeCard(data: RemoveCardRequest): Promise<RemoveCardResponse>;
}

/**
 * @description Service Configuration
 * @interface
 */

export interface ServiceConfig {
  partner_key: string;
  env: 'sandbox' | 'production';
}
