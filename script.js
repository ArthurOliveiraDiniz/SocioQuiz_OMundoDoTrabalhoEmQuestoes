//Array das questões. Cada questão contém o question (com o enunciado) e asnwers (com as alternativas, que tem o id, texto e correção).
const questions = [
    {
        question: "Ricardo Antunes mostra que, diante da reestruturação produtiva, cresce um contingente de trabalhadores sem estabilidade, com baixos salários e submetidos a vínculos frágeis. Esse processo de precarização estrutural é conhecido como:", 
        answers: [
            { id: 1, text: "Expansão da classe média.", correct: false },
            { id: 2, text: "Autonomização do trabalho industrial.", correct: false },
            { id: 3, text: "Subproletarização.", correct: true },
            { id: 4, text: "Sindicalização em massa.", correct: false },
            { id: 5, text: "Formalização do emprego assalariado.", correct: false },
        ]
    },
    {
        question: "Ao retomar a leitura marxiana, Antunes destaca que a crise da sociedade do trabalho não significa o fim do trabalho em si, mas a intensificação de suas contradições sob o capitalismo. Para Marx, a base dessa crise é:", 
        answers: [
            { id: 1, text: "A transformação do trabalho em mediação social central sob o capital.", correct: true },
            { id: 2, text: "A diminuição do trabalho industrial e o aumento dos serviços.", correct: false },
            { id: 3, text: "A perda de importância da mais-valia no processo produtivo.", correct: false },
            { id: 4, text: "O crescimento da economia solidária.", correct: false },
            { id: 5, text: "O desaparecimento do proletariado fabril.", correct: false },
        ]
    },
    {
        question: "No capitalismo, o produto do trabalho passa a esconder as relações sociais de exploração que o constituem, aparecendo como se tivesse vida própria e independente. Esse fenômeno, discutido por Antunes a partir de Marx, é chamado de:", 
        answers: [
            { id: 1, text: "Alienação parcial.", correct: false },
            { id: 2, text: "Trabalho emancipado.", correct: false },
            { id: 3, text: "Valor de uso.", correct: false },
            { id: 4, text: "Economia imaterial.", correct: false },
            { id: 5, text: "Trabalho fetichizado.", correct: true },
        ]
    },
    {
        question: "Um ponto central da crítica marxiana retomada por Antunes é a distinção entre o trabalho necessário, que garante a reprodução da força de trabalho, e o trabalho excedente, que gera a riqueza apropriada pelo capital. Esse trabalho excedente corresponde:", 
        answers: [
            { id: 1, text: "À parte paga do trabalho, destinada ao consumo do trabalhador.", correct: false },
            { id: 2, text: "Ao tempo de descanso assegurado pela legislação trabalhista.", correct: false },
            { id: 3, text: "À produção voltada apenas para subsistência.", correct: false },
            { id: 4, text: "Ao trabalho não pago, que se converte em mais-valia para o capitalista.", correct: true },
            { id: 5, text: "À atividade voluntária fora do mercado.", correct: false },
        ]
    },
    {
        question: "Na transição do fordismo para novos modelos produtivos, o toyotismo aparece como referência da reestruturação do trabalho. Segundo Antunes, sua principal característica é:", 
        answers: [
            { id: 1, text: "A produção em massa com rígida divisão do trabalho.", correct: false },
            { id: 2, text: "O just-in-time, a polivalência e a flexibilização da produção.", correct: true },
            { id: 3, text: "A redução do controle empresarial sobre o processo produtivo.", correct: false },
            { id: 4, text: "O desaparecimento da exploração capitalista.", correct: false },
            { id: 5, text: "A universalização da jornada reduzida.", correct: false },
        ]
    },
    {
        question: "Antunes aponta que, na fase atual do capitalismo, a automação e a tecnologia exigem que os trabalhadores dominem tanto tarefas manuais quanto cognitivas, gerando a chamada:", 
        answers: [
            { id: 1, text: "Intelectualização do trabalho.", correct: true },
            { id: 2, text: "Desqualificação estrutural.", correct: false },
            { id: 3, text: "Alienação total.", correct: false },
            { id: 4, text: "Automação plena.", correct: false },
            { id: 5, text: "Fragmentação produtiva.", correct: false },
        ]
    },
    {
        question: "Apesar das mudanças tecnológicas e organizacionais, Antunes insiste que o capitalismo contemporâneo continua regido pela lógica marxiana da lei do valor. Isso significa que:", 
        answers: [
            { id: 1, text: "O valor é definido pelas trocas simbólicas na sociedade.", correct: false },
            { id: 2, text: "O valor continua fundamentado no tempo de trabalho socialmente necessário.", correct: true },
            { id: 3, text: "A produção não se relaciona mais ao trabalho humano.", correct: false },
            { id: 4, text: "O setor de serviços tornou a lei do valor obsoleta.", correct: false },
            { id: 5, text: "A acumulação capitalista prescinde do trabalho vivo.", correct: false },
        ]
    },
    {
        question: "Muitos autores afirmam que vivemos em uma “sociedade de serviços”. Antunes critica essa ideia, pois para ele os serviços não estão fora da lógica da exploração capitalista. Nesse sentido, podemos afirmar que:", 
        answers: [
            { id: 1, text: "O setor de serviços substituiu completamente a indústria.", correct: false },
            { id: 2, text: "O trabalho em serviços também é assalariado e submetido à exploração do capital.", correct: true },
            { id: 3, text: "A economia de serviços não gera mais-valia.", correct: false },
            { id: 4, text: "Os serviços são o núcleo de uma sociedade pós-capitalista.", correct: false },
            { id: 5, text: "A indústria perdeu totalmente sua importância.", correct: false },
        ]
    },
    {
        question: "Antunes diferencia o tempo disponível do tempo livre. O primeiro é capturado pelo capital e voltado ao consumo, enquanto o segundo só ocorre quando o indivíduo pode realmente se dedicar a atividades criativas e emancipatórias. Assim, o tempo livre é:", 
        answers: [
            { id: 1, text: "O tempo usado para realizar horas extras.", correct: false },
            { id: 2, text: "O tempo dedicado ao deslocamento casa-trabalho.", correct: false },
            { id: 3, text: "O tempo excedente usado autonomamente para descanso, lazer ou criação.", correct: true },
            { id: 4, text: "O tempo destinado a treinamentos obrigatórios da empresa.", correct: false },
            { id: 5, text: "O tempo gasto com consumo compulsório.", correct: false },
        ]
    },
    {
        question: "No debate sobre a chamada “revolução do trabalho”, Antunes mostra que não se trata do fim do trabalho, mas da sua reorganização sob novas bases. Essa revolução corresponde:", 
        answers: [
            { id: 1, text: "À passagem direta do capitalismo ao socialismo.", correct: false },
            { id: 2, text: "À autogestão generalizada pelos trabalhadores.", correct: false },
            { id: 3, text: "Ao desaparecimento do assalariamento.", correct: false },
            { id: 4, text: "À superação definitiva da mais-valia.", correct: false },
            { id: 5, text: "À reestruturação produtiva, às novas tecnologias e à flexibilização do trabalho.", correct: true },
        ]
    }
]

