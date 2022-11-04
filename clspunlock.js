body = $response.body;
obj = JSON.parse(body);
if (obj["encData"] == "z3gsQqMKuyoE6wxhbU0B9r/Rtl245asPShKS+DFNyBa2c6pK7CuB44D9bgys4XGq") {
    obj["encData"] = "tn7YgOJEDztxLt13qpqC7WV2U3HmczD6XQRanb2lIDdeOuMYeqHVZ2V/lIbzMjhkOuFyAX1sz2VmYFDqURCBi8bOfxC6l+sSQkky2VXv2lNcbALbPUvlcc1FocA1Dnmn";
}
body = JSON.stringify(obj);
$done(body);