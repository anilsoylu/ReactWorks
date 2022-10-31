import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Name
      <br />
      <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      &nbsp;
      <br />
      <br />
      {form.name && <code>New Name : {form.name}</code>}
      <br />
      <br />
      <hr />
      Surname
      <br />
      <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      &nbsp;
      <br />
      <br />
      {form.surname && <code>New Value : {form.surname}</code>}
    </div>
  );
}

export default InputExample;
