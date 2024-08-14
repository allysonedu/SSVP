class GetAllConferencesService {
  constructor(conferencesRepository) {
    this.conferencesRepository = conferencesRepository;
  }

  async execute() {
    return this.conferencesRepository.getAllConferences();
  }
}

module.exports = GetAllConferencesService;
