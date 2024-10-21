class HelpingHandsController {
  async createHelpingHands(request, response) {
    return response.json({ create: true });
  }
  async getAllHelpingHands(request, response) {
    return response.json({ getAll: true });
  }
  async updateHelpingHands(request, response) {
    return response.json({ update: true });
  }
  async deleteHelpingHands(request, response) {
    return response.json({ delete: true });
  }
  async getOneHelpingHands(request, response) {
    return response.json({ getOne: true });
  }
}

module.exports = HelpingHandsController;
