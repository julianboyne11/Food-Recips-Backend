import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
  name: String,
  category: { type: String, enum: ["Meat", "Vegetables", "Fruit", "Salumeria", "Pasta"] },
  amount: Number,
  price: Number
},{
  timestamps: true,
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

export { Ingredient }