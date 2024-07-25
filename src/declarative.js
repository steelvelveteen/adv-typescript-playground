"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var temperatures$ = (0, rxjs_1.from)([32, 45, 50, 55, 60, 65, 70]);
temperatures$
    .pipe((0, operators_1.filter)(function (temperature) { return temperature >= 50; }), (0, operators_1.reduce)(function (acc, temperature) {
    acc.sum += temperature;
    acc.count += 1;
    return acc;
}, { sum: 0, count: 0 }))
    .subscribe(function (_a) {
    var sum = _a.sum, count = _a.count;
    var average = sum > 0 ? sum / count : 0;
    console.log("Sum of even numbers: ".concat(average));
});
