import {Fetch} from "./fetch";
import makeFetchCookie from "fetch-cookie";
import fetchOriginal from "node-fetch";
import {BizMoneyHistory} from "./types/BizMoneyHistory";
import {TokenInfo} from "./types/TokenInfo";

export class SmartStoreApi {
  fetch: Fetch = makeFetchCookie(fetchOriginal);
  private tokenInfo?: TokenInfo;

  async login(id: string, password: string) {
    let res = await this.fetch("https://searchad.naver.com/auth/login", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "content-type": "application/json",
      },
      "body": JSON.stringify({
        "loginId": id,
        "loginPwd": password
      }),
      "method": "POST"
    });

    if (res.status !== 200) {
      throw new Error('login failed');
    }
    this.tokenInfo = await res.json();
  }

  async getBizMoney(startDate: number, endDate: number): Promise<BizMoneyHistory[]> {
    if (!this.tokenInfo) {
      throw new Error('login first');
    }
    let res = await this.fetch(`https://manage.searchad.naver.com/api/bizmoney/histories/period?searchStartDt=${startDate}&searchEndDt=${endDate}`, {
      headers: {
        Authorization: `Bearer ${this.tokenInfo.token}`
      },
      "method": "GET"
    });
    return await res.json();
  }
}
