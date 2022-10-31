import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" && form.phone_number === "") {
      return false;
    }

    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label
          htmlFor="fullname"
          className="form-label fw-bold text-start w-100"
        >
          Full Name :
        </label>
        <input
          name="fullname"
          className="form-control"
          placeholder="full name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="phone_number"
          className="form-label fw-bold text-start w-100"
        >
          Phone Number:
        </label>
        <input
          name="phone_number"
          className="form-control"
          placeholder="phone number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="col-12 d-flex justify-content-end">
        <button className="btn btn-primary">Add People</button>
      </div>
    </form>
  );
}

export default Form;
