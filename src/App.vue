<script setup>
	import { ref } from 'vue';
	import Header from './components/Header.vue';
	import Main from './components/Main.vue';
	import ActionBar from './components/ActionBar.vue';
	import ActionWindows from './components/ActionWindows.vue';

	const current_window = ref('');

	function show_window(form) {
		current_window.value = form;
	}
	function hide_window(){
		current_window.value = '';
	}
</script>

<template>
	<ActionWindows :current="current_window" @close="hide_window"/>
	<div class="font-roboto">
		<div class="w-screen h-screen bg-silver py-3 px-3 sm:py-6 sm:px-12 lg:px-16">
			<Header />
			<Main @show_window="show_window" />
			<ActionBar @show_window="show_window" />
		</div>
	</div>
</template>

<style scoped>

</style>
