// import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Persons = ({ filteredPersons, handleDelete, handleUpdate }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id, person.name)}>
            Delete
          </button>
          <button onClick={() => handleUpdate(person.id, person.name)}>
            Update
          </button>
        </li>
      ))}
    </ul>
  );
};

Persons.propTypes = {
  filteredPersons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default Persons;
