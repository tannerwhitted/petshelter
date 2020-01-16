const router = require('express').Router()

const controller = require('../../controllers/pet.controllers')

        router.get('/pets', (req,resp)=>{
            controller.index(req,resp);
        });
        router.post('/pets', (req,resp)=>{
            controller.create(req,resp);
        });

        router.get('/pets/:id',(req,resp)=>{
           controller.show(req,resp);
        });

        router.put('/pets/:id', (req,resp)=>{
            controller.update(req,resp);
        });

        router.delete('/pets/:id', (req,resp)=>{
            controller.destroy(req,resp);
        });

module.exports = router
