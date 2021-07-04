const users = [
    {
        id: "60d0fe4f5311236168a109cf",
        title: "mrs",
        firstName: "Carolina",
        lastName: "Lima",
        gender: "female",
        email: "carolina.lima@example.com",
        dateOfBirth: "1994-03-04T03:04:53.673Z",
        phone: "(79) 9932-2522",
        picture: "https://randomuser.me/api/portraits/med/women/5.jpg",
        location: {
            street: "4162, Rua da Paz ",
            city: "Boa Vista",
            state: "Rio Grande do Norte",
            country: "Brazil",
            timezone: "-4:00"
        },
        registerDate: "2021-06-21T21:02:08.193Z",
        updatedAt: "2021-06-21T21:02:08.193Z"
    }, 
    {
        id: "60d0fe4f5311236168a109d0",
        title: "mr",
        firstName: "Emre",
        lastName: "Asikoglu",
        gender: "male",
        email: "emre.asikoglu@example.com",
        dateOfBirth: "1964-12-08T16:34:53.710Z",
        phone: "(886)-854-5524",
        picture: "https://randomuser.me/api/portraits/med/men/23.jpg",
        location: {
            street: "3682, Fatih Sultan Mehmet Cd",
            city: "KÃ¼tahya",
            state: "Manisa",
            country: "Turkey",
            timezone: "-9:00"
        },
        registerDate: "2021-06-21T21:02:08.346Z",
        updatedAt: "2021-06-21T21:02:08.346Z"
    }, 
    {
        id: "60d0fe4f5311236168a109d1",
        title: "mr",
        firstName: "Kent",
        lastName: "Brewer",
        gender: "male",
        email: "kent.brewer@example.com",
        dateOfBirth: "1955-07-19T00:57:14.606Z",
        phone: "021-351-5186",
        picture: "https://randomuser.me/api/portraits/med/men/52.jpg",
        location: {
            street: "4015, Station Road",
            city: "Buncrana",
            state: "Roscommon",
            country: "Ireland",
            timezone: "+6:00"
        },
        registerDate: "2021-06-21T21:02:08.506Z",
        updatedAt: "2021-06-21T21:02:08.506Z"
    }, 
    {
        id: "60d0fe4f5311236168a109cd",
        title: "mr",
        firstName: "Roberto",
        lastName: "Vega",
        gender: "male",
        email: "roberto.vega@example.com",
        dateOfBirth: "1945-11-17T06:31:57.367Z",
        phone: "949-368-211",
        picture: "https://randomuser.me/api/portraits/med/men/25.jpg",
        location: {
            street: "7675, Calle Mota",
            city: "LogroÃ±o",
            state: "Islas Baleares",
            country: "Spain",
            timezone: "+6:00"
        },
        registerDate: "2021-06-21T21:02:07.872Z",
        updatedAt: "2021-06-21T21:02:07.872Z"
    }, 
    {
        id: "60d0fe4f5311236168a109ce",
        title: "mr",
        firstName: "Rudi",
        lastName: "Droste",
        gender: "male",
        email: "rudi.droste@example.com",
        dateOfBirth: "1972-08-07T22:16:47.420Z",
        phone: "0421-7342787",
        picture: "https://randomuser.me/api/portraits/med/men/83.jpg",
        location: {
            street: "1196, MÃ¼hlenweg",
            city: "GrÃ¼nhain-Beierfeld",
            state: "Sachsen-Anhalt",
            country: "Germany",
            timezone: "+3:30"
        },
        registerDate: "2021-06-21T21:02:08.029Z",
        updatedAt: "2021-06-21T21:02:08.029Z"
    }, 
    {
        id: "60d0fe4f5311236168a109cf",
        title: "mrs",
        firstName: "Carolina",
        lastName: "Lima",
        gender: "female",
        email: "carolina.lima@example.com",
        dateOfBirth: "1994-03-04T03:04:53.673Z",
        phone: "(79) 9932-2522",
        picture: "https://randomuser.me/api/portraits/med/women/5.jpg",
        location: {
            street: "4162, Rua da Paz ",
            city: "Boa Vista",
            state: "Rio Grande do Norte",
            country: "Brazil",
            timezone: "-4:00"
        },
        registerDate: "2021-06-21T21:02:08.193Z",
        updatedAt: "2021-06-21T21:02:08.193Z"
    }, 
    {
        id: "60d0fe4f5311236168a109d0",
        title: "mr",
        firstName: "Emre",
        lastName: "Asikoglu",
        gender: "male",
        email: "emre.asikoglu@example.com",
        dateOfBirth: "1964-12-08T16:34:53.710Z",
        phone: "(886)-854-5524",
        picture: "https://randomuser.me/api/portraits/med/men/23.jpg",
        location: {
            street: "3682, Fatih Sultan Mehmet Cd",
            city: "KÃ¼tahya",
            state: "Manisa",
            country: "Turkey",
            timezone: "-9:00"
        },
        registerDate: "2021-06-21T21:02:08.346Z",
        updatedAt: "2021-06-21T21:02:08.346Z"
    }, 
    {
        id: "60d0fe4f5311236168a109d1",
        title: "mr",
        firstName: "Kent",
        lastName: "Brewer",
        gender: "male",
        email: "kent.brewer@example.com",
        dateOfBirth: "1955-07-19T00:57:14.606Z",
        phone: "021-351-5186",
        picture: "https://randomuser.me/api/portraits/med/men/52.jpg",
        location: {
            street: "4015, Station Road",
            city: "Buncrana",
            state: "Roscommon",
            country: "Ireland",
            timezone: "+6:00"
        },
        registerDate: "2021-06-21T21:02:08.506Z",
        updatedAt: "2021-06-21T21:02:08.506Z"
    }, 
    {
        id: "60d0fe4f5311236168a109d2",
        title: "mr",
        firstName: "Evan",
        lastName: "Carlson",
        gender: "male",
        email: "evan.carlson@example.com",
        dateOfBirth: "1964-09-26T20:40:33.623Z",
        phone: "0118501 366 9206",
        picture: "https://randomuser.me/api/portraits/med/men/80.jpg",
        location: {
            street: "2944, Kings Road",
            city: "Southampton",
            state: "Devon",
            country: "United Kingdom",
            timezone: "+3:00"
        },
        registerDate: "2021-06-21T21:02:08.707Z",
        updatedAt: "2021-06-21T21:02:08.707Z"
    }, 
    {
        id: "60d0fe4f5311236168a109d3",
        title: "mr",
        firstName: "Friedrich-Karl",
        lastName: "Brand",
        gender: "male",
        email: "friedrich-karl.brand@example.com",
        dateOfBirth: "1984-11-07T01:44:23.697Z",
        phone: "0982-2127379",
        picture: "https://randomuser.me/api/portraits/med/men/7.jpg",
        location: {
            street: "7297, Erlenweg",
            city: "Naumburg",
            state: "Sachsen",
            country: "Germany",
            timezone: "-2:00"
        },
        registerDate: "2021-06-21T21:02:08.861Z",
        updatedAt: "2021-06-21T21:02:08.861Z"
    }
]

export default users