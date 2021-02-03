"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function withTemplate(template, hookID) {
    console.log('template factory');
    return function (originalconstructor) {
        return class extends originalconstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookID);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'urvish';
        console.log("person object");
    }
};
Person = __decorate([
    Logger('Hello World'),
    withTemplate('<h1> person object</h1>', 'app')
], Person);
function log(target, property) {
    console.log('property decorator');
    console.log(target, property);
}
function log2(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function log3(target, name, descriptor) {
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function log4(target, name, postion) {
    console.log('parameter decorator');
    console.log(target);
    console.log(name);
    console.log(postion);
}
class product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("invalid");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    log
], product.prototype, "title", void 0);
__decorate([
    log2
], product.prototype, "price", null);
__decorate([
    log3,
    __param(0, log4)
], product.prototype, "getPriceWithTax", null);
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundfn = originalMethod.bind(this);
            return boundfn;
        }
    };
    return adjDescriptor;
}
class printer {
    constructor() {
        this.message = 'this works';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    autobind
], printer.prototype, "showMessage", null);
const p = new printer();
p.showMessage();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
//# sourceMappingURL=app.js.map