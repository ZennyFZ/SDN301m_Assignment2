const Players = require('../model/player')

class playerController {
    index(req, res, next) {
        const baseURL = req.originalUrl;
        Players.find({})
            .then((players) => {
                res.render('players', {
                    title: 'List of Players',
                    playerData: players,
                    baseURL
                })
            }).catch(next)
    }
    create(req, res, next) {
        req.body.isCaptain = req.body.isCaptain === 'on' ? true : false;
        const player = new Players(req.body);
        Players.findOne({ name: player.name })
            .then((players) => {
                if (players) {
                    res.redirect('/players')
                    console.log('Player already exists')
                } else {
                    player.save()
                        .then(() => res.redirect('/players'))
                        .catch(next)
                }
            })
    }
    formData(req, res, next) {
        const playerId = req.params.playerId;
        const baseURL = req.originalUrl;
        Players.findById(playerId)
            .then((players) => {
                res.render('playerDetail', {
                    title: 'Detail of player',
                    players,
                    baseURL
                })
            }).catch(next)
    }
    update(req, res, next) {
        req.body.isCaptain = req.body.isCaptain === 'on' ? true : false;
        console.log(req.body)
        if (!req.body.name || !req.body.image || !req.body.club || !req.body.position || !req.body.goals) {
            res.redirect('/players')
            console.log('Can not make the field empty')
        } else {
            Players.updateOne({ _id: req.params.playerId }, req.body)
                .then(() => res.redirect('/players'))
                .catch(next)
        }
    }
    remove(req, res, next) {
        Players.deleteOne({ _id: req.params.playerId })
            .then(() => res.redirect('/players'))
            .catch(next)
    }
}

module.exports = new playerController