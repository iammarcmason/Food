<template>
  <div v-if="currentFood" class="edit-form">
    <h4>Food</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentFood.title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="currentFood.description" />
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" v-model="currentFood.category" />
      </div>
    </form>

    <button class="badge badge-danger mr-2" @click="deleteFood">Delete</button>

    <button type="submit" class="badge badge-success" @click="updateFood">Update</button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Food...</p>
  </div>
</template>

<script>
import FoodDataService from "../services/FoodDataService";

export default {
  name: "food",
  data() {
    return {
      currentFood: null,
      message: ''
    };
  },
  methods: {
    getFood(id) {
      FoodDataService.get(id)
        .then(response => {
          this.currentFood = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    updateFood() {
      FoodDataService.update(this.currentFood.id, this.currentFood)
        .then(response => {
          console.log(response.data);
          this.message = 'The food was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteFood() {
      FoodDataService.delete(this.currentFood.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "food" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getFood(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>