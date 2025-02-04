import PropTypes from "prop-types";

const PersonForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  addNewPerson,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPerson(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={handleNameChange}
          placeholder="Enter name..."
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={handleNumberChange}
          placeholder="Enter phone number..."
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

// Добавим PropTypes
PersonForm.propTypes = {
  newName: PropTypes.string.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  addNewPerson: PropTypes.func.isRequired,
};

export default PersonForm;
