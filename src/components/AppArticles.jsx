import axios from "axios";
import { useEffect, useState } from "react";
import AppCard from "./AppCard";
// import allArticles from "../data/articles";

const initialFormData = {
  immagine: "",
  titolo: "",
  contenuto: "",
  tags: [],
};

function AppArticles() {

  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  // const [publishMex, setPublishMex] = useState("");

  // impostare 2 messaggi al click sul checkbox publish
  // useEffect(() => {
  //   if (formData.published) {
  //     setPublishMex("Così facendo l'articolo sarà visibile!");
  //   } else {
  //     setPublishMex("");
  //   };

  // }, [formData.published]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.get("http://localhost:3001/posts").then((resp) => {
      setArticles(resp.data.ricette);
    });
  };

  // al click su Submit, aggiornare array creando copia e aggiungendo nuovo articolo
  const handleForm = (event) => {
    event.preventDefault();

    // creo id per nuovo oggetto
    // const newArticle = {
    //   ...formData,
    //   id: Date.now()
    // };

    axios.post(`http://localhost:3001/posts`, formData)
    .then((resp) => {
      console.log(resp);
      

      // creo copia array, aggiungendo il nuovo articolo
      const newArray = [...articles, resp.data];

      // aggiorno l'array (vuoto) allArticles
      setArticles(newArray);

      // svuoto i campi del form
      setFormData(initialFormData);
    });    
  };

  // al click su Elimina, cancellare articolo stampato
  // badElement = elemento corrente da cancellare
  const removeElem = (badElement) => {

    console.log(badElement);
    
    axios.delete(`http://localhost:3001/posts/${badElement}`).then((resp) => {

      // creare nuovo array e impostarlo come predefinito
      const newArray = articles.filter((curArticle) => curArticle !== badElement);

      setArticles(newArray);  

    });        
  };

  const handleInputOnChange = (event) => {

    // identificare la chiave da cambiare
    const keyToChange = event.target.name;

    // impostare nuovo valore e ricreare oggetto
    let newValue;

    if (event.target.type === "checkbox") {
      newValue = event.target.checked;
    } else {
      newValue = event.target.value;
    };

    const newData = {
      ...formData,
      [keyToChange]: newValue
    };

    // aggiorno l'oggetto 
    setFormData(newData);
  };

  // const handleCategories = (event) => {
  //   const { name, checked } = event.target;

  //   const newArray = checked
  //     ? [...(formData.category || []), name]
  //     : (formData.category || []).filter((curElem) => curElem !== name);

  //   setFormData({
  //     ...formData,
  //     category: newArray,
  //   });
  // };

  return (
    <>
      <section>
        <div className="container">
          <h2>Lista degli articoli</h2>
          <div>

            {/* riportare sul form con onSubmit la funzione per l'evento Submit */}
            <form action="" className="row" onSubmit={handleForm}>
              <h3>Aggiungi un articolo</h3>
              <div className="row">

                {/* input per aggiungere nuovo articolo con onChange */}
                <div>
                  <label className="text-label" htmlFor="artImage">Immagine</label>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Incolla il link dell'immagine dell'articolo"
                    name="immagine"
                    id="artImage"
                    value={formData.immagine}
                    onChange={handleInputOnChange}
                  />
                </div>

                <div>
                  <label className="text-label" htmlFor="artTitle">Titolo</label>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Scrivi il titolo dell'articolo"
                    name="titolo"
                    id="artTitle"
                    value={formData.titolo}
                    onChange={handleInputOnChange}
                  />
                </div>

                <div>
                  <label className="text-label" htmlFor="artContent">Descrizione</label>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Scrivi il contenuto dell'articolo"
                    name="contenuto"
                    id="artContent"
                    value={formData.contenuto}
                    onChange={handleInputOnChange}
                  />
                </div>

                {/* <div>
                  <label className="select-label" htmlFor="artFormat">Formato</label>
                  <select
                    name="format"
                    id="artFormat"
                    type="text"
                    value={formData.format}
                    onChange={handleInputOnChange}
                  >
                    <option value="Digitale">Digitale</option>
                    <option value="Cartaceo">Cartaceo</option>
                  </select>
                </div> */}

                {/* <div className="catego-list">
                  <span className="catego-title">Categorie</span>
                  <label htmlFor="artCategory">Cronaca</label>
                  <input
                    className="check-categ"
                    type="checkbox"
                    name="Cronaca"
                    id="artCategory"
                    onChange={handleCategories}
                  />

                  <label htmlFor="artCategory">Sport</label>
                  <input
                    className="check-categ"
                    type="checkbox"
                    name="Sport"
                    id="artCategory"
                    onChange={handleCategories}
                  />

                  <label htmlFor="artCategory">Scienza</label>
                  <input
                    className="check-categ"
                    type="checkbox"
                    name="Scienza"
                    id="artCategory"
                    onChange={handleCategories}
                  />

                  <label htmlFor="artCategory">Moda</label>
                  <input
                    className="check-categ"
                    type="checkbox"
                    name="Moda"
                    id="artCategory"
                    onChange={handleCategories}
                  />

                  <label htmlFor="artCategory">Politica</label>
                  <input
                    className="check-categ"
                    type="checkbox"
                    name="Politica"
                    id="artCategory"
                    onChange={handleCategories}
                  />
                </div> */}

                {/* <div className="publish-box">
                  <label htmlFor="artPublished">Pubblica libro</label>
                  <input
                    className="publish"
                    type="checkbox"
                    name="published"
                    id="artPublished"
                    value={formData.published}
                    onChange={handleInputOnChange}
                  /> */}
                  {/* <p className="publish-advise">{publishMex}</p> */}
                {/* </div> */}

                <div>
                  <button type="submit" className="btn-submit">Aggiungi</button>
                </div>
              </div>
            </form>
          </div>

          <div className="added-articles">
            <h3>Articoli aggiunti</h3>

            {/* stampare articoli */}
            {articles.length > 0 ? (
              <div className="list-articles">
                {articles.map((curArticle) => (
                  <>
                   <AppCard 
                    key={curArticle.id}
                    article={curArticle}
                  />
                  <button className="bnt-erase" onClick={() => removeElem(curArticle.id)}>Elimina</button>
                  </>
                 

                        

                ))}
              </div>
            ) : (
              <p>Non è presente nessun articolo</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
};

export default AppArticles;