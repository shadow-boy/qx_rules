body = $response.body;
obj = JSON.parse(body);
if (obj["encData"] == "z3gsQqMKuyoE6wxhbU0B9r/Rtl245asPShKS+DFNyBa2c6pK7CuB44D9bgys4XGq") {
    // obj["encData"] = "tn7YgOJEDztxLt13qpqC7WV2U3HmczD6XQRanb2lIDdeOuMYeqHVZ2V/lIbzMjhkOuFyAX1sz2VmYFDqURCBi8bOfxC6l+sSQkky2VXv2lNcbALbPUvlcc1FocA1Dnmn";
    obj["encData"] = "tn7YgOJEDztxLt13qpqC7WV2U3HmczD6XQRanb2lIDd3Pmagn0W6sE1C1vbBX5iUN08CQdqTD+iQrePrCNJoHt7y5W49gIvnHdpnSYWBqwk/yCTmir1Agp972eYPdrZR";
}
body = JSON.stringify(obj);
$done(body);