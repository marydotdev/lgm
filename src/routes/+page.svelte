<script>
	export let data;

  let games = data.data.dates[0].games
  //console.log(games)
  let apiUrl = "https://statsapi.mlb.com"

</script>

<div>
	<h1>Let's go Mets!</h1>

  <h2>Schedule</h2>

  {#each games as game}
  <p>{new Date(game.gameDate).toLocaleDateString('en-US', {
		hour: 'numeric',
		minute: '2-digit'
	})}</p>
  <p>Home: {game.teams.home.team.name}</p>
  <p>Away: {game.teams.away.team.name}</p>
  <a href={apiUrl + game.link}>link</a>
  {/each}
</div>
