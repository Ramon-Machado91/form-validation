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

function validar() {
  if (camposAPreencher[0].value === "") {
    avisos[0].classList.remove("esconder");
    camposAPreencher[0].classList.add("campo-vazio");
  } else {
    avisos[0].classList.add("esconder");
    camposAPreencher[0].classList.remove("campo-vazio");
  }

  if (camposAPreencher[1].value === "") {
    avisos[1].classList.remove("esconder");
    camposAPreencher[1].classList.add("campo-vazio");
  } else {
    avisos[1].classList.add("esconder");
    camposAPreencher[1].classList.remove("campo-vazio");
  }

  if (camposAPreencher[2].value === "") {
    avisos[2].classList.remove("esconder");
    camposAPreencher[2].classList.add("campo-vazio");
  } else {
    avisos[2].classList.add("esconder");
    camposAPreencher[2].classList.remove("campo-vazio");
  }

  if (camposAPreencher[3].value === "") {
    avisos[3].classList.remove("esconder");
    camposAPreencher[3].classList.add("campo-vazio");
  } else {
    avisos[3].classList.add("esconder");
    camposAPreencher[3].classList.remove("campo-vazio");
  }
}


