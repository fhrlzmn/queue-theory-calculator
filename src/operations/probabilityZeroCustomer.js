import { factorial } from './factorial.js';

// L = Lambda (Arrival Rate)
// M = Micro (Service Rate)
// S = Number of Server

// P0 stands for Probability of 0 customer
export function probabilityZeroCustomer(l, m, s) {
  return (sigma(l, m, s) + rightPart(l, m, s)) ** -1;
}

// this is the left part of the P0 formula
function sigma(l, m, s) {
  const alpha = l / m;
  let result = 0;

  for (let r = 0; r < s; r++) {
    result += alpha ** r / factorial(r);
  }

  return result;
}

// this is the right part of the P0 formula
export function rightPart(l, m, s) {
  const alpha = l / m;

  const a = alpha ** s / factorial(s);
  const b = (1 - alpha / s) ** -1;

  return a * b;
}
