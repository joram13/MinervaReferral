const users = [
    {   id: 1,
        name: 'Big User',
        grad_year: '2040',
        major: "food science",
        current_work: 'Hard working intern',
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'admin@example.com',
        linkedIn: "https://www.linkedin.com",
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        user_past_experience: [
            {
                title: "Software Development Intern",
                company: "Tesla",
                date: "2020-Summer",
                description: "Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur.  Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur. ",
            },            {
                title: "Marketing Intern",
                company: "P&G",
                date: "2019-Summer",
                description: "Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur.  Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur. ",
            },            {
                title: "Software Trainee",
                company: "CodePath",
                date: "2019-Spring",
                description: "Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur.  Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur. ",
            },
        ],
        candidate_portal: "Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur.  Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur. ",
        bio: "Lorem ipsum dolor sit amet, cu vim atqui corrumpit, vis at solet mnesarchum consequuntur. Qui ullum error quaestio at, aperiam voluptua ad qui. Paulo aeterno electram sea id, suas debet efficiendi est et. Has ea tollit facete, vel nihil sanctus at.In eos quis zril maiestatis, his cu lucilius antiopam definiebas. Ius tempor nominavi adversarium ne, dicam possim est ut. Ut eam lucilius dissentiunt accommodare, te magna mucius qui. No modo putant sed, admodum constituto te quo, et usu feugiat philosophia. Sed ut sint graecis, legendos gubergren in nec, nec facer malorum fuisset cu.",
        image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
    },
    {   id: 2,
        name: 'John Doe',
        grad_year: '2040',
        major: "food science",
        current_work: 'Hard working intern',
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'ain@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    },
    {   id: 3,
        name: 'Jane he Doe',
        grad_year: '2040',
        major: "food science",
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'n@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     
    },
    {   id: 4,
        name: 'Jane ha Doe',
        grad_year: '2040',
        major: "food science",
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'n@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     
    },
    {   id: 5,
        name: 'Jane ho Doe',
        grad_year: '2040',
        major: "food science",
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'n@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     
    },
    {   id: 6,
        name: 'Jane hi Doe',
        grad_year: '2040',
        major: "food science",
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'n@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     
    },
    {   id: 7,
        name: 'Jane hi Doe',
        grad_year: '2040',
        major: "food science",
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'n@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     
    },
    {   id: 8,
        name: 'Jane hi Doe',
        grad_year: '2040',
        major: "food science",
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'n@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     
    },
    {   id: 9,
        name: 'Jane hi Doe',
        grad_year: '2040',
        major: "food science",
        interests: 'Drones, marbles, trees, buildings & ice',
        email: 'n@example.com',
        currentTitle: 'Hop skotch player',
        resume: "www.google.com",
        bio: "Lorem ipsum dolor sit amet,",
        image: "https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg",
        cover: "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     
    }

]
export default users;