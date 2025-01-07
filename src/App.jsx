import { useState } from "react";
import { useEffect } from "react";
import allArticles from "./data/articles";
import AppArticles from "./components/AppArticles";

function App() {

  // const [articles, setArticles] = useState(allArticles);
  // const [newArticle, setNewArticle] = useState("");

  // // al click su Submit, aggiornare array creando copia e aggiungendo nuovo articolo
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // creo copia array e lo imposto come predefinito
  //   const newArray = [...articles, newArticle];
  //   setArticles(newArray);
  // };

  // // al click su Elimina, cancellare articolo stampato
  // // badElement = elemento corrente dove ci sarà il pulsante
  // const removeElem = (badElement) => {
    
  //   // come sopra, creare nuovo array e impostarlo come predefinito
  //   const newArray = articles.filter((curArticle) => curArticle !== badElement);
  //   setArticles(newArray);
  // };

  // return (
  //   <>
  //     <section>
  //       <div className="container">
  //         <h2>Lista degli articoli</h2>
  //         <div>

  //           {/* riportare sul form con onSubmit la funzione per l'evento Submit */}
  //           <form action="" className="row" onSubmit={handleSubmit}>
  //             <label htmlFor="">Aggiungi il titolo di un articolo</label>
  //             <div>

  //               {/* input per aggiungere nuovo articolo con onChange */}
  //               <input 
  //                 type="text" 
  //                 placeholder="Scrivi il titolo dell'articolo" 
  //                 className=""
  //                 value={newArticle}                  
  //                 onChange={(event) => setNewArticle(event.target.value)}
  //               />
  //               <button type="submit" className="btn-submit">Aggiungi</button>
  //             </div>              
  //           </form>
  //         </div>
      
  //         <div className="added-articles">
  //           <h3>Articoli aggiunti</h3>
  //           <ul className="list-articles">

  //             {/* stampare articoli */}
  //             {
  //               articles.map((curArticle, index) => (
  //                 <li key={index} className="article">
  //                   <p>{curArticle}</p>

  //                   {/* tasto Elimina in cui nell'onClick metto la funzione removeElem */}
  //                   <button className="bnt-erase" onClick={() => {removeElem(curArticle)}}>Elimina</button>                  
  //                 </li>
  //               ))
  //             }
  //           </ul>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // )

  return <AppArticles />
};

export default App
