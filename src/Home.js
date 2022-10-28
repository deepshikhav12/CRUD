import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./employee";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  const handleUpdate = (id, first, last,email ) => {
    localStorage.setItem('First',first);
    localStorage.setItem('Last',last);
    localStorage.setItem('Email',email);
    localStorage.setItem('Id',id);
  };

  const handleDelete = (id) => {
    var index = Employee.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employee.splice(index, 1);
    history("/");
  };
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employee && Employee.length > 0
              ? Employee.map((item) => {
                  return (
                    <tr>
                      <td>{item.First}</td>
                      <td>{item.Last}</td>
                      <td>{item.Email}</td>
                      <td>
                        <Link to={"/update"}>
                          <Button
                            onClick={() =>
                              handleUpdate(item.id, item.First, item.Last,item.Email)
                            }
                          >
                            UPDATE
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data found"}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}
export default Home;
