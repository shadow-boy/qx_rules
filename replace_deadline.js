let body = $response.body;
let obj = JSON.parse(body);

function addOneMonth(date) {
    let newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 12);
    return newDate;
}

let currentDate = new Date();
let newDeadline = addOneMonth(currentDate);

// 更新 deadline 和 isoDeadline
obj.data.deadline = newDeadline.toISOString().replace('T', ' ').split('.')[0]; // 格式化为 "YYYY-MM-DD HH:mm:SS"
obj.data.isoDeadline = newDeadline.toISOString(); // 格式化为 ISO 时间格式

obj.data.quotaConsumed = "0";
obj.data.expired = false;
obj.data.userType = "0";
obj.data.trialDays = 100;

body = JSON.stringify(obj);
$done({ body });
