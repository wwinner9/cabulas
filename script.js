
let _ = query=> console.log(query)
/*
function turn(){ 
var x = document.getElementById('pic_Mifoto')
    if(x.src.match("wa")){
        x.src="_assets/xd.png";
	var y=document.getElementById('pr');

	y.innerHTML="BBoy";
	
    }
    else{ 
        x.src="_assets/wanga.jpg"; 
    }
    
}*/
/*
// Trabalhando com strings
const C= console.log // Define q o  C recebera o console.log

const str= 'Ola Mundo bom dia'

let out;

// lengh
out= str.length

// concat
out=str.concat(" ","bomba"," wanda")
//indexOf
out= str.indexOf('a')
//substring
out= str.substring(4,9)
out= str.substring(str.length-4)

//split

out=str.slice(0,4)
out=str.slice(-4)

//split
out= str.split('')

const n1 =10 ,n2=2,n3=20;

let result;

// Numbers

// Operadores Aritmetricos

out= n1+n2
out= n1-n2
out= n1*n2
out= n1/n2
out= n1%n2

//pi ,  Round = ArredondAR,ceil,floor,sqrt =raiz quadrada,abs = absoluto ,
out =  Math.PI
out =  Math.round(10.6)  // Arredonda para o normal se for acima de .5 sera up 
out = Math.ceil(2.3) // arredonda para excesso
out = Math.floor(2.8) // Arredonda por defeito 
out = Math.sqrt(9) // faz a raiz quadrada
out = Math.abs(-9) // torna os numeros positivos
out = Math.pow(4,2) // faz o  2 ou numero apos a virgula de exponente 
out = Math.min(9,2,5,8) // pega o minimo
out = Math.max(9,2,5,8) // pega o maximo

// 2 PARTE

let valor= 100+500
let desconto = (valor/100)*20 // desconto de 20%
let aPagar= valor-desconto
out=aPagar

// Operadores Relacionais 
  

// conversoes 

let nu1 = 2 , nu2= '2'

out = nu2+nu1 // aqui sera 22 por sera interpretado como strings
out = Number(nu2)+nu1 // aqui sera 4 pelo facto dos dois serem numero fez a soma
// Tambem podemos converter usando parseInt(o numero)

// Array 

//let arr = new Array('winner','Wwinner')

//arr.unshift(2,null,'None')


//let arr = ['angola','Moz']

//arr.unshift('Congo')
//arr.push('Brazil')

//let x =arr.indexOf('Brazil')

let strg = 'Angola, è ,uma ,pais grande e belo faz parte do continente africano'

let x= strg.substring(1,6)


x.children.forEach(ltr =>(
    ltr.toUpperCase()
))
 
//console.log(arr)

let prod = 'Arroz'
let prec = 200
let prod2 = 'Agua'
let prec2 = 100

let html =`
    "<ul>"
        <li>${prod}'</li>'
        <li>$${prec}</li>
        <li>${prod2}</li>
        <li>$${prec2}</li>
    '</ul>'
`


// Sort the array

const C= console.log

let arr = [1,4,5,2,3,100,7,9]
let arr2 = ['Ana','paula','joana','carlos']

C(arr2.sort())
C(arr2.sort().reverse())



console.log(arr.sort((n1,n2)=>{
    return n1-n2
})) 



//Loop forEach

let ox  = ['angola','congo','brasil']

ox.forEach(function(xv,index){
    console.log(`${index} = ${xv}`);
})


//Map 

let oa = [
    {id:1, nome:'Wwinner',idade:22},
    {id:2, nome:'Winner',idade:21},
    {id:3, nome:'Wanda',idade:18}
]


const person= oa.map(function(peaple){
    return C(peaple.nome)
})




let obj ={id:1, nome:'Wwinner',idade:22}


//Loop Object
for(let key in obj){
    C(`${key} : ${obj[key]}`)
}

if(confirm('Are u sure?'))
    console.log('Deletado')
else
    console.log('Abortado');

// Ver o tamanho da width e height 
window.outerWidth Trara o width do programa todo
window.outerHeight

window.innerWidth trara do dentro do html
window.innerrHeight

window.location -- Trara a url e algumas outras info



//img.matches('wanga')? img.src='xd.png' : img.src='assets/wanga.jpg'
                                                                                                                                                                                                                                                                                                                                            

const button=document.querySelector('#bt')

button.addEventListener("click", ()=>{
    console.log('ola')
})


let imgArray = document.getElementsByTagName('img')

//[...(document.getElementsByTagName()).children]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
const bcd = [...(imgArray).children]


let ab =Array.from(imgArray)

const ht = ['uy','abs','tr']
console.log(ab[1] , )

ht.forEach((img)=>{
    console.log(img)
})


let h2Child= document.querySelector('h2')
let xx
//xx=h2Child.id='firsth2'

h2Child.appendChild(document.createTextNode('Olla'))

xx= document.querySelector('.firste').appendChild(h2Child)

//xx.match('') ? console.log('Oba') :console.log('Warning')


let newDiv 
newDiv= document.createElement('div')

newDiv.className='firste2'


let add=document.querySelector('.firste')

let xd
xd =document.querySelector('.firste').appendChild(newDiv)

h2Child.id='idd'

//console.log(h2Child.parentElement.querySelector('h1').parentElement.children[1])



console.log(add.children)



// Working with replace 

const newH2 = document.createElement('h2')
newH2.id='title'
newH2.classList.add('novaClasse')

newH2.appendChild(document.createTextNode('Working in Js'))

//getting the element that we wanna replace to

const oldH2 = document.querySelector('#idTittle')

console.log(newH2);


//let parentArray= Array.from(parent.children)

//parentArray.splice(1,1)


// Working With remove 
//removing by iteslf
let parent = document.querySelectorAll('.link')



parent[0].remove()
console.log(parent)

//Removing by the children through the parent


let parent = document.querySelector('.card')
let child = document.querySelectorAll('.link')

parent.removeChild(child[0]) // it gonna remove the children in that position on that parent

console.log(parent , child)



const anchor = document.querySelector('a')
const prt = document.querySelector('ul')
let element;

//prt.removeChild(anchor[3])
//element=prt;

// adding class in classList

anchor.classList.add('novaClass')
anchor.classList.add('Wwinner')

//List all the class of a tag

anchor.classList
element= anchor.className // Read the class
element= anchor.classList // Listing the classes
anchor.classList.add('Opp')
element= anchor.classList
anchor.classList.remove('Opp') // remove a class pelo seu nome
element= anchor.classList


// Working with ID

anchor.id='New id' // Adding ID
anchor.id='' // remove ID Method 1
anchor.removeAttribute('id') //Remove ID Meth 2


// Working With Atributes

element =anchor.getAttribute('href') // get href
element =anchor.getAttribute('class') // get class
element =anchor.setAttribute('href','www.google.com') // set attb requer 2 parameters the  Atribute and the value u want set
element =anchor.setAttribute('target','_blanck') // with set we can also create an attribute
element =anchor.setAttribute('date-link','20') // 
element =anchor.hasAttribute('target') // we can also check for an attb and it brings a boolean as the result



//element.removeChild(anchor)

console.log(element)

      


// EventsListeners


// 1 Way
document.querySelector('#bt').addEventListener('click',function(){
    console.log('Olaa Mundo')
})
// 2 Way
bte=document.querySelector('#bt')
bte.addEventListener('click',function(){
    console.log('Olaa Mundo')
})

// 3 Way

bte=document.querySelector('#bt')
bte.addEventListener('click', clickingBt)

function clickingBt(e){

    let elemente;
    elemente=e
    elemente=e.target // target is the alvo rsrs
    elemente=e.target.id // brings id of the target
    elemente=e.target.className // the class
    elemente=e.target.innerText // the inner text
    elemente=e.target.innerTex =2+4
// e or evt or event it show us whats the event and somes props

    console.log(elemente)
}
bte=document.querySelector('#bt')
bte.addEventListener('dblclick', clickingBt) // dblclick is doubleClick events

function clickingBt(e){

    console.log(e.type)
}

*/
//dblclick
// Mouse Events
// Mouse enter
// Mouse leave
// Mouse over
// Mouse out
// Mouse up
// Mouse down
// Mouse move
/*

    `
    bte=document.querySelector('#bt')
    bte.addEventListener('mousemove', clickingBt) // dblclick is doubleClick events

    function c`lickingBt(e){

    console.log(e.type)



//OBJ Literals

let music;

music = {
    id:1,
    name:'Don Juan'
}

music =[
    {id:1, Music:'Deus e para todos',artist:'NGA'},
    {id:1, Music:'Deus e para todos',artist:'NGA'},
    {id:1, Music:'Deus e para todos',artist:'NGA'},
    {id:1, Music:'Deus e para todos',date:{day:'monday', month:'April',year:2021,hour:'12:21'}}
]


console.log(music[3].date)
}


// Object Listeral & Constructor

function identity(nome,sobrenome){
    this.name= nome;
    this.surnmae= sobrenome;

    this.fullName= function(){
        return `${this.name} ${this.surnmae}`
    }
}

let pessoa = new identity('joao','Fernando')
let p2 = new identity('Ana','Dias')

//console.log(pessoa.fullName())
//console.log(p2.fullName())


//some object constructors
let exemple;

exemple= new String('joao')
exemple= new Number(2) 
exemple= new Boolean(true) 
exemple= new Array(1,2,3,4) 
exemple= new Array(1,2,3,4) 

console.log(exemple)*/

