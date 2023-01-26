import React from "react";
import MetaTags from "react-meta-tags";

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { Col, Container, Row } from "reactstrap";

import WidgetData from "./Widgets";

import Orders from "./Orders";

const Sales = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Farida | Radio Farida</title>
        </MetaTags>

        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Sales" />

          <Row>
            <WidgetData />
          </Row>

          <Row>
            <Col xl={12}>
              <Orders />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Sales;
