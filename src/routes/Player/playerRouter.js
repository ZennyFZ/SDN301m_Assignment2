const express = require('express')
const Players = require('../../model/player')
const playerRouter = express.Router()

playerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        next()
    })
    .get((req, res, next) => {
        Players.find({}).then((player) => {
            res.json(player)
        })
    })
    .post((req, res, next) => {
        Players.create(req.body).then((player) => {
            res.statusCode = 200
            res.json(player)
        })
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Not Support')
    })
    .delete((req, res, next) => {
        Players.deleteOne({}).then((player) => {
            res.json(player)
        })
    })

playerRouter.route('/:playerId')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        next()
    })
    .get((req, res, next) => {
        Players.findById(req.params.playerId).then((player) => {
            res.statusCode = 200
            res.json(player)
        })
    })
    .post((req, res, next) => {
        res.statusCode = 403
        res.end('Not Support')
    })
    .put((req, res, next) => {
        Players.findByIdAndUpdate(req.params.playerId, {
            $set: req.body
        }, { new: true })
            .then((player) => {
                res.json(player)
            })
    })
    .delete((req, res, next) => {
        Players.findByIdAndDelete(req.params.playerId)
            .then((resp) => {
                res.json(resp)
            })
    })