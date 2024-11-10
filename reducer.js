import { ADD_FILM, DELETE_FILM, EDIT_FILM } from "./actionType";

const initialState = {
  films: [
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      rating: 5,
      name: "Star Wars: The Rise Of Skywalker",
      date: "December 2019",
      categorie: "SF",
      trailer: "https://www.youtube.com/embed/8Qn_spdM5Zg?si=OucCOTe9gVSebwXl",
      description:
        "Set a long time ago in a fictional galaxy ruled by the tyrannical Galactic Empire, the story follows a group of freedom fighters known as the Rebel Alliance, who aim to destroy the Empire's newest weapon, the Death Star.",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      rating: 4,
      name: "Avengers: Infinity War",
      date: "April 2018",
      description:
        "In the film, the Avengers and the Guardians of the Galaxy attempt to stop Thanos from collecting the six powerful Infinity Stones as part of his quest to kill half of all life in the universe.",
      categorie: "SF",
      trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8?si=Ms6bZH4zncXl8y-s",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      rating: 4,
      name: "Frozen II",
      date: "November 2019",
      categorie: "kids",
      description:
        "It stars the voices of Kristen Bell, Idina Menzel, Josh Gad, and Jonathan Groff. Set three years after the events of the first film, Frozen II follows sisters Anna and Elsa, and their companions Kristoff, Sven, and Olaf as they travel to an enchanted forest to unravel the origin of Elsa's magical power.",
      trailer: "https://www.youtube.com/embed/Zi4LMpSDccc?si=wZDPZ7fa8ZOsq77C",
    },
    {
      id: Math.random(),
      image:
        "https://i1.wp.com/easttennessean.com/wp-content/uploads/2016/11/FantasticBeasts.png?fit=500%2C639&ssl=1",
      rating: 3,
      name: "Fantastic Beasts and Where to Find Them",
      date: "November 2016",
      categorie: "kids",
      description:
        "Summaries. In 1926, magizoologist Newt Scamander arrives in New York during his worldwide tour to research and rescue magical creatures as something mysterious leaves trails of destruction in the city, threatening to expose the wizarding world.",
      trailer: "https://www.youtube.com/embed/ViuDsy7yb8M?si=Ai2So2szxg-vw-Qr",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_FMjpg_UX1000_.jpg",
      rating: 2,
      name: "Cat In The Hat",
      date: "November 2003",
      categorie: "kids",
      description:
        "Synopsis In this live-action film based on the favorite children's tale, the trouble-making Cat in the Hat (Mike Myers) arrives at the home of bored young Sally Walden (Dakota Fanning) and her brother, Conrad (Spencer Breslin), while their mother (Kelly Preston) is out.",
      trailer: "https://www.youtube.com/embed/TFTrR-DiBHc?si=nOPrJTwY3_FUUy1X",
    },
    {
      id: Math.random(),
      image:
        "https://bluraymedia.ign.com/bluray/image/object/143/14354596/rushhour.jpg",
      rating: 4,
      name: "rush hour",
      date: "September 1998",
      categorie: "action",
      description:
        "Rush Hour is a 1998 American buddy cop action comedy film directed by Brett Ratner and written by Jim Kouf and Ross LaManna from a story by LaManna. It stars Jackie Chan and Chris Tucker as mismatched police officers who are assigned to rescue a Chinese diplomat's abducted daughter.",
      trailer: "https://www.youtube.com/embed/JMiFsFQcFLE?si=RIYK6FQw9H9JbyaX",
    },
    {
      id: Math.random(),
      image:
        "https://musicart.xboxlive.com/7/b59c5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      rating: 4,
      name: "rush hour 2",
      date: "August 2001",
      categorie: "action",
      description:
        "The story follows Chief Inspector Lee (Chan) and LAPD Detective James Carter (Tucker), who go to Hong Kong on vacation only to be thwarted by a murder case involving two U.S. customs agents after a bombing at the American embassy. Lee suspects that the crime is linked to the Triad crime lord Ricky Tan (Lone).",
      trailer: "https://www.youtube.com/embed/SCTzYY95Aw4?si=aJi31QFcoZGLb36a",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTA0Nzg5NjQ0MDBeQTJeQWpwZ15BbWU3MDE4Mzg5NDE@._V1_.jpg",
      rating: 4,
      name: "rush hour 3",
      date: "August 2003",
      categorie: "action",
      description:
        "Plot. A few years after the events of Rush Hour 2, Chinese Ambassador Solon Han, with Hong Kong Police Force Chief Inspector Lee as his bodyguard, addresses the importance of fighting the Triads at the World Criminal Court in Los Angeles, while LAPD Detective James Carter is working as a traffic cop.",
      trailer: "https://www.youtube.com/embed/FRDRWXfQyJE?si=2jIqRsKQhVLU-swP",
    },
    {
      id: Math.random(),
      image:
        "https://images.moviesanywhere.com/066de1b13307c630b808952e5b9516d7/468ef1b0-8e30-4ff1-b0d7-28668f2a6b17.jpg",
      rating: 5,
      name: "Taken 1",
      date: "February 2008",
      categorie: "action",
      description:
        "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris. A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
      trailer: "https://www.youtube.com/embed/XK9zL0ze9O4?si=hUlleR3vn5aCXlI6",
    },
    {
      id: Math.random(),
      image:
        "https://images.moviesanywhere.com/855bc21a4971a13003cdb923798227b0/be871fb6-70e9-4b20-ad9a-10e9afa4f941.jpg",
      rating: 5,
      name: "Taken 2",
      date: "October 2012",
      categorie: "action",
      description:
        "It follows retired CIA officer Bryan Mills as he takes his family to Istanbul, where he is kidnapped, along with his ex-wife, by the father of one of the men he killed while saving his daughter two years earlier. It is the sequel to the 2008 film Taken and the second installment in the Taken trilogy.",
      trailer: "https://www.youtube.com/embed/u48UrWtCn5E?si=gq4-xpgKDh1AXVAz",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BNjM5MDU3NTY0M15BMl5BanBnXkFtZTgwOTk2ODU2MzE@._V1_.jpg",
      rating: 5,
      name: "Taken 3",
      date: "january 2014",
      categorie: "action",
      description:
        "Ex-covert operative Bryan Mills (Liam Neeson) and his ex-wife, Lenore (Famke Janssen), are enjoying a reconciliation when Lenore is brutally murdered. Bryan is framed for the crime and flees, with the CIA, FBI and police all in hot pursuit.",
      trailer: "https://www.youtube.com/embed/JuU0M2xBasc?si=GEIKO297DhfB_t75",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      rating: 3,
      name: "annabelle",
      date: "October 2014",
      categorie: "horror",
      description:
        "A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists. A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.",
      trailer: "https://www.youtube.com/embed/paFgQNPGlsg?si=aryMEPllozfiGATH",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/I/A1aLY8-FIaL._AC_UF894,1000_QL80_.jpg",
      rating: 3,
      name: "The conjuring",
      date: "July 2013",
      categorie: "horror",
      description:
        "In THE CONJURING, in the early 1970s, the Perron family -- Roger (Ron Livingston), Carolyn (Lili Taylor), and their five daughters -- move into a new home in the Rhode Island countryside. Before long, they start encountering strange noises and smells, stopped clocks, slamming doors, and figures lurking in dark corners.",
      trailer: "https://www.youtube.com/embed/k10ETZ41q5o?si=qPrID2f75WGUK8jq",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTUwNDU4NjE1N15BMl5BanBnXkFtZTgwOTc0MzA5NDE@._V1_FMjpg_UX1000_.jpg",
      rating: 3,
      name: "insidious",
      date: "June 2015",
      categorie: "horror",
      description:
        "Insidious was directed by James Wan, written by Leigh Whannell, and starred Patrick Wilson, Rose Byrne and Barbara Hershey. The story centers on a couple whose son inexplicably enters a comatose state and becomes a vessel for ghosts in an astral plane.",
      trailer: "https://www.youtube.com/embed/zuZnRUcoWos?si=RX2OuH9sb5symGMx",
    },
    {
      id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/9b/Ouija_two_xxlg.jpeg",
      rating: 4,
      name: "Ouija",
      date: "2014",
      categorie: "Horror",
      description:
        "A group of friends must confront their most terrifying fears when they awaken the dark powers of an ancient spirit board. A group of friends must confront their most terrifying fears when they awaken the dark powers of an ancient spirit board.",
      trailer: "https://www.youtube.com/embed/MJIcZGEjjwo?si=ZRk3Sshm91U8SQPR",
    },
    {
      id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
      rating: 5,
      name: "Home Alone",
      date: "November 1990",
      categorie: "Comedie",
      description:
        "Home Alone, Christmas family comedy film released in 1990 about the adventures of Kevin McCallister, an eight-year-old boy, played by Macaulay Culkin, who has to fend for himself and thwart the attempts of a pair of bungling burglars trying to break into his family's house after he is inadvertently left behind",
      trailer: "https://www.youtube.com/embed/jEDaVHmw7r4?si=HQriSjMhzm9HMCHA",
    },
    {
      id: Math.random(),
      image: "https://upload.wikimedia.org/wikipedia/en/5/50/Home_Alone_2.jpg",
      rating: 5,
      name: "Home Alone 2",
      date: "November 1992",
      categorie: "Comedie",
      description:
        "After snarky youth Kevin McCallister (Macaulay Culkin) loses track of his father at the airport, he mistakenly gets on a plane headed for New York City -- while the rest of the McCallisters fly to Florida. Now alone in the Big Apple, Kevin cons his way into a room at the Plaza Hotel and begins his usual antics.",

      trailer: "https://www.youtube.com/embed/5h9VDUNtoto?si=X04wB0WJCQo1wbia",
    },
    {
      id: Math.random(),
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUS101RGBrhMi5lxtwfJ1Vv7jd9YR4_b-pWJfaakWj28d7cZ33rO4700NDU-Lq8h8Fw_7Lknml8HFYmILm7k6Z7GSc4stvQ6RZs0n5o4A",
      rating: 2,
      name: "The Dictator",
      date: "November 2012",
      categorie: "Comedie",
      description:
        "After dedicated service in the Great War, a Jewish barber (Charles Chaplin) spends years in an army hospital recovering from his wounds, unaware of the simultaneous rise of fascist dictator Adenoid Hynkel (also Chaplin) and his anti-Semitic policies. When the barber, who bears a remarkable resemblance to Hynkel, returns to his quiet neighborhood, he is stunned by the brutal changes and recklessly joins a beautiful girl (Paulette Goddard) and her neighbors in rebelling.",
      trailer: "https://www.youtube.com/embed/cYplvwBvGA4?si=4ch8wpKn8nbCMkDm",
    },
    {
      id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Free_Guy_2021_Poster.jpg/220px-Free_Guy_2021_Poster.jpg",
      rating: 5,
      name: "Free Guy",
      date: "2021",
      categorie: "comedie",
      description:
        "When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, open-world video game, he goes on to become the hero of the story and takes the responsibility of saving the world.",
      trailer: "https://www.youtube.com/embed/X2m-08cOAbc?si=_l30PVy9MURwYJw-",
    },
    {
      id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      rating: 5,
      name: "Gladiator",
      date: "July 2000 ",
      categorie: "action",
      description:
        "Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena, determined to avenge the murders of his family and the emperor. The screenplay, initially written by Franzoni, was inspired by the 1958 Daniel P. Mannix novel Those About to Die.",
      trailer: "https://www.youtube.com/embed/P5ieIbInFpg?si=jrrymBEhB9j18kY_",
    },
    {
      id: Math.random(),
      image:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/234095_Medallion_2003_1400x2100_US.jpg?itok=jSaWnC3w",
      rating: 3,
      name: "the medaillon",
      date: "August 2003 ",
      categorie: "action",
      description:
        "Synopsis Eddie (Jackie Chan) is an indomitable Hong Kong cop who, after a near fatal accident involving a mysterious medallion, is suddenly transformed into a Highbinder -- an immortal warrior with inhuman powers.",
      trailer: "https://www.youtube.com/embed/iCq4XkNrR5M?si=YojfHSvwZTtsVQh9",
    },
    {
      id: Math.random(),
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSva9maq8sAQyeV3AcECQmD3TuzMfg7ZiqPmLTd1FiiRH-QWBbr8yqhN3orK528vdafsgMvjYBGLLcHWIj_FbFhkdrkFtv_ClDyK20_0g",
      rating: 4,
      name: "The Karate kid",
      date: "June 2010 ",
      categorie: "action",
      description:
        "Dre finds a friend in Mr. Han (Jackie Chan), a maintenance man who is also a martial-arts master. Mr. Han teaches Dre all about kung fu in the hope that Dre will be able to face down Cheng and perhaps win the heart of a pretty classmate named Mei Ying.",

      trailer: "https://www.youtube.com/embed/XY8amUImEu0?si=nNzTidcMmcyd93Db",
    },
    {
      id: Math.random(),
      image:
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQYQZvrX1XX0gBFCSyQ0CN0O1JEMy-yEL4gh57lIgFIPsQwjtl7lZjzmwvZgvipyjmL",
      rating: 3,
      name: "jumanji",
      date: "December 2019 ",
      categorie: "comedie",
      description:
        "The film is the first installment in the Jumanji film series and stars Robin Williams, Kirsten Dunst, David Alan Grier, Bonnie Hunt, Jonathan Hyde, and Bebe Neuwirth. The story centers on a supernatural board game that releases jungle–based hazards on its players with every turn they take.",
      trailer: "https://www.youtube.com/embed/2QKg5SZ_35I?si=tuFH6EFn3BVl0XNi",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      rating: 5,
      name: "Kingdom of the Planet of the Apes",
      date: "July 2024 ",
      categorie: "SF",
      description:
        "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike. The new Apes movie is set many years after the conclusion of 2017's War for the Planet of the Apes.",
      trailer: "https://www.youtube.com/embed/XtFI7SNtVpY?si=sHxsIPqUEs0dn1Y-",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
      rating: 4,
      name: "The Lion king",
      date: "July 2019 ",
      categorie: "kids",
      description:
        "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery. After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
      trailer: "https://www.youtube.com/embed/o17MF9vnabg?si=xpl7yMAU96v9dBTa",
    },
    {
      id: Math.random(),
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4gIVoEE2ysIVA9E9lfMrm2QLsAnGaFk7-Msomhz3lkZilxIqkg3MpPYRA74Q4uu3CoEsSv5LZnQuysYhPCtuTA-Ri5osZdHhxnZy1rw",
      rating: 5,
      name: "Bad Boys ",
      date: "June 2024 ",
      categorie: "action",
      description:
        "Miami-Dade detectives Mike Lowrey (Will Smith) and Marcus Burnett (Martin Lawrence) blow a fuse when $100 million worth of heroin they recently confiscated is heisted from station headquarters. Suspecting it was an inside job, Internal Affairs gives them five days to track down the drugs before they shut down the narcotics division. Action meets farce when Marcus is compelled to masquerade as his partner in order to gain the trust of a call girl (Tea Leoni), a key witness in their investigation.",
      trailer: "https://www.youtube.com/embed/hRFY_Fesa9Q?si=rul9RBKGtkIEXOOq",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg",
      rating: 5,
      name: "Interstellar",
      date: "October 2014 ",
      categorie: "SF",
      description:
        "Set in a dystopian future where Earth is suffering from catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind. Syncopy Inc.",

      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=iWNWB7c88KL1oDhu",
    },
  ],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter((el) => el.id !== payload),
      };
    case ADD_FILM:
      return { ...state, films: [...state.films, payload] };
    case EDIT_FILM:
      return { ...state, films: state.films.map((el) => el.id) };

    default:
      return state;
  }
};

export default movieReducer;
