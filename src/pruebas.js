function lista_numeros() {

    let lista = []
    let lista2 = []

        //  1º Rellenar el array del 0 al 100
        
        for(let i = 0 ; i<100;i++){
            
            // 1º
            lista.push(i)
        }
        
        // 2º Desordenar el array
        desordenar(lista)
        console.log(lista)
        
        for(let i = 0; i<=14;i++){ // [0 ... 14]
            
            lista2.push(lista[i])
            
            
        }
        console.log(lista2)

}

lista_numeros()

    
    function desordenar(array){
        
        var vRandom,x,i
      
        //Si es un array del 0 al 99; en total son 100 numeros, i = 100-1 -> 99 hasta i=1
        for(i = array.length -1 ; i > 0; i--){
            
            vRandom = Math.floor(Math.random() * (i+1))
            x = array[i]
            array[i] = array[vRandom]
            array[vRandom] = x

            //  console.log("Inicio vRandom: "+vRandom) // 87 Valores random
            //  console.log("array[vRandom]: "+array[vRandom])// 99 Posiciones
            //  console.log("x : "+x)// 99 Posiciones
            //  console.log("array[i] : "+array[i]) // 87 Valores random
            
        }

        return array
    }

    //desordenar(array)
