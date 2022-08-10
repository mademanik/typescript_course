"use strict";
// enum
// numeric enums
var months;
(function (months) {
    months[months["JAN"] = 1] = "JAN";
    months[months["FEB"] = 2] = "FEB";
    months[months["MAR"] = 3] = "MAR";
    months[months["APR"] = 4] = "APR";
    months[months["MAY"] = 5] = "MAY";
})(months || (months = {}));
console.log(months.MAY);
//string enums
var months2;
(function (months2) {
    months2["JAN"] = "January";
    months2["FEB"] = "February";
    months2["MAR"] = "March";
    months2["APR"] = "April";
    months2["MAY"] = "May";
})(months2 || (months2 = {}));
console.log(months2.MAY);
