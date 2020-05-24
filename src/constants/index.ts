export {
  PayByPrimeRequest,
  PayByTokenRequest,
  RefundRequest,
  GetRecordsRequest,
  GetRecordHistoryRequest,
  CapTodayRequest,
  BindCardRequest,
  RemoveCardRequest,
} from './Request';

export {
  PayByPrimeResponse,
  PayByTokenResponse,
  RefundResponse,
  GetRecordsResponse,
  GetRecordHistoryResponse,
  CapTodayResponse,
  BindCardResponse,
  RemoveCardResponse,
} from './Response';

export {
  ServiceConfig,
  ServiceInterface,
} from './Service';

/** @constant
 * @default
 */

export const SANDBOX = 'https://sandbox.tappaysdk.com';

export const PRODUCT = 'https://prod.tappaysdk.com';
