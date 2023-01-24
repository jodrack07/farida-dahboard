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

const index = () => {
  const columns = [
    {
      dataField: "nom",
      text: "Nom complet",
      sort: true,
    },
    {
      dataField: "phone",
      text: "Telephone",
      sort: true,
    },

    {
      dataField: "email",
      text: "Email ",
      sort: true,
    },
    {
      dataField: "address",
      text: "Address",
      sort: true,
    },
  ];

  // Table Data
  const annonceData = [
    {
      nom: "Sarah Johnson",
      phone: "+1 212 555 1234",
      email: "sarah@gmail.com",
      address: "New York, NY - USA",
    },

    {
      nom: "Ahmed Ali",
      phone: "+971 50 123 4567",
      email: "ahmed@gmail.com",
      address: "Dubai - UAE",
    },

    {
      nom: "Juan Perez",
      phone: "+54 11 1234 5678",
      email: "juan@gmail.com",
      address: "Buenos Aires - Argentina",
    },

    {
      nom: "Maria Rodriguez",
      phone: "+33 6 12 34 56 78",
      email: "maria@gmail.com",
      address: "Paris - France",
    },

    {
      nom: "Takashi Yamamoto",
      phone: "+81 3 1234 5678",
      email: "takashi@gmail.com",
      address: "Tokyo - Japan",
    },

    {
      nom: "Kim Min-Jae",
      phone: "+82 10 1234 5678",
      email: "kim@gmail.com",
      address: "Seoul - South Korea",
    },

    {
      nom: "Nguyen Van An",
      phone: "+84 987 654 321",
      email: "nguyen@gmail.com",
      address: "Ho Chi Minh City - Vietnam",
    },

    {
      nom: "Piotr Kowalski",
      phone: "+48 22 123 45 67",
      email: "piotr@gmail.com",
      address: "Warsaw - Poland",
    },

    {
      nom: "Li Mei",
      phone: "+86 10 1234 5678",
      email: "li@gmail.com",
      address: "Beijing - China",
    },

    {
      nom: "Sofia Gomez",
      phone: "+57 1 1234 5678",
      email: "sofia@gmail.com",
      address: "Bogota - Colombia",
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
    totalSize: annonceData.length, // replace later with size(customers),
    custom: true,
  };

  // Select All Button operation
  const selectRow: any = {
    mode: "checkbox",
  };

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
          <title>Farida - Annonce</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Utilisateurs" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Liste d&apos;utilisateurs</h4>
                  <button
                    onClick={() => {
                      tog_center();
                    }}
                    className="btn btn-primary text-white"
                  >
                    Nouvel utulisateur{" "}
                    <i className="mdi mdi-arrow-right align-middle"></i>
                  </button>
                </CardHeader>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    // columns={columns}
                    // data={annonceData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        columns={columns}
                        data={annonceData}
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
          <h5 className="modal-title mt-0">Creer un nouvel utilisateur</h5>
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
