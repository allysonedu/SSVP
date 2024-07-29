const { Router } = require('express');

const TransactionsController = require('../controllers/TransactionsController');

const transactionsRoutes = Router();

const transactionsController = new TransactionsController();

transactionsRoutes.get('/', transactionsController.getAllTransactions);

transactionsRoutes.post('/', transactionsController.createTransactions);

transactionsRoutes.put('/', transactionsController.updateTransactions);

transactionsRoutes.delete('/', transactionsController.deleteTransactions);

module.exports = transactionsRoutes;
