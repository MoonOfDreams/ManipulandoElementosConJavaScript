let qs = (query) => {
    return document.querySelector(query);
  };
  let ul=qs("ul")
let body=qs("body");
 let h1=qs("h1");
 let color = confirm("¿Desea modo oscuro?");
 if (color) {
   body.style.backgroundColor="#7f7f7f"
   body.classList.add("fondoMoviesList")
 } 
 h1.innerText="LISTADO DE PELÍCULAS";
 h1.style.backgroundColor="teal"
 h1.style.color="white"
 h1.style.padding="20px"
 