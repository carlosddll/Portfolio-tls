const seccionesPagina = new fullpage('#fullpage', {
    // ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
		 autoScrolling: true, // Se activa el scroll.
		 fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
		 fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
		 easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		 scrollingSpeed: 500, // Velocidad del scroll. Valores: en milisegundos.
		 css3: true, // Si usara CSS3 o javascript.
		 easingcss3: 'ease-out', // Curva de velocidad del efecto.
		 loopBottom: true, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
        //Navegación
        menu: '#menu',
        lockAnchors: false,
/*         anchors:['inicio', 'sobre-mi', 'experiencia', 'skills','proyectos', 'clientes', 'contacto'], */
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Inicio', 'Sobre Mí', 'Experiencia', 'Skills', 'Proyectos', 'Clientes', 'Contacto'],
        showActiveTooltip: false,
        slidesNavigation: true,
        dragAndMove: true,
});