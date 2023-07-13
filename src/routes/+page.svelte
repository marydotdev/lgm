<script>
	export let data;

	let games = data.data.dates[0].games;
	// console.log(games)
	let apiUrl = 'https://statsapi.mlb.com';
</script>

<div>
	<div class="header">
    <h1>❖ Gameday</h1>
    <h2>Today's Schedule</h2>
  </div>

	<div class="grid">
		{#each games as game}
    <a href="/{game.gamePk}">
			<div class="gamecard">
				<p>
					{new Date(game.gameDate).toLocaleTimeString('en-US', {
						hour: 'numeric',
						minute: '2-digit'
					})}
				</p>
				<div class="score-container">
					<span>{game.teams.away.team.name}</span>
					<span>{game.teams.away.score}</span>
				</div>
				<div class="score-container">
					<span>{game.teams.home.team.name}</span>
					<span>{game.teams.home.score}</span>
				</div>
			</div>
    </a>
		{/each}
	</div>
</div>

<style>
	:root {
		background-color: wheat;
		/* background-image: url('https://www.transparenttextures.com/patterns/paper-2.png'); */
		font-family: sans-serif;
	}
  a {
    text-decoration: none;
    color: #000;
  }
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    justify-items: center;
	}
	.gamecard {
		border: 2px black solid;
    /* border-radius: 1rem; */
		width: 12rem;
		padding: 10px;
	}
	.score-container {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
  .header {
    text-align: center;
  }
</style>
