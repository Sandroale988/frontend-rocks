export const RootRoute = () => {
  return <div className="flex flex-wrap gap-4 items-center justify-center">{data.map((item) => {
    return <div className="w-2xs p-8"> 
      <center className="bg-green-500 text-black px-4 py-2 rounded-md shadow-md cursor-pointer">{item.name}-{item.id}</center>
      <img src = {item.image}/>
      <center className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-yellow-600 transition-colors ">{item.types}</center>
      </div>
  })}</div>
  }
  const data = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      name: "Bulbasaur",
      types: ["grass", "poison"],
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      name: "Charmander",
      types: ["fire"],
    },
    {
      id: 7,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      name: "Squirtle",
      types: ["water"],
    },
    {
      id: 10,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      name: "Caterpie",
      types: ["bug"],
    },
    {
      id: 25,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      name: "Pikachu",
      types: ["electric"],
    },
    {
      id: 74,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
      name: "Geodude",
      types: ["rock", "ground"],
    },
  ];