<template>
  <div>
                        <h2 class="text-lg text-white my-4 leading-snug font-bold">Register below to start up and track your expenses</h2>
                    <div class="block p-6 rounded-lg shadow-lg bg-white md:w-96 opacity-90 border-4 border-teal-900">
                        <form>
                            <div class="form-group mb-6">
                                <input type="text" v-model="firstName"
                                    class="form-control
                                                            block
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
                                    id="firstName" aria-describedby="firstName" placeholder="First name">
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" v-model="lastName"
                                    class="form-control
                                                            block
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
                                    id="lastName" aria-describedby="lastName" placeholder="Last name">
                            </div>

                            <div class="form-group mb-6">
                                <input type="email" v-model="newEmail"
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
                                    id="emailReg" placeholder="Email address">
                            </div>
                            <div class="form-group mb-6">
                                <input type="password" v-model="newPass"
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
                                    id="passwordReg" placeholder="Password">
                            </div>
                            <button @click.prevent="register" type="submit" class="
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
                                                        ease-in-out">Register</button>
                        </form>
                    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue'


   function redirect() {
    window.location.href = "http://localhost:8080/dashboard"
    }

const firstName = ref("")
const lastName = ref("")
const newEmail = ref("")
const newPass = ref("")

    function register (){
        console.log("register new user")
        fetch("http://localhost:8000/user/registration", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                firstName : firstName.value,
                lastName : lastName.value,
                email: newEmail.value,
                password: newPass.value
                })
        }).then(res => {
            if(!res.ok){
                throw new Error
                }
            else {res.json()}
        })
        .then(data => {
            firstName.value = ""
            lastName.value = ""
            newEmail.value = ""
            newPass.value = ""
            console.log(data)

        window.location.href = "http://localhost:8080/dashboard"
        }).catch(error => {
            alert("user already existing")
        })
    }

</script>

<style>

</style>