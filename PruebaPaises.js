import {check} from 'k6';
import http from 'k6/http';

export default function() {
    const res = http.get('http://servicesqa.siigo.com/catalog/api/geography/v1/country/218');
    check(res, {'devolvio un 200': (r) => r.status === 200});
    check(res, {'Devuelve nombre del pais "Ecuador"': (r)=> r.body.includes('218')});
    console.log(res.json());
}