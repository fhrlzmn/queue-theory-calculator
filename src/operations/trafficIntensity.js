// L = Lambda (Arrival Rate)
// M = Micro (Service Rate)
// S = Number of Server

// this function for calculateIntensity which is RHO or p
export function trafficIntensity(l, m, s) {
  return l / (m * s);
}
