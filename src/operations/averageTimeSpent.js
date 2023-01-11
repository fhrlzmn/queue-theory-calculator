import { trafficIntensity } from './trafficIntensity.js';
import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';
import { factorial } from './factorial.js';

// L = Lambda (Arrival Rate)
// M = Micro (Service Rate)
// S = Number of Server

// This function is for calculate W
export function averageTimeSpent(l, m, s) {
  return 1 / m + averageTimeSpentInQueue(l, m, s);
}

// This function is for calculate Wq
export function averageTimeSpentInQueue(l, m, s) {
  const alpha = l / m;
  const P0 = probabilityZeroCustomer(l, m, s);
  const intensity = trafficIntensity(l, m, s);

  // a = the top of the formula
  const a = alpha ** s * P0;

  // b = the bottom of the formula
  const b = factorial(s) * s * m * (1 - intensity) ** 2;

  return a / b;
}
