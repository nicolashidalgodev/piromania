const DESCRIPCION_VOCAL_GYM = [
	"Tu voz es un músculo y un instrumento. Como en cualquier disciplina deportiva o artística, los cambios reales y la resistencia no ocurren de la noche a la mañana: requieren entrenamiento constante y buena técnica.",
	"Vocal Gym es una masterclass de 90 minutos pensada como una sesión intensiva de prueba y aprendizaje de rutina. Te entregaremos un método de trabajo corporal y vocal para que entiendas cómo entrenar tu voz de manera saludable, libre de tensiones y con proyección, dándote las bases para incorporar este hábito a tu práctica continua.",
];

const EXPERIENCIAS_VOCAL_GYM = [
	{
		titulo: "Despertar y conciencia corporal",
		descripcion:
			"Aprenderás cómo preparar tu cuerpo antes de usar la voz mediante caminata consciente, masajes de descompresión y dinámicas de movimiento para liberar tensiones.",
	},
	{
		titulo: "Activación de resonadores",
		descripcion:
			"Descubrirás dónde se amplifica tu sonido y cómo usar los resonadores de tu propio cuerpo para proyectar sin forzar la garganta.",
	},
	{
		titulo: "Mecánica respiratoria y rutina vocal",
		descripcion:
			"Conocerás ejercicios clave de respiración, glissandos y modulación que podrás seguir practicando en tu día a día.",
	},
	{
		titulo: "Canto colectivo y síntesis",
		descripcion:
			"Pondremos a prueba lo aprendido a través de vocalización guiada y práctica de canto en grupo en un ambiente seguro.",
	},
];

const MENSAJE_VOCAL_GYM =
	"Ya sea que quieras dedicarte al canto, la actuación, el streaming, la oratoria o simplemente cantar por gusto, esta sesión te entregará la pauta de ejercicios y la toma de conciencia física que necesitas para seguir entrenando de forma autónoma o continua.";

