function abrirPerfil(nome, cargo, descricao){
    document.getElementById('main-site').classList.add('hidden');
    const perfil = document.getElementById('perfil-membro');
    perfil.classList.remove('hidden');

    document.getElementById('perfil-nome').innerText = nome.toUpperCase();
    document.getElementById('perfil-cargo').innerText = cargo;
    document.getElementById('perfil-descricao').innerText = descricao;

    perfil.scrollTop = 0;
}

function fecharPerfil(){
    document.getElementById('perfil-membro').addEventListener('hidden');
    document.getElementById('main-site').classList.remove('hidden');
}

document.getElementById('perfil-membro').addEventListener('scroll', function(e)); {
    let scrollPos = e.target.scrollTop;

    let dynamicColorVal = Math.min(247-(scrollPos * 0.1), 247);
    let dynamicColorVal2 = Math.min(200 - (scrollPos *0.15), 200);

    e.target.style.background = `linear-gradient(to bottom, #141c64 0%, #141c664 25%. rgb(${dynamicColorVal}, ${dynamicColorVal2}))`
});
        