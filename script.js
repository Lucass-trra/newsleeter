var ancoras_menu = document.getElementsByClassName("ancoras_menu");
var figura_menu = document.getElementById("figura_menu");
var background_ancoras = document.getElementById("background_ancoras");

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

