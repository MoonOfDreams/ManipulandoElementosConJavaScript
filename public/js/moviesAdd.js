let qs = (query) => {
    return document.querySelector(query);
  };
  const h1 = qs("h1")
const section = qs("section")
const article = qs("article")

h1.innerText = "AGREGAR PELÍCULAS"
h1.classList.add("titulo")

article.classList.add("fondoTransparente")
section.classList.add("fondoCRUD")
 