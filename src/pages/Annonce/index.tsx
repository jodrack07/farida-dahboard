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
      dataField: "code",
      text: "Code",
      sort: true,
    },
    {
      dataField: "creation",
      text: "Creation",
      sort: true,
    },
    {
      dataField: "debut",
      text: "Debut",
      sort: true,
    },

    {
      dataField: "fin",
      text: "Fin ",
      sort: true,
    },

    {
      dataField: "fichier",
      text: "Fichier",
      sort: true,
    },
    {
      dataField: "details",
      text: "Details",
      sort: true,
    },
    {
      dataField: "resume",
      text: "Resume",
      sort: true,
    },
    {
      dataField: "etat",
      text: "Etat",
      sort: true,
    },
  ];

  // Table Data
  const annonceData = [
    {
      code: 2,
      creation: "01/01/2023",
      debut: "03/01/2023",
      fin: "03/02/2023",
      fichier: "file2",
      details: "cette annonce 2......",
      resume: "cette annonce 2......",
      etat: "active",
    },

    {
      code: 3,
      creation: "10/12/2022",
      debut: "12/12/2022",
      fin: "12/01/2023",
      fichier: "file3",
      details: "cette annonce 3......",
      resume: "cette annonce 3......",
      etat: "inactive",
    },

    {
      code: 4,
      creation: "20/11/2022",
      debut: "22/11/2022",
      fin: "22/12/2022",
      fichier: "file4",
      details: "cette annonce 4......",
      resume: "cette annonce 4......",
      etat: "active",
    },

    {
      code: 5,
      creation: "15/10/2022",
      debut: "17/10/2022",
      fin: "17/11/2022",
      fichier: "file5",
      details: "cette annonce 5......",
      resume: "cette annonce 5......",
      etat: "inactive",
    },

    {
      code: 6,
      creation: "01/09/2022",
      debut: "03/09/2022",
      fin: "03/10/2022",
      fichier: "file6",
      details: "cette annonce 6......",
      resume: "cette annonce 6......",
      etat: "active",
    },

    {
      code: 7,
      creation: "20/08/2022",
      debut: "22/08/2022",
      fin: "22/09/2022",
      fichier: "file7",
      details: "cette annonce 7......",
      resume: "cette annonce 7......",
      etat: "inactive",
    },

    {
      code: 8,
      creation: "10/07/2022",
      debut: "12/07/2022",
      fin: "12/08/2022",
      fichier: "file8",
      details: "cette annonce 8......",
      resume: "cette annonce 8......",
      etat: "active",
    },

    {
      code: 9,
      creation: "01/06/2022",
      debut: "03/06/2022",
      fin: "03/07/2022",
      fichier: "file9",
      details: "cette annonce 9......",
      resume: "cette annonce 9......",
      etat: "inactive",
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
          <Breadcrumbs title="Tables" breadcrumbItem="Annonces" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Toutes les annonces</h4>
                  <button
                    onClick={() => {
                      tog_center();
                    }}
                    className="btn btn-primary text-white"
                  >
                    Creer une annonce{" "}
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
          <h5 className="modal-title mt-0">Creer une nouvelle annonce</h5>
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