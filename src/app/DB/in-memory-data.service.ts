import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
 
  createDb() {
             
              let users = [
                          { id: 1, name: 'Windstorm' },
                          { id: 2, name: 'Bombasto'  },
                          { id: 3, name: 'Magneta'   },
                          { id: 4, name: 'Tornado'   },
                          { id: 5, name: 'Agnosto'   },
                          { id: 6, name: 'Windstorm' },
                          { id: 7, name: 'Bombasto'  },
                          { id: 8, name: 'Magneta'   },
                          { id: 9, name: 'Tornado'   },
                          { id: 10, name: 'Agnosto'   },
                          { id: 11, name: 'Fagner'   },
              ];
              
              let usuarioAD = [
                          {id: 1, nome: "Jose Comercial"},
                          {id: 2, nome: "Maria Financeiro"},
                          {id: 3, nome: "João Laboratório"},
              ];
              
    return {
            users     : { total   : users.length,     results : users      },
            usuarioAD : { total   : usuarioAD.length, results : usuarioAD  }
           };
      
  }
}