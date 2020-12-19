import { Schema, model } from 'mongoose';

const projectSchemaDef = {
  name: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  }
}

const projectSchema = new Schema(projectSchemaDef);

export default model('Project', projectSchema);