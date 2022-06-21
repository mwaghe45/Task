import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loadUsers, deleteUser, serchUsers } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Home = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const DeleteUser = (id, name) => {
    if (window.confirm(`Are you sure to Delete ${name}`)) {
      dispatch(deleteUser(id));
    }
  };
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light d-flex justify-content-between">
        <h5 class="text-dark mx-4">Task</h5>
        <h6 class="text-secondary mx-4 ">Home</h6>
      </nav>
      <div className="row my-2 mx-4">
        <div className="col-2">
          <a
            className="text-primary"
            onClick={() => history.push("/addusers")}
            style={{ cursor: "pointer" }}
          >
            + Add records
          </a>
        </div>
        <div className="col-8"></div>
        <div className="col-2">
          <input
            type="text"
            class="form-control"
            required
            value={search}
            placeholder="search"
            onChange={(e) => {
              dispatch(serchUsers(e?.target?.value));
              setSearch(e?.target?.value);
            }}
          />
        </div>
      </div>
      <div className="row mt-4 mx-4">
        <table className="table">
          <thead style={{ backgroundColor: "blue", color: "white" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Pincode</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((i, index) => (
                <tr>
                  <th scope="row" className="text-primary">
                    {index + 1}
                  </th>
                  <td className="text-primary">{i.first_name}</td>
                  <td className="text-primary">{i.last_name}</td>
                  <td className="text-primary">{i.email}</td>
                  <td className="text-primary">{i.states}</td>
                  <td className="text-primary">{i.city}</td>
                  <td className="text-primary">{i.pincode}</td>
                  <td className="d-flex justify-content-center">
                    <button
                      style={{
                        width: "60px",
                        height: "30px",
                        margin: "5px",
                        color: "white",
                        background: "blue",
                        border: "none",
                        borderRadius: "10%",
                      }}
                      onClick={() => history.push("/updateuser", i)}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        width: "60px",
                        height: "30px",
                        margin: "5px",
                        color: "white",
                        background: "red",
                        border: "none",
                        borderRadius: "10%",
                      }}
                      onClick={() => {
                        // window.confirm("are want to delete");
                        DeleteUser(i.id, i.first_name);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
