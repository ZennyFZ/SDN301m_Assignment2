const express = require('express')
const Nations = require('../../model/nation')
const nationRouter = express.Router()

nationRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        next()
    })
    .get((req, res, next) => {
        Nations.find({}).then((nation) => {
            res.json(nation)
        })
    })
    .post((req, res, next) => {
        Nations.create(req.body).then((nation) => {
            res.statusCode = 200
            res.json(nation)
        })
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Not Support')
    })
    .delete((req, res, next) => {
        Nations.deleteOne({}).then((nation) => {
            res.json(nation)
        })
    })

nationRouter.route('/:nationId')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        next()
    })
    .get((req, res, next) => {
        Nations.findById(req.params.nationId).then((nation) => {
            res.statusCode = 200
            res.json(nation)
        })
    })
    .post((req, res, next) => {
        res.statusCode = 403
        res.end('Not Support')
    })
    .put((req, res, next) => {
        Nations.findByIdAndUpdate(req.params.nationId, {
            $set: req.body
        }, { new: true })
            .then((nation) => {
                res.json(nation)
            })
    })
    .delete((req, res, next) => {
        Nations.findByIdAndDelete(req.params.nationId)
            .then((resp) => {
                res.json(resp)
            })
    })