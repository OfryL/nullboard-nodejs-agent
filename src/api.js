import { Router } from "express"
import { deleteBoard, saveBoard, saveConfig } from "./nb"

const router = Router()

router.put('/config', async (req, res) => {
  try {
    await saveConfig(req.body)
  } catch (e) {
    console.log('error in /config', e)
  }
  return res.status(200).json({})
})

router.put('/board/:id', async (req, res) => {
  try {
    await saveBoard(req.body)
  } catch (e) {
    console.log('error in put /board', e)
  }
  return res.status(200).json({})
})

router.delete('/board/:id', async (req, res) => {
  try {
    await deleteBoard(req.params)
  } catch (e) {
    console.log('error in delete /board', e)
  }
  return res.status(200).json({})
})

export default router
