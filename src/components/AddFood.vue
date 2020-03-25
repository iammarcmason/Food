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

      <button @click="saveFood" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newFood">Add</button>
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
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveFood() {
      var data = {
        title: this.food.title,
        description: this.food.description
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