rankeadas(120,40) //chamada da função.

function rankeadas(win, loser) {
    let result = win - loser
    let i = 0
    let nivel =""
    
    // Laço de repetição.
    while(i < 1) { 
        i++;
        
        // Estruturas de decisão para atribuir os níveis com base nas vitórias.
        if (result <= 10) {
            nivel = "Ferro"   
            } else if(result >= 11 && result <= 20 ){
                nivel = "Bronze"
            } else if(result >= 21 && result <= 50 ){
                nivel = "Prata"
            }else if(result >= 51 && result <= 80) {
                nivel = "Ouro"
            }else if(result >= 81 && result <= 90){
                nivel = "Diamante"
            }else if (result >= 91 && result <= 100){
                nivel = "Lendário"
            }else if(result >= 101){
                nivel = "Imortal"
            }else {
                //Apenas para depuração, caso necessário.
            }
    }

    // Exibição da mensagem. 
    console.log ("O Herói tem de saldo de " + result + " está no nível de " + nivel)
}