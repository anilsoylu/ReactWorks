import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Anıl",
      phone_number: "123456",
    },
    {
      fullname: "Cengizhan",
      phone_number: "234567",
    },
    {
      fullname: "Yunus",
      phone_number: "345678",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <h1 className="text-center">Contact List App</h1>

      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </>
  );
}

export default Contacts;
