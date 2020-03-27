<template>
  <div v-if="currentSchedule" class="edit-form">
    <h4>Schedule</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentSchedule.title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentSchedule.description"
        />
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" v-model="currentSchedule.category" />
      </div>
    </form>

    <button class="badge badge-danger mr-2" @click="deleteSchedule">Delete</button>

    <button type="submit" class="badge badge-success" @click="updateSchedule">Update</button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Schedule...</p>
  </div>
</template>

<script>
import ScheduleDataService from "../services/ScheduleDataService";

export default {
  name: "schedule",
  data() {
    return {
      currentSchedule: null,
      message: ''
    };
  },
  methods: {
    getSchedule(id) {
      ScheduleDataService.get(id)
        .then(response => {
          this.currentSchedule = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    updateSchedule() {
      ScheduleDataService.update(this.currentSchedule.id, this.currentSchedule)
        .then(response => {
          console.log(response.data);
          this.message = 'The schedule was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteSchedule() {
      ScheduleDataService.delete(this.currentSchedule.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "schedule" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getSchedule(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>