import http from 'k6/http'

export const options = {
  
  // certificate signed by unknown authority   
  insecureSkipTLSVerify: true,

  vus: 1,
  duration: '1m'
}

export default function main() {
  let response = http.get('https://test-api.k6.io/public/crocodiles/')
}