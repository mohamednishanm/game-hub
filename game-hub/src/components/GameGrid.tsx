import { SimpleGrid, Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import React, {useEffect,useState} from "react";
// import useGames from "../hooks/useGames";
// import GameCard from "./GameCard";

interface Game{
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}


const GameGrid = () => {
    const [games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState('');

//   const { games, error } = useGames();
useEffect(() => {
    apiClient.get<FetchGameResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message));
})
  

  return (
    <>
        {error && <Text>{error}</Text>}
        <ul>
            {
                games.map(game => <li key={game.id}>{game.name}</li>)
            }
        </ul>
    </>
    // <>
    //   {error && <Text>{error}</Text>}
    //   <SimpleGrid
    //     columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
    //     padding={10}
    //     pt={100}
    //     spacing={10}
    //   >
        
    //     {games.map((game) => (
    //       <GameCard key={game.id} game={game} />
    //     ))}
    //   </SimpleGrid>
    // </>
  );
};

export default GameGrid;