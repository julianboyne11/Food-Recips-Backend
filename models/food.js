import mongoose from 'mongoose'

const Schema = mongoose.Schema

const foodSchema = new Schema({
  name: String,
  category: { type: String, enum: ["Meat", "Vegetables", "Fruit", "Salumeria"] },
  amount: Number,
  price: Number
},{
  timestamps: true,
})

const Food = mongoose.model('Food', foodSchema)

export { Food }