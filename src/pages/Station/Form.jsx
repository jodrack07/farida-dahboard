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
    let info = JSON.parse(localStorage.getItem("station")) || initialInfo;
    // Create an object with the desired properties and values
    const newData = {
      code: randomId(4),
      creation: formData.creation,
      frequence: formData.frequence + " Hz",
      portee: formData.portee + " km",
      phone: formData.phone,
      email: formData.email,
      location: formData.address,
      longitude: formData.longitude,
      latitude: formData.latitude,
    };
    // Push the new form data to the array
    info.push(newData);
    // Save the updated array to localstorage
    localStorage.setItem("station", JSON.stringify(info));
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
                    <Label htmlFor="dateValidation">Date de creation</Label>
                    <AvField
                      name="creation"
                      placeholder="Date de creation de la station"
                      type="date"
                      errorMessage="Entrez la date de creation de la station!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="dateValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="frequencevalidation">Frequence</Label>
                    <AvField
                      name="frequence"
                      placeholder="Frenquence en (Hz)"
                      type="number"
                      errorMessage="Entrez la frequence de la station"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="frequencevalidation"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="porteeValidation">Portee</Label>
                    <AvField
                      name="portee"
                      placeholder="Portee en (km)"
                      type="number"
                      errorMessage="Entrez la portee de la station!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="porteeValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="longitudeValidation">Longitude</Label>
                    <AvField
                      name="longitude"
                      placeholder="Longitude"
                      type="text"
                      errorMessage="Entrez la Longitude de la station!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="longitudeValidation"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="latitudeValidation">latitude</Label>
                    <AvField
                      name="latitude"
                      placeholder="latitude "
                      type="text"
                      errorMessage="Entrez la latitude de la station!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="latitudeValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="phoneValidation">Telephone</Label>
                    <AvField
                      name="phone"
                      placeholder="Numero de telephone"
                      type="number"
                      errorMessage="Entrez le numero de telephone de la station!"
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
                      placeholder="email"
                      type="email"
                      errorMessage="Entrez le mail d ela station!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="emailValidation"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="adressValidation">Adresse physique</Label>
                    <AvField
                      name="address"
                      placeholder="Addresse physique de la station"
                      type="text"
                      errorMessage="Entrez une addresse physique!"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="adressValidation"
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
