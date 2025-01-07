function AppCard(props) {

    const printCategories = props.arrayCategories.map((curArticle, curIndex) => (
        <span className="tag" key={curIndex}>{curArticle}</span>
    ));

    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={props.image} alt="" />
                </div>
                <div className="card-text">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <p>{props.format}</p>
                    <div className="list-tags">
                        {printCategories}
                    </div>
                    
                    {/* tasto Elimina in cui nell'onClick metto la funzione removeElem */}
                    <div>
                        <button className="bnt-erase" onClick={props.erase}>Elimina</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppCard;