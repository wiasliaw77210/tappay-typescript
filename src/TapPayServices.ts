import axios, { AxiosInstance } from 'axios';
import {
  ServiceInterface,
  ServiceConfig,
  PRODUCT,
  SANDBOX,
  PayByPrimeRequest,
  PayByTokenRequest,
  RefundRequest,
  GetRecordsRequest,
  GetRecordHistoryRequest,
  CapTodayRequest,
  BindCardRequest,
  RemoveCardRequest,
  PayByPrimeResponse,
  PayByTokenResponse,
  RefundResponse,
  GetRecordsResponse,
  GetRecordHistoryResponse,
  CapTodayResponse,
  BindCardResponse,
  RemoveCardResponse,
} from './constants';

class TapPayServices implements ServiceInterface {
  private config: ServiceConfig;
  private request: AxiosInstance;

  constructor(cfg: ServiceConfig) {
    this.config = cfg;
    this.request = axios.create({
      headers: {
        'x-api-key': cfg.partner_key,
        'Content-Type': 'application/json',
      },
      baseURL: cfg.env === 'sandbox' ? SANDBOX : PRODUCT,
    });
  }

  private makeRequest(path: string, data: any): Promise<any> {
    data['partner_key'] = this.config.partner_key;

    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request.post(path, data);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  public payByPrime(data: PayByPrimeRequest): Promise<PayByPrimeResponse> {
    return this.makeRequest('/tpc/payment/pay-by-prime', data);
  }

  public payByToken(data: PayByTokenRequest): Promise<PayByTokenResponse> {
    return this.makeRequest('/tpc/payment/pay-by-token', data);
  }

  public refund(data: RefundRequest): Promise<RefundResponse> {
    return this.makeRequest('/tpc/transaction/refund', data);
  }

  public getRecords(data: GetRecordsRequest): Promise<GetRecordsResponse> {
    return this.makeRequest('/tpc/transaction/query', data);
  }

  public getRecordHistory(data: GetRecordHistoryRequest): Promise<GetRecordHistoryResponse> {
    return this.makeRequest('/tpc/transaction/trade-history', data);
  }

  public capToday(data: CapTodayRequest): Promise<CapTodayResponse> {
    return this.makeRequest('/tpc/transaction/cap', data);
  }

  public bindCard(data: BindCardRequest): Promise<BindCardResponse> {
    return this.makeRequest('/tpc/card/bind', data);
  }

  public removeCard(data: RemoveCardRequest): Promise<RemoveCardResponse> {
    return this.makeRequest('/tpc/card/remove', data);
  }
}

export default TapPayServices;
