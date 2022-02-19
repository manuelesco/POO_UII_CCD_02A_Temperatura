function myFunction() {
    var x = document.getElementById("tab-2");
	var y = document.getElementById("tab-1");
	
    if (x.style.display === "none") {
        x.style.display = "block";
		y.style.display = "none";
    } else {
        x.style.display = "none";
		y.style.display = "block";
    }
}

function changeColor(b1, b2, b3)
{
	
	if( b1.style.background!="light-gray" ){
		//Cambio Botón 1
		b1.style.background="blue";
		b1.style.color="white";
		
		//Reset Botón 2	
		b2.style.background="#F5F5F5";
		b2.style.color="black";		
		
		//Reset Botón 3	
		b3.style.background="#F5F5F5";
		b3.style.color="black";		
	}
	
	
    return false;
}

function showInstrucciones(){
	var x = document.getElementById("tab-1");
	var y = document.getElementById("tab-2");
	var z = document.getElementById("tab-3");
	
	var b1 = document.getElementById("button1");
	var b2 = document.getElementById("button2");
	var b3 = document.getElementById("button3");
	
	x.style.display = "block";
	y.style.display = "none";
	z.style.display = "none";
	
	changeColor(b1,b2,b3);
}

function showCodeboard(){
	var x = document.getElementById("tab-1");
	var y = document.getElementById("tab-2");
	var z = document.getElementById("tab-3");
	
	var b2 = document.getElementById("button1");
	var b1 = document.getElementById("button2");
	var b3 = document.getElementById("button3");
	
	x.style.display = "none";
	y.style.display = "block";
	z.style.display = "none";
	
	changeColor(b1,b2,b3);
}

function showUseCodeboard(){
	var x = document.getElementById("tab-1");
	var y = document.getElementById("tab-2");
	var z = document.getElementById("tab-3");
	
	var b2 = document.getElementById("button1");
	var b3 = document.getElementById("button2");
	var b1 = document.getElementById("button3");
	
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "block";
	
	changeColor(b1,b2,b3);
}