export const CONTENT = {
	plataforma: {
		nombre: "Piromanía — Talleres Artísticos",
		lema: "Enciende tu fuego creador",
	},
	encabezado: {
		marca: {
			nombre: "PIROMANÍA",
			subtitulo: "Talleres Artísticos",
		},
		lema: "Enciende tu fuego creador",
		navegacion: [
			{ etiqueta: "Inicio", destino: "#inicio" },
			{ etiqueta: "Talleres", destino: "#talleres" },
			{ etiqueta: "Calendario", destino: "#calendario" },
			{ etiqueta: "Sobre mí", destino: "#sobre-mi" },
			{ etiqueta: "Contacto", destino: "#contacto" },
		],
		accionPrincipal: {
			etiqueta: "Inscribirme",
			destino: "#talleres",
		},
	},
	inicio: {
		etiqueta: "Formación Arte y Escena — Santiago de Chile",
		titulo: {
			principal: "Enciende tu",
			destacado: "fuego creador",
		},
		descripcion:
			"Espacio de aprendizaje práctico e inmersivo en artes plásticas, expresión vocal y creatividad. Talleres diseñados para jóvenes y adultos que buscan explorar, entrenar o perfeccionar sus habilidades en distintas disciplinas creativas",
		acciones: [
			{ etiqueta: "Ver Talleres Disponibles", destino: "#talleres" },
			{ etiqueta: "Consultar Dudas", destino: "#contacto" },
		],
		destacados: [
			{ titulo: "Práctico", descripcion: "Aprender haciendo" },
			{ titulo: "Creativo", descripcion: "Experimentación" },
		],
		imagenPrincipal: {
			src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
			alt: "Materiales y obras en un taller artístico",
		},
		tarjetaImagen: {
			icono: "fa-magic",
			marca: "Piromanía",
			descripcion: "Arte y expresión creativa",
		},
	},
	talleres: {
		encabezado: {
			etiqueta: "Catálogo de talleres",
			titulo: "Explora, aprende y crea",
			descripcion:
				"Experiencias prácticas para descubrir nuevas herramientas artísticas, sin necesidad de experiencia previa.",
		},
		filtros: ["Todos", "Entrenamiento vocal"],
		listado: [
			{
				id: "vocal-gym-juvenil-diciembre",
				detalleId: "details-vocal-diciembre",
				presentacion: {
					titulo: "Vocal Gym: Voz y Canto",
					duracion: "90 minutos",
					inversion: "$11.000 CLP",
					descripcion:
						"Masterclass de 90 minutos para probar una rutina de trabajo corporal y vocal, y aprender a entrenar la voz de forma saludable, sin tensiones y con proyección.",
					publicoBreve: "13-17 años",
					imagen: {
						src: "/taller-vocal-jovenes.jpeg",
						alt: "Participantes en un taller de entrenamiento vocal",
					},
				},
				nombre: "Vocal Gym: Entrenamiento para Voz y Canto (Juvenil)",
				categoria: "Entrenamiento vocal",
				cupos: 15,
				descripcion: DESCRIPCION_VOCAL_GYM,
				tituloExperiencias: "¿Qué vas a experimentar?",
				experiencias: EXPERIENCIAS_VOCAL_GYM,
				aplicacion:
					"Un entrenamiento para la vida activa",
				aplicacionDescripcion: MENSAJE_VOCAL_GYM,
				detalles: {
					fechas: "Jueves 10 de diciembre (1 Sesión)",
					horario: "16:30 - 18:00 hrs",
					requisitosPrevios:
						"¡Ninguno! No necesitas experiencia previa ni conocimientos musicales.",
					queLlevar: "Ropa cómoda que te permita moverte e hidratación.",
					modalidad: "Presencial (Masterclass / Entrenamiento intensivo de 90 min).",
					lugar: "Tap Jazz center, Ricardo Matte Pérez 0145, Providencia. Santiago",
					inversion: "$11.000 CLP",
					inscripcion: {
						url: "https://www.portaldisc.com/evento/masterclasstjc2027juvenil",
						nota: "Importante: debes tener sesión en Portaldisc.com y seleccionar “Vocal Gym: entrenamiento para voz y canto | Martes | 05-01-2027 | 16:30 a 18:00 hrs”. La fecha descrita para este taller es jueves 10 de diciembre; confirma la fecha antes de inscribirte.",
					},
				},
			},
			{
				id: "vocal-gym-adulto-diciembre",
				detalleId: "details-vocal-adulto",
				presentacion: {
					titulo: "Vocal Gym: Voz y Canto",
					duracion: "90 minutos",
					inversion: "$11.000 CLP",
					descripcion:
						"Masterclass de 90 minutos para probar una rutina de trabajo corporal y vocal, y aprender a entrenar la voz de forma saludable, sin tensiones y con proyección.",
					publicoBreve: "Adulto",
					imagen: {
						src: "/taller-vocal-adultos.jpeg",
						alt: "Participantes en un taller de entrenamiento vocal",
					},
				},
				nombre: "Vocal Gym: Entrenamiento para Voz y Canto (Adulto)",
				categoria: "Entrenamiento vocal",
				cupos: 15,
				descripcion: DESCRIPCION_VOCAL_GYM,
				tituloExperiencias: "¿Qué vas a experimentar?",
				experiencias: EXPERIENCIAS_VOCAL_GYM,
				aplicacion: "Un entrenamiento para la vida activa",
				aplicacionDescripcion: MENSAJE_VOCAL_GYM,
				detalles: {
					fechas: "Miércoles 16 de diciembre (1 Sesión)",
					horario: "19:00 - 22:30 hrs",
					requisitosPrevios:
						"¡Ninguno! No necesitas experiencia previa ni conocimientos musicales.",
					queLlevar: "Ropa cómoda que te permita moverte e hidratación.",
					modalidad: "Presencial (Masterclass / Entrenamiento intensivo de 90 min).",
					lugar: "Tap Jazz center, Ricardo Matte Pérez 0145, Providencia. Santiago",
					inversion: "$11.000 CLP",
					inscripcion: {
						url: "https://www.portaldisc.com/evento/masterclasstjc2027adulto",
						nota: "Importante: debes tener sesión en Portaldisc.com y seleccionar “Vocal Gym: entrenamiento para voz y canto | Miércoles | 16-12-2026 | 19:00 a 22:30 hrs”",
					},
				},
			},
			{
				id: "vocal-gym-juvenil-enero",
				detalleId: "details-vocal-enero",
				presentacion: {
					titulo: "Vocal Gym: Voz y Canto (Juvenil)",
					duracion: "90 minutos",
					inversion: "$11.000 CLP",
					descripcion:
						"Masterclass de 90 minutos para probar una rutina de trabajo corporal y vocal, y aprender a entrenar la voz de forma saludable, sin tensiones y con proyección.",
					publicoBreve: "13-17 años",
					imagen: {
						src: "/taller-vocal.jpg",
						alt: "Participantes en un taller de entrenamiento vocal",
					},
				},
				nombre: "Vocal Gym: Entrenamiento para Voz y Canto (Juvenil)",
				categoria: "Entrenamiento vocal",
				cupos: 15,
				descripcion: DESCRIPCION_VOCAL_GYM,
				tituloExperiencias: "¿Qué vas a experimentar?",
				experiencias: EXPERIENCIAS_VOCAL_GYM,
				aplicacion: "Un entrenamiento para la vida activa",
				aplicacionDescripcion: MENSAJE_VOCAL_GYM,
				detalles: {
					fechas: "Martes 5 de Enero (1 Sesión)",
					horario: "16:30 - 18:00 hrs",
					requisitosPrevios:
						"¡Ninguno! No necesitas experiencia previa ni conocimientos musicales.",
					queLlevar: "Ropa cómoda que te permita moverte e hidratación.",
					modalidad: "Presencial (Masterclass / Entrenamiento intensivo de 90 min).",
					lugar: "Tap Jazz center, Ricardo Matte Pérez 0145, Providencia. Santiago",
					inversion: "$11.000 CLP",
					inscripcion: {
						url: "https://www.portaldisc.com/evento/masterclasstjc2027juvenil",
						nota: "Importante: debes tener sesión en Portaldisc.com y seleccionar “Vocal Gym: entrenamiento para voz y canto | Martes | 05-01-2027 | 16:30 a 18:00 hrs”",
					},
				},
			},
		],
	},
	sobreMi: {
		etiqueta: "Sobre mí",
		nombre: "Natalie Carrasco (NatSiso)",
		rol: "Artista visual, música y facilitadora",
		imagen: {
			src: "/sobre-mi.jpg",
			alt: "Natalie Carrasco",
		},
		biografia: [
			"Soy Natalie Carrasco (NatSiso), artista visual y música con más de una década de trayectoria en la escena independiente. Mi trabajo se despliega en la frontera entre el lenguaje del volumen, la materialidad y la exploración de la voz como un cuerpo vivo en escena.",
			"Como facilitadora, desarrollo espacios de aprendizaje, laboratorios y entrenamientos que se alejan de los dogmas académicos y la teoría tradicional. Mi metodología se centra en el hacer: proponer un aprendizaje directo, práctico y vivencial donde la técnica se adquiere a través de la experimentación, el oficio y la práctica real, entregando herramientas aplicables para que jóvenes y adultos desarrollen una autonomía creativa genuina.",
		],
	},
	calendario: {
		etiqueta: "Próximos inicios",
		titulo: "Calendario de talleres",
		descripcion:
			"Revisa las fechas de los próximos talleres y encuentra la experiencia creativa para ti.",
		nota:
			"El taller de Vocal Gym tiene un valor de $11.000 CLP por sesión. Consulta los detalles antes de inscribirte.",
		eventos: [ 
			{
				tallerId: "vocal-gym-juvenil-diciembre",
				titulo: "Vocal Gym: Voz y Canto (Juvenil, 13-17 años)",
				resumen: "Jueves · 16:30-18:00 hrs",
				mes: "DIC",
				dias: "10",
				color: "sage",
			},
			{
				tallerId: "vocal-gym-adulto-diciembre",
				titulo: "Vocal Gym: Voz y Canto (Adulto)",
				resumen: "Miércoles · 19:00-22:30 hrs",
				mes: "DIC",
				dias: "16",
				color: "lavender",
			},
			{
				tallerId: "vocal-gym-juvenil-enero",
				titulo: "Vocal Gym: Voz y Canto (Juvenil, 13-17 años)",
				resumen: "Martes · 16:30-18:00 hrs",
				mes: "ENE 2027",
				dias: "05",
				color: "yellow",
			},
		],
	},
	resultados: {
		etiqueta: "Resultados Reales",
		titulo: "Trabajo de Nuestros Alumnos",
		descripcion:
			"Proyectos finalizados durante nuestros talleres sin necesidad de experiencia previa.",
		imagenes: [
			{
				src: "/galeria/galeria-01.jpeg",
				alt: "Alumnas trabajando en la estructura de papel maché",
				etiqueta: "Construcción en papel maché",
			},
			{
				src: "/galeria/galeria-02.jpeg",
				alt: "Alumnas dando forma a la cabeza de un canguro en papel maché",
				etiqueta: "Estructura del canguro",
			},
			{
				src: "/galeria/galeria-03.jpeg",
				alt: "Manos cubiertas de pasta dando forma al rostro de la escultura",
				etiqueta: "Tallado del rostro",
			},
			{
				src: "/galeria/galeria-04.jpeg",
				alt: "Escultura de canguro en proceso sobre una mesa de trabajo",
				etiqueta: "Base de la escultura",
			},
			{
				src: "/galeria/galeria-05.jpeg",
				alt: "Alumnos ensamblando la escultura sobre un taburete azul",
				etiqueta: "Montaje de la escultura",
			},
			{
				src: "/galeria/galeria-06.jpeg",
				alt: "Alumnos mezclando materiales para preparar el engrudo",
				etiqueta: "Preparación del engrudo",
			},
			{
				src: "/galeria/galeria-07.jpeg",
				alt: "Alumna pintando el rostro amarillo de la escultura",
				etiqueta: "Pintura del rostro",
			},
			{
				src: "/galeria/galeria-08.jpeg",
				alt: "Alumnos pintando y dando acabado a la escultura de canguro",
				etiqueta: "Acabado y pintura",
			},
			{
				src: "/galeria/galeria-09.jpeg",
				alt: "Afiche del taller Operación Juegos Diana con registro fotográfico",
				etiqueta: "Proyecto Operación Juegos Diana",
			},
		],
	},
	contacto: {
		etiqueta: "Contacto",
		titulo: "¿Tienes Dudas o Consultas?",
		subtitulo:
			"Escríbenos para recibir el programa detallado de cada taller, verificar disponibilidad de cupos o consultar por clases personalizadas.",
		ubicacion: "Santiago, Chile",
		correo: "natcarrasco@ug.uchile.cl",
		instagram: {
			usuario: "@piromania.cl",
			url: "https://www.instagram.com/piromania.cl/",
		},
		formulario: {
			titulo: "Escríbenos",
			campoNombre: {
				id: "contactName",
				name: "name",
				etiqueta: "Nombre completo",
				placeholder: "Tu nombre",
			},
			campoCorreo: {
				id: "contactEmail",
				name: "email",
				etiqueta: "Correo electrónico",
				placeholder: "tu@email.com",
			},
			campoTaller: {
				id: "workshopInterest",
				name: "workshop",
				etiqueta: "Taller de interés",
				placeholder: "Selecciona un taller",
				opciones: [
					"Operación Juegos Diana",
					"Vocal Gym Juvenil",
					"Vocal Gym Adulto",
					"Clases personalizadas",
				],
			},
			campoMensaje: {
				id: "message",
				name: "message",
				etiqueta: "Mensaje / consulta",
				placeholder: "Cuéntanos en qué podemos ayudarte...",
			},
			botonEnviar: "Enviar mensaje",
		},
	},
	pieDePagina: {
		derechos: "Piromanía. Todos los derechos reservados.",
		descripcion:
			"Espacio de Formación Artística y Expresión Creativa en Santiago de Chile",
	},
} as const;
