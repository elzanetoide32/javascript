/*let numero= 10;
numero **=2;
frace="soy luca";
document.write( `${frace} y estoy caminando`);
let numero= 10;
let numero2=20;
document.write(numero!=20);
nombre=prompt("cual es tu nombre?");
alert("hola"+nombre);
if(20==20){
alert("hola");
}
else{
alert("123")
}
let arrays=["luca", 24,"buenos aires"];
alert(arrays[1]);
let caja={
	nombre:"luca",
	material: "carton",
	edad: 10,

};
let humano=["luca","carton",10 ];
document.write(caja["edad"]);
let numero=0;
while(numero<100){
	numero++;
	document.write(numero+"<br>");
	if(numero==10){
		break;
	}
}
do {
	document.write(numero+"<br>");
	numero++;
}
while(numero<6)
for(i=0; i<100; i++){

if (i==12) {
	continue;//break, 
}
document.write(i+"<br>");
}
arrays=["maria","luca","martina"];
animales=["gato", "tigre","perro","pajaro", "tortuga",arrays];
for (animal in animales){
	document.write(animal+"<br>");
}
for(animal2  of animales){
	document.write(animal2+"<br>");
}
for (array in arrays){
	if(array==1){
		for(array of animales){
			document.write(array+"<br>");
		}
	}else{
		document.write(arrays[array]+"<br>");
	}
}
function saludar(num1, num2){
let res= num1 + num2;
	document.write(res);
	document.write("<br>");
	prgunta= prompt("hola luca como fue tu dia?")
if(prgunta=="bien"){
	alert("me alegro");
}else{
	alert("una pena");
}
return "hola"
}
saludar(15,20);
const saluda=  nombre => document.write("hola como estas "+ nombre);
saluda("luca");
class animal{
	constructor(especie, edad, color){
		this.especie= especie;
		this.edad= edad;
		this.color= color;
		this.informacion= `soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;

	}
	verInfo(){
		document.write(this.informacion+"<br>");
	}
}

class perro extends animal{
	constructor(especie, edad, color ,raza){
		super(especie,edad,color);
		this.raza=null;
	}
	static ladrar(){
		alert("WAW")
	}
	set Raza(newName){
		this.raza = newName;
	}
	get Razas(){
		return this.raza;
	}

}
const perroo= new animal("perro", 5, "rojo","culo");
const gato= new animal("gato",2, "negro");
const pajaro= new animal("pajaro",1,"verde");
perroo.verInfo();
gato.ladrar();
pajaro.ladrar();
perroo.Razas= "pedro";
document.write(perroo.Razas);
document.write(perro.informacion+"<br>");
document.write(gato.informacion+"<br>");
document.write(pajaro.informacion+"<br>");
let cadena= ["pedro", "maria","jorge"," el gato","aecedario"];
let cadena2=[1,5,3,4,2,6,9,8,,7];

//resultado= cadena.concat(" hola");
//resultado= cadena.endsWith("prueva");
//resultado= cadena.startsWith("prueva");
//resultado= cadena.includes("prueva");
//resultado= cadena.indexOf("prueva");
//document.write(cadena[2]);
//resultado= cadena.lastIndexOf("prueva");
//resultado= cadena.padStart(20,"1");
//resultado= cadena.padEnd(20,"1");
//resultado= cadena.repeat(10);
//resultado= cadena.split(" ");
//resultado= cadena.substring(0,10);
//resultado= cadena.toUpperCase();
//resultado= cadena.toLowercase();

//resultado= cadena.pop();
//resultado= cadena.shift();
//resultado= cadena.push("hola");
//resultado= cadena.reverse();
//resultado= cadena.unshift(1,2);
//resultado= cadena2.sort();
//resultado= cadena.splice(1,0);
//resultado= cadena.slice(0,2);
//resultado= cadena.filter(numero=> numero.length>6);
//numero= Math.sqrt(25);
//numero= Math.cbrt(25);
//numero= Math.max(25,30,28,27,56);
//numero= Math.min(25,30,28,27,56);
//numero= Math.random()*99;
//numero= Math.round(numero);
//numero= Math.floor(numero+1);
//numero= Math.trunc(9.999);
//numero= Math.PI;
document.write(numero);

//console.assert(5<3);
//console.error("que hicictes!!");
//console.info("muy bien tu trabajo");
console.table([1,2,4,5,8]);
console.warn("cuidado");
console.dir([1,5,74,9,6]);
console.count();
console.count();
console.count();
console.count();
console.countReset();
console.count();
console.group("frutas");
console.log("manzana");
console.log("pera");
console.log("banana");
console.time();
console.timeLog();
console.timeEnd();
console.log("%chola", "color: red; backgroud: black; border: 3px solid blue");
const rango= document.getElementById("parrafo")
document.write(rango)
const rangos= document.getElementByTagName("p")
document.write(rangos)
const rangosa= document.querySelector("#parrafo")
document.write(rangosa)
const range= document.querySelector(".range");
document.write(range);
range.setAttribute("type", "color");
document.write(range.getAttribute("type"));
const titulo= document.querySelector(".titulo")
titulo.setAttribute("contentEditable","true")
titulo.removeAttribute("hidden")
titulo.setAttribute("title","true")
const titulo= document.querySelector(".text")
document.write(titulo.className)
document.write(titulo.value)
//titulo.type="range"
//titulo.accept= "image/png"
const titulo= document.querySelector(".text")
titulo.minLength= 4;
titulo.placeholder="que pasa mami";
titulo.required=" ";
const titulo= document.querySelector(".titulo")
//titulo.classList.add("grande")
//titulo.classList.remove("grande")
//let valor= titulo.classList.item(0)
//document.write(valor)
//let valor= titulo.classList.contains("titulo")
//document.write(valor)
//let resultado= titulo.textContent;
//let resultado1= titulo.innerHTML;
//let resultado2= titulo.outerHTML;
//alert(resultado)
//alert(resultado1)
//alert(resultado2)
const el= document.querySelector(".hola")
const item= document.createElement("LI")
const textdelitem= document.createTextNode("esto es un item de la lista")
item.appendChild(textdelitem)
el.appendChild(item)
console.log(item)
const contenedor= document.querySelector(".hola")
//const primerHijo= contenedor.lastElementChild;
//const primerHijo= contenedor.childNodes;
//console.log(primerHijo[1])*/

