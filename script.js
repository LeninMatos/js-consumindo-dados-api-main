var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/') //requisita informações do API
    .then(resposta => resposta.json()) //Transforma as informaçoes
    .then(r => { //sendo a entrada válida
        if (r.erro) { //se for uma entrada de CEP que não existe
            throw Error('Esse CEP não existe');
        } else //se for uma entrada que existe mostra o resultado "errado" ou não
            console.log(r); 
    })
    .catch(erro => console.log(erro)) //mostra o erro
    .finally(mensagem => console.log('Processamento concluído!')); //conclui o código

console.log(consultaCep);
