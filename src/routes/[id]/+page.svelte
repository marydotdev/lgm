<script>
	export let data;
	const { game } = data;

</script>

<h1>{game.gamePk}</h1>
<p>{game.gameData.teams.away.name} @ {game.gameData.teams.home.name} </p>
<!-- <p>${product.price.toFixed(2)}</p> -->
<a href="/">back</a>