//let objeto= "string";
/*console.log(objeto.__proto__)
console.log(objeto.prototype)*/

//"use strict";
//nombre="luca"
//console.log(nombre)
//const obj={nombre:"lucas"};
//Object.preventExtensions(obj);
//Object.defineProperty(obj, 'nombre',{value: "caca", writeable:false});
//console.log(obj)

/*const saludar=()=>{
	console.log("hola");
	console.log("¿como estas")
}

saludar();*/


            //APIS//

/*const fecha= new Date();
console.log (fecha);
console.log (fecha.getDate());//dia
console.log (fecha.getDay());//indice del dia desde domingo =0
console.log (fecha.getMonth());//mes desde 0
console.log (fecha.getYear()+1900);//se suma 1900 porque la api se la resta automaticamente
console.log (fecha.getHours());//horas del dia
console.log (fecha.getMinutes());
console.log (fecha.getSeconds());
*/


/*localStorage.setItem("nombre","pedro");
console.log(localStorage)
console.log(localStorage.getItem("nombre"))
*///se guarda permanentemente

/*sessionStorage.setItem("nombre","pedrobich");
console.log(sessionStorage)
console.log(sessionStorage.getItem("nombre"))
*///guarda el dato siempre que se mantega la secion



//const circulo= document.querySelector(".circulo");
//const rectangulo= document.querySelector(".cuadrado");

/*circulo.addEventListener("dragstart",(e)=> {	
	e.dataTransfer.setData("clase",e.target.className);
	//console.log(e.dataTransfer.getData("text-plain"));

})*/
//circulo.addEventListener("drag",()=> console.log(2))
//circulo.addEventListener("dragend",()=> console.log(3))

//rectangulo.addEventListener("dragenter", ()=>console.log(1));
/*rectangulo.addEventListener("dragover", (e)=>{
	e.preventDefault();
	console.log(2);
});
rectangulo.addEventListener("drop", (e)=>{
	console.log(e.dataTransfer.getData("clase"));
});*/
//rectangulo.addEventListener("dragleave", ()=>console.log(4));



/*const a= (pos)=>{
	console.log(pos);
	//console.log(pos.coords.latitude);
	//console.log(pos.coords.longitude);
}

const err=()=>console.log(e);

const opt= {
	maximumAge: 0,
	timeout: 3000,
	enableHightAccuracy: true
}


const geolocation= navigator.geolocation;
geolocation.getCurrentPosition(a,err,opt);
*/



/*
console.log(history.back());//para atras
console.log(history.forward());//para adelante
console.log(history.go());//recarga la pag
console.log(history.pushState({nombre:"pedro"},"titulo", "?jajaxd"));//nueva entrada en el historial
console.log(history.replaceState({nombre:"pedro"},"titulo", "?jajaxd"));//modifica la url pero no la info
*/

//const reader= new FileReader();//trabaja con los eventos

//   subir archivos
/*const archivo= document.getElementById("archivo");
archivo.addEventListener("change", (e)=>{
	leerArchivo(archivo.files[0]);
})

const leerArchivo= ar=>{
	const reader= new FileReader();//trabaja con los eventos
	reader.readAsText(ar);
	reader.addEventListener("load", (e)=>{
		console.log(e.currentTarget.result);
	})
}
*/

