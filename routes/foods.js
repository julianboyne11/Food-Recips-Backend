import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/


export { router }