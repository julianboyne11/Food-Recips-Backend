import { Router } from 'express'
import * as ingredientsCtrl from '../controllers/ingredients.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get("/", ingredientsCtrl.index),
router.post("/", ingredientsCtrl.create)
router.put("/:id", ingredientsCtrl.update)
router.delete("/:id", ingredientsCtrl.delete)

/*---------- Protected Routes ----------*/


export { router }