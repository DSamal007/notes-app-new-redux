const Note = require('../modules/note')

module.exports.list = (req, res) => {
    const { user } = req
    Note.find({user: user._id}).select('createdA category body title').populate('category', ['name'])
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.count = (req,res) => {
    const { user } = req
    Note.countDocuments({user: user._id})
        .then((count) => {
            res.json({count})
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Note.findOne({_id: id, user: user._id}).select('createdAt category body title').populate('category', ['name'])
        .then((note) => {
            if(note){
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const { body, user } = req
    body.user = user._id
    const note = new Note(body)
    note.save()
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Note.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true}).select('createdAt title body category').populate('category', ['name'])
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const { user } = req
    Note.findOneAndDelete({_id: id, user: user._id})
        .then((note) => {
            if(note){
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}