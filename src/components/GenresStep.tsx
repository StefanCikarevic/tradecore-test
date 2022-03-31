import React, { useContext } from 'react';
import { Box, Text, Flex, Button, Center, Wrap } from '@chakra-ui/react';
import DATA from '../data.json';
import { StateContext } from '../provider/StateProvider';

export const GenresStep = () => {
  const state = useContext(StateContext);
  const genres = DATA.genres;

  return (
    <Wrap>
      {genres.map((genre) => {
        return (
          <Flex
            key={genre.id}
            justifyContent="center"
            alignItems="center"
            borderWidth={1}
            px={4}
            py={2}
            onClick={() => state.setSelectedGenres(genre)}
          >
            <Text>{genre.name}</Text>
          </Flex>
        );
      })}
    </Wrap>
  );
};
