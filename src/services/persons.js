import axios from "axios";

const baseUrl = import.meta.env.PROD
  ? "https://puhelinluettelo-backend-je1y.onrender.com/api/persons"
  : "http://localhost:3001/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const remove = (id) => {
  // Изменили имя с removePerson на remove
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const changePersonNumber = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  remove,
  changePersonNumber,
};
