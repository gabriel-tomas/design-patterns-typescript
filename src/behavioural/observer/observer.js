// Concrete Observable
var InputObservable = /** @class */ (function () {
    function InputObservable(_input) {
        this._input = _input;
        this.observers = [];
    }
    Object.defineProperty(InputObservable.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1)
            return;
        this.observers.splice(observerIndex, 1);
    };
    InputObservable.prototype.publish = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    InputObservable.prototype.inputListenKeyUp = function () {
        var _this = this;
        this._input.addEventListener('keyup', function () {
            _this.publish();
        });
    };
    return InputObservable;
}());
// Concrete Observer
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        this.element.innerText = observable.input.value;
    };
    return ParagraphObserver;
}());
// Client code
function makeInput() {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Type here');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    return paragraph;
}
var input = new InputObservable(makeInput());
var paragraph1 = new ParagraphObserver(makeParagraph());
var paragraph2 = new ParagraphObserver(makeParagraph());
input.subscribe(paragraph1, paragraph2);
input.inputListenKeyUp();
