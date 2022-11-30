
import { Ingredient } from "../models/ingredient.js"

const index = async (req, res) => {
  try {
    const ingredients = await Ingredient.find({})
    res.status(200).json(ingredients)

  } catch (error) {
    res.status(500).json(error)
  }
}

const create = async (req, res) => {
  try {
    const ingredient = Ingredient.create(req.body)
    res.status(201).json(ingredient)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  index, 
  create,
}