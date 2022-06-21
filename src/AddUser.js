import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addusers } from "./redux/actions";
function AddUser() {
  const [state, setState] = useState({
    city: "",
    last_name: "",
    pincode: "",
    first_name: "",
    states: "",
    email: "",
  });

  const { last_name, first_name, city, email, states, pincode } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const history = useHistory();
  const dispatch = useDispatch();

  const adduser = (e) => {
    e.preventDefault();
    if (pincode.length == 5) {
      dispatch(addusers(state));
      alert("User Create Successfully");
      history.push("/");
    } else {
      alert("Pincode should be maximum and minimum 5 numbers");
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light d-flex justify-content-between">
        <h5 class="text-dark mx-4">Task</h5>
        <h6 class="text-secondary mx-4 ">Home</h6>
      </nav>
      <div className="row mx-4 mt-4">
        <div className="col-8">
          <form class="row g-3 mx-4" onSubmit={adduser}>
            <div class="col-4">
              <label className="text-primary">First Name</label>
              <input
                type="text"
                class="form-control"
                required
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
            </div>
            <div class="col-4">
              <label className="text-primary">Last Name</label>
              <input
                type="text"
                class="form-control"
                name="last_name"
                value={last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="col-4">
              <label className="text-primary">Email</label>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div class="col-4">
              <label className="text-primary">State</label>
              <select
                class="form-select"
                name="states"
                value={states}
                onChange={handleChange}
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Maharashtra</option>
                <option>Goa</option>
                <option>Gujrat</option>
                <option>Delhi</option>
              </select>
            </div>
            <div class="col-4">
              <label className="text-primary">City</label>
              <input
                type="text"
                class="form-control"
                name="city"
                value={city}
                onChange={handleChange}
                required
              />
            </div>
            <div class="col-4">
              <label className="text-primary">Pincode</label>
              <input
                type="number"
                class="form-control"
                name="pincode"
                value={pincode}
                onChange={handleChange}
                required
              />
            </div>

            <div class="row mt-4">
              <div className="col-8"></div>
              <div className="col-4 d-flex justify-content-end">
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
                  type="submit"
                >
                  Add
                </button>
                <button
                  style={{
                    width: "60px",
                    height: "30px",
                    margin: "5px",
                    color: "white",
                    background: "grey",
                    border: "none",
                    borderRadius: "10%",
                  }}
                  onClick={() => history.push("/")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
