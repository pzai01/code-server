// package: 
// file: node.proto

import * as jspb from "google-protobuf";

export class TypedValue extends jspb.Message {
  getType(): TypedValue.Type;
  setType(value: TypedValue.Type): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypedValue.AsObject;
  static toObject(includeInstance: boolean, msg: TypedValue): TypedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypedValue;
  static deserializeBinaryFromReader(message: TypedValue, reader: jspb.BinaryReader): TypedValue;
}

export namespace TypedValue {
  export type AsObject = {
    type: TypedValue.Type,
    value: string,
  }

  export enum Type {
    STRING = 0,
    NUMBER = 1,
    OBJECT = 2,
    BOOLEAN = 3,
  }
}

export class NewEvalMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFunction(): string;
  setFunction(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  getTimeout(): number;
  setTimeout(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewEvalMessage.AsObject;
  static toObject(includeInstance: boolean, msg: NewEvalMessage): NewEvalMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewEvalMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewEvalMessage;
  static deserializeBinaryFromReader(message: NewEvalMessage, reader: jspb.BinaryReader): NewEvalMessage;
}

export namespace NewEvalMessage {
  export type AsObject = {
    id: number,
    pb_function: string,
    argsList: Array<string>,
    timeout: number,
  }
}

export class EvalFailedMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getReason(): EvalFailedMessage.Reason;
  setReason(value: EvalFailedMessage.Reason): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalFailedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EvalFailedMessage): EvalFailedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvalFailedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalFailedMessage;
  static deserializeBinaryFromReader(message: EvalFailedMessage, reader: jspb.BinaryReader): EvalFailedMessage;
}

export namespace EvalFailedMessage {
  export type AsObject = {
    id: number,
    reason: EvalFailedMessage.Reason,
    message: string,
  }

  export enum Reason {
    TIMEOUT = 0,
    EXCEPTION = 1,
    CONFLICT = 2,
  }
}

export class EvalDoneMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): TypedValue | undefined;
  setResponse(value?: TypedValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalDoneMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EvalDoneMessage): EvalDoneMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvalDoneMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalDoneMessage;
  static deserializeBinaryFromReader(message: EvalDoneMessage, reader: jspb.BinaryReader): EvalDoneMessage;
}

export namespace EvalDoneMessage {
  export type AsObject = {
    id: number,
    response?: TypedValue.AsObject,
  }
}

