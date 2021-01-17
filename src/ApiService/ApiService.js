import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19165917-0ecea6bbe151c1a0c990f3572';

const apiService = (query, currentPage) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

apiService.propTypes = {
  query: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default apiService;
