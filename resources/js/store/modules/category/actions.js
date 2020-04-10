import axios from 'axios';

const actions = {
  async fetchCategories({ commit }, limit = 200) {
		const response = await axios.get('api/category');
		commit('setCategories', response.data);
	},
};

export default actions;