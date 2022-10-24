<template>
<div>
   <div 
   v-for="project in projects" :key="project._id"
   class="flex justify-center my-2 sm:mx-2">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-black text-lg font-medium mb-2">{{project.name}}</h5>
            <p class="text-black text-base mb-4">{{project.type}}</p>
            <button
            :id="project._id"
              @click="a"
              type="button"
              class="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              See details
            </button>
          </div>
        </div>
      </div>
</div>
</template>

<script setup>
const props = defineProps(['projects'])

    console.log(props.projects)


</script>

<style>

</style>