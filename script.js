// variáveis do menu com as âncoras
    var ancoras_menu = document.getElementsByClassName("ancoras_menu");
    var figura_menu = document.getElementById("figura_menu");
    var background_ancoras = document.getElementById("background_ancoras");
//variáveis com o modo escuro e claro
    const html = document.querySelector("html")
    var modo_claro_escuro = document.getElementById("modo_claro_escuro");
    var figura_claro_escuro = document.getElementById("figura_claro_escuro");
    

// configrando o menu das âncoras
    background_ancoras.addEventListener("mouseover",function() {
        figura_menu.setAttribute("hidden","");
        for(let i =0; i < ancoras_menu.length; i++) {
            ancoras_menu[i].removeAttribute("hidden","")
        }
        
    })

    background_ancoras.addEventListener("mouseout",function() {
        figura_menu.removeAttribute("hidden","");
        for(let i =0; i < ancoras_menu.length; i++) {
            ancoras_menu[i].setAttribute("hidden","")
        }
    })

//configurando o modo escuro e claro
    modo_claro_escuro.addEventListener("click",function() {
        html.classList.toggle("dark-mode");
    })

    
        
        
