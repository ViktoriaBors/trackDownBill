<template>
  <div>
                        <h2 class="text-lg text-white my-4 leading-snug font-bold">Register below to start up and track your expenses</h2>
                    <div class="block p-6 rounded-lg shadow-lg bg-white md:w-96 opacity-90 border-4 border-teal-900">
                        <form>
                            <div class="form-group mb-6">
                                <input type="text"
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
                                <input type="text"
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
                                <input type="email"
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
                                <input type="password"
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
                            <button @click.prevent="redirect" type="submit" class="
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
   function redirect() {
    window.location.href = "http://localhost:8080/dashboard"
    }
</script>

<style>

</style>