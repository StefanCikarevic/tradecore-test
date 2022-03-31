import React, { useContext } from 'react';
import { StateContext } from './provider/StateProvider';
import { Text, Flex, Button, Center } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { GenresStep } from './components/GenresStep';
import { SubgenresStep } from './components/SubgenresStep';
import { NewSubgenre } from './components/NewSubgenre';
import { Information } from './components/Information';
import DATA from './data.json';

function App() {
  const state = useContext(StateContext);
  const genres = DATA.genres;

  const steps = [
    { label: 'Step 1', content: <GenresStep></GenresStep> },
    { label: 'Step 2', content: <SubgenresStep></SubgenresStep> },
    { label: 'Step 3', content: <NewSubgenre></NewSubgenre> },
    { label: 'Step 4', content: <Information></Information> },
  ];

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Center>
      <Flex
        w="100%"
        maxW={800}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        my={20}
      >
        <Text mb={4}>Add book - New book</Text>
        <Flex flexDir="column" width="100%">
          <Steps activeStep={activeStep} mb={8}>
            {steps.map(({ label, content }) => (
              <Step label={label} key={label}>
                {content}
              </Step>
            ))}
          </Steps>
          {activeStep === steps.length ? (
            <Flex p={4}>
              <Button mx="auto" size="sm" onClick={reset}>
                Reset
              </Button>
            </Flex>
          ) : (
            <Flex width="100%" justify="flex-end">
              <Button
                isDisabled={activeStep === 0}
                mr={4}
                onClick={prevStep}
                size="sm"
                variant="ghost"
              >
                Prev
              </Button>
              <Button size="sm" onClick={nextStep}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Center>
  );
}

export default App;
