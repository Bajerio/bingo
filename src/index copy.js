//Entra
//
let valor, valor_devuelto = 0
let numero_Random = 0

//PLAYER

const a1_caja = document.getElementById("a1")
const a2_caja = document.getElementById("a2")
const a3_caja = document.getElementById("a3")
const a4_caja = document.getElementById("a4")
const a5_caja = document.getElementById("a5")

const b1_caja = document.getElementById("b1")
const b2_caja = document.getElementById("b2")
const b3_caja = document.getElementById("b3")
const b4_caja = document.getElementById("b4")
const b5_caja = document.getElementById("b5")

const c1_caja = document.getElementById("c1")
const c2_caja = document.getElementById("c2")
const c3_caja = document.getElementById("c3")
const c4_caja = document.getElementById("c4")
const c5_caja = document.getElementById("c5")

//CPU
const a1_cpu = document.getElementById("c_a1")
const a2_cpu = document.getElementById("c_a2")
const a3_cpu = document.getElementById("c_a3")
const a4_cpu = document.getElementById("c_a4")
const a5_cpu = document.getElementById("c_a5")

const b1_cpu = document.getElementById("c_b1")
const b2_cpu = document.getElementById("c_b2")
const b3_cpu = document.getElementById("c_b3")
const b4_cpu = document.getElementById("c_b4")
const b5_cpu = document.getElementById("c_b5")

const c1_cpu = document.getElementById("c_c1")
const c2_cpu = document.getElementById("c_c2")
const c3_cpu = document.getElementById("c_c3")
const c4_cpu = document.getElementById("c_c4")
const c5_cpu = document.getElementById("c_c5")


const tabla_pie = document.getElementById("rct_blanco_res")



function valor_random(min, max) {
    return Math.floor(Math.random() * (min, max) + min)
}

