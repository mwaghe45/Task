import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function AddUser() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const history = useHistory();

  const adduser = (e) => {
    e.preventDefault();
    var data = {
      city: city,
      last_name: lName,
      pincode: pincode,
      first_name: fName,
      states: states,
      email: email,
    };
    console.log(data);

    if (pincode.length == 5) {
      axios
        .post("http://localhost:4000/users", data)
        .then((res) => {
          console.log(res);
          alert("User Create Successfully");
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
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
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div class="col-4">
              <label className="text-primary">Last Name</label>
              <input
                type="text"
                class="form-control"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                required
              />
            </div>
            <div class="col-4">
              <label className="text-primary">Email</label>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class="col-4">
              <label className="text-primary">State</label>
              <select
                class="form-select"
                value={states}
                onChange={(e) => setStates(e.target.value)}
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div class="col-4">
              <label className="text-primary">Pincode</label>
              <input
                type="number"
                class="form-control"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
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
