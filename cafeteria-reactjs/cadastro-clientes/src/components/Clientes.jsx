import { useState, useEffect } from "react";
import { Container, Button, Form, Table, Modal, Col, FormControl} from "react-bootstrap";

function Clientes(){
    const [nome, setNome] = useState('');
    const [clientes, setClientes] = useState([]);
    const [pesquisar, setPesquisar] = useState('')
    const [cadastrar, setCadastrar] = useState([]);
    const [id] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cep, setCep] = useState('');

    // porta usada 3000
    const URL= 'http://localhost:3000';
    const handlesearchConsultar = (event) => {
        const search = event.target.value;
        setPesquisar(search);
        console.log(search);

        if(search !== ''){
            const filterdata = clientes.filter( (item)=> {
                return Object.values(item).join('').includes(search)
            })
            setCadastrar(filterdata);
            console.log(filterdata);
        } else{
            setCadastrar(clientes);
            console.log(clientes);
        }  
    }
    
    useEffect(() => {
        const getcountry = async () => {
            const getres= await fetch(URL + '/clientes');
            const setcountry = await getres.json();
            setClientes(await setcountry);
        }
    getcountry();
    }, [])
    
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            itemvalues: [{}]
        });
        };
      

    const handleSubmitCadastrar = (e) => {
    e.preventDefault();
    const emp={nome, email, nascimento, cep}


    // método POST
    fetch(URL + '/clientes', {
    method:"POST",
    headers:{"content-type":"application/json"},
    body: JSON.stringify(emp)
    })
    
    .then((data) => {
        console.log(data.message);
    })
    .then((response) => {
       window.location.reload();
       window.alert("Cliente cadastrado com sucesso!"); 
    })
    .catch((error) => {
       window.alert("erro ao cadastrar.");   
       console.log(error.message);
    })
    
    }
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>


    <Container>

    <h1 className="text-center">Clientes Cadastrados</h1>
    {/* Adicioanar referência ao botão de adicionar  e sua cor (+). */}
    <Button style={{ backgroundColor: 'rgba(40, 81, 122, 1)' }}
    className="rounded-circle mr-4 font-weight-bold mb-3 float-end" onClick={handleShow}>
        +
    </Button>

    <Form inline="true">
    <Form.Group >
    <Form.Label column sm="2">
        <strong>Pesquisar Clientes</strong>
    </Form.Label>

    <Col sm="5">
        <Form.Control 
        className="mb-3"
        onChange={(e)=> { handlesearchConsultar(e) }}
        />
    </Col>
    </Form.Group>
    </Form>

    {/* inicio da tabela com os dados */}
    <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Nascimento</th>
                <th>CEP</th>
            </tr>
            </thead>
            <tbody>
                {pesquisar.length > 0 ? (
                    cadastrar.map((cliente, index) => (
                    <tr key={index}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.nascimento}</td>
                        <td>{cliente.cep}</td>
                    </tr>
                    ))):
                    (clientes.map((cliente, index)=>(
                    <tr key={index}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.nascimento}</td>
                        <td>{cliente.cep}</td>
                    </tr>
                )))
                }
            </tbody>
    </Table>


    {/* inicio do Modal com o formulário */}
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
        <Modal.Title>Cadastro</Modal.Title>
        
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleSubmitCadastrar}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Id</Form.Label>
    <Form.Control
    disabled="disabled"
    value={id}
    />

        
    <Form.Label>Nome</Form.Label>
    <Form.Control
    placeholder="Nome Completo" 
    type="text"
    name="nome"
    value={nome} onChange={e=> setNome(e.target.value)}
    />
    </Form.Group>


    <Form.Group className="mb-3"> </Form.Group>
    <Form.Label>E-mail</Form.Label>
    <FormControl
    placeholder="exemplo@gmail.com"
    type="email" 
    name="email"
    className="mb-3"
    value={email} onChange={e=> setEmail(e.target.value)}
    />

    <Form.Label>Data de Nascimento</Form.Label>
    <Form.Control 
    type="date" 
    className="form-control"
    name="nascimento"
    value={nascimento} onChange={e=> setNascimento(e.target.value)}  
    />


    <Form.Label>Cep</Form.Label>
    <Form.Control
    placeholder="00000-000"
    type="" 
    name="cep"
    value={cep} onChange={e=> setCep(e.target.value)}
    />
    </Form>

    
    </Modal.Body>

    <Modal.Footer>

    <Button variant="danger" onClick={handleReset}>
        Limpar
    </Button>

    <Button variant="success" onClick={handleSubmitCadastrar} >
        Cadastrar
    </Button>

    </Modal.Footer>
    </Modal>
    </Container>
    </>
    );
}

export default Clientes;