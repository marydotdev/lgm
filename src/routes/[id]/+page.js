export const load = ({ fetch, params}) => {
  // console.log(params)

  const fetchGame = async (id) => {
    const res = await fetch(`https://statsapi.mlb.com/api/v1.1/game/${id}/feed/live`)
    const data = await res.json()
    return data
  }

  return {
    game: fetchGame(params.id)
  }

}
