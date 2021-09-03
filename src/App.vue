<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	mounted() {
		document.body.classList.add("bg-gray");
	},
};
</script>

<style>
:root {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.bg-gray {
	color: #ecf0f1;
	background-color: #2c3e50;
}

.bg-orange {
	color: #ecf0f1;
	background-color: #e67e22;
}

.bg-green {
	color: #ecf0f1;
	background-color: #27ae60;
}

body {
	padding: 0;
	margin: 0;
}

#app {
	height: 100vh;
	width: 100vw;
	padding: 0;
	margin: 0;
}
</style>
