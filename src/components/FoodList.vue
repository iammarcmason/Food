<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">Search</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Foods List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(food, index) in foods"
          :key="index"
          @click="setActiveFood(food, index)"
        >{{ food.title }}</li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllFoods">Remove All</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentFood">
        <h4>Food</h4>
        <div>
          <label>
            <strong>Title:</strong>
          </label>
          {{ currentFood.title }}
        </div>
        <div>
          <label>
            <strong>Description:</strong>
          </label>
          {{ currentFood.description }}
        </div>
        <div>
          <label>
            <strong>Category:</strong>
          </label>
          {{ currentFood.category }}
        </div>

        <a class="badge badge-warning" :href="'/food/' + currentFood.id">Edit</a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Food...</p>
      </div>
    </div>
  </div>
</template>

<script>
import FoodDataService from "../services/FoodDataService";

export default {
  name: "foods-list",
  data() {
    return {
      foods: [],
      currentFood: null,
      currentIndex: -1,
      title: "",
      category: ""
    };
  },
  methods: {
    retrieveFoods() {
      FoodDataService.getAll()
        .then(response => {
          this.foods = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveFoods();
      this.currentFood = null;
      this.currentIndex = -1;
    },

    setActiveFood(food, index) {
      this.currentFood = food;
      this.currentIndex = index;
    },

    removeAllFoods() {
      FoodDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      FoodDataService.findByTitle(this.title)
        .then(response => {
          this.foods = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveFoods();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>