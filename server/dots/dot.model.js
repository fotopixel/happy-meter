import { Schema, model } from 'mongoose';

const dotSchemaDef = {
  x: {
    type: String,
    required: true,
  }, 
  y: {
    type: String,
    required: true,
  },
  timestamp: {
    type : Date, 
    default: Date.now,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }
}

const dotSchema = new Schema(dotSchemaDef);

export default model('Dot', dotSchema);