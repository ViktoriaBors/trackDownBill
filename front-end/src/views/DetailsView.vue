<template>
<div>
    <div>
        <h2 class="text-lg text-white my-4 leading-snug font-bold"> Saved bills within the project</h2>
         <div class="billContainer py-6 w-full flex flex-col justify-around items-center w-screen lg:flex-row">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm border-2 border-teal-300 p-1 m-2 w-4/5 flex flex-col justify-around">
                        <div>
                        <p class="grow p-2 text-black">Bill name</p>
                        <hr>
                        <p class="grow p-2 text-black">Bill sum</p>
                        </div>
                        <button class="p-2 w-full
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
                        ease-in-out">Edit</button>
                        <button class="p-2 w-full bg-rose-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-rose-700 hover:shadow-lg
                        focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-rose-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Delete</button>
                    </div>
                   <div class="rounded-lg shadow-lg bg-white max-w-sm border-2 border-teal-300 p-1 m-2 w-4/5 flex flex-row justify-around md:w-full flex-col">
                        <div>
                        <p class="grow p-2 text-black">Bill name</p>
                        <hr>
                        <p class="grow p-2 text-black">Bill sum</p>
                        </div>
                        <button class="p-2 w-full
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
                        ease-in-out">Edit</button>
                        <button class="p-2 w-full bg-rose-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-rose-700 hover:shadow-lg
                        focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-rose-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Delete</button>
                    </div>
                </div>
    </div>
 
                <button type="button" class="
                w-full
                my-3
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
                ease-in-out">Add New Bill</button>
                <div class="flex justify-center items-center p-2">
<div class="rounded-lg shadow-lg bg-white w-full sm:w-6/12 border-2 border-teal-300 p-3 m-2">
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
                            id="billNameNew" placeholder="Name of the Bill">
                    </div>
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
                            id="billSumNew" placeholder="Sum of the Bill">
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
                   </div>   
                </div>
                                 
                </div>

 </template>

<script setup>

</script>

<style>

</style>