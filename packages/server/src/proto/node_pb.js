/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.EvalDoneMessage', null, global);
goog.exportSymbol('proto.EvalFailedMessage', null, global);
goog.exportSymbol('proto.EvalFailedMessage.Reason', null, global);
goog.exportSymbol('proto.NewEvalMessage', null, global);
goog.exportSymbol('proto.TypedValue', null, global);
goog.exportSymbol('proto.TypedValue.Type', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TypedValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TypedValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TypedValue.displayName = 'proto.TypedValue';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TypedValue.prototype.toObject = function(opt_includeInstance) {
  return proto.TypedValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TypedValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.TypedValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: msg.getType(),
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TypedValue}
 */
proto.TypedValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TypedValue;
  return proto.TypedValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TypedValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TypedValue}
 */
proto.TypedValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.TypedValue.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.TypedValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.TypedValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TypedValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.TypedValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.TypedValue} The clone.
 */
proto.TypedValue.prototype.cloneMessage = function() {
  return /** @type {!proto.TypedValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Type type = 1;
 * @return {!proto.TypedValue.Type}
 */
proto.TypedValue.prototype.getType = function() {
  return /** @type {!proto.TypedValue.Type} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.TypedValue.Type} value  */
proto.TypedValue.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.TypedValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.TypedValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.TypedValue.Type = {
  STRING: 0,
  NUMBER: 1,
  OBJECT: 2,
  BOOLEAN: 3
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewEvalMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.NewEvalMessage.repeatedFields_, null);
};
goog.inherits(proto.NewEvalMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.NewEvalMessage.displayName = 'proto.NewEvalMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.NewEvalMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewEvalMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.NewEvalMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewEvalMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.NewEvalMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    pb_function: msg.getFunction(),
    argsList: jspb.Message.getField(msg, 3),
    timeout: msg.getTimeout()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewEvalMessage}
 */
proto.NewEvalMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewEvalMessage;
  return proto.NewEvalMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewEvalMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewEvalMessage}
 */
proto.NewEvalMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.getArgsList().push(value);
      msg.setArgsList(msg.getArgsList());
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.NewEvalMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.NewEvalMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewEvalMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.NewEvalMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getFunction();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = this.getTimeout();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.NewEvalMessage} The clone.
 */
proto.NewEvalMessage.prototype.cloneMessage = function() {
  return /** @type {!proto.NewEvalMessage} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.NewEvalMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.NewEvalMessage.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string function = 2;
 * @return {string}
 */
proto.NewEvalMessage.prototype.getFunction = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.NewEvalMessage.prototype.setFunction = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated string args = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.NewEvalMessage.prototype.getArgsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {Array.<string>} value  */
proto.NewEvalMessage.prototype.setArgsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


proto.NewEvalMessage.prototype.clearArgsList = function() {
  jspb.Message.setField(this, 3, []);
};


/**
 * optional uint32 timeout = 4;
 * @return {number}
 */
proto.NewEvalMessage.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.NewEvalMessage.prototype.setTimeout = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EvalFailedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EvalFailedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EvalFailedMessage.displayName = 'proto.EvalFailedMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EvalFailedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EvalFailedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EvalFailedMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.EvalFailedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    reason: msg.getReason(),
    message: msg.getMessage()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EvalFailedMessage}
 */
proto.EvalFailedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EvalFailedMessage;
  return proto.EvalFailedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EvalFailedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EvalFailedMessage}
 */
proto.EvalFailedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.EvalFailedMessage.Reason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.EvalFailedMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.EvalFailedMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EvalFailedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.EvalFailedMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.EvalFailedMessage} The clone.
 */
proto.EvalFailedMessage.prototype.cloneMessage = function() {
  return /** @type {!proto.EvalFailedMessage} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.EvalFailedMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.EvalFailedMessage.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Reason reason = 2;
 * @return {!proto.EvalFailedMessage.Reason}
 */
proto.EvalFailedMessage.prototype.getReason = function() {
  return /** @type {!proto.EvalFailedMessage.Reason} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.EvalFailedMessage.Reason} value  */
proto.EvalFailedMessage.prototype.setReason = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.EvalFailedMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.EvalFailedMessage.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.EvalFailedMessage.Reason = {
  TIMEOUT: 0,
  EXCEPTION: 1,
  CONFLICT: 2
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EvalDoneMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EvalDoneMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EvalDoneMessage.displayName = 'proto.EvalDoneMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EvalDoneMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EvalDoneMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EvalDoneMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.EvalDoneMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    response: (f = msg.getResponse()) && proto.TypedValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EvalDoneMessage}
 */
proto.EvalDoneMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EvalDoneMessage;
  return proto.EvalDoneMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EvalDoneMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EvalDoneMessage}
 */
proto.EvalDoneMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.TypedValue;
      reader.readMessage(value,proto.TypedValue.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.EvalDoneMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.EvalDoneMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EvalDoneMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.EvalDoneMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.TypedValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.EvalDoneMessage} The clone.
 */
proto.EvalDoneMessage.prototype.cloneMessage = function() {
  return /** @type {!proto.EvalDoneMessage} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.EvalDoneMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.EvalDoneMessage.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional TypedValue response = 2;
 * @return {proto.TypedValue}
 */
proto.EvalDoneMessage.prototype.getResponse = function() {
  return /** @type{proto.TypedValue} */ (
    jspb.Message.getWrapperField(this, proto.TypedValue, 2));
};


/** @param {proto.TypedValue|undefined} value  */
proto.EvalDoneMessage.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.EvalDoneMessage.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EvalDoneMessage.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto);
