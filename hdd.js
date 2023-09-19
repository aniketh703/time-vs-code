const fs = require('fs');
function calculateDaysBetweenDates(begin, end) {
    var oneDay = 24 * 60 * 60 * 1000; 
    return Math.round((end - begin) / oneDay);
}
function getDateFromTimestamp(timestamp) {
    if (!isNaN(+timestamp)) {
        let date = new Date();
        date.setTime(parseInt(timestamp) * 1000);
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        let year = date.getFullYear();
        let hour = date.getHours().toString().padStart(2, '0');
        let minute = date.getMinutes().toString().padStart(2, '0');
        let second = date.getSeconds().toString().padStart(2, '0');
        let formattedTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        return formattedTime;
    }
}
const timestamp = 1632048183; 
const formattedTime = getDateFromTimestamp(timestamp);
console.log("Formatted time:", formattedTime)
const beginDate = new Date('2023-09-15');
const endDate = new Date('2023-09-19');
const daysBetween = calculateDaysBetweenDates(beginDate, endDate);
console.log("Days between dates:", daysBetween);

