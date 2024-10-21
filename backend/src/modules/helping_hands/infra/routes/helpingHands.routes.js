const { Router } = require('express');

const HelpingHandsController = require('../controller/HelpingHandsController');

const helpingHandsRoutes = Router();

const helpingHandsController = new HelpingHandsController();

helpingHandsRoutes.post('/', helpingHandsController.createHelpingHands);

helpingHandsRoutes.get('/', helpingHandsController.getAllHelpingHands);

helpingHandsRoutes.put('/:id', helpingHandsController.updateHelpingHands);

helpingHandsRoutes.delete('/:id', helpingHandsController.deleteHelpingHands);

helpingHandsRoutes.get('/:id', helpingHandsController.getOneHelpingHands);

module.exports = helpingHandsRoutes;
