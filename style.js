// menu com as âncoras
    var ancoras_menu = document.getElementsByClassName("ancoras_menu");
    var figura_menu = document.getElementById("figura_menu");
    var background_ancoras = document.getElementById("background_ancoras");
// menu com modo escuro e claro
    const html = document.querySelector("html")
    var modo_claro_escuro = document.getElementById("modo_claro_escuro");
    var figura_claro_escuro = document.getElementById("figura_claro_escuro");

//figura do cadastro e formulário
    var sectionCadastro = document.getElementById("cadastro");
    var figuraCadastro = document.getElementById("figuraCadastro");
    var Conteiner_Figura2 = document.getElementById("Conteiner_Figura2");
    var formulario = document.getElementById("formulario");
    var conteiner_cadastro = document.getElementById("conteiner_cadastro");



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

//configurando animação para os inputs do cadastro
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

    //configurando animação para o envio das informações do formulário
    function tela_Agradecimento() {
        //---modificando o formulário para quando o botão de enviar for acionado-----

            //criando a seção para a confirmação e agradecimento a inscrição
            const conteiner_Confirmacao = document.createElement("section");
            conteiner_Confirmacao.setAttribute("class","conteiner_Confirmacao");

            //criando a imagem de verificação e definindo atributos
            const figuraVerificacao = document.createElement("img");
            figuraVerificacao.setAttribute("src","./images/verificado_semFundo.gif");
            figuraVerificacao.setAttribute("class","figura_verificacao");

            //criando o titulo de agredecimento e definindo o texto
            const tituloH2 = document.createElement("h2");
            tituloH2.innerText = "Obrigado por se inscrever em nossa newsletter";
            
            //adicionando novos nós filhos e removendo nó anterior do form
            formulario.removeChild(conteiner_cadastro);
            formulario.appendChild(conteiner_Confirmacao);
            conteiner_Confirmacao.appendChild(figuraVerificacao);
            conteiner_Confirmacao.appendChild(tituloH2);

            sectionCadastro.style.justifyContent = "center";
            sectionCadastro.style.marginLeft = "-10%";

            //estilizando os nós filhos do form e o conteiner form 
            formulario.style.marginLeft = "-80%";
            Conteiner_Figura2.setAttribute("class","Conteiner_Figura2");
            Conteiner_Figura2.style.alignItems = "flex-start";
            tituloH2.style.marginTop = "30%";
        //

        //modificando a imagem ilustrativa presente na seção de cadastro
        figuraCadastro.setAttribute("src","./images/dois.png");

      
        



    }
        
   

       
    
    
 
        