function lista_numeros() {

    let lista,lista2 = []


    for (let i = 0; i < 15; i++) {

        lista2.push(valor_random(0,9)) //Ejemplo: Se añade a lista un 6
            
            for (let j = i+1; j < 15; j++) {

                lista2.push(valor_random(0,9))//Ejemplo: Se añade a lista un 10
             
                if(lista[i] !== lista[j]){

                        lista.push(lista2[i])
                        lista.push(lista2[j])

                        console.log(lista)

                }else{console.log("Numeros repetidos")}
            }

    }

   // lista_numeros()



function random_numeros1(){

    console.log("Entra: random_numeros")
    var nums = [1,2,3,4,5,6,7,8,9,10],
    randomNumeros = [],
    i = nums.length,
    j=0


    while(i--){

        j = Math.floor(Math.random() * (i+1))
        randomNumeros.push(nums[j])
        nums.slice(j,1)

    }

        //randomNumeros.next().value
        console.log(randomNumeros)

}

//random_numeros1()




function sacar_numero() { //Accion click botón de bombo




    //console.log("Log a1_caja "+ a1_caja.innerHTML)

    btn_numeros.textContent = valor_random(0, 10)
    //console.log("btn_numeros: "+btn_numeros.textContent)

    valor = btn_numeros.textContent

    console.log("Valor sacar_numero(): " + valor)

    //2º Comparar el valor de caja a1 con el valor del bombo


    //PLAYER

    if (valor === a1_caja.innerHTML) {

        a1_caja.style.backgroundColor = "green"
        footer_table(valor)

    } else if (valor === a2_caja.innerHTML) {
        a2_caja.style.backgroundColor = "green"
        footer_table2(valor)
    } else if (valor === a3_caja.innerHTML) {
        a3_caja.style.backgroundColor = "green"
    } else if (valor === a4_caja.innerHTML) {
        a4_caja.style.backgroundColor = "green"
    } else if (valor === a5_caja.innerHTML) {
        a5_caja.style.backgroundColor = "green"

    } else if (valor === b1_caja.innerHTML) {
        b1_caja.style.backgroundColor = "green"
    } else if (valor === b2_caja.innerHTML) {
        b2_caja.style.backgroundColor = "green"
    } else if (valor === b3_caja.innerHTML) {
        b3_caja.style.backgroundColor = "green"
    } else if (valor === b4_caja.innerHTML) {
        b4_caja.style.backgroundColor = "green"
    } else if (valor === b5_caja.innerHTML) {
        b5_caja.style.backgroundColor = "green"

    } else if (valor === c1_caja.innerHTML) {
        c1_caja.style.backgroundColor = "green"
    } else if (valor === c2_caja.innerHTML) {
        c2_caja.style.backgroundColor = "green"
    } else if (valor === c3_caja.innerHTML) {
        c3_caja.style.backgroundColor = "green"
    } else if (valor === c4_caja.innerHTML) {
        c4_caja.style.backgroundColor = "green"
    } else if (valor === c5_caja.innerHTML) {
        c5_caja.style.backgroundColor = "green"
    }


    //CPU

    if (valor === a1_cpu.innerHTML) {

        a1_cpu.style.backgroundColor = "green"
    } else if (valor === a2_cpu.innerHTML) {

        a2_cpu.style.backgroundColor = "green"
    } else if (valor === a3_cpu.innerHTML) {

        a3_cpu.style.backgroundColor = "green"
    } else if (valor === a4_cpu.innerHTML) {

        a4_cpu.style.backgroundColor = "green"
    } else if (valor === a5_cpu.innerHTML) {

        a5_cpu.style.backgroundColor = "green"
    }

    else if (valor === b1_cpu.innerHTML) {

        b1_cpu.style.backgroundColor = "green"
    } else if (valor === b2_cpu.innerHTML) {

        b2_cpu.style.backgroundColor = "green"
    } else if (valor === b3_cpu.innerHTML) {

        b3_cpu.style.backgroundColor = "green"
    } else if (valor === b4_cpu.innerHTML) {

        b4_cpu.style.backgroundColor = "green"
    } else if (valor === b5_cpu.innerHTML) {

        b5_cpu.style.backgroundColor = "green"
    }

    else if (valor === c1_cpu.innerHTML) {

        c1_cpu.style.backgroundColor = "green"
    } else if (valor === c2_cpu.innerHTML) {

        c2_cpu.style.backgroundColor = "green"
    } else if (valor === c3_cpu.innerHTML) {

        c3_cpu.style.backgroundColor = "green"
    } else if (valor === c4_cpu.innerHTML) {

        c4_cpu.style.backgroundColor = "green"
    } else if (valor === c5_cpu.innerHTML) {
        c5_cpu.style.backgroundColor = "green"
    }
}

// btn_numeros.onclick = sacar_numero

const btn_numeros = document.getElementById("btn")
btn_numeros.addEventListener("click", sacar_numero)
//btn_numeros.removeEventListener("click",sacar_numero)


function num_Tabla_Player() { //Generar numeros aleatorios en la tabla del Player



    console.log("Valor 1 num_Tabla_Player(): " + valor)


    //Creacion de 15 numeros aleatorios dentro de un array

    let array = []

    for (let i = 0; i < 15; i++) {

        // array.push(valor_random(0,99))
        array.push(valor_random(0, 10))

    }

    //console.log(array)

    for (let i = array.length; i >= 0; i--) {

        // console.log("array[i] "+array[i])
        // console.log("array[i+1] "+array[i+1])

        if (array[i] != array[i + 1]) {
            console.log("Entra")
            a1_caja.innerHTML = array[i]
            a2_caja.innerHTML = array[i + 1]

        } else { console.log("Valores no pueden ser iguales") }

        a3_caja.innerHTML = array[i + 2]
        a4_caja.innerHTML = array[i + 3]
        a5_caja.innerHTML = array[i + 4]

        b1_caja.innerHTML = array[i + 5]
        b2_caja.innerHTML = array[i + 6]
        b3_caja.innerHTML = array[i + 7]
        b4_caja.innerHTML = array[i + 8]
        b5_caja.innerHTML = array[i + 9]

        c1_caja.innerHTML = array[i + 10]
        c2_caja.innerHTML = array[i + 11]
        c3_caja.innerHTML = array[i + 12]
        c4_caja.innerHTML = array[i + 13]
        c5_caja.innerHTML = array[i + 14]

    }

}


num_Tabla_Player()



function num_Tabla_CPU() { //Generar numeros aleatorios en la tabla de la CPU

    console.log("Valor 1 num_Tabla_CPU(): " + valor)
    //console.log("Entra en num_Tabla_CPU")

    //Creacion de 15 numeros aleatorios dentro de un array

    let array = []

    for (let i = 0; i < 15; i++) {

        // array.push(valor_random(0,99))
        array.push(valor_random(0, 10))

    }

    //console.log(array)

    for (let i = array.length; i >= 0; i--) {

        a1_cpu.innerHTML = array[i]
        a2_cpu.innerHTML = array[i + 1]
        a3_cpu.innerHTML = array[i + 2]
        a4_cpu.innerHTML = array[i + 3]
        a5_cpu.innerHTML = array[i + 4]

        b1_cpu.innerHTML = array[i + 5]
        b2_cpu.innerHTML = array[i + 6]
        b3_cpu.innerHTML = array[i + 7]
        b4_cpu.innerHTML = array[i + 8]
        b5_cpu.innerHTML = array[i + 9]

        c1_cpu.innerHTML = array[i + 10]
        c2_cpu.innerHTML = array[i + 11]
        c3_cpu.innerHTML = array[i + 12]
        c4_cpu.innerHTML = array[i + 13]
        c5_cpu.innerHTML = array[i + 14]

    }
}


num_Tabla_CPU()


function footer_table(valor_num_bombo) { //Tabla pie resultados



    // CAJA ELEMENTO : a1_caja
    const elemento_creado_a1 = document.createElement('nuevo_div')

    elemento_creado_a1.style.display = "inline-block"
    elemento_creado_a1.style.backgroundColor = "white"
    elemento_creado_a1.style.textAlign = "center"
    elemento_creado_a1.style.color = "black"
    elemento_creado_a1.style.fontWeight = "bold"
    elemento_creado_a1.style.fontSize = "20px"
    elemento_creado_a1.style.height = "30px"
    elemento_creado_a1.style.width = "30px"
    elemento_creado_a1.style.padding = "5px"
    elemento_creado_a1.style.marginBottom = "15px"
    elemento_creado_a1.style.marginRight = "15px"
    elemento_creado_a1.prepend(a1_caja.textContent)

    if (valor_num_bombo === a1_caja.innerHTML) {

        tabla_pie.append(elemento_creado_a1)

    }


}

function footer_table2(valor_num_bombo) {

    // CAJA ELEMENTO : a2_caja
    const elemento_creado_a2 = document.createElement('nuevo_div2')

    elemento_creado_a2.style.display = "inline-block"
    elemento_creado_a2.style.backgroundColor = "white"
    elemento_creado_a2.style.textAlign = "center"
    elemento_creado_a2.style.color = "black"
    elemento_creado_a2.style.fontWeight = "bold"
    elemento_creado_a2.style.fontSize = "20px"
    elemento_creado_a2.style.height = "30px"
    elemento_creado_a2.style.width = "30px"
    elemento_creado_a2.style.padding = "5px"
    elemento_creado_a2.style.marginBottom = "15px"
    elemento_creado_a2.style.marginRight = "15px"
    elemento_creado_a2.prepend(a2_caja.textContent)

    if (valor_num_bombo === a2_caja.innerHTML) {


        tabla_pie.append(elemento_creado_a2)

    }

}

/*
    & div#a1{

                background:white;
                text-align: center;
                color:black;
                font-weight:bold;
                font-size:20px;
                height:30px;
                width:30px;
                padding:5px;
                
            }

*/


