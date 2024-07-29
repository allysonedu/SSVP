class TransactionsController {
  async createTransactions(request, response) {
    return response.json({ create: true });
  }

  async getAllTransactions(request, response) {
    return response.json({ getAll: true });
  }

  async updateTransactions(request, response) {
    return response.json({ update: true });
  }

  async deleteTransactions(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = TransactionsController;
