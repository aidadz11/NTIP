import express from 'express'
import { addFlower,listFlower,removeFlower } from '../controllers/flowerController.js'
import multer from 'multer'

const flowerRouter = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})

const upload=multer({storage:storage})


flowerRouter.post("/add",upload.single("image"),addFlower)
flowerRouter.get("/list",listFlower)
flowerRouter.post("/remove",removeFlower)







export default flowerRouter;