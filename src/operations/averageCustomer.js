import { trafficIntensity } from './trafficIntensity.js';
import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';
import { factorial } from './factorial.js';

// L = Lambda (Arrival Rate)
// M = Micro (Service Rate)
// S = Number of Server

// this function is for calculate L
export function averageCustomer(l, m, s) {
  const alpha = l / m;

  // right part of the formula which is average customers in queue (Lq)
  const Lq = averageCustomerInQueue(l, m, s);

  // now add alpha with right part
  return alpha + Lq;
}

// this function is for calculate Lq
export function averageCustomerInQueue(l, m, s) {
  const alpha = l / m;
  const intensity = trafficIntensity(l, m, s);
  const P0 = probabilityZeroCustomer(l, m, s);

  return (intensity * alpha ** s * P0) / (factorial(s) * (1 - intensity) ** 2);
}
