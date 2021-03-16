const express = require('express')

const router = express.Router();

//@route GET api/contacts
//@desc Get all users contacts
//@access Private
router.get('/', (req, res)=>{
    res.send("Get all contacts for a user")
})

//@route POST api/contacts
//@desc Add a new contact
//@access Private
router.post('/', (req, res)=>{
    res.send("Add a new contact")
})

//@route PUT api/contacts/:id
//@desc Update a new contact
//@access Private
router.put('/:id', (req, res)=>{
    res.send("update a new contact")
})

//@route DELETE api/contacts/:id
//@desc Delete a new contact
//@access Private
router.delete('/:id', (req, res)=>{
    res.send("Add a new contact")
})

module.exports = router;