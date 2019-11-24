<script>
	export let segment;
</script>

<style>
	nav {
	    background: white;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
        content: '';
        width: calc(100% - 1em);
        height: 1px;
        background-color: #0366d6;
        display: block;
        bottom: -1px;
	}

    .logo {
	    text-transform: uppercase;
        letter-spacing: 0.25em;
        color: #0366d6;
	}

	a {
		text-decoration: none;
		text-transform: uppercase;
		padding: 1em 0.5em;
		display: block;
	}

    .float-right.svelte-1phzec2 {
        float: right;
        position: absolute;
        right: 0.5em;
        margin: 0 1em;
    }
</style>

<nav>
	<ul>
		<li><a class='logo' href='.'>premislaus</a></li>
		<li><a class:selected='{segment === "about"}' href='about'>about</a></li>
		<li><a class:selected='{segment === "portfolio"}' href='portfolio'>portfolio</a></li>
		<li><a class:selected='{segment === "services"}' href='services'>services</a></li>
		<li><a class:selected='{segment === "case-studies"}' href='case-studies'>case studies</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
		<li><a class:selected='{segment === "hire-me"}' href='hire-me' style='float: right; position: absolute;right: 0.5em; margin: 0 1em;'>hire me</a></li>
	</ul>
</nav>
