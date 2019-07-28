const router = require('express').Router();
const db = require('../dao');
const { SEND } = require('./helper');

module.exports = function mountApiRoutes(app) {
   // router.use("/admin", require('./admin/admin.routes'))
    app.use('/api', router);
};

// api

router.post('/question', (req, res) => {
    let body = req.body;
    body.createdAt = new Date();
    body.active = true;
    body.published = true;

    db.questions.insert(body, (err, ques) => {
        SEND(res, err, ques);
    })
});

router.put('/question', (req, res) => {
    let body = req.body;
    body.modifiedAt = new Date();

    let id = body._id;
    delete body._id;

    db.questions.update({ _id: id }, { $set: body }, (err, prod) => {
        SEND(res, err, prod);
    });
});

router.get('/questions', (req, res) => {
    db.questions.find({ active: true, published: true },
        { question: 1, title: 1, tags: 1 }, (err, questions) => {
            SEND(res, err, questions);
        });
});


router.get('/question/:id', (req, res) => {
    db.questions.findOne({ active: true, published: true, _id: req.params.id },
        (err, question) => {
            SEND(res, err, question);
        });
});


