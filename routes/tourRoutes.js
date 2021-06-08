const express = require('express')
const tourController = require('./../controllers/tourController')


const router = express.Router()

//ma kerko nje paramter te objektit
//val = id qe e marrim nga objekti  ne file
// router.param("id", tourController.checkId)

    


router
    .route('/')
    .get(tourController.getAllTours)
    //PER STATIC DATA ESHTE CHECKBODY DHE CHECKID !
    
    //ketu njehere duhet te kontrollon pataj te krijon
    // .post(tourController.checkBody, tourController.createTour)
    .post(tourController.createTour)


router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router
