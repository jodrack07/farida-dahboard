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

const From = () => {
  return (
    <React.Fragment>
      <Col xl={12}>
        <Card>
          <CardBody>
            <AvForm action="/" className="needs-validation">
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="nomValidation">Nom Complet</Label>
                    <AvField
                      name="nomComplet"
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
