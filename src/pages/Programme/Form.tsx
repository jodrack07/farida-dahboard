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
                    <Label htmlFor="designationValidation">Designation</Label>
                    <AvField
                      name="designation"
                      placeholder="Designation"
                      type="text"
                      errorMessage="Entrez la designation de l'entreprise!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="designationValidation"
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
            </AvForm>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default From;
