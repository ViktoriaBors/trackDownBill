<template>
  <nav
    class="p-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg"
  >
   
        <!-- Left links -->
        <ul class="flex flex-col justify-between items-center md:flex-row list-style-none">
          <li class="p-2">
            <router-link to="/" :isLoggedIn="isLoggedIn" class="text-xl text-black">Welcome <span v-if="isLoggedIn">{{user}}</span> </router-link>
          </li>
           <li class=" p-2" v-if="!isLoggedIn">
            <router-link :to="{name:'register'}" class="text-xl text-black">Register</router-link>
          </li>
          <li class="p-2"  v-if="!isLoggedIn">
            <router-link :to="{name:'login'}" class="text-xl text-black">Login</router-link>
          </li>
            <li class="p-2"  v-if="isLoggedIn">
            <router-link :to="{name:'dashboard'}"  :isLoggedIn="isLoggedIn" class="text-xl text-black">Dashboard</router-link>
          </li>
          <li class="p-2" v-if="isLoggedIn">
            <a @click="logout" class="cursor-pointer text-xl text-black">Log out</a>
          </li>
        </ul>
       
  </nav>
</template>

<script setup>
import {onMounted, ref} from "vue"

let isLoggedIn = ref(false)
let user = ref("")

 
onMounted ( () => {
fetch("http://localhost:8000/user/session", {
    credentials: "include",
  }).then((res) => {
      if (!res.ok) {
        throw new Error("error");
      } else return res.json();
    })
    .then((data) => {
      console.log(data)
      if(data.email){
        isLoggedIn.value = true
        user.value = data.firstName + ' ' + data.lastName
      };
    })
    .catch((error) => {
        console.log(error)
    });
});

const logout = ()=> {
    fetch('http://localhost:8000/user/logout', {
        credentials: 'include'
    }).then((res) => {
        if(!res.ok){
            throw new Error("error")
        } else return res.json()
    }). then((data)=>{
        console.log(data)
        redirect()
    }).catch((error) => {
      alert("no session");
      redirect()
    });
}

const redirect = () => {
    window.open("http://localhost:8080/", "_self")
}


</script>

<style></style>
