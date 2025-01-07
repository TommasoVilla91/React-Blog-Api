function AppCard({article}) {

    // const printCategories = props.arrayCategories.map((curArticle, curIndex) => (
    //     <span className="tag" key={curIndex}>{curArticle}</span>
    // ));

    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={article.immagine} alt="" />
                </div>
                <div className="card-text">
                    <h3>{article.titolo}</h3>
                    <p>{article.contenuto}</p>
                    {/* <div className="list-tags">
                        {printCategories}
                    </div> */}
                    
                    {/* tasto Elimina in cui nell'onClick metto la funzione removeElem */}
                    <div>
                        <button className="bnt-erase" onClick={article.erase}>Elimina</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppCard;