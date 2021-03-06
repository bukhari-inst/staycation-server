const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  country: {
    type: String,
    default: 'Indonesia',
  },
  city: {
    type: String,
    require: true,
  },
  isPopular: {
    type: boolean,
  },
  description: {
    type: String,
    require: true,
  },
  imageId: [
    {
      type: ObjectId,
      ref: 'Image',
    },
  ],
  featureId: [
    {
      type: ObjectId,
      ref: 'Feature',
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: 'Activity',
    },
  ],
});

module.exports = mongoose.model('Item', itemSchema);