//Array contendo os níveis do personagem. Cada nível contem o nível (nome), imagem, texto quando sobre pro nível (exceto o último) e texto se mantem o mesmo nível (exceto o primeiro).
const levels = [
    {
        nível: "Sem Condições de Trabalho",
        img: "img/level0.png",
        textoMesmoNÍvel: "Sem entender os caminhos do trabalho, seu personagem continua <strong>Sem Condições de Trabalho</strong>, preso à miséria e sem perspectivas."
    },
    {
        nível: "Desempregado",
        img: "img/level1.png",
        textoMesmoNÍvel: "O personagem permanece <strong>Desempregado</strong>, vivendo de bicos ocasionais e sob forte pressão social.",
        textoNovoNível: "Seu personagem saiu da exclusão total e agora busca uma vaga no mercado. Evoluiu para <strong>Desempregado</strong>, cheio de esperança e à procura de oportunidades!"
    },
    {
        nível: "Trabalhador em Condições Perigosas",
        img: "img/level2.png",
        textoMesmoNÍvel: "Continua <strong>Trabalhador em Condições Perigosas</strong>, exposto a acidentes e exploração intensa.",
        textoNovoNível: "Seu personagem conseguiu se inserir no mercado, mas em uma ocupação arriscada. Evoluiu para <strong>Trabalhador em Condições Perigosas</strong>, enfrentando riscos diários!"
    },
    {
        nível: "Trabalhador Informal",
        img: "img/level3.png",
        textoMesmoNÍvel: "Permanece como <strong>Trabalhador Informal</strong>, sem estabilidade e sem direitos assegurados.",
        textoNovoNível: "Seu personagem escapou dos riscos imediatos e se tornou <strong>Trabalhador Informal</strong>. Não tem garantias nem direitos, mas sobrevive no dia a dia."
    },
    {
        nível: "Trabalhador 6x1",
        img: "img/level4.png",
        textoMesmoNÍvel: "Continua no ritmo desgastante do <strong>Trabalhador 6x1</strong>, sem tempo para si e sempre cansado.",
        textoNovoNível: "Agora o personagem é um <strong>Trabalhador 6x1</strong>. Tem registro, mas enfrenta jornadas longas, pouco descanso e muito esforço."
    },
    {
        nível: "Trabalhador CLT",
        img: "img/level5.png",
        textoMesmoNÍvel: "Continua como <strong>Trabalhador CLT</strong>, limitado ao que a lei garante, sem poder de mobilização coletiva",
        textoNovoNível: "O personagem conquistou espaço e agora é um <strong>Trabalhador CLT</strong>. Tem salário fixo e férias, mas ainda sente o peso da exploração."
    },
    {
        nível: "Trabalhador Sindicalizado",
        img: "img/level6.png",
        textoMesmoNÍvel: "Permanece como <strong>Trabalhador Sindicalizado</strong>, ainda vulnerável às crises do mercado.",
        textoNovoNível: "O personagem encontrou força coletiva e agora é um <strong>Trabalhador Sindicalizado</strong>, lutando por melhores condições com seus colegas."
    },
    {
        nível: "Trabalhador Concursado",
        img: "img/level7.png",
        textoMesmoNÍvel: "Continua como <strong>Trabalhador Concursado</strong>, protegido, mas sem acompanhar a transformação global do trabalho.",
        textoNovoNível: "O personagem alcançou estabilidade e virou <strong>Trabalhador Concursado</strong>. Agora tem segurança financeira e garantias contra demissão arbitrária."
    },
    {
        nível: "Trabalhador Globalizado",
        img: "img/level8.png",
        textoMesmoNÍvel: "Permanece como <strong>Trabalhador Globalizado</strong>, preso às oscilações internacionais e à precarização digital.",
        textoNovoNível: "O personagem agora é um <strong>Trabalhador Globalizado</strong>, inserido em um mercado interconectado e repleto de desafios e oportunidades."
    },
    {
        nível: "Trabalhador Intelectualizado",
        img: "img/level9.png",
        textoMesmoNÍvel: "O personagem se mantém como <strong>Trabalhador Intelectualizado</strong>, ainda pertencente a classe trabalhadora intelectual",
        textoNovoNível: "O personagem evoluiu para <strong>Trabalhador Intelectualizado</strong>, unindo técnica e conhecimento e se destacando no mercado."
    },
    {
        nível: "Trabalhador Politizado",
        img: "img/level10.png",
        textoNovoNível: "O personagem chegou ao topo: <strong>Trabalhador Politizado</strong>. Representa a consciência plena da precarização estrutural."
    },
]

