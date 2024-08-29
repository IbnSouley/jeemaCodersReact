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

    render(){
        return(
            <>
            <h1 className="text-center">JeemaCoders6</h1>
            <div className="container col-lg-6 m-auto col-12">
            <form>
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
               type="text"
                class="form-control"
                value={this.state.telephoneInput}
                onChange={(e) => {
                    this.setState({
                        telephoneInput:e.target.value
                    })
                }}
                />
          </div>
        </div>

          <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
            </div>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))