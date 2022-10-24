<template>
<div>
  <div class="p-14">
                     <div>
                                <h2 class="font-semibold text-5xl uppercase mb-4">
                                  Track Down Bill
                                </h2>
                                <h4 class="font-semibold text-xl mb-6">
                                 A tracking app for your expenses
                                </h4>
                                <p class="text-gray-200 font-medium text-sm font-bold leading-snug uppercase">
                                  <router-link :to="{name:'register'}" class="text-lg hover:underline decoration-double">Register</router-link> <span>or</span>
                                  <router-link :to="{name:'login'}" class="text-lg hover:underline decoration-double"> Login</router-link>
                                     to see your projects and its cost</p>
                              </div>
                              <p @click="a">hello</p>
  </div>
</div>
</template>

<script setup>

const props = defineProps(['isLoggedIn'])

const a = ()=>{
      console.log(props.isLoggedIn)
    }
</script>