//Array contendo os adversários. Cada adversário tem o nome e a imagem.
const opponent = [
    {
        name: "Chefe Tóxico",
        img: "img/opponent1.png"
    },
    {
        name: "Recrutador Exigente",
        img:  "img/opponent2.png"
    },
    {
        name: "Gerente de Metas",
        img: "img/opponent3.png"
    },
    {
        name: "Banqueiro",
        img: "img/opponent4.png"
    },
    {
        name: "Investidor Especular",
        img: "img/opponent5.png"
    },
    {
        name: "Empresário Explorador",
        img: "img/opponent6.png"
    },
    {
        name: "Fiscal Burocrata",
        img: "img/opponent7.png"
    },
    {
        name: "Supervisor de Produção",
        img: "img/opponent8.png"
    },
    {
        name: "Consultor de RH",
        img:  "img/opponent9.png"
    },
    {
        name: "Político Empresarial",
        img:  "img/opponent10.png"
    },
]

//Elementos do bloco das alternativas.
const alternativeBlock = document.getElementById("alternativeBlock");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const consequenceButton = document.getElementById("next-btn");
const levelImage = document.getElementById("level");
const levelName = document.getElementById("levelName");
const opponentImage = document.getElementById("opponent");
const opponentName = document.getElementById("opponentName");

