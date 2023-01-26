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
      dataField: "designation",
      text: "Designation",
      sort: true,
    },
    {
      dataField: "codeStation",
      text: "Station",
      sort: true,
    },
    {
      dataField: "jour",
      text: "Jour",
      sort: true,
    },
    {
      dataField: "debut",
      text: "Debut",
      sort: true,
    },
    {
      dataField: "fin",
      text: "Fin",
      sort: true,
    },
    {
      dataField: "etat",
      text: "Etat",
      sort: true,
    },
  ];
  
let programData = [];
programData = JSON.parse(localStorage.getItem("program"));


  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: programData.length, // replace later with size(customers),
    custom: true,
  };

  // Select All Button operation
  const selectRow = {
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
          <title>Farida - Programmes</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Programmes" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Liste d&apos;Programmes</h4>
                  <button
                    onClick={() => {
                      tog_center();
                    }}
                    className="btn btn-primary text-white"
                  >
                    Nouveau programme{" "}
                    <i className="mdi mdi-arrow-right align-middle"></i>
                  </button>
                </CardHeader>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    // columns={columns}
                    // data={programData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="code"
                        columns={columns}
                        data={programData.reverse()}
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
          <h5 className="modal-title mt-0">Enregistrez un nouveau programme</h5>
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
