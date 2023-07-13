export const GET = async () => {
  const startDate = '2023-07-01'
  const endDate = '2023-07-01'

  const res = await fetch(`https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=${startDate}&endDate=${endDate}`)
  const data = await res.json()

  return new Response(JSON.stringify(data), { status: 200 })
}
