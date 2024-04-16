export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      value,
    );
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

export class ValidateComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];
  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }

    return true;
  }

  add(...validates: ValidationComponent[]): void {
    this.children.push(...validates);
  }
}

const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();

const validateBox = new ValidateComposite();
validateBox.add(validateEmail, validateString, validateNumber);
console.log(validateBox);
console.log(validateBox.validate('a2@a'));
