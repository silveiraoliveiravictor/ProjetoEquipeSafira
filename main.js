/**
 * PROJECT: Equipe Safira - Mostra de Cursos
 * ROLE: Tech Lead Architecture
 * MODULE: main.js (Global Controller)
 */

// =========================================================================
// 1. DATA REPOSITORY (Banco de Dados Local)
// =========================================================================
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
        frase: "Quanto mais difícil a vitória, maior a felicidade de ganhar. -Pelé",
        sobre: "Gustavo garante a estabilidade do ecossistema de desenvolvimento. Cuida da automação dos notebooks do colégio, ao mesmo tempo que faz um pouco de tudo.",
        foto: "img/gustavo.jpg",
        habilidades: ["Comunicação", "Proatividade", "Manutenção", "Organização", "Jogar bola"]
    },
    melissa: {
        nome: "Melissa Soler da Silva",
        cargo: "Documentação",
        frase: "Os sonhos são a estrada real para o inconsciente. -Freud",
        sobre: "Responsável pela engenharia de requisitos e documentação técnica do sistema. Organiza os relatórios acadêmicos exigidos pela Mostra de Cursos Técnicos.",
        foto: "img/melissa.jpg",
        habilidades: ["Organização", "Design", "Redação Técnica", "Planejamento", "Assistir Reels"]
    }
};

// =========================================================================
// 2. MEMBERS PROFILE MODULE (Lógica da Grade de Integrantes)
// =========================================================================

// Elementos de navegação e containers
const sitePrincipal = document.getElementById('site-principal');
const paginaPerfil = document.getElementById('pagina-perfil');
const cardsMembros = document.querySelectorAll('.card-membro');
const btnVoltar = document.getElementById('btn-voltar');
const btnVoltarFim = document.getElementById('btn-voltar-fim');

// Elementos de injeção de dados do perfil
const perfFoto = document.getElementById('perf-foto');
const perfNome = document.getElementById('perf-nome');
const perfCargo = document.getElementById('perf-cargo');
const perfFrase = document.getElementById('perf-frase');
const perfSobre = document.getElementById('perf-sobre');
const perfHabilidades = document.getElementById('perf-habilidades');
const breadNome = document.getElementById('bread-nome');

/**
 * Renderiza os dados do membro selecionado e alterna a view
 * @param {string} idMembro - Chave identificadora do objeto dadosMembros
 */
function exibirPerfil(idMembro) {
    const info = dadosMembros[idMembro];

    if (info) {
        // Hydration: Preenche os nós textuais do DOM
        perfNome.textContent = info.nome;
        breadNome.textContent = info.nome;
        perfCargo.textContent = info.cargo;
        perfFrase.textContent = info.frase;
        perfSobre.textContent = info.sobre;
        perfFoto.src = info.foto;
        perfFoto.alt = `Foto de ${info.nome}`;

        // Limpa a árvore antiga de habilidades antes de renderizar as novas
        perfHabilidades.innerHTML = '';

        // Criação dinâmica dos elementos de skill
        info.habilidades.forEach(skill => {
            const tag = document.createElement('span');
            tag.classList.add('tag-skill');
            tag.textContent = skill;
            perfHabilidades.appendChild(tag);
        });

        // Controle de Estado da UI (View Swapping)
        sitePrincipal.classList.add('hidden');
        paginaPerfil.classList.remove('hidden');
        
        window.scrollTo(0, 0);
    }
}

/**
 * Retorna o fluxo de navegação do usuário para a landing page principal
 */
function voltarParaHome() {
    paginaPerfil.classList.add('hidden');
    sitePrincipal.classList.remove('hidden');

    const secaoMembros = document.getElementById('membros');
    if (secaoMembros) {
        secaoMembros.scrollIntoView();
    }
}

// Inicialização dos Event Listeners do Módulo de Membros
cardsMembros.forEach(card => {
    card.addEventListener('click', () => {
        const idMembro = card.getAttribute('data-id');
        exibirPerfil(idMembro);
    });
});

btnVoltar.addEventListener('click', voltarParaHome);
btnVoltarFim.addEventListener('click', voltarParaHome);


// =========================================================================
// 3. INSTITUTIONAL CAROUSEL MODULE (Lógica do Slider "Nosso Colégio")
// =========================================================================
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

let currentSlide = 0;

/**
 * Atualiza o estado visual do carrossel alternando os slides e os dots
 * @param {number} index - Próximo índice de slide a ser exibido
 */
function showSlide(index) {
    // Tratamento de estouro de limites (Loop Infinito do Slider)
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Reset de classes utilitárias
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Ativação do estado do slide atual
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Eventos de clique nas setas direcionais
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// Eventos de clique para navegação direta via paginação (Dots)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});