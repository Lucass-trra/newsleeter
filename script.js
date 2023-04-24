// variáveis do menu com as âncoras
    var ancoras_menu = document.getElementsByClassName("ancoras_menu");
    var figura_menu = document.getElementById("figura_menu");
    var background_ancoras = document.getElementById("background_ancoras");
//variáveis com o modo escuro e claro
    const html = document.querySelector("html")
    var modo_claro_escuro = document.getElementById("modo_claro_escuro");
    var figura_claro_escuro = document.getElementById("figura_claro_escuro");
//inputs do cadastro para newsletter 
    var inputsCadastro = document.getElementsByClassName("class_form");
    

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


    for (let index = 0; index < inputsCadastro.length; index++) {
        inputsCadastro[index].addEventListener("click",() => {
            inputsCadastro[index].setAttribute("style","width:75%; border-bottom: 3px solid var(--color-principal);");

                switch (index) {
                    case 0:
                        inputsCadastro[1].removeAttribute("style");
                        inputsCadastro[2].removeAttribute("style");
                    break;

                    case 1:
                        inputsCadastro[0].removeAttribute("style");
                        inputsCadastro[2].removeAttribute("style");
                    break;
                    
                    case 2:
                        inputsCadastro[1].removeAttribute("style");
                        inputsCadastro[3].removeAttribute("style");
                    break;
                
                    default:
                        break;
                }
        })



        
    }
        
   

       
    
    
 
        
