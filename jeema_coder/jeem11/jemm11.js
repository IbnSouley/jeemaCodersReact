class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            prenomInput:"",
            nomInput:"",
            emailInput:"",
            telephoneInput:"",
            coders: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const newCoder = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            emailInput: this.state.emailInput,
            telephoneInput: this.state.telephoneInput
        };
        //Ajouter un nouveau codeur
        this.setState({ coders: [newCoder, ...this.state.coders] });
        //Vider le formulaire
        this.setState({
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: "",
        });

    }

    render(){
        return(
            <>
              <h1 className="text-center">JeemaCoders11</h1>
            <div className="container col-lg-12 m-aouto col-12">
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
           type="email"
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
      <button
      onClick={this.handleClick}
       type="submit" class="btn btn-primary w-100 mt-3">Submit</button>

  </form>
            </div>
            <div className="mt-5">
                <h3 className="text-center">Coders</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Prenom</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telephone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coders.map((coder, index) => (
                            <tr key={index}>
                                <td>{coder.prenom}</td>
                                <td>{coder.nom}</td>
                                <td>{coder.email}</td>
                                <td>{coder.telephone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));