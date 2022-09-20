
// Preguntas de correccion:

        // 1. ¿COMO PODRÍA ELIMINAR EL ESTILO DEL BOTÓN?
        
        let valor,valor1=0
        let numero_Random = 0

 function valor_random_bombo(){
    

     numero_Random = Math.floor(Math.random() * 100)
  
}

function valor_random(min,max){
    return Math.floor(Math.random()*(min,max)+min)
  }

function sacar_numero(){ //Accion click botón de bombo

    // console.log("Has apretado el botón del bombo")

    // let numero_Random = 0

    // numero_Random = Math.floor(Math.random() * 100)

    // console.log(numero_Random)
    
   
    valor_random_bombo()

    let estilo = a1_caja.style.backgroundColor

   

    console.log("Log a1_caja "+ a1_caja.innerHTML)

    btn_numeros.textContent = numero_Random
    console.log("btn_numeros: "+btn_numeros.textContent)

    valor = btn_numeros.textContent
    
    valor1 = valor
    console.log("Valor 1: "+valor1)

     //2º Comparar el valor de caja a1 con el valor del bombo

    if(valor1 === a1_caja.innerHTML){

        a1_caja.style.backgroundColor="green"
        // console.log("Numero encontrado: "+sacar_numero())

    }

    if(valor1 === a2_caja.innerHTML){

        a2_caja.style.backgroundColor="green"
        // console.log("Numero encontrado: "+sacar_numero())

}
  



    // console.log(btn_numeros.style.fontStyle)

//Para obtener el texto del boton

        // No es necesario sacar el text_btn para cambiar el titulo del boton

    // let text_btn = btn_numeros.textContent || btn_numeros.innerText
    // console.log(text_btn)
    
    // text_btn = numero_Random
    
    // console.log("text_btn: "+text_btn)



}

// btn_numeros.onclick = sacar_numero

const btn_numeros = document.getElementById("btn")
btn_numeros.addEventListener("click",sacar_numero)
//btn_numeros.removeEventListener("click",sacar_numero)





function nAleatoriosCartonPlayer(){


    //1º Asignar un nº aleatorio en a1

    let pronumero_Random = Math.floor(Math.random() * 100)
    // a1_caja[0].innerHTML = pronumero_Random 
    a1_caja.innerHTML = pronumero_Random 
    console.log("Valor caja a1: "+a1_caja.innerHTML)
    
}

const a1_caja = document.getElementById("a1")

//nAleatoriosCartonPlayer()


function nAleatorios_a2(){


    //1º Asignar un nº aleatorio en a1

    let pronumero_Random = Math.floor(Math.random() * 100)
    // a1_caja[0].innerHTML = pronumero_Random 

    a2_caja.innerHTML = pronumero_Random 
    console.log("Valor caja a2: "+a2_caja.innerHTML)

    
}

const a2_caja = document.getElementById("a2")
const a3_caja = document.getElementById("a3")
//nAleatorios_a2()



function num_Tabla_Player(){

    //Creacion de 15 numeros aleatorios dentro de un array

        let array = []

        for(let i = 0; i<15; i++){

                array.push(valor_random(0,99))

        }
    
            console.log(array)

            for(let i = array.length; i>=0; i--){

                a1_caja.innerHTML = array[i]                
                a2_caja.innerHTML = array[i+1]
                a3_caja.innerHTML = array[i+2]
                    
                }
        }


num_Tabla_Player()