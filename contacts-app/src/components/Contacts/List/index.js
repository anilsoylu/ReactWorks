import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });

  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="phone_number"
          className="form-label fw-bold text-start w-100"
        >
          Filter Contact:
        </label>
        <input
          name="filter_contact"
          className="form-control"
          placeholder="Filter Contact"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <ul className="d-flex list-group mb-3">
        {filtered.map((contact, i) => (
          <li
            className="d-flex justify-content-between list-group-item mb-1 bg-dark bg-gradient text-white"
            key={i}
          >
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p className="text-end fw-bold fs-5">
        Total Contacts ({filtered.length})
      </p>
    </>
  );
}

export default List;
