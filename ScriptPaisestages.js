import http from "k6/http";
//import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    stages: [
        { duration: "30s", target: 100 },
        { duration: "40", target: 100 },

]}

export default function() {
    const res = http.get('http://servicesqa.siigo.com/catalog/api/geography/v1/country/218');
    //sleep(2)

    
}

export function handleSummary(data) {

    return {
  
      "k6-ResponsePrueba4-user500.html" : htmlReport(data),}}