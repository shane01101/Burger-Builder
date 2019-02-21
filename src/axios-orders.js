import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-29d87.firebaseio.com/'
});

export default instance;
