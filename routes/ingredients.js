import { Router } from 'express'
import * as ingredientsCtrl from '../controllers/ingredients.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get("/", ingredientsCtrl.index),
router.post("/", ingredientsCtrl.create)

/*---------- Protected Routes ----------*/


export { router }