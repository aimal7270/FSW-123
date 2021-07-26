import { useState } from "react";

export default function EditForm({
  Title,
  Author,
  CheckedOut,
  _id,
  SeriesOrder,
  editBooks,
}) {
  const initialInputs = {
    Title: Title || "",
    Author: Author || "",
    CheckedOut: CheckedOut + "" || "",
    SeriesOrder: SeriesOrder || "",
  };
  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBooks(inputs, _id);
    setInputs(initialInputs);
  };

  return (
    <div className="Library">
      <form onSubmit={handleSubmit} id="form">
        <input
          type="text"
          name="Title"
          value={inputs.Title}
          onChange={handleChange}
          placeholder="Title"
        />

        <input
          type="text"
          name="Author"
          value={inputs.Author}
          onChange={handleChange}
          placeholder="Author"
        />

        <input
          type="text"
          name="CheckedOut"
          value={inputs.CheckedOut + ""}
          onChange={handleChange}
          placeholder="CheckedOut?"
        />

        <input
          type="text"
          name="SeriesOrder"
          value={inputs.SeriesOrder}
          onChange={handleChange}
          placeholder="SeriesOrder?"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
