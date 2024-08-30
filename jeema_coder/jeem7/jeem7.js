class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            prenomInput:"",
            nomInput:"",
            emailInput:"",
            telephoneInput:""
        }
    }
    //on pouvait creer une fonction onSubmit pour enregistrer les donnees

    render(){
        return(
            <>
            <h1 className="text-center">JeemarCoders7</h1>
            <div className="container col-lg-12 m-auto col-12">
            <form>
            {/* on peut appeler la fonction onSubmit a l'interieur de la balise form */}
        <div className ="row">
        <div class="col-6 mb-3">
              <label class="form-label">Prenom</label>
              <input
               type="text"
                class="form-control"
                value={this.state.prenomInput}
                onChange={(e) => {
                    this.setState({
                        prenomInput:e.target.value
                    })
                }}
                />
          </div>
          <div class="col-6 mb-3">
              <label class="form-label">Nom</label>
              <input
               type="text"
                class="form-control"
                value={this.state.nomInput}
                onChange={(e) => {
                    this.setState({
                        nomInput:e.target.value
                    })
                }}
                />
          </div>
        </div>
        <div className ="row">
        <div class="col-6 mb-3">
              <label class="form-label">Email</label>
              <input
               type="email"
                class="form-control"
                value={this.state.emailInput}
                onChange={(e) => {
                    this.setState({
                        emailInput:e.target.value
                    })
                }}
                />
          </div>
          <div class="col-6 mb-3">
              <label class="form-label">Telephone</label>
              <input
               type="email"
                class="form-control"
                value={this.state.telephoneInput}
                onChange={(e) =>{
                    this.setState({
                        telephoneInput:e.target.value
                        //target c'est pour cibler une (valeur)
                        //handleChange pour une fonction qui permet de mettre a jour les etats
                    })
                }}
                />
          </div>
        </div>

          <button type="submit" class="btn btn-primary w-100">Submit</button>
{/* on peut aussi la fonction onSubmit dans le button gace a l'attribut onClick */}

      </form>
            </div>
        </>
        )
        
    }
}

ReactDOM.render(<App />, document.getElementById("root"))

// utilser local storage pour stocker les donnees en se basant des commentaires