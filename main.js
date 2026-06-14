const dadosMembros = {
    sophia: {
        nome: "Sophia Cabral Soares",
        cargo: "Tech Lead & Scrum Master",
        frase: "O medo me fascina. - Ayrton Senna",
        sobre: "Líder técnica focada em guiar o desenvolvimento de projetos da Equipe Safira. Como Scrum Master, garante que a equipe mantenha sua performance.",
        foto: "img/gabriel_pasiagi-_2915_.jpg",
        habilidades: ["Liderança", "Idiomas", "Git", "Frontend", "Raciocínio Lógico", "Lutar Taekwondo"]
    },
    victor: {
        nome: "Victor Silveira de Oliveira",
        cargo: "Desenvolvedor Backend",
        frase: "Juntar-se é um começo; manter-se unido é progresso; trabalhar junto é sucesso. - Henry Ford",
        sobre: "Responsável pelo coração lógico do projeto e por tudo que acontece 'por baixo dos panos' de um site. Liga a parte de Frontend com Banco de Dados e todo o resto.",
        foto: "img/defaultuser.jpg",
        habilidades: ["Comunicação", "Intuição", "Git", "Parceria", "Brawl Stars"]
    },
    isabelle: {
        nome: "Isabelle Schimiloski Sutil",
        cargo: "Desenvolvedora Frontend",
        frase: "Transformar linhas de código em coisas bonitas e fáceis de usar.",
        sobre: "Como dev frontend, dá vida ao projeto e o retira do papel",
        foto: "img/isabelle.jpg",
        habilidades: ["Responsividade", "HTML5", "Design", "Figma", "Jogar Roblox"]
    },
    kauane: {
        nome: "Kauane Alves Camargo",
        cargo: "Banco de Dados",
        frase: "O segredo do sucesso são os pequenos dados coletados.",
        sobre: "Responsável pelo desenho lógico e físico dos dados do sistema. Garante que as informações geradas fiquem armazenadas com segurança.",
        foto: "img/defaultuserzwei.jpg",
        habilidades: ["Design", "Pensamento Intuitivo", "Modelagem SQL", "Desenho", "Segurança de informação"]
    },
    gustavo: {
        nome: "Gustavo Henrique Morer Maciel",
        cargo: "Infraestrutura",
        frase: "A melhor infraestrutura é aquela que funciona de forma silenciosa e ininterrupta.",
        sobre: "Gustavo garante a estabilidade do ecossistema de desenvolvimento. Cuida da automação dos notebooks do colégio, ao mesmo tempo que faz um pouco de tudo.",
        foto: "img/gustavo.jpg",
        habilidades: ["Comunicação", "Proatividade", "Manutenção", "Organização", "Jogar bola"]
    },
    melissa: {
        nome: "Melissa Soler da Silva",
        cargo: "Documentação",
        frase: "Código excelente sem registro vira legado incompreendido.",
        sobre: "Responsável pela engenharia de requisitos e documentação técnica do sistema. Organiza os relatórios acadêmicos exigidos pela Mostra de Cursos Técnicos.",
        foto: "img/melissa.jpg",
        habilidades: ["Organização", "Design", "Redação Técnica", "Planejamento", "Assistir Reels"]
    }
};

const sitePrincipal = document.getElementById('site-principal');
const paginaPerfil = document.getElementById('pagina-perfil');

const cardsMembros = document.querySelectorAll('.card-membro');
const btnVoltar = document.getElementById('btn-voltar');
const btnVoltarFim = document.getElementById('btn-voltar-fim');

const perfFoto = document.getElementById('perf-foto');
const perfNome = document.getElementById('perf-nome');
const perfCargo = document.getElementById('perf-cargo');
const perfFrase = document.getElementById('perf-frase');
const perfSobre = document.getElementById('perf-sobre');
const perfHabilidades = document.getElementById('perf-habilidades');
const breadNome = document.getElementById('bread-nome');

//Função para abrir a tela de perfil e carregar os dados
function exibirPerfil(idMembro){
    const info = dadosMembros[idMembro];

    if(info){
        //Preenche os campos textuais com o banco de dados
        perfNome.textContent = info.nome;
        breadNome.textContent = info.nome;
        perfCargo.textContent = info.cargo;
        perfFrase.textContent = info.frase;
        perfSobre.textContent = info.sobre;
        perfFoto.src = info.foto;
        perfFoto.alt = `Foto de ${info.nome}`;

        perfHabilidades.innerHTML = '';

        //cria as tags de habilidades
        info.habilidades.forEach(skill => {
            const tag = document.createElement('span');
            tag.classList.add('tag-skill');
            tag.textContent = skill;
            perfHabilidades.appendChild(tag);
        });

        //Alterna a exibição das telas
        sitePrincipal.classList.add('hidden');
        paginaPerfil.classList.remove('hidden');
        
        //rola automaticamente a página para o topo
        window.scrollTo(0, 0);
    }
}

// Função p voltar à tela principal
function voltarParaHome(){
    paginaPerfil.classList.add('hidden');
    sitePrincipal.classList.remove('hidden');

    //volta para a seção de membros
    const secaoMembros = document.getElementById('membros');
    if (secaoMembros) {
        secaoMembros.scrollIntoView();
    }
}

//Atribui os eventos de clique em todos os cards da grade
cardsMembros.forEach(card => {
    card.addEventListener('click', () =>{
        const idMembro = card.getAttribute('data-id');
        exibirPerfil(idMembro);
    });
});

// Atribui os eventos para os botões de voltar
btnVoltar.addEventListener('click', voltarParaHome);
btnVoltarFim.addEventListener('click', voltarParaHome);