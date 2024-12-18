import {useState} from "react";

function App() {

  const [activeArticles, setActiveArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");

  //FUNZIONE EVENTO BOTTONE
  const handleArticlesForm = (event) => {
    event.preventDefault()

  //CONTROLLO SUL BOTTONE
  if (articleTitle !== "" && articleAuthor !== "") {
    const newArticle = {
      id: Date.now(),
      title: articleTitle,
      author: articleAuthor
    };
    const newArray = [...activeArticles, newArticle];

    setActiveArticles(newArray)

    setArticleTitle("");
    setArticleAuthor("");
  }
 };

 // FUNZIONE RIMUOVI ARTICOLO
  const removeElem = (removeArticle) => {
    const secondArray = activeArticles.filter((curItem) => curItem.id !== removeArticle.id)
    setActiveArticles(secondArray)
  } 


  return (
    <>
      <div className="container">
        <h2 className="text-center text-secondary my-3 fs-1">New articles</h2>
        {activeArticles.length > 0 ? (
          <div>
            {
              activeArticles.map((curItem) => (<div key={curItem.id}>
                <h4>{curItem.title}</h4>
                <p>{curItem.author}</p>
                <button onClick={() => {removeElem(curItem)}}>🗑️</button>
              </div>
              ))
            }
          </div>
        ) : (
          <p className="text-secondary">There are currently no articles</p>
        )
        }

        <h2 className="text-secondary mb-3">Insert a new article here</h2>
        <form action="" onSubmit={handleArticlesForm}>
          <div className="mb-3">
            <label htmlFor="title" className="text-secondary"><strong>Enter title</strong></label>
            <input className="form-control" id="title" type="text" value={articleTitle} onChange={(event) => {setArticleTitle(event.target.value)}} />
          </div>

          <div>
            <label htmlFor="author" className="text-secondary"><strong>Enter author</strong></label>
            <input type="text" id="author" className="form-control" value={articleAuthor}
              onChange={(event) => {setArticleAuthor(event.target.value)}}/>
          </div>
          <button type="submit" className="btn btn-secondary mt-3">Add Article</button>
        </form>
      </div>
    </>
  )
}

export default App
