import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const history = useHistory();

  const GetChannel = () => {
    let config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    axios
      .get("http://localhost:4000/users", config)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Searchuser = (search) => {
    axios
      .get(`http://localhost:4000/users?q=${search}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteUser = (id, name) => {
    var result = window.confirm(`Are you sure to Delete ${name}`);
    if (result == true) {
      axios
        .delete(`http://localhost:4000/users/${id}`)
        .then((res) => {
          console.log(res.data);
          alert("User Delete Successfully");
          // setUser(res.data);
          GetChannel();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log(user);
  useEffect(() => {
    GetChannel();
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
              setSearch(e?.target?.value);
              Searchuser(e?.target?.value);

              // GetChannel();
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
            {user.map((i, index) => (
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

{
  //    <i className='fas fa-trash'  data-toggle="modal" data-target="#exampleModal" data-placement="bottom" title="Delete" style={{ cursor: "pointer" }}></i>
  // <div className="modal"id="exampleModal"  role="dialog">
  // <div className="modal-dialog" role="document">
  //   <div className="modal-content">
  //     <div className="modal-header">
  //       <h5 className="modal-title">Delete App</h5>
  //     </div>
  //     <div className="modal-body">
  //       <h5>Are you sure that you want to delete this app ?</h5>
  //     </div>
  //     <div className="modal-footer">
  //       <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>{deleteApp(item.sdkKey)}}>Delete</button>
  //       <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
  //     </div>
  //   </div>
  // </div>
  //  </div>
}
