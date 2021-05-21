import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const FormSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.name}.My email address is ${data.email} and my message is "${data.message}"`
    );
    setData({ name: "", email: "", message: "" });
    e.target.reset();
  };
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5 mb-4">CONTACT US</h2>
        <div className="row">
          <div className="col-md-8 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  className="form-control"
                  onChange={InputEvent}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>

                <textarea
                  name="message"
                  value={data.message}
                  className="form-control"
                  onChange={InputEvent}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
