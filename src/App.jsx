import {useState} from "react";

const initalForm = {
  title: "",
  description: "",
  author: "",
  image: "",
  category: "",
  published: false
}

function App() {

  const [activeArticles, setActiveArticles] = useState([]);
  const [formData, setFormData] = useState(initalForm);
  // const [articleTitle, setArticleTitle] = useState("");
  // const [articleAuthor, setArticleAuthor] = useState("");

  //FUNZIONE EVENTO BOTTONE
  const handleArticlesForm = (event) => {
    event.preventDefault()

  //creo l'oggetto del nuovo articolo
  const newArticle = {
    ...formData,
    id: Date.now()
  }

  //CONTROLLO SUL BOTTONE
   if( !formData.author || !formData.author) {
    alert("Fin in all fields");
    return
   }

    const newArray = [...activeArticles, newArticle];
    setActiveArticles(newArray);
    
  //resetta i campi
    setFormData({...initalForm});

 
 };

 // FUNZIONE RIMUOVI ARTICOLO
  const removeElem = (removeArticle) => {
    const secondArray = activeArticles.filter((curItem) => curItem.id !== removeArticle.id)
    setActiveArticles(secondArray)
  } 


// FUNZIONE INPUT
const handleInputChange = (event) => {
  const keyToChange = event.target.name;
  const newValue = event.target.value;

  const newDataForm = {
    ...formData, 
    [keyToChange]: newValue,
  };
  setFormData(newDataForm)
}


  return (
    <>
      <div className="container">
        <h2 className="text-center text-secondary my-3 fs-1">New articles</h2>
        {activeArticles.length > 0 ? (
          <div>
            {activeArticles.map((curItem) => (<div key={curItem.id}>
                <h4>{curItem.title}</h4>
                <p>{curItem.author}</p>
                <button onClick={() => {removeElem(curItem)}}>🗑️</button>
              </div>
              ))}
          </div>
        ) : (
          <p className="text-secondary">There are currently no articles</p>
        )}
       
       {/* FORM */}
        <h2 className="text-secondary mb-3">Insert a new article here</h2>
        <form action="" onSubmit={handleArticlesForm}>
          <div className="mb-3">
            <label htmlFor="title" className="text-secondary"><strong>Enter title</strong></label>
            <input className="form-control" id="title" type="text"
            name="title" value={formData.name} onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="author" className="text-secondary"><strong>Enter author</strong></label>
            <input type="text" id="author" className="form-control"
            name="author" value={formData.author}
              onChange={handleInputChange}/>
          </div>
          <button type="submit" className="btn btn-secondary mt-3">Add Article</button>
        </form>
      </div>
    </>
  )
}

export default App
