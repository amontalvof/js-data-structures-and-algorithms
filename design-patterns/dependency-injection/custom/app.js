"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_container_1 = require("./ioc-container");
var ConcreteA = /** @class */ (function () {
    function ConcreteA() {
    }
    ConcreteA.prototype.doA = function () {
        console.log('Doing A');
    };
    ConcreteA = __decorate([
        (0, ioc_container_1.Register)('IDepA', [])
    ], ConcreteA);
    return ConcreteA;
}());
var ConcreteB = /** @class */ (function () {
    function ConcreteB() {
    }
    ConcreteB.prototype.doB = function () {
        console.log('Doing B');
    };
    ConcreteB = __decorate([
        (0, ioc_container_1.Register)('IDepB', [])
    ], ConcreteB);
    return ConcreteB;
}());
var ConcreteC = /** @class */ (function () {
    function ConcreteC(_concreteA, _concreteB) {
        this._concreteA = _concreteA;
        this._concreteB = _concreteB;
    }
    ConcreteC.prototype.doC = function () {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log('Doing C');
    };
    return ConcreteC;
}());
var container = ioc_container_1.IoCContainer.instance;
container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);
var a = container.resolve('IDepA');
a.doA();
console.log('\x1b[0m', '\x1b[30m', '\x1b[46m', '************************************', '\x1b[0m');
var b = container.resolve('IDepB');
b.doB();
console.log('\x1b[0m', '\x1b[30m', '\x1b[46m', '************************************', '\x1b[0m');
var c = container.resolve('IDepC');
c.doC();
