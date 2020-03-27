<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="food.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="food.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <input class="form-control" id="category" required v-model="food.category" name="category" />
      </div>

      <button @click="saveFood" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <span>
        <button class="btn btn-success" @click="newFood">Add</button>
      </span>
      <span>
        <button class="btn btn-success" @click="$router.push('food')">Food List</button>
      </span>
    </div>
  </div>
</template>

<script>
import FoodDataService from "../services/FoodDataService";

export default {
  name: "add-food",
  data() {
    return {
      food: {
        id: null,
        title: "",
        description: "",
        category: ""
      },
      submitted: false
    };
  },
  methods: {
    saveFood() {
      var data = {
        title: this.food.title,
        description: this.food.description,
        category: this.food.category
      };

      FoodDataService.create(data)
        .then(response => {
          this.food.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newFood() {
      this.submitted = false;
      this.food = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>