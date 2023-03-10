import React from "react";
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

// datatable related plugins
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./datatables.scss";

const DatatableTables = () => {
  const columns = [
    {
      dataField: "code",
      text: "Code",
      sort: true,
    },
    {
      dataField: "designation",
      text: "Designation",
      sort: true,
    },

    {
      dataField: "adresse",
      text: "Adresse",
      sort: true,
    },

    {
      dataField: "creation",
      text: "Creation ",
      sort: true,
    },
    {
      dataField: "contact",
      text: "Contact",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "siteWeb",
      text: "Site Web",
      sort: true,
    },
    {
      dataField: "logo",
      text: "Logo",
      sort: true,
    },
    {
      dataField: "couleur",
      text: "Couleur",
      sort: true,
    },
  ];

  // Table Data
  const entrepriseData = [
    {
      code: 1,
      designation: "EMMANUEL FM",
      creation: "14/01/2023",
      contact: "+243 999 999 999",
      email: "entreprise2@gmail.com",
      siteWeb: "wwww.entreprise1.com",
      logo: "Logo",
      couleur: "green",
    },
    {
      code: 3,
      designation: "50 FM",
      creation: "22/02/2021",
      contact: "+243 999 999 999",
      email: "entreprise@gmail.com",
      siteWeb: "wwww.entreprise2.com",
      logo: "__",
      couleur: "Yellow",
    },
    {
      code: 4,
      designation: "DIGITAL CONGO",
      creation: "22/02/2021",
      contact: "+243 999 999 999",
      email: "entreprise@gmail.com",
      siteWeb: "wwww.entreprise3.com",
      logo: "Logo",
      couleur: "Pink",
    },
    {
      code: 5,
      designation: "RTNC",
      creation: "22/02/2021",
      contact: "+243 999 999 999",
      email: "entreprise@gmail.com",
      siteWeb: "wwww.entreprise5.com",
      logo: "Logo",
      couleur: "Silver",
    },
    {
      code: 6,
      designation: "UB FM",
      creation: "22/02/2021",
      contact: "+243 999 999 999",
      email: "entreprise@gmail.com",
      siteWeb: "wwww.entreprise5.com",
      logo: "Logo",
      couleur: "Aqua",
    },
  ];

  const defaultSorted: any = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const pageOptions: any = {
    sizePerPage: 10,
    totalSize: entrepriseData.length, // replace later with size(customers),
    custom: true,
  };

  // Select All Button operation
  const selectRow: any = {
    mode: "checkbox",
  };

  const { SearchBar } = Search;

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Entreprises | Farida</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Entreprises" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">
                    List des entreprise Enregistrer
                  </h4>
                  <Link
                    to="//www.npmjs.com/package/react-super-responsive-table"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-soft-secondary"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    // columns={columns}
                    // data={entrepriseData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        columns={columns}
                        data={entrepriseData}
                        search
                      >
                        {(toolkitProps) => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col md="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    // responsive
                                    bordered={false}
                                    striped={false}
                                    defaultSorted={defaultSorted}
                                    selectRow={selectRow}
                                    classes={"table align-middle table-nowrap"}
                                    headerWrapperClasses={"thead-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row className="align-items-md-center mt-30">
                              <Col className="inner-custom-pagination d-flex">
                                <div className="d-inline">
                                  <SizePerPageDropdownStandalone
                                    {...paginationProps}
                                  />
                                </div>
                                <div className="text-md-right ms-auto">
                                  <PaginationListStandalone
                                    {...paginationProps}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DatatableTables;
