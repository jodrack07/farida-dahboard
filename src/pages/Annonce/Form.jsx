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
    let info = JSON.parse(localStorage.getItem("annonces")) || initialInfo;
    // Convert date into string
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = dd + "/" + mm + "/" + yyyy;

    // Create an object with the desired properties and values
    const newData = {
      code: randomId(4),
      creation: today,
      debut: formData.debut,
      fin: formData.fin,
      fichier: "Fichier" + randomId(5),
      details: formData.details,
      resume: formData.description,
      etat: "inactive",
    };
    // Push the new form data to the array
    info.push(newData);
    // Save the updated array to localstorage
    localStorage.setItem("annonces", JSON.stringify(info));
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
                    <Label htmlFor="finValidation">Date de fin</Label>
                    <AvField
                      name="fin"
                      placeholder="Date de fin"
                      type="date"
                      errorMessage="Selectionnez la date de de fin de l'annonce!"
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
                      placeholder="Selection l'affiche de l'annonce"
                      type="file"
                      errorMessage="Selection l'affiche de l'annonce!"
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
                      errorMessage="Entrez les details de l'annonces"
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
                        name="description"
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
