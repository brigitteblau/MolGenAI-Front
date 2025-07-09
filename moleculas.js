const BASE_URL = "https://proyecto-25.vercel.app/all";
const userMoleculas = document.getElementById("moleculas-input");
const botonGenerar = document.getElementById("generar");

// cuando el usuario hace click 
botonGenerar.addEventListener("click", GetMoleculasNuevas);

//hablar ocn rochi si ella me va a pasar las molecuals validas y yo tengo 
// qeu hacer un tet a eso y despues filtrar mapear etc
  const smilesValidos = ["C1CCOCC1", "N1C=CC=CN1", "CCOC(=O)C1=CC=CC=C1"]; 


async function GetMoleculasNuevas() {
  const input = userMoleculas.value;

  // Convertimos el texto en una lista separada por espacios, comas o saltos de línea
  const moleculasLista = input
    .split(/[\s,]+/)
    .map((m) => m.trim())
    .filter((m) => m.length > 0);

  for (let i = 0; i < moleculasLista.length; i++) {
    const mol = moleculasLista[i];
    if (smilesValidos.includes(mol)) {
      console.log(` La molécula ${mol} es válida.`);
    } else {
      console.log(` La molécula ${mol} no está en la lista válida.`);
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/cambiar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moleculas: moleculasLista }),
    });

    if (!response.ok) throw new Error("Error obteniendo las moléculas nuevas");

    const data = await response.json();
    console.log("Respuesta del backend:", data);
    alert(JSON.stringify(data, null, 2))
  } catch (error) {
    console.error("Error en la petición:", error.message);
  }
}


alert(data)