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
		filtros: ["Todos", "Escultura", "Entrenamiento vocal"],
		listado: [
			{
				id: "operacion-juegos-diana",
				detalleId: "details-operacion",
				presentacion: {
					titulo: "Operación Juegos Diana",
					duracion: "2 sesiones",
					inversion: "$0 CLP",
					descripcion:
						"Una experiencia práctica e inmersiva de creación plástica y escultura en gran formato: un equipo colaborativo fabricará una réplica a escala de una icónica figura de los Juegos Diana.",
					imagen: {
						src: "/taller-diana.jpg",
						alt: "Taller de creación de los Juegos Diana",
					},
				},
				nombre:
					"OPERACION JUEGOS DIANA: Falsificación modular y escultura en papel maché",
				categoria: "Escultura",
				cupos: 10,
				descripcion: [
					"¿Te imaginas participar en un \"atraco artístico\" colaborativo? Te invitamos a una experiencia práctica e inmersiva de creación plástica y escultura en gran formato.",
					"La Misión: Un excéntrico coleccionista desea una de las icónicas figuras de los Juegos Diana y está dispuesto a pagar un alto monto por la misión. Los participantes conformarán un equipo de élite de artesanos y falsificadores con un único objetivo: fabricar una réplica exacta a escala para realizar el \"cambiazo\".",
					"Esta propuesta nace del rescate de la iconografía de nuestro barrio y su patrimonio popular a través del juego y la experimentación con técnicas accesibles, en colaboración con Escuela Meteoro.",
				],
				tituloAprendizajes: "¿Qué aprenderemos?",
				aprendizajes: [
					{
						titulo: "Construcción y volumen",
						descripcion:
							"Aprenderás nociones fundamentales de estructura y proporciones tridimensionales utilizando materiales reciclados como base.",
					},
					{
						titulo: "Dominio del papel maché",
						descripcion:
							"Exploraremos desde la técnica tradicional de cartapesta hasta la elaboración y aplicación de masilla o pasta de papel para lograr volumen fino, empates y texturas.",
					},
				],
				materialesYHerramientas: {
					titulo: "Materiales, Herramientas y Libertad Colaborativa",
					indicaciones: [
						{
							titulo: "Aporte de reciclaje",
							descripcion:
								"Para la estructura usaremos elementos de desecho (cartones, cajas, papeles, botellas y plástico). Te pediremos ayuda recolectando y trayendo materiales reciclables para armar el soporte principal.",
						},
						{
							titulo: "Tus propias herramientas",
							descripcion: "Idealmente que puedas traer tu corta cartón y tijera.",
						},
					],
				},
				detalles: {
					fechas: "Martes 10 y Viernes 13 de Noviembre",
					horario: "18:30 - 21:00 hrs",
					materiales: "Insumos y herramientas incluidos",
					modalidad: "Presencial",
					lugar: "Escuela Meteoro, Serrano 686, Santiago.",
					publico:
						"Dirigido a jóvenes y adultos (desde los 18 años en adelante / sin necesidad de experiencia previa).",
					inversion:
						"$0 CLP Proyecto financiado por el Apoyo a puntos de cultura comunitaria",
					inscripcion: {
						etiqueta: "Link de inscripción",
						url: "https://docs.google.com/forms/d/1YSTCj4w-20MuDShk1ExXzEXa8g82HX5VKeIn5T2O96Q/viewform?edit_requested=true",
						nota: "Formulario online",
					},
				},
			},
			{
				id: "vocal-gym-juvenil-diciembre",
				detalleId: "details-vocal-diciembre",
				presentacion: {
					titulo: "Vocal Gym: Voz y Canto",
					duracion: "90 minutos",
					inversion: "$11.000 CLP",
					descripcion:
						"Masterclass de 90 minutos para probar una rutina de trabajo corporal y vocal, y aprender a entrenar la voz de forma saludable, sin tensiones y con proyección.",
					publicoBreve: "13–17 años",
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
						src: "/taller-vocal.jpg",
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
					horario: "19:00 - 20:30 hrs",
					requisitosPrevios:
						"¡Ninguno! No necesitas experiencia previa ni conocimientos musicales.",
					queLlevar: "Ropa cómoda que te permita moverte e hidratación.",
					modalidad: "Presencial (Masterclass / Entrenamiento intensivo de 90 min).",
					lugar: "Tap Jazz center, Ricardo Matte Pérez 0145, Providencia. Santiago",
					inversion: "$11.000 CLP",
					inscripcion: {
						url: "https://www.portaldisc.com/evento/masterclasstjc2027adulto",
						nota: "Importante: debes tener sesión en Portaldisc.com y seleccionar “Vocal Gym: entrenamiento para voz y canto | Miércoles | 16-12-2026 | 19:00 a 20:30 hrs”",
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
					publicoBreve: "13–17 años",
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
			"El taller de Juegos Diana es gratuito. Vocal Gym tiene un valor de $11.000 CLP por sesión. Consulta los detalles antes de inscribirte.",
		eventos: [
			{
				tallerId: "operacion-juegos-diana",
				titulo: "Operación Juegos Diana",
				resumen: "Martes 10 y viernes 13 · 18:30–21:00 hrs",
				mes: "NOV",
				dias: "10 · 13",
				color: "pink",
			},
			{
				tallerId: "vocal-gym-juvenil-diciembre",
				titulo: "Vocal Gym: Voz y Canto (Juvenil, 13–17 años)",
				resumen: "Jueves · 16:30–18:00 hrs",
				mes: "DIC",
				dias: "10",
				color: "sage",
			},
			{
				tallerId: "vocal-gym-adulto-diciembre",
				titulo: "Vocal Gym: Voz y Canto (Adulto)",
				resumen: "Miércoles · 19:00–20:30 hrs",
				mes: "DIC",
				dias: "16",
				color: "lavender",
			},
			{
				tallerId: "vocal-gym-juvenil-enero",
				titulo: "Vocal Gym: Voz y Canto (Juvenil, 13–17 años)",
				resumen: "Martes · 16:30–18:00 hrs",
				mes: "ENE 2027",
				dias: "05",
				color: "yellow",
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
