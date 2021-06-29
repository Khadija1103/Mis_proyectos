boton.addEventListener('click', e => {
	e.preventDefault()


	let dia = document.getElementById("dia").value
	dia = parseInt(dia)


	let mes = document.getElementById("mes").value
	mes = parseInt(mes)

	let respuesta = document.getElementById("respuesta")

	if (dia >= 21 && mes == 3 || dia <= 20 && mes == 4) {
		texto = `Su signo es: <br>
		<b> Aries pertenece al elemnto agua<b><br>
		<img src="imag/aries.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 9 || dia <= 23 && mes == 10) {
		texto = `Su signo es:<br>
		 <b>Libra pertenece al elemnto aire</b><br>
		  <img src="imag/libra.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 21 && mes == 4 || dia <= 21 && mes == 5) {
		texto = `Su signo es:<br>
		<b> Tauro  pertenece al elemnto tierra <b> <br>
		<img src="imag/tauro.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 10 || dia <= 22 && mes == 11) {
		texto = `Su signo es:<br>
		<b>  Escorpio pertenece al elemnto agua<b> <br>
		<img src="imag/scorpio.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 22 && mes == 5 || dia <= 21 && mes == 6) {
		texto = `Su signo es:<br>
		<b> Géminis pertenece al elemnto aire<b> <br>
		<img src="imag/gemini.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 23 && mes == 11 || dia <= 21 && mes == 12) {
		texto = `Su signo es:<br>
		<b>  Sagitario pertenece al elemnto fuego<b> <br>
		<img src="imag/sagi.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 21 && mes == 6 || dia <= 23 && mes == 7) {
		texto = `Su signo es:<br>
		<b>  Cáncer pertenece al elemnto agua <b> <br>
		<img src="imag/cancer.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 22 && mes == 12 || dia <= 20 && mes == 1) {
		texto = `Su signo es:<br>
		<b>  Capricornio pertenece al elemnto tierra<b> <br>
		<img src="imag/capri.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 7 || dia <= 23 && mes == 8) {
		texto = `Su signo es:<br>
		<b>  Leo pertenece al elemnto fuego<b> <br>
		<img src="imag/leo.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 21 && mes == 1 || dia <= 19 && mes == 2) {
		texto = `Su signo es:<br>
		<b> Acuario pertenece al elemnto aira<b> <br>
		<img src="imag/acuario.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 8 || dia <= 23 && mes == 9) {
		texto = `Su signo es:<br>
		<b>  Virgo pertenece al elemnto tierra<b> <br>
		<img src="imag/Virgo.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 20 && dia <= 29 && mes == 2 || dia <= 20 && mes == 3) {
		texto = `Su signo es:<br>
		<b>  Picis pertenece al elemnto agua<b> <br>
		<img src="imag/picis.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")



	} else {
		texto = `ingreso un dato errado <br>
		<img src="imag/mala-critica.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	}





})

boton.addEventListener('click', e => {
	e.preventDefault()


	let tu = document.getElementById("tu").value
	tu = parseInt(tu)


	let el = document.getElementById("el").value
	el = parseInt(el)

	let compatibles = document.getElementById("compatibles")

	if (tu === el) {
		texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 12 && el == 1) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 12 && el == 4) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 1 && el == 12) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 1 && el == 4) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 4 && el == 1) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 11 && el == 7) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 11 && el == 9) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 9) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 11) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 7) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 11) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 2 && el == 10) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 2 && el == 3) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 10 && el == 2) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 10 && el == 3) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 3 && el == 2) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 3 && el == 10) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 8 && el == 6) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 8 && el == 5) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 6 && el == 8) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 6 && el == 5) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 5 && el == 8) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 5 && el == 6) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 12 && el == 7) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")



	} else if (tu == 12 && el == 9) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 12 && el == 11) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 9) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (tu == 7 && el == 11) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (tu == 7 && el == 12) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (tu == 9 && el == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 12) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 1 && el == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 1 && el == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 1) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 1) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 4 && el == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 4 && el == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 4 && el == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 7 && el == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 9 && el == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 11 && el == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 11 && el == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 11 && el == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 8 && el == 2) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 8 && el == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 8 && el == 3) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 2 && el == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 2 && el == 8) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 2 && el == 3) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 4 && el == 2) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 4 && el == 8) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 4 && el == 3) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (tu == 3 && el == 8) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 3 && el == 2) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (tu == 3 && el == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imag/compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else {
		texto = texto = `Sus signo son : <br>
				<b> NO COMPATIBLES <b><img src="imag/nocompatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	}



})