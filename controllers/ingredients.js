
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
    const ingredient = await Ingredient.create(req.body)
    res.status(201).json(ingredient)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteIngredient = async (req, res) => {
  try {
    const deletedIngredient = await Ingredient.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedIngredient)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    console.log(req.body, "BODY");
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {next: true,})
    res.status(200).json(updatedIngredient)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  index, 
  create,
  deleteIngredient as delete,
  update,
}