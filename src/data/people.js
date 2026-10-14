const commonsPortrait = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=640`

export const PEOPLE = [
  {
    id: 1,
    name: 'Sócrates',
    image: commonsPortrait('Socrates Louvre.jpg'),
    profession: 'Filósofo',
    area: 'Filosofía',
    nationality: 'Ateniense',
    lifespan: '470–399 a. C.',
    biography:
      'Filósofo ateniense considerado una figura fundacional del pensamiento occidental. Enseñaba mediante preguntas y diálogo, método que hoy se conoce como diálogo socrático.',
    contribution: 'El método socrático y la reflexión ética.',
  },
  {
    id: 2,
    name: 'Platón',
    image: commonsPortrait('Plato Silanion Musei Capitolini MC1377.jpg'),
    profession: 'Filósofo y escritor',
    area: 'Filosofía',
    nationality: 'Ateniense',
    lifespan: '428–348 a. C.',
    biography:
      'Discípulo de Sócrates y maestro de Aristóteles. Fundó la Academia de Atenas y desarrolló ideas influyentes sobre la justicia, el conocimiento y la política.',
    contribution: 'La Academia y la teoría de las Ideas.',
  },
  {
    id: 3,
    name: 'Aristóteles',
    image: commonsPortrait('Aristotle Altemps Inv8575.jpg'),
    profession: 'Filósofo y científico',
    area: 'Filosofía',
    nationality: 'Griego',
    lifespan: '384–322 a. C.',
    biography:
      'Filósofo griego cuyo trabajo abarcó la lógica, la biología, la ética, la política y la física. Fue tutor de Alejandro Magno.',
    contribution: 'La lógica formal y la organización de múltiples disciplinas.',
  },
  {
    id: 4,
    name: 'Confucio',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Confucius_Portrait%2C_Kongzi_%28Confucius%29_Family_Mansion%2C_Qufu_%2813044335945%29.jpg/960px-Confucius_Portrait%2C_Kongzi_%28Confucius%29_Family_Mansion%2C_Qufu_%2813044335945%29.jpg',
    profession: 'Filósofo y maestro',
    area: 'Filosofía',
    nationality: 'Chino',
    lifespan: '551–479 a. C.',
    biography:
      'Pensador y educador chino cuyas enseñanzas sobre la virtud, la familia y el buen gobierno dieron origen al confucianismo.',
    contribution: 'Las Analectas y una tradición ética de gran influencia.',
  },
  {
    id: 5,
    name: 'Hipatia de Alejandría',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Hypatia_%28Charles_William_Mitchell%29.jpg/960px-Hypatia_%28Charles_William_Mitchell%29.jpg',
    profession: 'Matemática y filósofa',
    area: 'Ciencia',
    nationality: 'Egipcia',
    lifespan: 'c. 355–415',
    biography:
      'Matemática, astrónoma y filósofa que enseñó en Alejandría. Fue una de las intelectuales más destacadas de la Antigüedad tardía.',
    contribution: 'Enseñanza y comentarios sobre matemáticas y astronomía.',
  },
  {
    id: 6,
    name: 'Ibn Sina (Avicena)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Avicenna.jpg',
    profession: 'Médico y filósofo',
    area: 'Ciencia',
    nationality: 'Persa',
    lifespan: 'c. 980–1037',
    biography:
      'Polímata persa que escribió sobre medicina, filosofía y ciencias naturales. Sus obras se estudiaron durante siglos en Oriente y Europa.',
    contribution: 'El Canon de medicina, obra de referencia médica durante siglos.',
  },
  {
    id: 7,
    name: 'Leonardo da Vinci',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/960px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg',
    profession: 'Artista e inventor',
    area: 'Arte',
    nationality: 'Italiano',
    lifespan: '1452–1519',
    biography:
      'Artista, ingeniero e investigador del Renacimiento. Sus cuadernos reúnen observaciones y diseños sobre anatomía, mecánica y naturaleza.',
    contribution: 'La Mona Lisa, La última cena y sus estudios científicos.',
  },
  {
    id: 8,
    name: 'William Shakespeare',
    image: commonsPortrait('Shakespeare.jpg'),
    profession: 'Dramaturgo y poeta',
    area: 'Literatura',
    nationality: 'Inglés',
    lifespan: '1564–1616',
    biography:
      'Dramaturgo y poeta inglés cuyas obras exploran la ambición, el poder, el amor y la condición humana. Es una de las voces centrales de la literatura universal.',
    contribution: 'Hamlet, Macbeth, Romeo y Julieta y sus sonetos.',
  },
  {
    id: 9,
    name: 'Isaac Newton',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Kneller_Isaac_Newton.jpg/960px-Kneller_Isaac_Newton.jpg',
    profession: 'Físico y matemático',
    area: 'Ciencia',
    nationality: 'Inglés',
    lifespan: '1643–1727',
    biography:
      'Físico y matemático que formuló las leyes del movimiento y la gravitación universal, transformando la comprensión científica del mundo.',
    contribution: 'Los Principia y aportes fundamentales al cálculo.',
  },
  {
    id: 10,
    name: 'Ada Lovelace',
    image: commonsPortrait('Ada Lovelace portrait.jpg'),
    profession: 'Matemática',
    area: 'Ciencia',
    nationality: 'Británica',
    lifespan: '1815–1852',
    biography:
      'Matemática inglesa que estudió la máquina analítica de Charles Babbage. Sus notas describieron cómo una máquina podía procesar instrucciones generales.',
    contribution: 'Uno de los primeros algoritmos concebidos para una máquina.',
  },
  {
    id: 11,
    name: 'Charles Darwin',
    image: commonsPortrait('Charles Darwin by Julia Margaret Cameron, c. 1868.jpg'),
    profession: 'Naturalista',
    area: 'Ciencia',
    nationality: 'Inglés',
    lifespan: '1809–1882',
    biography:
      'Naturalista inglés cuyo trabajo sobre la diversidad de los seres vivos sentó las bases de la biología evolutiva moderna.',
    contribution: 'La teoría de la evolución por selección natural.',
  },
  {
    id: 12,
    name: 'Marie Curie',
    image: commonsPortrait('Marie Curie c1920.jpg'),
    profession: 'Física y química',
    area: 'Ciencia',
    nationality: 'Polaca y francesa',
    lifespan: '1867–1934',
    biography:
      'Científica pionera en el estudio de la radiactividad. Fue la primera mujer en recibir un Premio Nobel y la primera persona en obtenerlo en dos disciplinas científicas.',
    contribution: 'Investigaciones sobre el polonio, el radio y la radiactividad.',
  },
  {
    id: 13,
    name: 'Albert Einstein',
    image: commonsPortrait('Albert Einstein Head.jpg'),
    profession: 'Físico teórico',
    area: 'Ciencia',
    nationality: 'Alemán y suizo',
    lifespan: '1879–1955',
    biography:
      'Físico teórico que revolucionó la comprensión del espacio, el tiempo y la gravedad. Recibió el Premio Nobel de Física en 1921.',
    contribution: 'La teoría de la relatividad y la explicación del efecto fotoeléctrico.',
  },
  {
    id: 14,
    name: 'Frida Kahlo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Frida_Kahlo%2C_by_Guillermo_Kahlo_2.jpg',
    profession: 'Pintora',
    area: 'Arte',
    nationality: 'Mexicana',
    lifespan: '1907–1954',
    biography:
      'Pintora mexicana conocida por sus autorretratos, en los que exploró la identidad, el cuerpo y la experiencia personal con un lenguaje visual propio.',
    contribution: 'Una obra autobiográfica emblemática del arte mexicano.',
  },
  {
    id: 15,
    name: 'Mahatma Gandhi',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/960px-Mahatma-Gandhi%2C_studio%2C_1931.jpg',
    profession: 'Abogado y líder social',
    area: 'Pensamiento social',
    nationality: 'Indio',
    lifespan: '1869–1948',
    biography:
      'Abogado y dirigente del movimiento de independencia de la India. Promovió la resistencia no violenta y la desobediencia civil.',
    contribution: 'La defensa de la no violencia como herramienta de cambio social.',
  },
  {
    id: 16,
    name: 'Hannah Arendt',
    image: commonsPortrait('Hannah Arendt 1975.jpg'),
    profession: 'Filósofa y teórica política',
    area: 'Pensamiento social',
    nationality: 'Alemana y estadounidense',
    lifespan: '1906–1975',
    biography:
      'Pensadora política que analizó el totalitarismo, la libertad y la responsabilidad individual en la vida pública.',
    contribution: 'Los orígenes del totalitarismo y La condición humana.',
  },
  {
    id: 17,
    name: 'Malala Yousafzai',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Malala_Yousafzai_2023_portrait_2x3.jpg/960px-Malala_Yousafzai_2023_portrait_2x3.jpg',
    profession: 'Activista y escritora',
    area: 'Pensamiento social',
    nationality: 'Pakistaní',
    lifespan: '1997–actualidad',
    isAlive: true,
    biography:
      'Activista pakistaní por el derecho de las niñas a la educación. Recibió el Premio Nobel de la Paz en 2014.',
    contribution: 'La defensa global del acceso de las niñas a la educación.',
  },
  {
    id: 18,
    name: 'Greta Thunberg',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Greta_Thunberg_in_Stockholm.jpg/960px-Greta_Thunberg_in_Stockholm.jpg',
    profession: 'Activista climática',
    area: 'Pensamiento social',
    nationality: 'Sueca',
    lifespan: '2003–actualidad',
    isAlive: true,
    biography:
      'Activista sueca que impulsa la acción frente al cambio climático y ha movilizado a jóvenes de distintos países.',
    contribution: 'El movimiento juvenil Fridays for Future.',
  },
]
