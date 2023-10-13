const Nations = require('../model/nation')

class nationController {
    index(req, res, next){
        const baseURL = req.originalUrl;
        Nations.find({})
        .then((nations)=>{
            res.render('nations',{
                title: 'List of Nations',
                nationData: nations,
                baseURL
            })
        
        }).catch(next)
    }
    create(req, res, next){
        const nation = new Nations(req.body);
        Nations.findOne({name: nation.name})
        .then((nations) => {
            if(nations){
                res.redirect('/nations')
                console.log('Nation already exists')
            }else{
                nation.save()
                .then(() => res.redirect('/nations'))
                .catch(next)
            }
        })       
    }
    formData(req, res, next) {
        const nationId = req.params.nationId;
        Nations.findById(nationId)
        .then((nations) => {
            res.render('nationDetail', {
                title: 'Detail of nation',
                nations,
            })
        }).catch(next)
    }
    update(req, res, next){
        if(!req.body.name || !req.body.description) {
            res.redirect('/nations')
            console.log('Can not make the field empty')
        } else {
            Nations.updateOne({_id: req.params.nationId}, req.body)
            .then(() => res.redirect('/nations'))
            .catch(next)
        }
    }
    remove(req, res, next){
        Nations.deleteOne({_id: req.params.nationId})
        .then(() => res.redirect('/nations'))
        .catch(next)
    }
}
module.exports = new nationController