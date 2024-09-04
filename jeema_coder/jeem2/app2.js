class JeemaCoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: "",
            coders: [],
            editIndex: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleUpEdit = this.handleUpEdit.bind(this);
    }

    handleClick() {
        const newCoder = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            email: this.state.emailInput,
            telephone: this.state.telephoneInput
        };
        // Ajouter un nouveau codeur
        this.setState({ coders: [newCoder, ...this.state.coders] });
        // Vider le formulaire
        this.setState({
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: "",
            editIndex: null // Réinitialiser l'index d'édition
        });
    }
    handleUpEdit(index) {
        const coder = this.state.coders[index];
        this.setState({
            prenomInput: coder.prenom,
            nomInput: coder.nom,
            emailInput: coder.email,
            telephoneInput: coder.telephone,
            editIndex: index
        });
    }

    render() {
        return (
            <div className="py-4">
                <p className="text-center">JeemaCoder2</p>
                <div className="container">
                    <div style={{ maxWidth: 600, margin: "auto" }}>
                        <div className="row">
                            <div className="col-6 p-1">
                                <label className="form-label">Prenom</label>
                                <input
                                    type="text"
                                    value={this.state.prenomInput}
                                    onChange={(e) => {
                                        this.setState({ prenomInput: e.target.value });
                                    }}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-6 p-1">
                                <label className="form-label">Nom</label>
                                <input
                                    type="text"
                                    value={this.state.nomInput}
                                    className="form-control"
                                    onChange={(e) => {
                                        this.setState({ nomInput: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 p-1">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    value={this.state.emailInput}
                                    className="form-control"
                                    onChange={(e) => {
                                        this.setState({ emailInput: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-6 p-1">
                                <label className="form-label">Telephone</label>
                                <input
                                    type="text"
                                    value={this.state.telephoneInput}
                                    className="form-control"
                                    onChange={(e) => {
                                        this.setState({ telephoneInput: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        <button
                            onClick={this.state.editIndex !== null ? this.handleSaveEditSubmit : this.handleClick}
                            className="btn btn-success w-100 mt-3"
                        >
                           {this.state.editIndex !== null ? "Enregistrer" : "Submit"}
                        </button>
                    </div>
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
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.coders.map((coder, index) => (
                                <tr key={index}>
                                    <td>{coder.prenom}</td>
                                    <td>{coder.nom}</td>
                                    <td>{coder.email}</td>
                                    <td>{coder.telephone}</td>
                                    <td>
                                        <button 
                                            onClick={() => this.handleUpEdit(index)}
                                            className="btn btn-warning"
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JeemaCoder />);