//Elementos do bloco das consequências.
const consequenceBlock = document.getElementById("consequenceBlock");
const consequenceImage = document.getElementById("consequenceImg");
const mainMessage = document.getElementById("mainMessage");
const levelNow = document.getElementById("levelNow");
const consequenceText = document.getElementById("consequenceText");
const alternativeButton = document.getElementById("next");

//Elementos do bloco da pontuação.
const scoreBlock = document.getElementById("scoreBlock");
const scoreElement = document.getElementById("scoreText");
const finalImg = document.getElementById("finalImg");
const finalLevel = document.getElementById("finalLevel");
const finalText = document.getElementById("finalText");

//Elementos do início.
const startButton = document.getElementById("start");

//Variáveis de funcionamento do jogo.
let currentQuestionIndex = 0;        //Questão.
let score = 0;                       //pontuação.

//Função que começa e roda o jogo, inicializada no quiz.html.
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

//Função que mostra a questão.
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];                     //Pega as informações da questão atual vinda do array.
    let questionNo = currentQuestionIndex + 1;                                 //Número da questão atual.
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  //Atualiza o HTML colocando o enunciado.

    //Modifica a imagem e o nome do personagem com base na quantidade de acertos (nível)
    let currentLevel = levels[score];
    let currentLevelImage = currentLevel.img;
    levelImage.src = currentLevelImage;
    let currentLevelName = currentLevel.nível;
    levelName.innerHTML = currentLevelName;

    //Modifica a imagem e o nome do oponente com base na questão
    let currentOpponent = opponent[currentQuestionIndex];
    let currentOpponentImage = currentOpponent.img;
    opponentImage.src = currentOpponentImage;
    let currentOpponentName = currentOpponent.name;
    opponentName.innerHTML = currentOpponentName;

    //Adiciona os botões das alternativas no HTML com cada uma das alternativas vindas do array.
    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement("button");  //Cria um button no HTML.
        button.innerHTML = answers.text;                  //Adiciona o texto da alternativa no button em questão.
        button.dataset.id = answers.id;                   //Adiciona um id ao button.
        button.classList.add("btn");                      //Adiciona o estilo do botão por meio da class btn.
        button.addEventListener("click", selectAnswer);   //Adiciona a função selectAnswer por meio do clique no botão.
        answerButtons.appendChild(button);
        }
    )
}

