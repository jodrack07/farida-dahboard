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
                    <Label htmlFor="debutValidation">Date du debut</Label>
                    <AvField
                      name="debut"
                      placeholder="Debut"
                      type="date"
                      errorMessage="La date du debut de l'annonce"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="debutValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="finValidation">Date de creation</Label>
                    <AvField
                      name="date"
                      placeholder="Date de fin"
                      type="date"
                      errorMessage="Selectionnez la date de de fin de l&apos;annonce!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="finValidation"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="fileValidation">Fichier associer</Label>
                    <AvField
                      name="fichier"
                      placeholder="Selection l'affiche de l&apos;annonce"
                      type="file"
                      errorMessage="Selection l'affiche de l&apos;annonce!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="fileValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="detailValidation">Details</Label>
                    <AvField
                      name="details"
                      placeholder="Details"
                      type="text"
                      errorMessage="Entrez les details de l&apos;annonces"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="detailValidation"
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
