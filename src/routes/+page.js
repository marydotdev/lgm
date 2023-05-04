
export const load = ({ fetch }) => {

  const fetchToday = async () => {
    const res = await fetch('/api/getToday')
    const data = await res.json()
    return data
  }

  return {
    data: fetchToday()
  }

}
