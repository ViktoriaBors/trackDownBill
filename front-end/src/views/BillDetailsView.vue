<template>
<div class="w-full flex flex-col justify-item items-center">
<h2 class="text-lg text-white my-4 leading-snug font-bold" v-if="projectName">{{projectName}}</h2>
<h2 class="text-lg text-white my-4 leading-snug font-bold" v-else>Hello</h2>
<button @click="addNewShow = !addNewShow"
    type="button" class="
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
                ease-in-out">Add New Bill</button>
<div v-if="addNewShow"  class="rounded-lg shadow-lg bg-white max-w-sm border-2 border-teal-300 p-2 m-2 w-4/5 ">
    <div class="form-group mb-6">
    <input required type="text" v-model="newBillName"
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
<input required type="text" v-model="sumofBill"
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
<button type="submit"    @click="addBills"    class="
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
<div class="billContainer w-full flex flex-col justify-around items-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm border-2 border-teal-300 p-1 m-2 w-4/5 flex flex-row justify-around">
            <span class="grow p-2">Bill name</span>
            <span class="grow p-2">Bill sum</span>
            <button class="p-2 w-16
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
            <button class="p-2 w-16 bg-rose-600
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
  
</template>

<script setup>
import {onMounted} from 'vue'
import {ref, } from "vue"
console.log("bill");

const props = defineProps(['id'])
console.log(props.id)

let addNewShow = ref(false)

let projectName = ref("")
let billData = ref([])
console.log(projectName.value, billData.value)

onMounted( ()=> {
    fetch('http://localhost:8000/project/'+props.id)
        .then((res)=>{
            if(!res.ok){
                throw new Error("error")
            } else return res.json()
        })
        .then((data)=>{
            if(typeof data == 'string'){
                projectName.value = data
                return
            } else {
                data.forEach(element => {
                billData.value.push(element)
                return
              });
            }
        })
} )

let newBillName = ref("")
let sumofBill = ref("")


const addBills = ()=>{
    let newBill = {
        shopname : newBillName.value,
        sumofBill : sumofBill.value,
        project : projectName.value
    }
    console.log(newBill)
}


</script>

<style>
</style>