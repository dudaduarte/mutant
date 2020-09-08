const chai = require('chai')
const chaiSubset = require('chai-subset')
const {
  filterUsers,
  selectFields,
  sortByField
} = require('../../src/services/users')
const { expect } = chai

chai.use(chaiSubset)

describe('Testing GET /users', () => {
  const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

  describe('filterUsers', () => {
    it('should not filter users when there\'s no query "filter"', () => {
      expect(filterUsers({}, users)).to.eql(users)
    })

    it('should filter users that have "suite" on the field "address"', () => {
      const query = {
        address: 'suite'
      }

      const expectedRes = [
        { id: 2 },
        { id: 3 },
        { id: 5 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 }
      ]

      expect(filterUsers(query, users)).to.containSubset(expectedRes)
    })

    it('should filter users whose names contains "ei"', () => {
      const query = {
        name: 'ei'
      }

      const expectedRes = [
        { id: 7 },
        { id: 9 }
      ]

      expect(filterUsers(query, users)).to.containSubset(expectedRes)
    })

    it('should return an empty object then filtering by a field that doesn\' exist', () => {
      const query = {
        carro: 'celta'
      }

      expect(filterUsers(query, users)).to.have.lengthOf(0)
    })

    it('should return an empty object then filtering has no result', () => {
      const query = {
        address: 'adidas'
      }

      expect(filterUsers(query, users)).to.have.lengthOf(0)
    })
  })

  describe('selectFields', () => {
    it('should only show "name", "email" and "company"', () => {
      const fields = ['name', 'email', 'company']

      const expectedRes = [
        {
          "name": "Leanne Graham",
          "email": "Sincere@april.biz",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "name": "Ervin Howell",
          "email": "Shanna@melissa.tv",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "name": "Clementine Bauch",
          "email": "Nathan@yesenia.net",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "name": "Patricia Lebsack",
          "email": "Julianne.OConner@kory.org",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "name": "Chelsey Dietrich",
          "email": "Lucio_Hettinger@annie.ca",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "name": "Mrs. Dennis Schulist",
          "email": "Karley_Dach@jasper.info",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "name": "Kurtis Weissnat",
          "email": "Telly.Hoeger@billy.biz",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "name": "Nicholas Runolfsdottir V",
          "email": "Sherwood@rosamond.me",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "name": "Glenna Reichert",
          "email": "Chaim_McDermott@dana.io",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "name": "Clementina DuBuque",
          "email": "Rey.Padberg@karina.biz",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ]

      expect(selectFields(fields, users)).to.containSubset(expectedRes)
    })

    it('should show a list of "website"s', () => {
      const fields = ['website']

      const expectedRes = [
        {
          "website": "hildegard.org"
        },
        {
          "website": "anastasia.net"
        },
        {
          "website": "ramiro.info"
        },
        {
          "website": "kale.biz"
        },
        {
          "website": "demarco.info"
        },
        {
          "website": "ola.org"
        },
        {
          "website": "elvis.io"
        },
        {
          "website": "jacynthe.com"
        },
        {
          "website": "conrad.com"
        },
        {
          "website": "ambrose.net"
        }
      ]

      expect(selectFields(fields, users)).to.containSubset(expectedRes)
    })

    it('should show an empty array when fields doesn\'t exist', () => {
      const fields = ['carro', 'refrigerante']

      expect(selectFields(fields, users)).to.have.lengthOf(0)
    })

    it('should return an empty array when receives an empty list of users', () => {
      const fields = ['address']

      expect(selectFields(fields, [])).to.have.lengthOf(0)
    })
  })

  describe('sortByField', () => {
    it('should only show "name", "email" and "company", and sort by "company.name"', () => {
      const fields = ['name', 'email', 'company']
      const sortBy = 'company.name'
      const filteredFieldsUsers = selectFields(fields, users)

      const expectedRes = [
        {
          "name": "Nicholas Runolfsdottir V",
          "email": "Sherwood@rosamond.me",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "name": "Mrs. Dennis Schulist",
          "email": "Karley_Dach@jasper.info",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "name": "Ervin Howell",
          "email": "Shanna@melissa.tv",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "name": "Clementina DuBuque",
          "email": "Rey.Padberg@karina.biz",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        },
        {
          "name": "Kurtis Weissnat",
          "email": "Telly.Hoeger@billy.biz",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "name": "Chelsey Dietrich",
          "email": "Lucio_Hettinger@annie.ca",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "name": "Patricia Lebsack",
          "email": "Julianne.OConner@kory.org",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "name": "Leanne Graham",
          "email": "Sincere@april.biz",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "name": "Clementine Bauch",
          "email": "Nathan@yesenia.net",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "name": "Glenna Reichert",
          "email": "Chaim_McDermott@dana.io",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        }
      ]

      expect(sortByField(sortBy, filteredFieldsUsers))
        .to.containSubset(expectedRes)
    })

    it('should not sort by a field that was not selected to be shown', () => {
      const fields = ['email']
      const sortBy = 'name'
      const filteredFieldsUsers = selectFields(fields, users)

      const expectedRes = [
        {
          "email": "Rey.Padberg@karina.biz"
        },
        {
          "email": "Chaim_McDermott@dana.io"
        },
        {
          "email": "Sherwood@rosamond.me"
        },
        {
          "email": "Telly.Hoeger@billy.biz"
        },
        {
          "email": "Karley_Dach@jasper.info"
        },
        {
          "email": "Lucio_Hettinger@annie.ca"
        },
        {
          "email": "Julianne.OConner@kory.org"
        },
        {
          "email": "Nathan@yesenia.net"
        },
        {
          "email": "Shanna@melissa.tv"
        },
        {
          "email": "Sincere@april.biz"
        }
      ]

      expect(sortByField(sortBy, filteredFieldsUsers))
        .to.containSubset(expectedRes)
    })

    it('should not sort by a field that doesn\'t exist', () => {
      const fields = ['name', 'email', 'website']
      const sortBy = 'carro'
      const filteredFieldsUsers = selectFields(fields, users)

      const expectedRes = [
        {
          "name": "Clementina DuBuque",
          "email": "Rey.Padberg@karina.biz",
          "website": "ambrose.net"
        },
        {
          "name": "Glenna Reichert",
          "email": "Chaim_McDermott@dana.io",
          "website": "conrad.com"
        },
        {
          "name": "Nicholas Runolfsdottir V",
          "email": "Sherwood@rosamond.me",
          "website": "jacynthe.com"
        },
        {
          "name": "Kurtis Weissnat",
          "email": "Telly.Hoeger@billy.biz",
          "website": "elvis.io"
        },
        {
          "name": "Mrs. Dennis Schulist",
          "email": "Karley_Dach@jasper.info",
          "website": "ola.org"
        },
        {
          "name": "Chelsey Dietrich",
          "email": "Lucio_Hettinger@annie.ca",
          "website": "demarco.info"
        },
        {
          "name": "Patricia Lebsack",
          "email": "Julianne.OConner@kory.org",
          "website": "kale.biz"
        },
        {
          "name": "Clementine Bauch",
          "email": "Nathan@yesenia.net",
          "website": "ramiro.info"
        },
        {
          "name": "Ervin Howell",
          "email": "Shanna@melissa.tv",
          "website": "anastasia.net"
        },
        {
          "name": "Leanne Graham",
          "email": "Sincere@april.biz",
          "website": "hildegard.org"
        }
      ]

      expect(sortByField(sortBy, filteredFieldsUsers))
        .to.containSubset(expectedRes)
    })

    it('should return an empty array when receives an empty list of users', () => {
      const sortBy = 'name'

      expect(sortByField(sortBy, [])).to.have.lengthOf(0)
    })
  })
})