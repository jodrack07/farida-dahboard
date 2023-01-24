import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

const From = () => {
  const [designation, setDesignation] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setDesignation("");
    setDate("");
    setAddress("");
    setPhone("");
    setEmail("");
    setWeb("");
    setColor("");
    setDescription("");
  };

  return (
    <React.Fragment>
      <Col xl={12}>
        <Card>
          <CardBody>
            <AvForm className="needs-validation">
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="designationValidation">Designation</Label>
                    <AvField
                      name="designation"
                      placeholder="Designation"
                      type="text"
                      errorMessage="Entrez la designation de l'entreprise!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="designationValidation"
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="dateValidation">Date de creation</Label>
                    <AvField
                      name="date"
                      placeholder="Date de creation"
                      type="date"
                      errorMessage="Selectionnez la date de creation"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="dateValidation"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="addressValidation">Address</Label>
                    <AvField
                      name="address"
                      placeholder="Entrer une Adress"
                      type="text"
                      errorMessage="Entrez l'addresse de l'entreprise!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="addressValidation"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="phoneValidation">Telephone</Label>
                    <AvField
                      name="telephone"
                      placeholder="Numero de telephone"
                      type="number"
                      errorMessage="Entrez un numero de telephone"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="phoneValidation"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="emailValidation">Email</Label>
                    <AvField
                      name="email"
                      placeholder="Address email"
                      type="mail"
                      errorMessage="Entrez l'address mail de l'entreprise!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="emailValidation"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="webValidation">Site web</Label>
                    <AvField
                      name="web"
                      placeholder="Website de l'entreprise"
                      type="url"
                      errorMessage="Entrez un le site web de l'entreprise!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="webValidation"
                      onChange={(e) => setWeb(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="logValidation">Logo</Label>
                    <AvField
                      name="logo"
                      placeholder="Logo"
                      type="file"
                      errorMessage="Entrez le logo de l'entreprise!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="logValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="couleurValidation">Code couleur</Label>
                    <AvField
                      name="couleur"
                      placeholder="Code couleur"
                      type="color"
                      errorMessage="Entrez le code couleur de l'entreprise!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="couleurValidation"
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup className="mb-3">
                    <div className="form-floating">
                      <Input
                        type="textarea"
                        style={{ height: "50px" }}
                        className="form-control"
                        placeholder="Description de l'entreprise"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <Label htmlFor="description">
                        Description (optional)
                      </Label>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <FormGroup className="mb-3">
                    <div className="form-check">
                      <Input
                        type="checkbox"
                        className="form-check-input"
                        id="invalidCheck"
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="invalidCheck"
                      >
                        {" "}
                        Cochez pour confirmer les informations
                      </Label>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" type="submit">
                Enregistrez
              </Button>
              {/* <button type="submit" className="btn btn-info">
                save
              </button> */}
            </AvForm>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default From;
