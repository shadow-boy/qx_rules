// replace_paid_to_free.js
let body = $response.body; // 获取接口的响应体
body = body.replace(/paid/g, "free"); // 全局替换 "paid" 为 "free"
$done({ body }); // 返回修改后的响应体
