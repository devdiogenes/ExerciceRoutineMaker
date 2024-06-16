<script setup>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import ActionBar from './components/ActionBar.vue';
  import WindowForm from '/src/components/common/WindowForm.vue';
</script>

<template>
  <div class="font-roboto">
    <!-- <WindowForm /> -->
    <div class="w-screen h-screen bg-silver py-3 px-3 sm:py-6 sm:px-12 lg:px-16">
      <Header />
      <Main />
      <ActionBar />
    </div>
  </div>
</template>

<style scoped>

</style>
