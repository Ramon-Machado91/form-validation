let camposAPreencher = document.querySelectorAll(".campo");
let avisos = document.querySelectorAll(".msg-aviso");

camposAPreencher.forEach((item) => {
  item.addEventListener("input", () => {
    if (item.value !== "") {
      item.classList.add("campo-preenchido");
    } else {
      item.classList.remove("campo-preenchido");
    }
  });
});

function avisar(index){
  avisos[index].classList.remove("esconder");
  camposAPreencher[index].classList.add("campo-vazio");
}

function esconder(index){
  avisos[index].classList.add("esconder");
  camposAPreencher[index].classList.remove("campo-vazio");
}

function validar() {
  if (camposAPreencher[0].value === "") {
    avisar(0)
  } else {
   esconder(0)
  }

  if (camposAPreencher[1].value === "") {
    avisar(1)
  } else {
   esconder(1)
  }

  if (camposAPreencher[2].value === "") {
    avisar(2)
  } else {
   esconder(2)
  }

  if (camposAPreencher[3].value === "") {
    avisar(3)
  } else {
   esconder(3)
  }
}


