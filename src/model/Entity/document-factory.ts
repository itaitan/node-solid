import { Document } from "../interface/document.interface";
import { Cnpj } from "./cnpj";
import { Cpf } from "./cpf";

export class DocumentFactory {
  static create(value: string): Document {
    if (Cpf.isValid(value)) {
      return new Cpf(value);
    }

    if (Cnpj.isValid(value)) {
      return new Cnpj(value);
    }

    throw new Error(`Value not is document valid: ${value}`);
  }
}
