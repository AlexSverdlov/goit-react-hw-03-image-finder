import axios from 'axios';

const fetchTodos = (keypixabay, search, page) => {
  return axios.get(
    `https://pixabay.com/api/?key=${keypixabay}&q=${search}&image_type=photo&page=${page}&orientation=horizontal&per_page=12`,
  );
};

export default fetchTodos;
