/*
O que é necessário fazer? - Ao passar o mouse em cima do personagem listado, adicionar a borda azul de seleção da imagem ícone na tabela de personagens e mostrar a imagem, o nome e a descrição deste.

*/


const charactersList = document.querySelectorAll('.character');


//Agora, adicionar a classe selecionado no personagem ao qual o  usuário passar o mouse

charactersList.forEach((character) => {
    character.addEventListener('mouseenter', () => {


        const selectedCharacter = document.querySelector('.character.selected');
        selectedCharacter.classList.remove('selected');
        
        character.classList.add('selected');


    //Ao passar o mouse em cima do personagem na listagem, trocará a imagem, nome e a descrição da grande figura

    const imgBigCharacter = document.querySelector('.character-big');

    const idPersonagem = character.attributes.id.value;

    imgBigCharacter.src = `./src/images/card-${idPersonagem}.png`;

    //Agora, alteraremos o nome dos personagens grandes

    const characterName = document.getElementById('character-name');

    characterName.innerText = character.getAttribute('data-name');

    //Por fim, alteração da descrição dos personagens grandes

    const characterDescription = document.getElementById('character-description')
    characterDescription.innerText = character.getAttribute('data-description')    


    })
})

