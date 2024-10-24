const express = require('express');
const {body, validationResult } = require('express-validator');

const router = express.Router();


router.post('/add', [
    body('num1').isNumeric().withMessage('num1 should be numeric'),
    body('num2').isNumeric().withMessage('num2 should be numeric'),
], (req, res)  => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    return res.json({sum: req.body.num1 + req.body.num2});
})