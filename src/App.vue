<script setup lang="ts">
</script>

<template>

  <main class="min-h-screen">
    <div class="h-screen grid grid-rows-2 lg:grid-flow-cols lg:grid-cols-2 lg:grid-cols-[1fr 1fr]">
      <div class="bg-base-300 lg:h-screen p-3 lg:p-5  overflow-y-auto">

        <!-- Here will be form with config -->

        <div class="flex flex-col">
          <div class="join gap-4">
            <fieldset class="fieldset join-item">
              <legend class="fieldset-legend">First name</legend>
              <input type="text" class="input" placeholder="Type here" />
            </fieldset>
            <fieldset class="fieldset join-item">
              <legend class="fieldset-legend">Last Name</legend>
              <input type="text" class="input" placeholder="Type here" />
            </fieldset>
          </div>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Email</legend>
            <input type="text" class="input w-full" placeholder="Type here" />
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Position</legend>
            <input type="text" class="input w-full" placeholder="Type here" />
          </fieldset>
        </div>



      </div>
      <div class="lg:h-screen">
        <!-- Here will be preview  -->
      </div>
    </div>
  </main>

</template>
