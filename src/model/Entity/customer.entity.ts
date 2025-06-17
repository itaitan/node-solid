import { Document } from "../interface/document.interface";
import { DocumentFactory } from "./document-factory";
import { Uuid } from "./uuid";

export class Customer {
  id: Uuid;
  name: string;
  document: Document;

  constructor(name: string, document: Document, id?: string) {
    this.id = id ? new Uuid(id) : Uuid.randomGenerator();
    this.name = name;
    this.document = document;
  }

  static create(name: string, document: string, id?: string): Customer {
    if (!name || !document) {
      throw new Error("Invalid parameters to create a customer");
    }
    const documentsInstance = DocumentFactory.create(document);
    return new Customer(name, documentsInstance, id);
  }
}