//Função que mostra o bloco das alternativas e desabilita o bloco da consequência, e limpa as alternativas anteriores.
function resetState(){
    alternativeBlock.style.display = "block";
    consequenceButton.style.display = "none";
    consequenceBlock.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//Função que seleciona a resposta por meio do botão.
function selectAnswer(e){
    answers = questions[currentQuestionIndex].answers;                            //Pega todas as respostas da questão no array.
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];  //Pega a resposta correta.
    const selectedBtn = e.target;                                                 //Pega as informações do botão selecionado.
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;                 //Verifica se a alternativa selecionada é a correta.

    if (isCorrect) {
        selectedBtn.classList.add("correct");    //Adiciona o estilo de certo por meio da class correct ao botão selecionado.
        score++;                                 //Aumenta a pontuação.

        //Customização do bloco de consequência
        mainMessage.style.color = "#45bb45";
        if (score == 10){
            mainMessage.innerHTML = "🏆Nível Máxima!🏆";
        } else {
            mainMessage.innerHTML = "🎉Novo Nível🎉";
        }
        levelNow.innerHTML = levels[score].nível;
        consequenceText.innerHTML = levels[score].textoNovoNível;    //Adiciona o texto de novo nível
    } else {
        selectedBtn.classList.add("incorrect"); //Adiciona o estilo de errado por meio da class incorrect ao botão selecionado.

        //Customização do bloco de consequência
        mainMessage.style.color = "#d72727";
        mainMessage.innerHTML = "⚠️Estagnação⚠️";
        levelNow.innerHTML = levels[score].nível;
        consequenceText.innerHTML = levels[score].textoMesmoNÍvel;
    }

    consequenceImage.src = levels[score].img;
    Array.from(answerButtons.children).forEach((button) => { //Desabilita todos os botões de alternativas.
        button.disabled = true;
    })
    consequenceButton.innerHTML = "Consequência"; //Adiciona o texto ao botão de consequência.
    consequenceButton.style.display = "block";    //Mostra o botão de consequência.
}

//Faz o botão de consequência mostrar o bloco da consequência.
consequenceButton.addEventListener("click", () => {
    showConsequence();
})

//Função para mostrart o bloco de consequência
function showConsequence(){
    alternativeBlock.style.display = "none";   //Desabilita o bloco das alternativas.
    consequenceBlock.style.display = "block";  //Mostra o bloco das consequências.
    alternativeButton.style.display = "block";    //Mostra o botão de seguir.
}

//Faz o botão de "seguir" mostrar a próxima questão ou a pontuação final.
alternativeButton.addEventListener("click", () => {
    currentQuestionIndex++;                         //Aumenta o número da questão.
    if (currentQuestionIndex < questions.length){
        showQuestion();                             //Mostra a próxima questão se ainda tiver questões para mostrar.
    } else {
        showScore();                                //Mostra a pontuação final se acabou as questões.
    }
})

//Limpa todo o jogo, removendo o bloco de alternativa e consequência, e os botões de consequência e seguir.
function clearGame(){
    alternativeBlock.style.display = "none";
    alternativeButton.style.display = "none";
    consequenceBlock.style.display = "none";
    consequenceButton.style.display = "none";
}

//Mostra o resultado final do jogo
function showScore(){
    clearGame();                                                                        //Limpa o jogo.
    scoreBlock.style.display = "block";                                                 //Mostra o bloco de pontuação.
    scoreElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`; //Mostra o texto da pontuação.
    
    finalImg.src = levels[score].img;
    finalLevel.innerHTML = "Nível Final: " + levels[score].nível;       
    if (score < 4){
        finalText.innerHTML = "❌ Seu personagem não conseguiu avançar muito. A exploração e a instabilidade marcaram sua trajetória, deixando-o vulnerável e sem perspectivas de futuro.";
    } else if (score < 7){
        finalText.innerHTML = "⚖️ Seu personagem conquistou alguns avanços, mas ainda sente as contradições do sistema. Vive oscilando entre estabilidade e precarização.";
    } else {
        finalText.innerHTML = "🌟 Parabéns! Seu personagem alcançou um nível elevado de consciência e evolução no mundo do trabalho. Conseguiu melhores condições e clareza sobre o sistema capitalista";
    }

    startButton.style.display = "block";                                                //Mostra o botão de iniciar.
    startButton.innerHTML = "Jogue Novamente!";                                         //Adiciona o Jogar Novamente ao Botão iniciar.
    startButton.style.width = "200px";                                                  //Aumenta a largura do botão.
}

//Inicia o jogo
startQuiz()