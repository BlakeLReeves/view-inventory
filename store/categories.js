export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add (state, payload) {

			let id = payload.id;
			let name = payload.name;

      state.list.push({
				id,
        name
      })
    },
    remove (state, { category }) {
      state.list.splice(state.list.indexOf(category), 1)
    },
  }