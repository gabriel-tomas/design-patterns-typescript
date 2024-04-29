interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  publish(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

// Concrete Observable
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(private _input: HTMLInputElement) {}

  get input(): HTMLInputElement {
    return this._input;
  }

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }
  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) return;
    this.observers.splice(observerIndex, 1);
  }
  publish(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
  inputListenKeyUp(): void {
    this._input.addEventListener('keyup', () => {
      this.publish();
    });
  }
}

// Concrete Observer
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}
  update(observable: InputObservable): void {
    this.element.innerText = observable.input.value;
  }
}

// Client code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Type here');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const paragraph = document.createElement('p');
  document.body.appendChild(paragraph);
  return paragraph;
}

const input = new InputObservable(makeInput());
const paragraph1 = new ParagraphObserver(makeParagraph());
const paragraph2 = new ParagraphObserver(makeParagraph());

input.subscribe(paragraph1, paragraph2);

input.inputListenKeyUp();