// Prototype +

function identity(nome,sobrenome, ano){
    this.name= nome;
    this.surname= sobrenome;
    this.bith= ano;
}

let pessoa = new identity('joao','Antonio',1997)

//attaching a new field to the object identity with prototype
identity.prototype.fullName = function(){
    return `${this.name} ${this.surname}`
}

identity.prototype.idade=function(year=this.bith){    
    let data=  new Date()
    return data.getFullYear()-year
}

identity.prototype.info=function(){
    return `Nome : ${this.name} \nSobrenome: ${this.surname}\nIdade: ${this.idade()}`
}


//_(identity.prototype)

//_(pessoa.fullName())

//_(pessoa.idade(1997))
//_(pessoa.info())

const p2 =new identity('Joana','Sebastiao',2002)
//_(p2.info())


//Inherit a constructor

function id2(nome,sobrenome,ano,cor){
    
    identity.call(this,nome, sobrenome, ano)
    this.color= cor; 
    
}



//inherit prototypes from the parent 
id2.prototype = Object.create(identity.prototype)

let pessoa3= new id2('carlos','Wanda',2004,'Preta')
//_(pessoa3.info())
//_(pessoa3.fullName())


// When inherit prototypes to an obj constructor the name of constructor will be by default the parent name 
//_(pessoa3)
//we can change it by :

id2.prototype.construtor=id2    

ide2.price = 2


let a = 9
let bar = 5



function ola(){alert('olaaa')}

let apt = 2
apt=apt<<2
_(apt)
 





