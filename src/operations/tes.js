import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';
import { averageCustomer, averageCustomerInQueue } from './averageCustomer.js';
import {
  averageTimeSpent,
  averageTimeSpentInQueue,
} from './averageTimeSpent.js';
import { trafficIntensity } from './trafficIntensity.js';
import { probabilityServerBusy } from './probabilityServerBusy.js';

const l = 10;
const m = 5;
const s = 4;

console.log('P0 = ', probabilityZeroCustomer(l, m, s));
console.log('L = ', averageCustomer(l, m, s));
console.log('Lq = ', averageCustomerInQueue(l, m, s));
console.log('W = ', averageTimeSpent(l, m, s));
console.log('Wq = ', averageTimeSpentInQueue(l, m, s));
console.log('Rho = ', trafficIntensity(l, m, s));
console.log('Pq = ', probabilityServerBusy(l, m, s));
