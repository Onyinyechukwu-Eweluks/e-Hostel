import React, { useState, useEffect } from "react";
import { Form, Col, Button, FormGroup, Label, Input } from "reactstrap";
import { schools, students } from "../../API/Details";

const SchoolDetail = props => {
  const [state, setState] = useState({
    school: {},
    firstname: "",
    lastname: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    const schoolId = parseInt(props.match.params.id);

    let schoolInfo = schools.find(sch => sch.id === schoolId);
    if (schoolInfo !== undefined) {
      setState({
        ...state,
        school: schoolInfo
      });
    } else {
      props.history.push("/");
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  
  const { firstname, lastname, email, number, school } = state;

  return (
    <div className="head-background">
      <div className="container">
        <div className="header-section">
          <div className="row text-center">
            <div className="col-sm-12">
              <h1
                className="hero-heading wow fadeInDown animated animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="200ms"
              >
                Welcome To {school.school}
              </h1>
              <p
                className="sec-heading sec-heading-center sec-heading-white hero-tag wow fadeInUp animated"
                data-wow-duration="900ms"
                data-wow-delay="200ms"
              >
                Enter your details to proceed
              </p>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label column sm="2" className="column">
                Firstname:
              </Label>
              <Col sm="10" className="column">
                <Input
                  placeholder="Firstname"
                  type="text"
                  name="firstname"
                  defaultValue={firstname}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label column sm="2" className="column">
                Lastname:
              </Label>
              <Col sm="10" className="column">
                <Input
                  placeholder="Lastname"
                  type="text"
                  name="lastname"
                  defaultValue={lastname}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label column sm="2" className="column">
                Email:
              </Label>
              <Col sm="10" className="column">
                <Input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="Enter EmailAddress"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label column sm="2" className="column">
                Reg/Id number:
              </Label>
              <Col sm="10" className="column">
                <Input
                  type="text"
                  name="number"
                  defaultValue={number}
                  placeholder="Reg Number"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label column sm="10" className="column"></Label>
              <Col sm="2" className="column">
                <Button
                  variant="outline-success"
                  type="submit"
                  onClick={() => {
                    props.history.push({
                      pathname: "/verify",
                      state: {state}
                    });
                  }}
                >
                  PROCEED
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail;
