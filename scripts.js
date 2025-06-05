let db = [
    {
      "id": 1,
      "smiles": "CC(=O)OC1=CC=CC=C1C(=O)O",
      "peso_molecular": 180.16,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.7,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 2,
      "smiles": "CCN(CC)CCCC(C)NC1=NC2=CC=CC=C2C(=N1)C",
      "peso_molecular": 316.43,
      "lipinski_ok": true,
      "prediccion_bioactiva": 7.8,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 3,
      "smiles": "C1=CC=C(C=C1)C=O",
      "peso_molecular": 106.12,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.2,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 4,
      "smiles": "CC(C)NCC(O)COc1ccc2nc(S(N)(=O)=O)sc2c1",
      "peso_molecular": 322.37,
      "lipinski_ok": true,
      "prediccion_bioactiva": 8.1,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 5,
      "smiles": "C1CCCCC1",
      "peso_molecular": 84.16,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.5,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 6,
      "smiles": "CCOC(=O)C1=CC=CC=C1Cl",
      "peso_molecular": 200.65,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.0,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 7,
      "smiles": "CC(C)(C)CC1=CC=CC=C1",
      "peso_molecular": 134.22,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.3,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 8,
      "smiles": "C1=CC(=CC=C1N)O",
      "peso_molecular": 109.13,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.9,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 9,
      "smiles": "CNC(=O)C1=CC=C(O)C=C1",
      "peso_molecular": 151.16,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.1,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 10,
      "smiles": "CCCCCCCCCCCCCCCC(=O)O",
      "peso_molecular": 256.42,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.3,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 11,
      "smiles": "CC1=CC=CC=C1C(=O)NC2=CC=CC=C2",
      "peso_molecular": 225.26,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.4,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 12,
      "smiles": "CC(C)C1=CC=C(C=C1)O",
      "peso_molecular": 136.19,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.2,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 13,
      "smiles": "C1=CC(=CC=C1Cl)Cl",
      "peso_molecular": 147.01,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.6,
      "toxicidad_potencial": "Alta"
    },
    {
      "id": 14,
      "smiles": "COC1=CC=CC=C1OC",
      "peso_molecular": 138.17,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.7,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 15,
      "smiles": "CCCCN1C(=O)NC2=CC=CC=C12",
      "peso_molecular": 204.26,
      "lipinski_ok": true,
      "prediccion_bioactiva": 7.0,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 16,
      "smiles": "CN(C)C=O",
      "peso_molecular": 59.07,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.4,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 17,
      "smiles": "CC1=CC=C(C=C1)C2=CC=CC=C2",
      "peso_molecular": 180.25,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.8,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 18,
      "smiles": "CC(C)CC(C)(C)O",
      "peso_molecular": 116.16,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.5,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 19,
      "smiles": "C1=CN=CN1C2=CC=CC=C2",
      "peso_molecular": 145.17,
      "lipinski_ok": true,
      "prediccion_bioactiva": 7.2,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 20,
      "smiles": "CC(C)(C)OC(=O)N",
      "peso_molecular": 117.14,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.6,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 21,
      "smiles": "CN1CCC(CC1)OC2=CC=CC=C2",
      "peso_molecular": 207.29,
      "lipinski_ok": true,
      "prediccion_bioactiva": 7.4,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 22,
      "smiles": "C1=CC=C(C=C1)C2=NN=CN2",
      "peso_molecular": 130.14,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.0,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 23,
      "smiles": "CNC1=CC=CC=C1",
      "peso_molecular": 107.15,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.8,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 24,
      "smiles": "CCOC(=O)C1=CC=CC=C1Br",
      "peso_molecular": 229.07,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.9,
      "toxicidad_potencial": "Alta"
    },
    {
      "id": 25,
      "smiles": "C1CCOC1",
      "peso_molecular": 74.08,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.1,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 26,
      "smiles": "COC1=CC=CC=C1N",
      "peso_molecular": 123.15,
      "lipinski_ok": true,
      "prediccion_bioactiva": 5.4,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 27,
      "smiles": "CC1=C(C(=O)NC(=O)N1)C",
      "peso_molecular": 127.11,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.6,
      "toxicidad_potencial": "Media"
    },
    {
      "id": 28,
      "smiles": "CC(C)C(=O)NC1=CC=CC=C1",
      "peso_molecular": 163.21,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.9,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 29,
      "smiles": "C1=CC(=CC=C1C=O)O",
      "peso_molecular": 122.12,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.1,
      "toxicidad_potencial": "Baja"
    },
    {
      "id": 30,
      "smiles": "CC(=O)Nc1ccc(O)cc1",
      "peso_molecular": 151.16,
      "lipinski_ok": true,
      "prediccion_bioactiva": 6.7,
      "toxicidad_potencial": "Media"
    }
  ]


 // let nombresDiv = document.getElementById("nombres")
  //for (let index = 0; index < db.length; index++) {
    //    let nombre = document.createElement("h2")
      //  nombre.innerText = db[index].toxicidad_potencial
        //nombresDiv.appendChild(nombre)
  //}