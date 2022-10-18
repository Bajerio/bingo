
// Tareas:

// 1. ¿Como obtengo el valor del bombo desde el metodo footer y que se actualice con el?

let contador = 0
let contador2 = 0

let contadorPanel_CPU_a1 = 0
let contadorPanel_CPU_a2 = 0
let contadorPanel_CPU_a3 = 0
let contadorPanel_CPU_a4 = 0
let contadorPanel_CPU_a5 = 0
let contadorPanel_CPU_b1 = 0
let contadorPanel_CPU_b2 = 0
let contadorPanel_CPU_b3 = 0
let contadorPanel_CPU_b4 = 0
let contadorPanel_CPU_b5 = 0
let contadorPanel_CPU_c1 = 0
let contadorPanel_CPU_c2 = 0
let contadorPanel_CPU_c3 = 0
let contadorPanel_CPU_c4 = 0
let contadorPanel_CPU_c5 = 0

let contadorPanel_PLAYER_a1 = 0
let contadorPanel_PLAYER_a2 = 0
let contadorPanel_PLAYER_a3 = 0
let contadorPanel_PLAYER_a4 = 0
let contadorPanel_PLAYER_a5 = 0
let contadorPanel_PLAYER_b1 = 0
let contadorPanel_PLAYER_b2 = 0
let contadorPanel_PLAYER_b3 = 0
let contadorPanel_PLAYER_b4 = 0
let contadorPanel_PLAYER_b5 = 0
let contadorPanel_PLAYER_c1 = 0
let contadorPanel_PLAYER_c2 = 0
let contadorPanel_PLAYER_c3 = 0
let contadorPanel_PLAYER_c4 = 0
let contadorPanel_PLAYER_c5 = 0

let array_sin_rep = []
let lista = []
let numerosActivados = []
let numerosActivados2 = []




//PLAYER

const a1_player = document.getElementById("a1")
const a2_player = document.getElementById("a2")
const a3_player = document.getElementById("a3")
const a4_player = document.getElementById("a4")
const a5_player = document.getElementById("a5")

const b1_player = document.getElementById("b1")
const b2_player = document.getElementById("b2")
const b3_player = document.getElementById("b3")
const b4_player = document.getElementById("b4")
const b5_player = document.getElementById("b5")

const c1_player = document.getElementById("c1")
const c2_player = document.getElementById("c2")
const c3_player = document.getElementById("c3")
const c4_player = document.getElementById("c4")
const c5_player = document.getElementById("c5")

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

const btn_numeros = document.getElementById("btn")


const tabla_pie = document.getElementById("rct_blanco_res")


function valor_random(min, max) {
    return Math.floor(Math.random() * (min, max) + min)
}


function lista_array() {
    let lista = []

    for (let i = 0; i < 100; i++) {

        lista.push(i) //[ 0 ... 99 ]

    }

    // console.log("lista_array() ordenado")
    // console.log(lista)
    // console.log("lista_array() desordenado")
    desordenar(lista)
    return lista

}
lista_array()


