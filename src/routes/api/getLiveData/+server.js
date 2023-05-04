export const GET = async () => {
  const games = await fetch(`https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1`)
  const gamesData = await games.json()

  const gamePk = gamesData.dates[0].games[0].gamePk;

  const liveDataUrl = `https://statsapi.mlb.com/api/v1.1/game/${gamePk}/feed/live`;
  const liveDataResponse = await fetch(liveDataUrl);
  const liveData = await liveDataResponse.json();


  return new Response(JSON.stringify(liveData), { status: 200 })
}

