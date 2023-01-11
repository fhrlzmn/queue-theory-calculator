import { factorial } from './factorial.js';
import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';

// L = Lambda (Arrival Rate)
// M = Micro (Service Rate)
// S = Number of Server

export function probabilityServerBusy(l, m, s) {
  const a = (1 / factorial(s)) * (l / m) ** s * ((s * m) / (s * m - l) ** 2);
  const P0 = probabilityZeroCustomer(l, m, s);
  return a * P0;
}
