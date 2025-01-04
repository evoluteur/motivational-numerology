/*
  Motivational-Numerology
  (c) 2025 Sally Faubion & Olivier Giulieri
  http://www.sallysnumbers.com
*/

const meaning = {
  master: "Número Maestro",

  destiny: {
    title: "Destino",
    description:
      "Este es el número más influyente en relación con tus motivaciones personales, lo que te gusta y a quién te gusta tener a tu alrededor, y las carreras hacia las que tendrías más probabilidades de aspirar.",
    func: "Mes + Día + Año de nacimiento",
    1: "Este es el camino del arriesgado, del emprendedor, del pionero totalmente independiente.",
    2: "Este es el camino del ama de casa, del jugador de equipo, del cuidador y del coleccionista.",
    3: 'Este es el camino del aventurero, del creativo, del proverbial "Peter Pan" y/o del disciplinado científico "Dapper Dan/Danielle".',
    4: "Este es el camino del trabajador duro, del empleado/emprendedor dedicado y honesto, y del amigo amable y leal.",
    5: "Este es el camino del luchador por la libertad, del promotor y del elegante viajero socialmente hábil.",
    6: "Este es el camino del buen ciudadano, del paciente maestro, del campeón de la justicia y la equidad, y del padre cósmico de todos.",
    7: "Este es el camino del erudito, del perfeccionista, del genio y del guardián de secretos.",
    8: "Este es el camino de la matriarca/patriarca, del juez, del productor/director, del orquestador y del acto de clase.",
    9: 'Este es el camino del "viejo alma" aristocrática y gentil, y del humanitario universal.',
    11: "Este es el camino del asesor/consejero intuitivo, del pacificador y de la figura pública iluminada.",
    22: "Este es el camino del visionario iluminado, prudente, organizado, determinado e inspirador.",
  },

  personality: {
    title: "Personalidad",
    description: "Este número describe tu yo detrás de escena o privado.",
    func: "Día de nacimiento",
    1: "Eres dinámico, de voluntad fuerte y un líder natural, y tu enfoque decidido sienta las bases para tu éxito.",
    2: "Eres un pacificador, amoroso, cuidadoso y amable, e indispensable como amigo, pareja, empleado o jefe.",
    3: "Eres increíblemente creativo, imaginativo y entretenido, y un anfitrión o anfitriona superlativo.",
    4: "Eres dedicado, detallista e incansable trabajador, y tu palabra es tan valiosa como el oro.",
    5: "Tu naturaleza inteligente, entusiasta y afable inspira y motiva a todos los que te conocen.",
    6: "Eres responsable, orientado hacia las personas y amante de la belleza, la naturaleza y el hogar.",
    7: "Eres analítico, orientado a la investigación y tu búsqueda de conocimiento es vasta e insaciable.",
    8: "Eres ambicioso, organizado, un operador de calidad y naciste para ser un líder con inclinación por el protocolo y la justicia.",
    9: "Eres talentoso en múltiples áreas, creativo y competente, y estás en tu verdadero carácter cuando estás al servicio de los demás.",
    10: "Eres independiente, considerado y responsable, con una naturaleza de asumir el control; y tienes una actitud optimista que encuentra lo positivo en cualquier situación.",
    11: 'Eres sensible, inteligente, original, inspirador, un buen oyente y asumes naturalmente el papel de "hombros fuertes" para muchos.',
    12: "Eres encantador, afable y creativo, y tu determinación y previsión te ayudan a manifestar tus metas.",
    13: "Eres perspicaz, independiente, práctico y directo, y tu dedicación, tenacidad y resistencia ante cualquier concepto, circunstancia o emprendimiento son extraordinarios.",
    14: "Eres un almacén de energía con una mente infalible que constantemente genera nuevas ideas y conceptos creativos y prácticos.",
    15: "Tu mente independiente, creativa, artística/científica anhela investigar y analizar una amplia gama de temas y defender la equidad y la justicia.",
    16: "Tu mente intelectual y analítica de manera única requiere períodos de tiempo a solas para ordenar tu sed interminable de conocimiento y trascender los límites aceptados en esa búsqueda.",
    17: "Eres inteligente, ambicioso, valiente, posees suficiente energía y vitalidad para dirigir un país, ¡y eres el paradigma de la elegancia!",
    18: "Eres una fuerza polifacética de sabiduría, fuerza, coraje y compasión de amplio alcance, y muestras lo mejor de ti cuando ayudas a quienes lo necesitan.",
    19: "Tu naturaleza aventurera te hace anhelar variedad y cambio, pero cuando te inspiras, también puedes ser tenaz, dedicado y honorable como empleado, jefe, pareja y amigo.",
    20: "Tu naturaleza cálida, servicial y prudente es apreciada en cualquier entorno laboral y tendrás muchos amigos a lo largo de tu vida.",
    21: "Eres de buen carácter, optimista, inspirador y generoso. Te sientes atraído/a por todo lo que es hermoso, de calidad y entretenido, y tu propia creatividad puede ponerte en el centro de atención.",
    22: "Posees una disciplina extraordinaria, energía, lógica y sensibilidad, y tienes la mente de un visionario magistral, iluminado y emprendedor.",
    23: "Posees un espíritu amoroso, divertido y orientado a la libertad, y tu mente rápida, originalidad e intelecto generan constantemente ideas y planes ingeniosos y únicos.",
    24: 'Eres encantador, sociable, ingenioso y más amante que luchador. Tu naturaleza consciente y generosa tiende a esforzarse siempre "un paso más", y eres un amigo y pareja honorable.',
    25: "Eres ingenioso y sabio, y te preguntas sobre todo. Tu reservorio de sabiduría innata y tu naturaleza altamente compasiva y generosa te llevan a tener un sentido de responsabilidad hacia la humanidad en general.",
    26: 'Tu personalidad es como la de un general de cinco estrellas: firme y en comando, con afición por el protocolo. Tu "sexto sentido" te permite intuir rápidamente lo correcto y establecer un ejemplo ejemplar para los demás.',
    27: 'Como el viejo Rey Cole, eres un "viejo alma" y posees un vasto conocimiento innato y una extraordinaria perspicacia. Los viajes y el cambio son esenciales para tu bienestar.',
    28: "Eres encantador, independiente, un diplomático nato, y tu carácter es el de un logrador y líder. Tus ideales y principios elevados te permiten alcanzar tus metas.",
    29: 'Tu naturaleza suave y sensible se ve complementada por una combinación de energía y carisma que atrae a las personas hacia ti como un imán. Posees un "sexto sentido" que te permite ayudar a muchos que buscan tus "hombros fuertes".',
    30: "Eres inteligente, creativo, amante de la diversión y bendecido con un gran sentido del humor, y tienes un talento excepcional cuando te involucras en cualquier esfuerzo creativo. Tu naturaleza socialmente hábil te permite destacarte entre muchos.",
    31: "Eres creativo, innovador y posees una gran cantidad de conocimientos. Consciente, confiable y puntual, también eres una criatura de hábitos y puedes ser un compañero y amigo devoto.",
  },

  attitude: {
    title: "Actitud",
    description:
      "Este número es más poderoso en los primeros 30-35 años de tu vida y representa cómo y por qué reaccionas a las circunstancias en tu juventud.",
    func: "Mes + Día de nacimiento",
    1: "Naces con una voluntad fuerte y una naturaleza independiente. Prefieres tomar tus propias decisiones y eres terco/a cuando te empujan en una dirección diferente.",
    2: "Naces para ser un/a niño/a y joven dulce, gentil, amable y cuidadoso/a. Te encanta nutrir y ser nutrido/a, y eres perceptivo/a y sensible.",
    3: "Naces algo tímido/a, pero una vez que aprendes a hablar, puedes convertirte en un/a animador/a natural, aventurero/a y cautivador/a.",
    4: "Naces con un temperamento sensible y terco, pero puedes ser muy dulce y cumplidor/a cuando recibes elogios y estímulo.",
    5: "Naces con una energía desbordante. Necesitas estimulación mental y física constante y tu temperamento se exalta cuando tienes impaciencia.",
    6: "Naces para ser responsable, consciente, considerado/a, amable y cuidadoso/a con todos, especialmente con tus padres, hermanos, amigos y con todo lo relacionado con la naturaleza.",
    7: "Naces con una mente brillante que necesita tiempo a solas para satisfacer tu búsqueda de conocimiento y tus amplios intereses e intrigas.",
    8: 'Naces para ser ejemplar en todo lo que haces; esto proviene de tu necesidad de sentirte en control. Eres el "estudiante de sobresaliente" cuando te animan.',
    9: "Naces con una sensibilidad más propia de un adulto desde muy temprana edad. Los elogios y el estímulo de aquellos que te rodean alimentan tus logros.",
    11: "Naces súper sensible; altamente intuitivo/a, de elevados pensamientos y amante de la música. Eres dulce, gentil y cerebral cuando te inspiras, eres material de estrella.",
    22: "Naces con un carácter terco, pero con estímulo puedes ser una persona muy decidida, emprendedora, inspirada e ingeniosa.",
  },

  character: {
    title: "Carácter",
    description:
      "Este número representa principalmente tus cualidades públicas y sociales, pero también exhibirías muchas de las mismas cualidades en tus relaciones personales.",
    func: "Letras en el nombre",
    1: "Poseer una mente original e innovadora, con un enfoque firme en tus metas, te califica como líder.",
    2: "Al ser naturalmente diplomático/a, de buen carácter y un pacificador, tu persona pública es como la de un embajador para las personas.",
    3: "Tus habilidades optimistas, entusiastas y creativas te brindan la capacidad de involucrar, inspirar y entretener a otros en cualquier campo laboral que elijas.",
    4: "Tu persona pública consciente, organizada, sistemática y confiable te convierte en una trabajadora buscada o en presidenta del consejo.",
    5: "Tu naturaleza encantadora, elocuente, flexible y consciente del estilo te convierte en una persona que marca tendencias y que puede involucrar e inspirar a muchos cuando te enfocas en una misión.",
    6: 'Como humanitario/a de nacimiento, orientado/a a la comunidad y como padre/madre/maestro/humano excepcional que siempre "da un paso más", eres un líder ejemplar en comités o causas.',
    7: "Como genio filosóficamente vanguardista en busca de conocimiento, no buscas el centro de atención, pero eres un/a profesor/a y especialista profesional superlativo/a.",
    8: "Tu persona ejemplar, que comanda a los maestros, juez/jurado, productor/director, posee un sexto sentido que te permite distinguir fácilmente lo correcto de lo incorrecto en cualquier cosa.",
    9: 'Como sabio/a de nacimiento, aristocrático/a y humanitario/a socialmente agradable, te sientes atraído/a por la comunidad que puede beneficiarse más de tu misión de "servidor desinteresado".',
    11: "Como consejero/a empático/a, iluminado/a y comprensivo/a o líder comunitario, perteneces al centro de atención; el 11 está asociado con la fama e iluminación.",
    22: "Como constructor/a de imperios de elevados pensamientos y organizador/a orientado/a espiritualmente, eres mejor adecuado/a para ayudar a causas públicas y empresas que aprecien tu estilo dedicado y directo.",
  },

  soul: {
    title: "Anhelo del Alma",
    description:
      "Esta influencia presenta una visión de tu ser intuitivo y lleno de alma.",
    func: "Vocales en el nombre",
    1: "El Anhelo de tu Alma es ser innovador, creativo y liderar a las masas hacia un plano superior de conciencia y comprensión que genere compasión por todos.",
    2: "El Anhelo de tu Alma es lograr la paz, la armonía y la delicadeza para fomentar cualidades de nutrición y amor más profundas en aquellos que conoces y confortarlos.",
    3: "El Anhelo de tu Alma es llevar ALEGRÍA, entusiasmo, pasión y despertar la imaginación de otros con creatividad y conceptos cálidos y conmovedores.",
    4: "El Anhelo de tu Alma es brindar honestidad, confiabilidad, practicidad y determinación para ayudar a otros y a ti mismo a lograr resultados inspiradores e iluminadores.",
    5: "El Anhelo de tu Alma es utilizar tu energía desbordante, mentalidad abierta y atributos mentales progresistas para contribuir con ideas elevadas para la humanidad.",
    6: "El Anhelo de tu Alma es ser responsable, consciente, cariñoso y amable con todos, y enseñar, aconsejar y reconfortar para mantener esas cualidades en ti mismo.",
    7: "El Anhelo de tu Alma es utilizar tu naturaleza analítica, orientada a la investigación y cuestionadora para descubrir o revelar algo significativo que ayude a muchos, en lugar de unos pocos.",
    8: "El Anhelo de tu Alma es brindar calidad, consistencia e inspiración a los demás y ejercer tu destreza natural y calidad en todo lo que toques.",
    9: "El Anhelo de tu Alma es utilizar tus cualidades aristocráticas, gentiles y humanas con consistencia, lo cual ayudará a establecer el escenario para que otros lo imiten.",
    11: "El Anhelo de tu Alma es llevar paz, armonía, belleza y honorabilidad como ejemplos de tus cualidades espirituales más elevadas para que todos las aprecien y, con suerte, las imiten.",
    22: 'El Anhelo de tu Alma es el de un "Constructor Maestro", alguien cuyo deseo espiritual profundo es ayudar y servir a la humanidad y a la Tierra con elevación y humanitarismo.',
  },

  agenda: {
    title: "Agenda Oculta",
    description: "Esta vibración revela tus deseos innatos (ocultos).",
    func: "Consonantes en el nombre",
    1: "Esta agenda incita un deseo innato de ser independiente, liderar, innovar y crear conceptos y cosas originales y únicos.",
    2: "Esta agenda despierta el deseo innato de vivir en paz y armonía, fomentando una naturaleza no agresiva, cooperativa y afable para todos.",
    3: "Esta agenda inspira el deseo innato de ser más creativo, entretenido y viajar por el mundo, brindando mayor placer y alegría a todos los que se relacionan contigo y tu persona edificante.",
    4: "Esta agenda implica lógica, organización y perseverancia para manifestar las necesidades innatas, los deseos y la tranquilidad mental que albergas y mantienes.",
    5: "Esta agenda inspira un deseo innato de libertad por encima de todo, junto con adquirir la capacidad de viajar y vivir sin restricciones tanto como sea posible.",
    6: "Esta agenda tiene un fuerte enfoque humanitario innato: ayudar y cuidar todas las cosas de la Tierra, humanos, animales y la hermosa Tierra misma.",
    7: "Esta agenda provoca una sed innata de adquirir conocimientos relacionados con las ciencias (esotéricas u otras), filosofías, artes y espiritualidad.",
    8: "Esta agenda expresa un deseo innato de poder, reconocimiento y acumulación de grandes cantidades de dinero, o de convertirse en un maestro iluminado de las masas.",
    9: "Esta agenda afecta un deseo innato de obtener lo mejor de todo, desde ropa y automóviles hasta entretenimiento, o una necesidad desproporcionada de vivir una vida totalmente humanitaria sin pensar en uno mismo.",
    11: "Esta agenda incita una necesidad innata de ministrar, aconsejar o participar en las artes de la curación de una manera que ayude a muchos, o de ser reconocido por tus servicios humanitarios.",
    22: "Esta agenda inspira un deseo innato de hacer algo grandioso por la humanidad. Este Número Maestro te brinda la capacidad de escalar las montañas más altas o inventar un producto o filosofía ejemplar.",
  },

  purpose: {
    title: "Propósito Divino",
    description:
      "Este es el número de vibración de tu propósito divino en tu despedida de actuación. Es lo que tu Ser Alma ha elegido lograr en los últimos años de tu vida.",
    func: "Destino + Carácter",
    1: "Tu Propósito Divino es dejar un legado de algo que pionerizaste: un concepto, un producto, una fundación.",
    2: "Tu Propósito Divino es llevar paz, consuelo y armonía a tus semejantes humanos.",
    3: "Tu Propósito Divino es utilizar tus talentos creativos e imaginativos para producir un producto, una idea, un libro, una película u otra forma de expresión artística.",
    4: "Tu Propósito Divino es construir una base sólida que ayude a las personas y tenga un enfoque humanitario.",
    5: "Tu Propósito Divino es ayudar a efectuar cambios progresivos que mejoren la vida de las generaciones futuras.",
    6: "Tu Propósito Divino es enseñar, instigar y ayudar a causas humanitarias, cuidar del hogar y la familia, y ser socialmente responsable.",
    7: "Tu Propósito Divino es transmitir el vasto conocimiento que has adquirido en una ciencia, un arte, una filosofía o una religión a través de un esfuerzo creativo.",
    8: "Tu Propósito Divino es liderar, dirigir, iniciar e impulsar como líder o ejecutivo, y ayudar a los menos afortunados a través de la filantropía.",
    9: "Tu Propósito Divino es ser un humanitario universal: un buen padre, un buen compañero y un buen ciudadano; un filántropo, un ministro, un político; trabajar para el mejoramiento de la humanidad.",
    11: "Tu Propósito Divino es ayudar a las personas en los planos espiritual, psicológico y mental. Elevar a otros con palabras de sabiduría; escuchar, aconsejar y ayudar a los demás a avanzar en su viaje de vida.",
    22: "Tu Propósito Divino es organizar y construir; mantener una empresa que ofrezca trabajo a otros y ayude a las personas a través del servicio a la comunidad y quizás en todo el mundo.",
  },
};
