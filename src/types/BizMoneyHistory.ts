export interface BizMoneyHistory {
  settleDt: number;
  customerId: number;
  refundableAmt: number;
  nonRefundableAmt: number;
  useRefundableAmt: number;
  useNonRefundableAmt: number;
  addRefundableAmt: number;
  addNonRefundableAmt: number;
  refundRefundableAmt: number;
  refundNonRefundableAmt: number;
  returnRefundableAmt: number;
  regTm: number;
}
