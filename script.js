// Jogo da Velha - Aperfeiçoado!
let jogo, tabuleiro, quemJoga, verifica, jogando, nivel, jogadaDaCpu, quemComeca;

jogo = new Array(); // Onde a lógica do jogo acontece.
tabuleiro = new Array(); // Responsável por gerar o visual.

quemJoga = 0;
quemComeca = 1;
jogadaDaCpu = 1;
nivel = 1;
jogando = true;

// ------------------------- Funções ---------------------------------
window.addEventListener("load", iniciar);

function iniciar() {
    // Iniciando as variáveis importantes
    let painel = document.getElementById('exibir');
    jogando = true;
    jogadaDaCpu = 1;
    quemJoga = 0;

    // Iniciando o Primeiro Array
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    // Tabuleiro com as posições marcadas
    tabuleiro = [
		[document.getElementById('item-1'), document.getElementById('item-2'), document.getElementById('item-3')],
		[document.getElementById('item-4'), document.getElementById('item-5'), document.getElementById('item-6')],
		[document.getElementById('item-7'), document.getElementById('item-8'), document.getElementById('item-9')]
	];

    // Complementos para o "onClick" do iniciar
    geraVisual();
    if (quemComeca === 1) {
        quemComeca = 0;
        quemJoga = quemComeca;
        painel.innerHTML = 'Você inicia'
    
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        painel.innerHTML = 'a máquina inicia'
        maquina();
    }

    // Função que muda a escala de zoom
    aumentaZoom();
};

const jogar = (arrayPosition) => {
    if ((jogando) && (quemJoga == 0)) {
      
        switch(arrayPosition) {
            case 1:

                if (jogo[0][0] == "") {
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }

            break
            case 2:

                if (jogo[0][1] == "") {
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }

            break
            case 3:

                if (jogo[0][2] == "") {
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }

            break
            case 4:

                if (jogo[1][0] == "") {
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }

            break
            case 5:

                if (jogo[1][1] == "") {
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }

            break
            case 6:

                if (jogo[1][2] == "") {
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }

            break
            case 7:

                if (jogo[2][0] == "") {
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }

            break
            case 8:

                if (jogo[2][1] == "") {
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }

            break
            case 9:

                if (jogo[2][2] == "") {
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }

            break
        }
        
        verifica = ganhador();
        if(quemJoga == 1) {
            
            if (verifica == "X") {
                document.getElementById('exibir').innerHTML = 'você venceu!';
                document.getElementById('exibir').style.color = 'var(--Enfeite)';
                jogando = false;
            
            } else if (verifica == "O") {
                document.getElementById('exibir').innerHTML = 'A máquina venceu!';
                document.getElementById('exibir').style.color = 'var(--Enfeite)';
                jogando = false;
            
            } 
            geraVisual();
        }
        maquina();

    }
}

const maquina = () => {

    let linha, coluna;
    if (jogando) {
        if (nivel == 1) {
            do {
                linha = Math.round(Math.random() * 2);
                coluna = Math.round(Math.random() * 2);
            }
            while (jogo[linha][coluna] != "")
            jogo[linha][coluna] = "O";
        }
        verifica = ganhador();
        if (verifica == "X") {
            document.getElementById('exibir').innerHTML = 'Você venceu!';
            document.getElementById('exibir').style.color = 'var(--Enfeite)';
            jogando = false;
        
        } else if (verifica == "O") {
            document.getElementById('exibir').innerHTML = 'A máquina venceu!';
            document.getElementById('exibir').style.color = 'var(--Enfeite)';
            jogando = false;
        
        } 
        geraVisual();
        quemJoga = 0;
    }
}

const ganhador = () => {
    let linha, coluna;

    for (linha = 0; linha < 3; linha++) {

		if ((jogo[linha][0] == jogo[linha][1]) && (jogo[linha][1] == jogo[linha][2])) {

			return jogo[linha][0];
		}
	}

	for (coluna = 0; coluna < 3; coluna++) {

		if ((jogo[0][coluna] == jogo[1][coluna]) && (jogo[1][coluna] == jogo[2][coluna])) {

			return jogo[0][coluna];
		}
	}

	// Vencedor das diagonais "/"...

	if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])) {

		return jogo[0][2];
	}

	// Vencedor das diagonais "\"...

	if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {

			return jogo[0][0];
	}

    return casoEmpate();
}

const casoEmpate = () => {
    let controle = 0;
    for (linha of jogo) {
        for (coluna of linha) {
            if((coluna == "X") || (coluna == "O")) {
                controle++
            }
        }
    }

    if (controle == 9) {
        jogando = false;
        document.getElementById('exibir').innerHTML = 'Deu Velha!';
        document.getElementById('exibir').style.color = 'var(--Enfeite)';
    }
}

const geraVisual = () => {
    for (let linha = 0; linha < 3; linha++) {

		for (let coluna = 0; coluna < 3; coluna++){

			if (jogo[linha][coluna] == "X") {

				tabuleiro[linha][coluna].innerHTML = "X";
				tabuleiro[linha][coluna].style.cursor = "default";
			
			} else if (jogo[linha][coluna] == "O") {

				tabuleiro[linha][coluna].innerHTML = "O";
				tabuleiro[linha][coluna].style.cursor = "default";
			
			} else {

				tabuleiro[linha][coluna].innerHTML = "";
				tabuleiro[linha][coluna].style.cursor = "pointer";	
			};
		};
	};
};

// ---------------------- Dark Mode --------------------------------    
let invert = 0;

const theme = () => {

    let theRoot, theMoon, theSun, theSpanUm, theSpanDois;

        theRoot = document.querySelector(':root');
        theMoon = document.getElementById('moon');
        theSun = document.getElementById('sun');
        theSpanUm = document.getElementById('claro');
        theSpanDois = document.getElementById('escuro');

    if (invert == 0) {
        theRoot.style.setProperty("--Contraste", "black");
        theRoot.style.setProperty("--hover", "rgba(255,255,255,0.08)");
        theRoot.style.setProperty("--Fundo", "white");
        theRoot.style.setProperty("--Enfeite", "floralwhite");
        theSun.style.display = "inline";
        theMoon.style.display = "none";
        theSpanUm.style.display = "inline";
        theSpanDois.style.display = "none";

        invert = 1;
    
    } else {
        theRoot.style.setProperty("--Contraste", "white");
        theRoot.style.setProperty("--hover", "rgba(0,0,0,0.08)");
        theRoot.style.setProperty("--Fundo", "black");
        theRoot.style.setProperty("--Enfeite", "#191919");
        theSun.style.display = "none";
        theMoon.style.display = "inline";
        theSpanUm.style.display = "none";
        theSpanDois.style.display = "inline";

        invert = 0;
    }

}


const aumentaZoom = () => {
    let scale = 'scale(1.2)';
    document.body.style.webkitTransform = scale; // Chrome, Opera, Safari
    document.body.style.msTransform = scale; // IE 9
    document.body.style.transform = scale;  // Todos

    // ----- Remove Scrolls ----
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; // IE

}
