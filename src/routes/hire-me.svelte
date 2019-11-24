<svelte:head>
	<title>About - Przemysław Solan</title>
</svelte:head>

<style>
.input {
	padding: 12px 15px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	font-size: 100%;
	outline: none;
	background: white;
	font-family: inherit;
	width: 355px;
}

.submit {
	background-color: #FBAB7E;
	background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
	border: 1px solid rgba(0, 0, 0, 0.1);
	padding: 11px 24px;
	font-size: 100%;
	cursor: pointer;
	position: relative;
	top: 1px;
	float: right;
	border-radius: 4px;
	z-index: 99999;
	font-family: inherit;
}

</style>

<section class="">
            <h2>Hire Me</h2>
            <form action="/thank-you" method="GET">
                <div><input type="text" class="input" value="" placeholder="Your name" name="email" required></div>
                <div style="margin-top: 20px;"><input type="text" class="input" value="" placeholder="Budget" name="budget" required></div>
                <div style="margin-top: 20px;"><input type="text" class="input" value="" placeholder="Time frame" name="time" required></div>
                <div style="margin-top: 20px;"><textarea class="input" style="height: 150px;" placeholder="Description of work" required></textarea></div>
                <div><button name="submit" style="margin-top: 10px; float: left;" class="submit">Send Inquiry</button></div>
            </form>
        </section>