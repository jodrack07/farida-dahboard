/* eslint-disable react/display-name */
import React, { useState } from "react";
import { Row, Col, CardBody, Card, CardHeader, Modal } from "reactstrap";
import MetaTags from "react-meta-tags";
import Form from "./Form";
// data table related plugins
import "./datatables.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { String } from "lodash";
import { useHistory } from "react-router-dom";

const index = () => {
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
      adresse: "12 rue de l'entreprise",
      creation: "14/01/2023",
      contact: "+243 999 999 999",
      email: "entreprise2@gmail.com",
      siteWeb: "www.entreprise1.com",
      logo: "Logo",
      couleur: "green",
    },
    {
      code: 2,
      designation: "SOCIETE XYZ",
      adresse: "5 avenue de la societe",
      creation: "20/02/2022",
      contact: "+243 888 888 888",
      email: "societexyz@gmail.com",
      siteWeb: "www.societexyz.com",
      logo: "Logo2",
      couleur: "blue",
    },
    {
      code: 3,
      designation: "ABC Inc",
      adresse: "10 rue ABC",
      creation: "01/05/2021",
      contact: "+243 777 777 777",
      email: "abcinc@gmail.com",
      siteWeb: "www.abcinc.com",
      logo: "Logo3",
      couleur: "red",
    },
    {
      code: 4,
      designation: "DEF Ltd",
      adresse: "20 boulevard DEF",
      creation: "15/08/2022",
      contact: "+243 666 666 666",
      email: "defltd@gmail.com",
      siteWeb: "www.defltd.com",
      logo: "Logo4",
      couleur: "orange",
    },
    {
      code: 5,
      designation: "GHI SA",
      adresse: "15 rue GHI",
      creation: "28/10/2021",
      contact: "+243 555 555 555",
      email: "ghisa@gmail.com",
      siteWeb: "www.ghisa.com",
      logo: "Logo5",
      couleur: "purple",
    },
    {
      code: 6,
      designation: "JKL Corp",
      adresse: "30 avenue JKL",
      creation: "12/12/2020",
      contact: "+243 444 444 444",
      email: "jklcorp@gmail.com",
      siteWeb: "www.jklcorp.com",
      logo: "Logo6",
      couleur: "pink",
    },
    {
      code: 7,
      designation: "MNO Industries",
      adresse: "45 rue MNO",
      creation: "01/03/2022",
      contact: "+243 333 333 333",
      email: "mnoindustries@gmail.com",
      siteWeb: "www.mnoindustries.com",
      logo: "Logo7",
      couleur: "yellow",
    },
    {
      code: 8,
      designation: "PQR Co",
      adresse: "60 boulevard PQR",
      creation: "15/06/2021",
      contact: "+243 222 222 222",
      email: "pqrco@gmail.com",
      siteWeb: "www.pqrco.com",
      logo: "Logo8",
      couleur: "brown",
    },
    {
      code: 9,
      designation: "STU AG",
      adresse: "75 rue STU",
      creation: "28/09/2020",
      contact: "+243 111 111 111",
      email: "stuag@gmail.com",
      siteWeb: "www.stuag.com",
      logo: "Logo9",
      couleur: "black",
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
    clickToSelect: true,
    // onSelect: (row: any, isSelected: any) => handleRowClick(row, isSelected),
  };

  // const handleRowClick = (row: any, isSelected: boolean) => {
  //   const history = useHistory();
  //   history.push(`/sales/${row.code}`);
  // };

  const { SearchBar } = Search;
  const [modal_center, setmodal_center] = useState(false);

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  function tog_center() {
    setmodal_center(!modal_center);
    removeBodyCss();
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Farida - Entreprises</title>
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
                  <button
                    onClick={() => {
                      tog_center();
                    }}
                    className="btn btn-primary text-white"
                  >
                    Enregistrer une entreprise{" "}
                    <i className="mdi mdi-arrow-right align-middle"></i>
                  </button>
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
                                    classes={
                                      "table align-middle table-nowrap table-striped"
                                    }
                                    headerWrapperClasses={"thead-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    columns={columns}
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
      {/* Modal */}
      <Modal
        isOpen={modal_center}
        toggle={() => {
          tog_center();
        }}
        centered={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">
            Enregister une nouvelle entreprise
          </h5>
          <button
            type="button"
            onClick={() => {
              setmodal_center(false);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Form />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default index;
