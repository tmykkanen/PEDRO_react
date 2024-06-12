import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const { data, isPending, error } = useQuery({queryKey:['cat'], queryFn: async () => {
    const res = await fetch('https://catfact.ninja/fact')
    const data = await res.json();
    return data;
  }})

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

 return (
   <div>
    <h1>Homepage</h1>
    <p>{data.fact}</p>
  </div>
 )
}

export default Home