import http from "k6/http";
import { sleep } from "k6";

export const options = {
    stages: [
        { duration: "30s", target: 100 },
        { duration: "40", target: 100 },

]}

export default function() {
    const res = http.get('http://servicesqa.siigo.com/catalog/api/geography/v1/country/218');
    sleep(2)
}