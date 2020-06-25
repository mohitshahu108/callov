import React, { Fragment } from 'react';
import Carousels from './carousel';
import { Form, Col } from 'react-bootstrap';

const initalState = {
    yournameErr: '',
    lovedoneErr: '',
}

class Rcalculator extends React.Component {

    state = initalState;

    constructor(props) {
        super(props);
        this.state = {
            yourname: '',
            lovedone: '',
            relation: 'Love',
            love: '',
            yournameErr: '',
            lovedoneErr: ''
        };
    }
    validate = () => {
        let yournameErr = '';
        let lovedoneErr = '';

        if (this.state.yourname === '') {
            yournameErr = 'Please enter yourName'
        }
        if (yournameErr) {
            this.setState({ yournameErr });
            return false;
        }
        if (this.state.lovedone === '') {
            lovedoneErr = 'Please enter yourLovedOneName'
        }
        if (lovedoneErr) {
            this.setState({ lovedoneErr });
            return false;
        }
        return true;
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let lov = this.state.yourname.concat(this.state.relation, this.state.lovedone);
            lov = lov.toUpperCase();
            let fchar = "";
            let x = 0;
            let res = "";
            while (lov.length >= 4) {
                while (lov.length !== 0) {
                    x = 0;
                    fchar = lov.charAt(0);
                    for (let i = 0; i <= lov.length; i++) {
                        if (fchar === lov.charAt(i)) {
                            x++;
                            lov = lov.replace(lov.charAt(i), "");
                            i = -1;
                        }
                    }
                    res = res + x;
                }
                lov = res;
                res = "";
            }
            let num1 = Number(lov.charAt(0));
            let num2 = Number(lov.charAt(1));
            let num3 = Number(lov.charAt(2));

            var max_val = Math.max(num1, num2, num3);
            var min_val = Math.min(num1, num2, num3);

            let result = max_val + min_val + lov.charAt(0) + "%";
            this.setState({ love: result });
            this.setState(initalState);
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    myOptionChangeHandler = (event) => {
        this.setState({ relation: event.target.value })
    }
    render() {
        return (
            <Fragment>
                <Carousels />
                <div className="container bg-img">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label for="yourname">
                                yourName:
                                </Form.Label>
                            <Form.Control
                                required
                                type='text'
                                name='yourname'
                                autoComplete="off"
                                onChange={this.myChangeHandler}
                            />
                            <div style={{ fontSize: "12", color: "red" }}>
                                {this.state.yournameErr}
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Relation:</Form.Label>
                            <Form.Control as="select" value={this.state.relation} onChange={this.myOptionChangeHandler}>
                                <option value="Love">Love</option>
                                <option value="Crush">Crush</option>
                                <option value="Mother">Mother</option>
                                <option value="Father">Father</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                                <option value="Friend">Friend</option>
                                <option value="Bestie">Bestie</option>
                                <option value="SomethingElse">Something Else</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label for="lovedone">
                                yourLovedOne:
                            </Form.Label>
                            <Form.Control
                                required
                                type='text'
                                name='lovedone'
                                autoComplete="off"
                                onChange={this.myChangeHandler}
                            />
                            <div style={{ fontSize: "12", color: "red" }}>
                                {this.state.lovedoneErr}
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="center">
                        <div><button type='submit' onClick={this.mySubmitHandler} className="btn btn-danger" >Calcualte</button></div>
                    </Form.Row>
                    <br />
                    <Form.Row >
                        <div style={{
                            position: 'absolute', left: '50%', top: '70%',
                            transform: 'translate(-50%)'
                        }}>
                            <input
                                text-position="center"
                                className=""
                                type="text"
                                name="result"
                                value={this.state.love}
                                disabled />
                        </div>
                    </Form.Row>
                </div>
            </Fragment>
        );
    }
}

export default Rcalculator;