import { useState } from 'react';

function FormDashbord({ setHasDraft }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const handleChange = (e) => {
    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(updatedData);

    // Check if any input has value
    const hasValue = Object.values(updatedData).some((value) => value.trim() !== '');

    setHasDraft(hasValue);
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">user Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
 
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>{' '}
    </div>
  );
}

export default FormDashbord;
