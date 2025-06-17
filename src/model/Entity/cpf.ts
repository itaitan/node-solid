import { Document } from "../interface/document.interface";

export class Cpf implements Document {
  private value: string;

  constructor(value: string) {
    if (!Cpf.isValid(value)) {
      throw new Error(`Invalid CPF: ${value.length} characters`);
    }
    this.value = value;
  }

  static isValid(value: string): boolean {
    return value.length === 11;
  }

  getDocument(): Document {
    return this;
  }

  getValue(): string {
    return this.value;
  }
}
