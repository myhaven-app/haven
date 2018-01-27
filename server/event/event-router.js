'use strict'

const router = require('express').Router();

router.post('/', require('./handler/create'));
router.get('/', require('./handler/find'));
router.get('/:id', require('./handler/find-by-id'));