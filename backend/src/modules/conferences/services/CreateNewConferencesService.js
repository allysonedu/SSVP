/**
 * A classe tem a responsabilidade de executar uma ação e usar o banco de dados
 * se necessario para isso
 *
 * A instancia da classe nada mais é do que a inicialização da classe
 */

class CreateNewConferencesService {
  constructor(conferencesRepository) {
    this.conferencesRepository = conferencesRepository;
  }

  async execute(payload) {
    return this.conferencesRepository.createConferences(payload);
  }
}

module.exports = CreateNewConferencesService;
