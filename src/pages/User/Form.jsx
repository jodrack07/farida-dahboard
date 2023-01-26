import React from "react";
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
import { randomId } from "src/components/NonAuthLayout";

const From = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Get the form data as an object
    const data = new FormData(event.target);
    let formData = {};
    for (const [key, value] of data) {
      formData[key] = value;
    }
    // Get the existing array from localstorage
    let info = JSON.parse(localStorage.getItem("utilisateurs")) || initialInfo;
    // Create an object with the desired properties and values
    const newData = {
      code: randomId(4),
      nom: formData.nom,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      password: "FRD" + randomId(4),
    };
    // Push the new form data to the array
    info.push(newData);
    // Save the updated array to localstorage
    localStorage.setItem("utilisateurs", JSON.stringify(info));
  };
  return (
    <React.Fragment>
      <Col xl={12}>
        <Card>
          <CardBody>
            <AvForm className="needs-validation" onSubmit={handleSubmit}>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="nomValidation">Nom Complet</Label>
                    <AvField
                      name="nom"
                      placeholder="Nom complet"
                      type="text"
                      errorMessage="Entrer le nom complet de l'utilisateur!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="nomValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="phoneValidation">Numero de Telephone</Label>
                    <AvField
                      name="phone"
                      placeholder="Numero de telephone"
                      type="number"
                      errorMessage="Entrez un numero de telephone valide!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="phoneValidation"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="emailValidation">Address email</Label>
                    <AvField
                      name="email"
                      placeholder="Entre l'adresse email"
                      type="email"
                      errorMessage="Entrez une adresse email valide"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="emailValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="addresseValidation">Addresse locale</Label>
                    <AvField
                      name="address"
                      placeholder="Addresse locale"
                      type="text"
                      errorMessage="Entrez une adresse valide!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="addresseValidation"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" type="submit">
                Enregistrez
              </Button>
            </AvForm>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default From;
