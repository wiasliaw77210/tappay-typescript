/**
 * @description Request Interfaces
 * @interface
 */

export interface PayByPrimeRequest {
  /**
   * The one time token returned from getPrime.
   * You can use this prime for test in sandbox environment.
   * prime : test_3a2fb2b7e892b914a03c95dd4dd5dc7970c908df67a49527c0a648b2bc9
   */
  prime: string;
  /**
   * Involved merchant’s identifier as defined on Portal.
   */
  merchant_id: string;
  /**
   * Transaction price.
   */
  amount: number;
  /**
   * The letter abbreviation for currency, following ISO 4217.
   */
  currency ? : string;
  /**
   * A self-defined identifier for each transaction, for TapPay to identify transaction.
   */
  order_number ? : string;
  /**
   * Transaction identifier for the bank.
   * You may customize one here if you wish, but it must be unique.
   */
  bank_transaction_id ? : string;
  /**
   * Details of the transaction.
   * You should include as much information as possible.
   * It will help our fraud detector in distinguishing real and fake transaction.
   */
  details: string;
  /**
   * Information of the cardholder
   * Optional parameters should have the matching key as well,
   * with empty string as the value. e.g. zip_code: “”, address: “”, national_id: “”
   */
  cardholder: {
      phone_number: string;
      name: string;
      email: string;
      zip_code: string;
      address: string;
      national_id: string;
  };
  /**
   * Number of intervals of payments for a particular transaction.
   * Default set this value as 0. ( Not available in Apple Pay and Android Pay )
   */
  instalment ? : number;
  /**
   * The number of days between the time bank authorizes the payment and the time bank actually captures the payment.
   * Default is 0.
   * If you wish to capture the payment yourself, use -1 as the value to disable automatic capture.
   */
  delay_capture_in_days ? : number;
  /**
   * To save the card number or not. Not Available to Apple Pay or Android Pay.
   */
  remember: boolean;
}

export interface PayByTokenRequest {
  /**
   * Card authorization key.
   */
  card_key: string;
  card_token: string;
  /**
   * Involved merchant’s identifier as defined on Portal.
   */
  merchant_id: string;
  /**
   * Transaction price.
   */
  amount: number;
  /**
   * The letter abbreviation for currency, following ISO 4217.
   */
  currency: string;
  /**
   * A self-defined identifier for each transaction, for TapPay to identify transaction.
   */
  order_number ? : string;
  /**
   * Transaction identifier for the bank.
   * You may customize one here if you wish, but it must be unique.
   */
  bank_transaction_id ? : string;
  /**
   * Details of the transaction.
   * You should include as much information as possible.
   * It will help our fraud detector in distinguishing real and fake transaction.
   */
  details: string;
  /**
   * Number of intervals of payments for a particular transaction.
   * Default set this value as 0. ( Not available in Apple Pay and Android Pay )
   */
  instalment ? : number;
  /**
   * The number of days between the time bank authorizes the payment and the time bank actually captures the payment.
   * Default is 0.
   * If you wish to capture the payment yourself, use -1 as the value to disable automatic capture.
   */
  delay_capture_in_days ? : number;
  /*
    Fraud detect identifier,
    You will only need this parameter if you want to use fraud detect.
  */
  fraud_id ? : string;
  /*
    The 3 digits found on the back of most cards.
    You will only need this parameter if you need the bank to verify this number.
  */
  card_ccv ? : string;
}

export interface RefundRequest {
  /**
   * Identifier for the transaction being refunded.
   */
  rec_trade_id: string;
  /**
   * Only required for partial refund.
   */
  amount ? : number;
}

export interface GetRecordsRequest {
  /**
   * Number of records on each page, up to 200. default to 50
   */
  records_per_page ? : number;
  /**
   * The returned page. default to 0
   */
  page ? : number;
  /**
   * Restrictions on the trade records.
   * The following filters are possible:
   * time, amount, cardholder, merchant_id, record_status, rec_trade_id, order_number, bank_transaction_id
   */
  filters ? : {
      time ? : {
          start_time ? : number,
          end_time ? : number
      },
      amount ? : {
          upper_limit ? : number,
          lower_limit ? : number
      },
      cardholder ? : {
          phone_number ? : string,
          name ? : string,
          email ? : string
      },
      merchant_id ? : string[],
      record_status ? : number,
      rec_trade_id ? : string,
      order_number ? : string,
      bank_transaction_id ? : string
  };
  /**
   * Criteria for ordering
   */
  order_by ? : {
      /**
       * "time" default (Order by time) or "amount"(Order by amount)
       */
      attribute ? : "time" | "anount",
      /**
       * default: true
       */
      is_descending ? : boolean
  };
}

export interface GetRecordHistoryRequest {
  /**
   * Identifier for the transaction being captured.
   */
  rec_trade_id: string;
}

export interface CapTodayRequest {
  /**
   * Identifier for the transaction being captured.
   */
  rec_trade_id: string;
}

export interface BindCardRequest {
  /**
   * The one time token returned from createToken.
   */
  prime: string;
  /**
   * Involved merchant’s identifier as defined on Portal.
   */
  merchant_id: string;
  /**
   * The letter abbreviation for currency, following ISO 4217.
   */
  currency: string;
  /**
   * Cardhodler Information
   */
  cardholder: {
      /**
       * Cellphone number, E. 164 format with the ’+’ sign(“+886923456789”)
       */
      phone_number: string;
      /**
       * Name
       */
      name: string;
      /**
       * E-mail address
       */
      email: string;
      /**
       * Zip code number
       */
      zip_code: string;
      /**
       * Billing address
       */
      address: string;
      /**
       * National ID
       */
      national_id: string;
  }
}

export interface RemoveCardRequest {
  /**
   * A security key used to encrypt the card token.
   */
  card_key: string;
  /**
   * A permanent token that represents the customer’s card.
   */
  card_token: string;
}
