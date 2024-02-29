/**
 * Ruben Bernal Ramos
 * CSI1
 */
 
 function fechas(){
	var fechaActual = new Date();
	var diaActual = document.getElementById("diaActual").value;
	var mesActual = document.getElementById("mesActual").value; 
	var anyoActual = document.getElementById("anyoActual").value;
	
	var calendario = {
	    dia: 11,
	    mes: 5,
	    anyo: 2024,
	    nombreMes: "Mayo" 
	};
	
	if (diaActual === calendario.dia && mesActual === calendario.mes && anyoActual === calendario.anyo) {
    	window.alert("Es hoy");
	} else {
    	window.alert("Aún falta");
	}
}