/*
const IDBRequest= indexedDB.open("daltobase",1);
//console.log(IDBRequest);
IDBRequest.addEventListener("upgradeneeded",()=>{
	const db=IDBRequest.result;
	db.createObjectStore("nombres",{
		autoIncrement: true
	})
})

IDBRequest.addEventListener("success",()=>{
	console.log("todo salio bien");
})

/*IDBRequest.addEventListener("error",()=>{
	console.log("todo mal");
})

const addObjeto= objeto=>{
	const db=IDBRequest.result;
	const IDBtransaction= db.transaction("nombres","readwrite");
	const objetoStore=IDBtransaction.objectStore("nombres");
	objetoStore.add(objeto);
	IDBtransaction.addEventListener("complete",()=>{
		console.log("objeto agregado"); 
	})
}

const leerObjeto= ()=>{
	const db=IDBRequest.result;
	const IDBtransaction= db.transaction("nombres","readonly");
	const objetoStore=IDBtransaction.objectStore("nombres");
	const cursor= objetoStore.openCursor();
	cursor.addEventListener("success",()=>{
		if (cursor.result){
			console.log(cursor.result.value);
			cursor.result.continue();
		} else console.log("todos los datos fueron leidos");
	})
}


const modificarObjeto=(key, objeto)=>{
	const db=IDBRequest.result;
	const IDBtransaction= db.transaction("nombres","readwrite");
	const objetoStore=IDBtransaction.objectStore("nombres");
	objetoStore.put(objeto,key);
	IDBtransaction.addEventListener("complete",()=>{
		console.log("objeto modificado correctamente"); 
	})
}


const eliminarObjeto=(key)=>{
	const db=IDBRequest.result;
	const IDBtransaction= db.transaction("nombres","readwrite");
	const objetoStore=IDBtransaction.objectStore("nombres");
	objetoStore.delete(key);
	IDBtransaction.addEventListener("complete",()=>{
		console.log("objeto eliminado correctamente"); 
	})
}
*/

/*
const mq= matchMedia("(max-w-width: 500px)");//cambiar estilo en js
//console.log(mq.matches);
mq.addEventListener("change",()=>{
	console.log("resolucion cambiada");
})
*/

/*
const cajas= document.querySelectorAll(".caja");//intersection observer

const verifyVisibility=(entries)=>{
	//const entry=entries[0];
	//console.log(entry.isIntersecting);
	for (entry of entries){
		if (entry.isIntersecting) console.log("se esta viendo la caja: ", entry.target.textContent);
	}
}
const observer= new IntersectionObserver(verifyVisibility);
//observer.observe(cajas);

for (const caja of cajas){
	observer.observe(caja);
}

//console.log(observer.tresholds);
*/

/* 
Notification.requestPermission(()=>{
	if(Notification.permission =="allow"){
		console.log("permiso consedido");
		new Notification("suscribite papu");
	}
});
*/

/*
console.log("AppCodeName: ",navigator.appCodeName);      console.log("");
console.log("AppName: ",navigator.appName);      console.log("");
console.log("AppVersion: ",navigator.appeVersion);      console.log("");
console.log("Connection: ",navigator.connection);      console.log("");
console.log("Geolocation: ",navigator.geolocation);      console.log("");
console.log("HadwareCurrency: ",navigator.hadwareCurrency);      console.log("");
console.log("languaje: ",navigator.language);      console.log("");
console.log("lenguages: ",navigator.lenguages);      console.log("");
console.log("mimeTypes: ",navigator.mimeTypes);      console.log("");
console.log("Online: ",navigator.onLine);      console.log("");
console.log("userAgent: ",navigator.userAgent);      console.log("");
console.log("CookieEnabled: ",navigator.cookieEnable);      console.log("");
console.log("Perimission: ",navigator.permissions);      console.log("");
console.log("plataform: ",navigator.plataform);      console.log("");
console.log("Plugins: ",navigator.plugins);      console.log("");
console.log("product: ",navigator.product);      console.log("");
console.log("ServiceWorker: ",navigator.serviceWorker);      console.log("");
*/


//la memorizacion se utiliza cuando se repite muchas veces lo mismo

//el cache es una memoria del navegador del usuario que permite que la pag carge mas rapido
/*caches.open("archivos-estaticos2").then(cache=>{
	//console.log(cache);
	cache.add("index.html");
	//cache.addAll(["index.html","codig.css","codigo.js"]);
	//cache.match("")
	//cache.mutchAll("");
	//cache.put("index.html");
	//cache.delete("index.html");
	//cache.keys()

})*/


//cookies

//cookies:    clase=valor,arg,arg
/*const crearCookies= (name,exp,path)=>{
	document.cookie=`${name};expire=${exp};path=${path}`;
}

crearCookies("usuario=dalto","Mon 26 Apr 2022 12:00:00 UTC","/")

console.log(crearCookies());
*/

/*
const canvas= document.getElementById("canvas");
const ctx= canvas.getContext("2d");

ctx.leneWidth="6";
ctx.strokeStyle="#48e";
ctx.fillStyle="#26a";
//ctx.strokeRect(30,50,400,200);
//ctx.fillRect(10,20,400,200);
ctx.lineTo(100,300);
ctx.lineTo(120,300);
ctx.lineTo(200,100);
ctx.lineTo(120,400);
ctx.stroke();
ctx.closePath();
ctx.circulo(20,10,30,40);
*/














