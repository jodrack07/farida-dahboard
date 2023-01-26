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
    let info = JSON.parse(localStorage.getItem("program")) || initialInfo;
    // Create an object with the desired properties and values
    const newData = {
      code: randomId(4),
      designation: formData.designation,
      codeStation: randomId(4),
      jour: formData.jour,
      debut: formData.debut,
      fin: formData.fin,
      etat: "Actif",
    };
    // Push the new form data to the array
    info.push(newData);
    // Save the updated array to localstorage
    localStorage.setItem("program", JSON.stringify(info));
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
                    <Label htmlFor="jourValidation">Jour du programme</Label>
                    <AvField
                      name="jour"
                      placeholder="ex: Lundi, Mardi"
                      type="text"
                      errorMessage="Entrez le jour du programme"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="jourValidation"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="debutValidation">Heure du Debut</Label>
                    <AvField
                      name="debut"
                      placeholder="Heure du debut"
                      type="time"
                      errorMessage="Entrez l'Heure du debut!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="debutValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="finValidation">Heure de la fin</Label>
                    <AvField
                      name="fin"
                      placeholder="Heure de la fin"
                      type="time"
                      errorMessage="Entrez l'Heure de la fin!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="finValidation"
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
