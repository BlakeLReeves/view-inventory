<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="category">
        <h1 class="text-center">View Inventory</h1>
        <form class="text-center" @submit.prevent="addCategory">
          <input
            class="category-input"
            id="category"
            type="text"
            name="category"
            placeholder="Add a category..."
          />
          <nuxt-link
            v-for="category in categories"
            :key="category.id"
            :to="'/category/' + (category.name + '-' + category.id).replace(/ /g, '-')"
          >
            <div class="category-container">{{ category.name }}</div>
          </nuxt-link>
        </form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories.list;
    }
  },
  methods: {
    addCategory(e) {
      this.$store.commit({
        type: "categories/add",
        id: Date.now(),
        name: e.target.elements.category.value
      });
      e.target.elements.category.value = "";
    },
    removeCategory(category) {
      this.$store.commit("categories/remove", category);
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
  text-decoration: none;
}
input:focus {
  outline: none;
}
.category-input {
  border-radius: 25px;
  padding: 0.5em;
  text-align: center;
}
.category-container {
  border: 2px solid #42b983;
  padding: 1em;
  margin: 1em auto 1em auto;
  text-align: center;
  border-radius: 25px;
}
</style>

