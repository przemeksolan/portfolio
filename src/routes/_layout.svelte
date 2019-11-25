<script>
	import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

	export let segment;
	export let element;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		margin: 100px auto 0;
		padding: 0 20px;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer {element}/>