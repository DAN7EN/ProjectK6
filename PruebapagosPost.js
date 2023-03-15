import http from "k6/http";
import { check } from "k6";

export default function () {
  const url = "https://sandbox.api.payulatam.com/reports-api/4.0/service.cgi";
  const payload = JSON.stringify({
    test: false,
    language: "es",
    command: "ORDER_DETAIL_BY_REFERENCE_CODE",
    merchant: {
      apiLogin: "pRRXKOl8ikMmt9u",
      apiKey: "4Vj8eK4rloUd272L48hsrarnUA",
    },
    details: {
      referenceCode: "63337cf2274e870011c5954e",
    },
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);
  console.log(res.statusCode);
  //check(res, {"Operacion declinada": (r) => r.body.includes("Declined")});
  }    
  
