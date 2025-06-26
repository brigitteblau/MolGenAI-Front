let db;
let repository =async ()=>{
  db = await fetch("https://proyecto-25.vercel.app/all",{
  method:"POST",
})
console.log(await db.json())

}
repository()


 // let nombresDiv = document.getElementById("nombres")
  //for (let index = 0; index < db.length; index++) {
    //    let nombre = document.createElement("h2")
      //  nombre.innerText = db[index].toxicidad_potencial
        //nombresDiv.appendChild(nombre)
  //}