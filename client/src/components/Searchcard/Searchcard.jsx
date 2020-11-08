import React from "react";
import Container from "../Container/Container";
import "./Searchcard.css";

const Searchcard = () => {
  return (
    <Container>
      <div className="card mb-3" style={{ width: 250 }}>
        <div className="row no-gutters">
          <div className="col-md-3" />
          <img src="https://images-na.ssl-images-amazon.com/images/I/51DF6ZR8G7L._SX329_BO1,204,203,200_.jpg" className="card-img" alt="HarryPotter" />
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="submit" className="btn btn-success savebtn">Save</button>
              <button type="submit" className="btn btn-warning viewbtn">View</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Searchcard;