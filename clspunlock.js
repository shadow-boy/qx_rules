body = $response.body;
obj = JSON.parse(body);
if (obj["encData"] == "z3gsQqMKuyoE6wxhbU0B9r/Rtl245asPShKS+DFNyBa2c6pK7CuB44D9bgys4XGq") {
    obj["encData"] = "tn7YgOJEDztxLt13qpqC7WV2U3HmczD6XQRanb2lIDcJ9N+08c0pE6Qnt76UCAFVBlSXZfSYiQIIVMaNRyYoJZfVEdRsXDlsLN1sCRCvkybG/d7wr+rHbgPM+/TZoIyH";
}
body = JSON.stringify(obj);
$done(body);