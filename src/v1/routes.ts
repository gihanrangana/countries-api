import { Router } from "express";

const router = Router()

router.get('/countries', async (req, res, next) => {
    res.send("countries")
})

export default router;