function sacar_numero() { //Accion click botón de bombo



    //let numerosActivados = new Array(100)

    array_sin_rep = [...new Set(lista_array(lista))] //Array sin repeticiones

    //Cuando saca numeros hay que indicarle que si una posicion ya ha sido activada
    //que no vuelva a aparecer



    //console.log("array_sin_rep: "+array_sin_rep) //Array de 100 numeros aleatorios

    //valor = array_sin_rep

    let valor = 0
    let valor2 = 0


    for (let i = 0; i < array_sin_rep.length; i++) {

        valor = array_sin_rep[i]


    }
    let valorString = valor.toString()


    numerosActivados.push(valorString)
    //numerosActivados2 = new Set(numerosActivados)


    //Tipo de dato numerosActivados = String

    // for (let i = 0; i < numerosActivados.length; i++){

    //     console.log("Tipo de dato numerosActivados: "+typeof numerosActivados[i]) 


    // }

    console.log("numerosActivados: " + numerosActivados)
    //console.log("numerosActivados 2: " + numerosActivados2)

    btn_numeros.textContent = valorString
    //PLAYER


   if (valorString === a1_player.innerHTML) {

        console.log("contadorPanel_CPU_a1: " + contadorPanel_PLAYER_a1)

        if (contadorPanel_PLAYER_a1 == 0) {

            contadorPanel_PLAYER_a1++
            a1_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en a1")



    } else if (valorString === a2_player.innerHTML) {

        console.log("contadorPanel_CPU_a2: " + contadorPanel_PLAYER_a2)

        if (contadorPanel_PLAYER_a2 == 0) {

            contadorPanel_PLAYER_a2++
            a2_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en a2")




    } else if (valorString === a3_player.innerHTML) {

        console.log("contadorPanel_CPU_a3: " + contadorPanel_PLAYER_a3)

        if (contadorPanel_PLAYER_a3 == 0) {

            contadorPanel_PLAYER_a3++
            a3_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en a3")

    } else if (valorString === a4_player.innerHTML) {

        console.log("contadorPanel_CPU_a4: " + contadorPanel_PLAYER_a4)

        if (contadorPanel_PLAYER_a4 == 0) {

            contadorPanel_PLAYER_a4++
            a4_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en a4")

    } else if (valorString === a5_player.innerHTML) {

        console.log("contadorPanel_CPU_a5: " + contadorPanel_PLAYER_a5)

        if (contadorPanel_PLAYER_a5 == 0) {

            contadorPanel_PLAYER_a5++
            a5_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en a5")
    }

    else if (valorString === b1_player.innerHTML) {

        console.log("contadorPanel_CPU_b1: " + contadorPanel_PLAYER_b1)

        if (contadorPanel_PLAYER_b1 == 0) {

            contadorPanel_PLAYER_b1++
            b1_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en b1")

    } else if (valorString === b2_player.innerHTML) {
        console.log("contadorPanel_CPU_b2: " + contadorPanel_PLAYER_b2)

        if (contadorPanel_PLAYER_b2 == 0) {

            contadorPanel_PLAYER_b2++
            b2_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en b2")

    } else if (valorString === b3_player.innerHTML) {

        console.log("contadorPanel_CPU_b3: " + contadorPanel_PLAYER_b3)

        if (contadorPanel_PLAYER_b3 == 0) {

            contadorPanel_PLAYER_b3++
            b3_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en b3")

    } else if (valorString === b4_player.innerHTML) {

        console.log("contadorPanel_CPU_b4: " + contadorPanel_PLAYER_b4)

        if (contadorPanel_PLAYER_b4 == 0) {

            contadorPanel_PLAYER_b4++
            b4_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en b4")

    } else if (valorString === b5_player.innerHTML) {

        console.log("contadorPanel_CPU_b5: " + contadorPanel_PLAYER_b5)

        if (contadorPanel_PLAYER_b5 == 0) {

            contadorPanel_PLAYER_b5++
            b5_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en b5")
    }

    else if (valorString === c1_player.innerHTML) {
        console.log("contadorPanel_CPU_c1: " + contadorPanel_PLAYER_c1)

        if (contadorPanel_PLAYER_c1 == 0) {

            contadorPanel_PLAYER_c1++
            c1_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en c1")

    } else if (valorString === c2_player.innerHTML) {

        console.log("contadorPanel_CPU_: " + contadorPanel_PLAYER_c2)

        if (contadorPanel_PLAYER_c2 == 0) {

            contadorPanel_PLAYER_c2++
            c2_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en c2")

    } else if (valorString === c3_player.innerHTML) {
        console.log("contadorPanel_CPU_c3: " + contadorPanel_PLAYER_c3)

        if (contadorPanel_PLAYER_c3 == 0) {

            contadorPanel_PLAYER_c3++
            c3_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en c3")

    } else if (valorString === c4_player.innerHTML) {

        console.log("contadorPanel_CPU_c4: " + contadorPanel_PLAYER_c4)

        if (contadorPanel_PLAYER_c4 == 0) {

            contadorPanel_PLAYER_c4++
            c4_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en c4")

    } else if (valorString === c5_player.innerHTML) {

        console.log("contadorPanel_CPU_c5: " + contadorPanel_PLAYER_c5)

        if (contadorPanel_PLAYER_c5 == 0) {

            contadorPanel_PLAYER_c5++
            c5_player.style.backgroundColor = "green"
            ganadorPlayer()

        } else console.log("Valor repetido en c5")
    }





    //CPU

    if (valorString === a1_cpu.innerHTML) {

        console.log("contadorPanel_CPU_a1: " + contadorPanel_CPU_a1)

        if (contadorPanel_CPU_a1 == 0) {

            contadorPanel_CPU_a1++
            a1_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en a1")



    } else if (valorString === a2_cpu.innerHTML) {

        console.log("contadorPanel_CPU_a2: " + contadorPanel_CPU_a2)

        if (contadorPanel_CPU_a2 == 0) {

            contadorPanel_CPU_a2++
            a2_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en a2")




    } else if (valorString === a3_cpu.innerHTML) {

        console.log("contadorPanel_CPU_a3: " + contadorPanel_CPU_a3)

        if (contadorPanel_CPU_a3 == 0) {

            contadorPanel_CPU_a3++
            a3_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en a3")

    } else if (valorString === a4_cpu.innerHTML) {

        console.log("contadorPanel_CPU_a4: " + contadorPanel_CPU_a4)

        if (contadorPanel_CPU_a4 == 0) {

            contadorPanel_CPU_a4++
            a4_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en a4")

    } else if (valorString === a5_cpu.innerHTML) {

        console.log("contadorPanel_CPU_a5: " + contadorPanel_CPU_a5)

        if (contadorPanel_CPU_a5 == 0) {

            contadorPanel_CPU_a5++
            a5_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en a5")
    }

    else if (valorString === b1_cpu.innerHTML) {

        console.log("contadorPanel_CPU_b1: " + contadorPanel_CPU_b1)

        if (contadorPanel_CPU_b1 == 0) {

            contadorPanel_CPU_b1++
            b1_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en b1")

    } else if (valorString === b2_cpu.innerHTML) {
        console.log("contadorPanel_CPU_b2: " + contadorPanel_CPU_b2)

        if (contadorPanel_CPU_b2 == 0) {

            contadorPanel_CPU_b2++
            b2_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en b2")

    } else if (valorString === b3_cpu.innerHTML) {

        console.log("contadorPanel_CPU_b3: " + contadorPanel_CPU_b3)

        if (contadorPanel_CPU_b3 == 0) {

            contadorPanel_CPU_b3++
            b3_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en b3")

    } else if (valorString === b4_cpu.innerHTML) {

        console.log("contadorPanel_CPU_b4: " + contadorPanel_CPU_b4)

        if (contadorPanel_CPU_b4 == 0) {

            contadorPanel_CPU_b4++
            b4_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en b4")

    } else if (valorString === b5_cpu.innerHTML) {

        console.log("contadorPanel_CPU_b5: " + contadorPanel_CPU_b5)

        if (contadorPanel_CPU_b5 == 0) {

            contadorPanel_CPU_b5++
            b5_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en b5")
    }

    else if (valorString === c1_cpu.innerHTML) {
        console.log("contadorPanel_CPU_c1: " + contadorPanel_CPU_c1)

        if (contadorPanel_CPU_c1 == 0) {

            contadorPanel_CPU_c1++
            c1_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en c1")

    } else if (valorString === c2_cpu.innerHTML) {

        console.log("contadorPanel_CPU_: " + contadorPanel_CPU_c2)

        if (contadorPanel_CPU_c2 == 0) {

            contadorPanel_CPU_c2++
            c2_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en c2")

    } else if (valorString === c3_cpu.innerHTML) {
        console.log("contadorPanel_CPU_c3: " + contadorPanel_CPU_c3)

        if (contadorPanel_CPU_c3 == 0) {

            contadorPanel_CPU_c3++
            c3_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en c3")

    } else if (valorString === c4_cpu.innerHTML) {

        console.log("contadorPanel_CPU_c4: " + contadorPanel_CPU_c4)

        if (contadorPanel_CPU_c4 == 0) {

            contadorPanel_CPU_c4++
            c4_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en c4")

    } else if (valorString === c5_cpu.innerHTML) {

        console.log("contadorPanel_CPU_c5: " + contadorPanel_CPU_c5)

        if (contadorPanel_CPU_c5 == 0) {

            contadorPanel_CPU_c5++
            c5_cpu.style.backgroundColor = "green"
            ganadorCPU()

        } else console.log("Valor repetido en c5")
    }


    footer_table_bombo(valor)




}

// btn_numeros.onclick = sacar_numero


btn_numeros.addEventListener("click", sacar_numero)
//btn_numeros.removeEventListener("click",sacar_numero)



function ganadorPlayer() {

    contador++

    console.log("Player: " + contador + " aciertos.")

    if (contador === 15) {

        btn_numeros.style.backgroundColor = "grey"
        btn_numeros.innerHTML = "Player ha ganado"
        btn_numeros.style.cursor = "default"

        btn_numeros.removeEventListener("click", sacar_numero)

    }

}

function ganadorCPU() {

    contador2++
    console.log("CPU aciertos: " + contador2 + " aciertos.")

    if (contador2 === 15) {

        btn_numeros.style.backgroundColor = "grey"
        btn_numeros.innerHTML = "CPU ha ganado"
        btn_numeros.style.cursor = "default"

        btn_numeros.removeEventListener("click", sacar_numero)

    }

}








function num_Tabla_Player() { //Generar numeros aleatorios en la tabla del Player


    let lista = []
    let lista2 = []

    //  1º Rellenar el array del 0 al 100

    for (let i = 0; i < 100; i++) {

        // 1º
        lista.push(i)
    }

    // 2º Desordenar el array
    desordenar(lista)
    //console.log(lista)

    for (let i = 0; i <= 14; i++) { // [0 ... 14]

        lista2.push(lista[i])


    }
    //console.log(lista2)


    for (let i = lista.length; i >= 0; i--) {

        a1_player.innerHTML = lista[i]
        a2_player.innerHTML = lista[i + 1]
        a3_player.innerHTML = lista[i + 2]
        a4_player.innerHTML = lista[i + 3]
        a5_player.innerHTML = lista[i + 4]

        b1_player.innerHTML = lista[i + 5]
        b2_player.innerHTML = lista[i + 6]
        b3_player.innerHTML = lista[i + 7]
        b4_player.innerHTML = lista[i + 8]
        b5_player.innerHTML = lista[i + 9]

        c1_player.innerHTML = lista[i + 10]
        c2_player.innerHTML = lista[i + 11]
        c3_player.innerHTML = lista[i + 12]
        c4_player.innerHTML = lista[i + 13]
        c5_player.innerHTML = lista[i + 14]

    }

}


num_Tabla_Player()


function desordenar(array) {

    var vRandom, x, i

    for (i = array.length - 1; i > 0; i--) {

        vRandom = Math.floor(Math.random() * (i + 1))
        x = array[i]
        array[i] = array[vRandom]
        array[vRandom] = x

    }

    return array
}





function num_Tabla_CPU() { //Generar numeros aleatorios en la tabla de la CPU

    let lista = []
    let lista2 = []

    //  1º Rellenar el array del 0 al 100

    for (let i = 0; i < 100; i++) {

        // 1º
        lista.push(i)
    }

    // 2º Desordenar el array
    desordenar(lista)
    //console.log(lista)

    for (let i = 0; i <= 14; i++) { // [0 ... 14]

        lista2.push(lista[i])


    }
    //console.log(lista2)


    for (let i = lista.length; i >= 0; i--) {




        a1_cpu.innerHTML = lista[i]
        a2_cpu.innerHTML = lista[i + 1]
        a3_cpu.innerHTML = lista[i + 2]
        a4_cpu.innerHTML = lista[i + 3]
        a5_cpu.innerHTML = lista[i + 4]

        b1_cpu.innerHTML = lista[i + 5]
        b2_cpu.innerHTML = lista[i + 6]
        b3_cpu.innerHTML = lista[i + 7]
        b4_cpu.innerHTML = lista[i + 8]
        b5_cpu.innerHTML = lista[i + 9]

        c1_cpu.innerHTML = lista[i + 10]
        c2_cpu.innerHTML = lista[i + 11]
        c3_cpu.innerHTML = lista[i + 12]
        c4_cpu.innerHTML = lista[i + 13]
        c5_cpu.innerHTML = lista[i + 14]

    }
}


num_Tabla_CPU()


function footer_table_bombo(valor_num_bombo) { //Tabla pie resultados

    //console.log("Texto del bombo: " + valor_num_bombo)
    //Numeros del bombo
    const elemento_del_bombo = document.createElement('nuevo_div')

    elemento_del_bombo.style.display = "inline-block"
    elemento_del_bombo.style.backgroundColor = "white"
    elemento_del_bombo.style.textAlign = "center"
    elemento_del_bombo.style.color = "black"
    elemento_del_bombo.style.fontWeight = "bold"
    elemento_del_bombo.style.fontSize = "20px"
    elemento_del_bombo.style.height = "30px"
    elemento_del_bombo.style.width = "30px"
    elemento_del_bombo.style.padding = "5px"
    elemento_del_bombo.style.marginBottom = "15px"
    elemento_del_bombo.style.marginRight = "15px"
    elemento_del_bombo.prepend(valor_num_bombo)

    tabla_pie.append(elemento_del_bombo)

}




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

    // CAJA ELEMENTO : a2_player
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
    elemento_creado_a2.prepend(a2_player.textContent)

    if (valor_num_bombo === a2_player.innerHTML) {


        tabla_pie.append(elemento_creado_a2)

    }

}