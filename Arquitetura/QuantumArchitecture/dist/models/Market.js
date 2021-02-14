"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
var Market = /** @class */ (function () {
    function Market() {
        this.tends = [];
    }
    Market.prototype.addTend = function (tend) {
        var exists = this.tends.find(function (tend) { return tend; });
        if (exists) {
            return;
        }
        this.tends.push(tend);
    };
    Market.prototype.show = function () {
        return JSON.stringify(this.tends);
    };
    return Market;
}());
exports.Market = Market;
