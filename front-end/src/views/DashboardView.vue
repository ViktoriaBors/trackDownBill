<template>
<div>
    dashboard - from register and login node.js redirect to here? or with router link in vue?
    methods: {
    redirect() {
      this.$router.push({ name: 'dashboard' })
    }
     <h2 class="text-lg text-white my-4 leading-snug font-bold">Your Projects</h2>
                    <div class="projectContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <div class="flex justify-center my-2 sm:mx-2">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <img class="rounded-t-lg"
                                        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-black text-lg font-medium mb-2">Card title</h5>
                                    <p class="text-black text-base mb-4">
                                        Project type
                                    </p>
                                    <button @click="redirect" type="button"
                                        class=" inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">See
                                        details</button>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center my-2 sm:mx-2">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <img class="rounded-t-lg"
                                        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-black text-lg font-medium mb-2">Card title</h5>
                                    <p class="text-black text-base mb-4">
                                        Project Type
                                    </p>
                                    <button @click="redirect" type="button" 
                                        class=" inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">See
                                        details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="
                    w-full
                    px-6
                    py-2.5
                    bg-violet-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-violet-700 hover:shadow-lg
                    focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-violet-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Start New Project</button>
                    <div class="flex justify-center items-center">
                        <form class="block p-6 rounded-lg shadow-lg bg-white md:w-96 opacity-90 border-4 border-teal-900">
                            <div class="form-group mb-6">
                                <input required type="text"
                                    class="form-control block
                                                          w-full
                                                          px-3
                                                          py-1.5
                                                          text-base
                                                          font-normal
                                                          text-gray-700
                                                          bg-white bg-clip-padding
                                                          border border-solid border-teal-300
                                                          rounded
                                                          transition
                                                          ease-in-out
                                                          m-0
                                                          focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                                    id="projectName" placeholder="Name of the Project">
                            </div>
                            <div class="form-group my-3">
                                <div class="flex justify-center">
                                    <div class="mb-3 xl:w-96">
                                        <select required class="form-select appearance-none
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-teal-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                                            aria-label="Select Project">
                                            <option value="housing">Housing and Rent</option>
                                            <option value="transportation">Transportation and Travel</option>
                                            <option value="food">Food and Groceries</option>
                                            <option value="clothing">Clothing</option>
                                            <option value="entertainment">Entertainment</option>
                                            <option value="renovation">Renovation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div class="form-group my-3">
                                    <textarea class="
                                              form-control
                                              block
                                              w-full
                                              px-3
                                              py-1.5
                                              text-base
                                              font-normal
                                              text-gray-700
                                              bg-white bg-clip-padding
                                              border border-solid border-teal-300
                                              rounded
                                              transition
                                              ease-in-out
                                              m-0
                                              focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none
                                            " id="description" rows="3" placeholder="Short description"></textarea>
                                </div>
                                <button type="submit" class="
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
                                                        ease-in-out">Add</button>
                        </form>
                    </div>             
</div>
  
</template>

<script setup>
   function redirect() {
    window.location.href = "http://localhost:8080/details"
    }
</script>

<style>
</style>