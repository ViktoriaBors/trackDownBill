<template>
<div>
  <nav class="p-4
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        text-left">
    <router-link to="/" class="text-xl text-black">Welcome</router-link> 
  </nav>
  <div class="h-screen text-white">
     <div class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover h-screen opacity-70"
            style="background-image: url('pexels-karolina-grabowska-4386373.jpg')">
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(2, 56, 53, 0.7)">
                <section id="content" class="flex flex-col justify-center items-center ">
              <router-view/>
                </section>
            </div>
     </div>
  </div>
</div>
</template>

<style>

</style>
