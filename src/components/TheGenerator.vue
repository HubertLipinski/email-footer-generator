<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col">
    <div class="join gap-4">
      <fieldset class="fieldset join-item">
        <legend class="fieldset-legend">First name</legend>
        <input type="text" class="input" placeholder="John" />
      </fieldset>
      <fieldset class="fieldset join-item">
        <legend class="fieldset-legend">Last Name</legend>
        <input type="text" class="input" placeholder="Doe" />
      </fieldset>
    </div>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Email</legend>
      <input type="text" class="input w-full" placeholder="johndoe@example.com">
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Position</legend>
      <input type="text" class="input w-full" placeholder="Company" />
    </fieldset>
  </div>
</template>
