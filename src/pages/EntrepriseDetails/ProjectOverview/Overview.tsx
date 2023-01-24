import React from "react";
import { Card, CardBody, Row, Col, Progress } from "reactstrap";

const Overview = () => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Row>
            <Col xl={3} sm={6}>
              <Card className="border shadow-none">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-circle font-size-18">
                          <i className="uil uil-list-ul"></i>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1 text-truncate text-muted">
                        Annonces totales
                      </p>
                      <h5 className="font-size-16 mb-0">21</h5>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} sm={6}>
              <Card className="border shadow-none">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-circle font-size-18">
                          <i className="uil uil-check-circle"></i>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1 text-truncate text-muted">
                        Annonces en cours
                      </p>
                      <h5 className="font-size-16 mb-0">10</h5>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} sm={6}>
              <Card className="border shadow-none">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-circle font-size-18">
                          <i className="uil uil-users-alt"></i>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1 text-truncate text-muted">Equipe</p>
                      <h5 className="font-size-16 mb-0">12</h5>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} sm={6}>
              <Card className="border shadow-none">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-circle font-size-18">
                          <i className="uil uil-clock-eight"></i>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1 text-truncate text-muted">Activites</p>
                      <h5 className="font-size-16 mb-0">3224</h5>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={8}>
              <Card className="border shadow-none h-100 mb-lg-0">
                <CardBody>
                  <h5 className="card-title mb-4">Description</h5>

                  <div className="text-muted">
                    <p>
                      Si plusieurs langues fusionnent, la grammaire de la langue
                      résultante est plus simple et régulière que celle des
                      langues individuelles. Le nouveau langage commun sera plus
                      simple et régulier que celui existant.
                    </p>
                    <p>
                      To achieve this, it would be necessary to have uniform
                      grammar, pronunciation and more common words.
                    </p>

                    <ul className="ps-3">
                      <li className="py-1">
                        Cras ultricies mi eu turpis hendrerit
                      </li>
                      <li className="py-1">Lorem ipsum dolor sit amet</li>
                      <li className="py-1">Duis arcu tortor, suscipit eget</li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="border shadow-none h-100 mb-lg-0">
                <CardBody>
                  <h5 className="card-title mb-3">Developement</h5>

                  <div>
                    <div className="py-3">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14">Jeunesse</h5>
                        </div>
                        <div className="flex-shrink-0">
                          <p className="text-muted mb-0">07/12</p>
                        </div>
                      </div>
                      <Progress
                        value={60}
                        className="animated-progess custom-progress mt-2"
                      ></Progress>
                    </div>

                    <div className="py-3">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14">Autres</h5>
                        </div>
                        <div className="flex-shrink-0">
                          <p className="text-muted mb-0">02/07</p>
                        </div>
                      </div>
                      <Progress
                        value={20}
                        className="animated-progess custom-progress mt-2"
                      ></Progress>
                    </div>

                    <div className="py-3">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14">Other Tasks</h5>
                        </div>
                        <div className="flex-shrink-0">
                          <p className="text-muted mb-0">02/05</p>
                        </div>
                      </div>
                      <Progress
                        value={30}
                        className="animated-progess custom-progress mt-2"
                      ></Progress>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Overview;
