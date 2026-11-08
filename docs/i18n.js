/* =========================================================
   Traducción ES / EN
   El HTML está en español; este diccionario reemplaza cada texto
   por su versión en inglés (y viceversa) sin recargar la página.
   Para agregar un texto nuevo: añade "texto en español": "English text".
   ========================================================= */
window.I18N = (() => {
    const EN = {
        // Header y navegación
        'Inicio': 'Home',
        'Sobre mí': 'About',
        'Experiencia': 'Experience',
        'Habilidades': 'Skills',
        'Investigación': 'Research',
        'Proyectos': 'Projects',
        'Abrir menú': 'Open menu',
        'Cerrar menú': 'Close menu',
        'Reproducir música': 'Play music',
        'Pausar música': 'Pause music',
        'Cambiar a modo claro': 'Switch to light mode',
        'Cambiar a modo oscuro': 'Switch to dark mode',
        'Modo claro': 'Light mode',
        'Modo oscuro': 'Dark mode',

        // Portada
        'Bogotá, Colombia · Economía del desarrollo': 'Bogotá, Colombia · Development economics',
        'Hola, soy': "Hi, I'm",
        'Soy': "I'm",
        'Economista, investigador, analista de datos, consultor y creador de contenido': 'Economist, researcher, data analyst, consultant and content creator',
        'Economista con maestría en Economía. Convierto preguntas complejas en estrategias empíricas, proceso datos a gran escala y llevo los resultados a quienes toman decisiones, combinando rigor econométrico, automatización e inteligencia artificial.':
            'Economist with a master’s degree in Economics. I turn complex questions into empirical strategies, process data at scale and bring the results to decision-makers, combining econometric rigor, automation and artificial intelligence.',
        'Ver investigación': 'See research',
        'Descargar CV': 'Download CV',
        'Retrato de Jorge M. Orozco': 'Portrait of Jorge M. Orozco',
        'Ir a Sobre mí': 'Go to About',
        'Publicaciones, informes y columnas': 'Publications, reports and op-eds',
        'Artículo en revista indexada': 'Peer-reviewed journal article',
        'Herramientas web interactivas': 'Interactive web tools',
        'Tareas automatizadas en el World Bank': 'Tasks automated at the World Bank',

        // Sobre mí
        'Economía con perspectiva y datos': 'Economics with perspective and data',
        'Desde niño me he caracterizado por ser una persona creativa, que vive en su propio mundo analizando todo lo que le rodea. Decidí ser economista porque considero que mi profesión me da herramientas para ofrecer nuevas perspectivas y proponer soluciones fuera de lo común.':
            'Since I was a child I have been a creative person, living in my own world and analyzing everything around me. I chose economics because it gives me the tools to offer new perspectives and propose unconventional solutions.',
        'Hoy trabajo en el World Bank Group en Bogotá y como consultor de investigación en el Centro Javeriano de Competitividad, donde estudio la productividad, el empleo y el impacto de la inteligencia artificial en Colombia.':
            'Today I work at the World Bank Group in Bogotá and as a research consultant at the Centro Javeriano de Competitividad, where I study productivity, employment and the impact of artificial intelligence in Colombia.',
        'Áreas de interés': 'Areas of interest',
        'Economía del desarrollo': 'Development economics',
        'Mercado laboral y pobreza': 'Labor markets and poverty',
        'Productividad y competitividad': 'Productivity and competitiveness',
        'Convergencia territorial y poblacional': 'Regional and population convergence',
        'Evaluación de impacto': 'Impact evaluation',

        // Trayectoria
        'Mi trayectoria': 'My journey',
        'Filtrar la trayectoria': 'Filter the journey',
        'Mi trayectoria. Usa las flechas para avanzar.': 'My journey. Use the arrow keys to move through it.',
        'carrusel': 'carousel',
        'Todo': 'All',
        'Formación': 'Education',
        'Profesional': 'Professional',
        'Docencia': 'Teaching',
        'Logros': 'Achievements',
        'Logro': 'Achievement',
        'Personal · Formación': 'Personal · Education',
        'Logro · Investigación': 'Achievement · Research',
        'Profesional · Investigación': 'Professional · Research',
        'Anterior': 'Previous',
        'Siguiente': 'Next',
        'Pausar avance automático': 'Pause autoplay',
        'Reanudar avance automático': 'Resume autoplay',
        'Recorrer la trayectoria': 'Scrub through the journey',
        'Hoy': 'Today',
        'Dic 2022 – Jul 2023': 'Dec 2022 – Jul 2023',
        'Jul 2023 – Abr 2025': 'Jul 2023 – Apr 2025',
        'Ago – Dic 2024': 'Aug – Dec 2024',
        'Feb 2025 – Hoy': 'Feb 2025 – Today',
        'Abr 2026 – Hoy': 'Apr 2026 – Today',
        'El comienzo': 'The beginning',
        'Nací en 2001. Desde niño me caractericé por ser creativo y por vivir analizando el mundo que me rodea.':
            'I was born in 2001. As a child I was creative and always analyzing the world around me.',
        'Mis primeras letras': 'Learning to read',
        'A los 3 años empecé mi educación en una escuelita comunitaria.': 'At age 3 I started school at a small community school.',
        'Primaria: La Esperanza y Simón Bolívar': 'Primary school: La Esperanza and Simón Bolívar',
        'Estudié hasta cuarto grado en la Escuela La Esperanza, un colegio informal, y cursé quinto en la Institución Educativa Simón Bolívar, de educación pública.':
            'I studied through fourth grade at Escuela La Esperanza, an informal school, and completed fifth grade at the public Institución Educativa Simón Bolívar.',
        'Secundaria: Unidad Pedagógica Bolivariana': 'Secondary school: Unidad Pedagógica Bolivariana',
        'Hice el bachillerato en esta institución privada, donde me gradué con excelencia académica.':
            'I completed high school at this private institution, graduating with academic excellence.',
        '377 en las Pruebas Saber 11': '377 on the Saber 11 national exam',
        'Uno de los mejores puntajes del país, que me valió la Beca Excelencia del Gobierno Nacional para estudiar en la Universidad del Norte.':
            'One of the top scores in the country, which earned me the national government’s Excellence Scholarship to study at Universidad del Norte.',
        'Economía en la Universidad del Norte': 'Economics at Universidad del Norte',
        'Pregrado becado en Barranquilla. Viajaba a diario desde Malambo: unas dos horas solo para llegar a clase.':
            'Undergraduate degree on scholarship in Barranquilla. I commuted daily from Malambo: about two hours just to get to class.',
        'Diplomado Misión TIC': 'Misión TIC programming diploma',
        'Formación en programación con la Universidad Sergio Arboleda y el Ministerio TIC.':
            'Programming training with Universidad Sergio Arboleda and Colombia’s Ministry of ICT.',
        'Analista de Datos e Investigación': 'Data and Research Analyst',
        'Departamento de Economía, Universidad del Norte: informalidad y pobreza, análisis con NLP de datos de X/Twitter y dashboards para el Observatorio OCSA.':
            'Department of Economics, Universidad del Norte: informality and poverty, NLP analysis of X/Twitter data and dashboards for the OCSA Observatory.',
        'Instructor de Python y tutor de Econometría II': 'Python instructor and Econometrics II tutor',
        'Diseñé el currículo del curso de análisis de datos con Python de la Universidad del Norte, dicté las clases y gestioné su repositorio en GitHub.':
            'I designed the curriculum of Universidad del Norte’s Python data analysis course, taught the classes and managed its GitHub repository.',
        'Grado con honores': 'Graduated with honors',
        'Medalla de Plata por el mayor promedio académico, Premio al Mérito Científico y tesis Cum Laude sobre la pobreza en Barranquilla.':
            'Silver Medal for the highest GPA, Scientific Merit Award and a Cum Laude thesis on poverty in Barranquilla.',
        'Primeras publicaciones': 'First publications',
        'Documento sobre informalidad y pobreza (Serie Documentos n.º 55, Uninorte), ponencia en AFADECO y columna en Contexto.':
            'Working paper on informality and poverty (Serie Documentos No. 55, Uninorte), a talk at AFADECO and an op-ed in Contexto.',
        'Rumbo a Santiago de Chile': 'Off to Santiago, Chile',
        'Me mudé a Chile para cursar el Magíster en Economía en la Universidad Alberto Hurtado con la beca ILADES.':
            'I moved to Chile for the Master’s in Economics at Universidad Alberto Hurtado on an ILADES scholarship.',
        'Tutor académico en la FEN-UAH': 'Teaching assistant at FEN-UAH',
        'Microeconomía I (maestría), Estadística y Probabilidad en R, Estadística Inferencial en R y Series de tiempo en R.':
            'Microeconomics I (master’s), Statistics and Probability in R, Inferential Statistics in R and Time Series in R.',
        'Magna Cum Laude y artículo Q1': 'Magna Cum Laude and a Q1 article',
        'Mi tesis sobre el costo económico del conflicto armado obtuvo Magna Cum Laude, y con Carlos Díaz publiqué en Defence and Peace Economics (Q1).':
            'My thesis on the economic cost of the armed conflict received Magna Cum Laude, and with Carlos Díaz I published in Defence and Peace Economics (Q1).',
        'Country Program and Portfolio Analyst en Bogotá: automatizo flujos de datos (de 12 horas a 10 minutos), creo dashboards del portafolio y aporto a productos como el Diagnóstico de País.':
            'Country Program and Portfolio Analyst in Bogotá: I automate data pipelines (from 12 hours to 10 minutes), build portfolio dashboards and contribute to products such as the Country Diagnostic.',
        'Consultor de investigación en productividad, empleo e inteligencia artificial. Desarrollé cinco herramientas web interactivas para públicos no técnicos.':
            'Research consultant on productivity, employment and artificial intelligence. I built five interactive web tools for non-technical audiences.',
        'Lo que viene': 'What’s next',
        'ChicoPython, mi proyecto de contenido educativo de análisis de datos, y las ganas de seguir investigando y aprendiendo.':
            'ChicoPython, my educational content project on data analysis, and the drive to keep researching and learning.',

        // Experiencia
        'Dónde he trabajado': 'Where I have worked',
        'Experiencia laboral': 'Work experience',
        'Feb 2025 – Actualidad': 'Feb 2025 – Present',
        'Abr 2026 – Actualidad': 'Apr 2026 – Present',
        'Automatización de flujos de datos': 'Automated data pipelines',
        'desde el DANE, el Banco de la República y otras fuentes, reduciendo tareas de más de 12 horas a 10 minutos.':
            'from DANE, Banco de la República and other sources, cutting tasks of more than 12 hours down to 10 minutes.',
        'Dashboards e informes interactivos': 'Interactive dashboards and reports',
        'para el monitoreo continuo de la ejecución de proyectos y de las métricas del portafolio de país.':
            'for continuous monitoring of project implementation and country portfolio metrics.',
        'Productos analíticos de alto impacto': 'High-impact analytical products',
        ', como el Marco de Alianza País, el Diagnóstico de País y la estrategia de transición electoral.':
            ', such as the Country Partnership Framework, the Country Diagnostic and the electoral transition strategy.',
        'Presentaciones estratégicas': 'Strategic presentations',
        'a alta gerencia, Gobierno y contrapartes, y apoyo a las prácticas de Macroeconomía y Política Social.':
            'to senior management, government and counterparts, and support to the Macroeconomics and Social Protection practices.',
        'Automatización': 'Automation',
        'Datos del DANE': 'DANE data',
        'Consultor de Investigación': 'Research Consultant',
        'Prima salarial por tamaño de empresa': 'Firm-size wage premium',
        'en Colombia, que persiste aun controlando por formalidad y apunta a fricciones en el crecimiento de las firmas.':
            'in Colombia, which persists even after controlling for formality and points to frictions in firm growth.',
        'Diagnóstico del estancamiento de la productividad': 'Diagnosis of stagnant productivity',
        'colombiana y de los sectores que lo explican.': 'in Colombia and the sectors behind it.',
        'Exposición del empleo a la inteligencia artificial': 'Employment exposure to artificial intelligence',
        'por ocupación, ingreso, género y territorio.': 'by occupation, income, gender and region.',
        'Cinco herramientas web interactivas': 'Five interactive web tools',
        'para públicos no técnicos, con código replicable en GitHub.': 'for non-technical audiences, with replicable code on GitHub.',
        'Econometría': 'Econometrics',
        'Productividad': 'Productivity',
        'Inteligencia artificial': 'Artificial intelligence',
        'Universidad del Norte · Departamento de Economía · Barranquilla': 'Universidad del Norte · Department of Economics · Barranquilla',
        'Papel del ingreso informal en la reducción de la pobreza': 'The role of informal income in poverty reduction',
        'en las ciudades colombianas, con métodos de descomposición y contrafactuales.':
            'in Colombian cities, using decomposition and counterfactual methods.',
        'Análisis de percepciones ciudadanas con NLP': 'NLP analysis of public perceptions',
        'sobre proyectos inmobiliarios en Barranquilla, a partir de datos de X/Twitter.':
            'of real estate projects in Barranquilla, based on X/Twitter data.',
        'Automatización del procesamiento de datos laborales': 'Automated labor data processing',
        'y dashboards para el Observatorio OCSA.': 'and dashboards for the OCSA Observatory.',

        // Habilidades
        'Herramientas con las que trabajo': 'Tools I work with',
        'Automatización de flujos de datos, web scraping con Selenium, APIs y análisis de texto con NLP sobre datos de X/Twitter.':
            'Data pipeline automation, web scraping with Selenium, APIs and NLP text analysis of X/Twitter data.',
        'Análisis estadísticos y econométricos, gráficos estáticos y dinámicos, y procesamiento de grandes volúmenes de datos.':
            'Statistical and econometric analysis, static and dynamic charts, and processing of large datasets.',
        'Procesamiento de encuestas como la GEIH del DANE y estimaciones econométricas con datos de hogares y empleo.':
            'Processing surveys such as DANE’s GEIH and econometric estimation with household and employment data.',
        'Modelación económica: análisis macroeconométrico y modelos DSGE con Dynare.':
            'Economic modeling: macroeconometric analysis and DSGE models with Dynare.',
        'Consultas y resúmenes estadísticos integrados en páginas web.': 'Queries and statistical summaries embedded in web pages.',
        'Herramientas web interactivas publicadas en GitHub Pages, este portafolio y presentaciones con Reveal.js.':
            'Interactive web tools published on GitHub Pages, this portfolio and presentations with Reveal.js.',
        'Redacción de documentos, guías de ejercicios, tesis, informes y artículos de investigación.':
            'Writing documents, problem sets, theses, reports and research articles.',
        'Elaboración de mi hoja de vida y de presentaciones laborales.': 'My résumé and work presentations.',
        'Dashboards con DAX y Power Query para el monitoreo del portafolio del World Bank y para el Observatorio OCSA.':
            'Dashboards with DAX and Power Query for World Bank portfolio monitoring and the OCSA Observatory.',
        'Control de versiones y código replicable de mis investigaciones y herramientas interactivas.':
            'Version control and replicable code for my research and interactive tools.',
        'También trabajo con': 'I also work with',
        'Modelación económica': 'Economic modeling',
        'Automatización y web scraping': 'Automation and web scraping',
        'Selenium · Power Automate · APIs · bots y pipelines de datos': 'Selenium · Power Automate · APIs · bots and data pipelines',
        'Visualización': 'Visualization',
        'Análisis geoespacial': 'Geospatial analysis',
        'Claude · ChatGPT · APIs de modelos de lenguaje': 'Claude · ChatGPT · LLM APIs',
        'Idiomas': 'Languages',
        'Español (nativo) · Inglés (fluido)': 'Spanish (native) · English (fluent)',

        // Investigación
        'Publicaciones y productos': 'Publications and outputs',
        'Artículo en revista indexada · Q1': 'Peer-reviewed journal article · Q1',
        'Díaz, C. y': 'Díaz, C. and',
        'Leer artículo': 'Read article',
        'Producción por año': 'Output per year',
        'Artículos, documentos, informes y columnas': 'Articles, papers, reports and op-eds',
        'Tipo de publicación': 'Publication type',
        'Documentos y tesis': 'Papers & theses',
        'Informes': 'Reports',
        'Columnas': 'Op-eds',
        'Documento de trabajo · SSRN': 'Working paper · SSRN',
        'Documento de trabajo': 'Working paper',
        'Pardo, O. y': 'Pardo, O. and',
        '(2026). La prima salarial por tamaño de empresa persiste aun controlando por formalidad.':
            '(2026). The firm-size wage premium persists even after controlling for formality.',
        ', Vargas, A., Perilla, J. y Gómez, C. (2023). Serie Documentos n.º 55, Universidad del Norte.':
            ', Vargas, A., Perilla, J. and Gómez, C. (2023). Serie Documentos No. 55, Universidad del Norte.',
        'Leer en SSRN': 'Read on SSRN',
        'Leer en ResearchGate': 'Read on ResearchGate',
        'Tesis de maestría · Magna Cum Laude': 'Master’s thesis · Magna Cum Laude',
        'Cuantifica el costo del conflicto armado en términos del PIB per cápita mediante la metodología de control sintético. Universidad Alberto Hurtado.':
            'Quantifies the cost of the armed conflict in terms of GDP per capita using the synthetic control method. Universidad Alberto Hurtado.',
        'Leer documento': 'Read document',
        'Tesis de pregrado · Cum Laude': 'Undergraduate thesis · Cum Laude',
        'Descomposición de la pobreza con el método de Shorrocks-Kolenikov. Universidad del Norte.':
            'Poverty decomposition with the Shorrocks-Kolenikov method. Universidad del Norte.',
        'Pardo, O. y Orozco, J.': 'Pardo, O. and Orozco, J.',
        'Centro Javeriano de Competitividad y LEE': 'Centro Javeriano de Competitividad and LEE',
        'Orozco, J. y Díaz, C. (2025). Revista Observatorio Económico n.º 199, UAH': 'Orozco, J. and Díaz, C. (2025). Revista Observatorio Económico No. 199, UAH',
        'Granger Serrano, A. y Orozco, J. (2023). Contexto': 'Granger Serrano, A. and Orozco, J. (2023). Contexto',

        // Proyectos
        'Cursos, proyectos y trabajo': 'Courses, projects and work',
        'Visualizaciones para públicos no técnicos, con código replicable en GitHub.': 'Visualizations for non-technical audiences, with replicable code on GitHub.',
        'Ver código en GitHub': 'View code on GitHub',
        'Productividad laboral': 'Labor productivity',
        'Productividad total de los factores': 'Total factor productivity',
        'IA y automatización': 'AI and automation',
        'Remuneración educativa': 'Returns to education',
        'Geografía de la remuneración': 'Geography of earnings',
        'Curso': 'Course',
        'Introducción al análisis de datos con Python': 'Introduction to data analysis with Python',
        'Curso introductorio para principiantes sin experiencia previa, enfocado en desarrollar habilidades fundamentales de análisis de datos y programación.':
            'Introductory course for beginners with no prior experience, focused on core data analysis and programming skills.',
        'Ver en GitHub': 'View on GitHub',
        'Portada del curso de análisis de datos con Python': 'Cover of the Python data analysis course',
        'Proyecto personal': 'Personal project',
        'Proyecto de divulgación que muestra cómo resolver todo tipo de tareas con herramientas como Python.':
            'Outreach project showing how to solve all kinds of tasks with tools like Python.',
        'Ver en Instagram': 'View on Instagram',
        'Logo del proyecto ChicoPython': 'ChicoPython project logo',
        'Trabajo': 'Work',
        'Dashboard informativo sobre el mercado laboral en las ciudades colombianas.': 'Dashboard on the labor market in Colombian cities.',
        'Ver publicación': 'View post',
        'Captura de un dashboard del mercado laboral': 'Screenshot of a labor market dashboard',

        // Contacto y pie
        '¿Conversamos?': 'Let’s talk',
        'Me interesa conversar sobre investigación aplicada, análisis de datos y política económica.':
            'I’d love to talk about applied research, data analysis and economic policy.',
        'O escríbeme un mensaje aquí': 'Or write me a message here',
        'Nombre': 'Name',
        'Asunto': 'Subject',
        'Mensaje': 'Message',
        'Se abrirá tu aplicación de correo con el mensaje listo para enviar.': 'Your email app will open with the message ready to send.',
        'Preparar correo': 'Draft email',
        'Completa nombre, asunto y mensaje.': 'Please fill in name, subject and message.',
        'Listo: revisa tu aplicación de correo para enviarlo.': 'Done: check your email app to send it.',
        '© 2026 Jorge M. Orozco. Todos los derechos reservados.': '© 2026 Jorge M. Orozco. All rights reserved.',

        // Documento
        'Jorge M. Orozco | Economista': 'Jorge M. Orozco | Economist',
    };

    const META_EN = 'Jorge M. Orozco — Economist with a master’s degree in Economics. Analyst at the World Bank Group and research consultant at the Centro Javeriano de Competitividad. Development economics, labor markets, poverty and productivity.';

    const ES = {};
    for (const k in EN) ES[EN[k]] = k;

    const norm = s => s.replace(/\s+/g, ' ').trim();
    let lang = 'es';
    let metaES = null;

    const t = (a, b) => {
        const es = b === undefined ? a : b;
        return lang === 'en' ? (EN[es] || es) : es;
    };

    function swapText(node) {
        const raw = node.nodeValue;
        const key = norm(raw);
        if (!key) return;
        const map = lang === 'en' ? EN : ES;
        const out = map[key];
        if (out === undefined || out === key) return;
        const lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
        node.nodeValue = lead + out + trail;
    }

    function apply(next) {
        lang = next;
        const map = lang === 'en' ? EN : ES;
        const root = document.documentElement;
        root.lang = lang;

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: n => (n.parentElement && n.parentElement.closest('script, style, svg, #typing-text'))
                ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });
        let n;
        while ((n = walker.nextNode())) swapText(n);

        document.querySelectorAll('[aria-label], [title], [alt], [aria-roledescription]').forEach(el => {
            ['aria-label', 'title', 'alt', 'aria-roledescription'].forEach(attr => {
                const v = el.getAttribute(attr);
                if (!v) return;
                const out = map[norm(v)];
                if (out !== undefined) el.setAttribute(attr, out);
            });
        });

        // Etiquetas de los hitos del timeline: "Ir a <año>: <título>"
        document.querySelectorAll('.htl-item').forEach(item => {
            const node = item.querySelector('.htl-node');
            const year = item.querySelector('.htl-year');
            const h4 = item.querySelector('h4');
            if (node && year && h4) node.setAttribute('aria-label', `${lang === 'en' ? 'Go to' : 'Ir a'} ${year.textContent.trim()}: ${h4.textContent.trim()}`);
        });

        document.title = map[document.title] || document.title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            if (metaES === null) metaES = meta.content;
            meta.content = lang === 'en' ? META_EN : metaES;
        }

        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = lang === 'en' ? 'ES' : 'EN';
            btn.setAttribute('aria-label', lang === 'en' ? 'Ver en español' : 'View in English');
            btn.title = lang === 'en' ? 'Español' : 'English';
        }
        try { localStorage.setItem('lang', lang); } catch (e) {}
        document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    }

    function init() {
        let saved = null;
        try { saved = localStorage.getItem('lang'); } catch (e) {}
        const preferred = saved || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
        if (preferred === 'en') apply('en');
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.addEventListener('click', () => apply(lang === 'en' ? 'es' : 'en'));
    }

    return { t, apply, init, get lang() { return lang; } };
})();
