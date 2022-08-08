import {SmartStoreApi} from "./SmartStoreApi";

require('dotenv').config();

jest.setTimeout(3 * 60 * 1000);
test('test', async () => {
  let id = process.env['ESM_USERNAME']!;
  let password = process.env['ESM_PASSWORD']!;

  let api = new SmartStoreApi();
  await api.login(id, password);
  let bizMoney = await api.getBizMoney(20220729, 20220808);
  console.log(bizMoney);
});
