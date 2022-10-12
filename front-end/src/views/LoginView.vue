<template>
  <div>
     <h2 class="text-lg text-white my-4 leading-snug font-bold">Login to get access to your expenses</h2>
                    <div class="block p-6 rounded-lg shadow-lg bg-white md:w-96 opacity-90 border-4 border-teal-900">
                        <form>
                            <div class="form-group mb-6">
                                <input type="email" v-model="email"
                                    class="form-control block
                                                          w-full
                                                          px-3
                                                          py-1.5
                                                          text-base
                                                          font-normal
                                                          text-gray-700
                                                          bg-white bg-clip-padding
                                                          border border-solid border-gray-300
                                                          rounded
                                                          transition
                                                          ease-in-out
                                                          m-0
                                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="email" placeholder="Email address">
                            </div>
                            <div class="form-group mb-6">
                                <input type="password" v-model="password"
                                    class="form-control block
                                                          w-full
                                                          px-3
                                                          py-1.5
                                                          text-base
                                                          font-normal
                                                          text-gray-700
                                                          bg-white bg-clip-padding
                                                          border border-solid border-gray-300
                                                          rounded
                                                          transition
                                                          ease-in-out
                                                          m-0
                                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="password" placeholder="Password">
                            </div>
                            <button type="submit" @click.prevent="login" class="
                                                        w-full
                                                        px-6
                                                        py-2.5
                                                        bg-teal-600
                                                        text-white
                                                        font-medium
                                                        text-xs
                                                        leading-tight
                                                        uppercase
                                                        rounded
                                                        shadow-md
                                                        hover:bg-teal-700 hover:shadow-lg
                                                        focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                        active:bg-teal-800 active:shadow-lg
                                                        transition
                                                        duration-150
                                                        ease-in-out">Login</button>
                        </form>
                    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue'

   function redirect() {
    window.location.href = "http://localhost:8080/dashboard"
    }

    const email = ref("")
    const password = ref("")

    function login (){
        console.log("login user")
        console.log(email.value)
        fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                email: email.value,
                password: password.value
                })
        }).then(res => {
            if(!res.ok){
                throw new Error
                }
            else {res.json()}
        })
        .then(data => {
            email.value = ""
            password.value = ""
            console.log(data)

        window.location.href = "http://localhost:8080/dashboard"
        }).catch(error => {
            alert("user cannot found")
        })
    }

</script>

<style>

</style>