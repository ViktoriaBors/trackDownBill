<template>
  <div>
    dashboard - from register and login node.js redirect to here? or with router
    link in vue? methods: { redirect() { this.$router.push({ name: 'dashboard'
    }) }
    <h2 class="text-lg text-white my-4 leading-snug font-bold">
      Your Projects
    </h2>
    <div
      class="projectContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
      <span v-for="project in projects" :key="project._id" >
    <ProjectCard :project="project"></ProjectCard>
      </span>
    </div>

    <button
      type="button"
      class="w-full px-6 py-2.5 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      Start New Project
    </button>
    <div class="flex justify-center items-center">
      <form
        class="block p-6 rounded-lg shadow-lg bg-white md:w-96 opacity-90 border-4 border-teal-900"
      >
        <div class="form-group mb-6">
          <input
            required
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-teal-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
            id="projectName"
            placeholder="Name of the Project"
            v-model="newProjectName"
          />
        </div>
        <div class="form-group my-3">
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                required
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-teal-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                aria-label="Select Project"
                v-model="newProjectType"
              >
                <option value="Housing and Rent">Housing and Rent</option>
                <option value="Transportation and Travel"> Transportation and Travel
                </option>
                <option value="Food and Groceries">Food and Groceries</option>
                <option value="Clothing">Clothing</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Renovation">Renovation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group my-3">
          <textarea
          v-model="newProjectDescription"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-teal-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
            id="description"
            rows="3"
            placeholder="Short description"
          ></textarea>
        </div>
        <button
        @click.prevent="addProject"
          type="submit"
          class="w-full px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {onMounted,onUpdated, onBeforeUpdate,shallowRef, ref} from "vue"
import ProjectCard from "../components/ProjectCard.vue"

const props = defineProps(['isLoggedIn'])

console.log(props.isLoggedIn)

const projects= ref([])

const newProjectName = ref("")
const newProjectType = ref("")
const newProjectDescription = ref("")

const addProject = () => {
  let newProject = {
  name: newProjectName.value,
  type: newProjectType.value,
  desc: newProjectDescription.value,
  sum: 0,
  updatedLast : new Date(Date.now()),
  updatedBy : "test@test.com"
}
fetch("http://localhost:8000/project?email=test@test.com", {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProject)
  }).then((res) => {
      if (!res.ok) {
        throw new Error("error");
      } else return res.json();
    })
    .then((data) => {
      projects.value.push(data)
      newProjectName.value = ""
      newProjectType.value= ""
      newProjectDescription.value = ""
    })
    .catch((error) => {
        console.log(error)
    });
};

onMounted ( () => {
fetch("http://localhost:8000/project?email=test@test.com")
    .then((res) => {
      if (!res.ok) {
        throw new Error("error");
      } else return res.json();
    })
    .then((data) => {
      console.log("mount")
      data.forEach(element => {
        projects.value.push(element)
      });
        console.log(projects)
    })
    .catch((error) => {
        console.log(error)
    });
});


onUpdated ( () => {
  if(projects.value.length){
    fetch("http://localhost:8000/project?email=test@test.com")
        .then((res) => {
          if (!res.ok) {
            throw new Error("error");
          } else return res.json();
        })
        .then((data) => {
          console.log("before update")
        })
        .catch((error) => {
            console.log(error)
        });
  }
});


function redirect() {
  window.location.href = "http://localhost:8080/details";
}
</script>

<style></style>
