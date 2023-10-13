const express = require('express')
const playerController = require('../../controller/playerController')
const playerRouter = express.Router()

playerRouter.route('/')
.get(playerController.index)
.post(playerController.create)

playerRouter.route('/edit/:playerId')
.get(playerController.formData)
.post(playerController.update)

playerRouter.route('/delete/:playerId')
.get(playerController.remove)

module.exports = playerRouter;