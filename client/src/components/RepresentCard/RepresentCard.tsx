import {
  Box,
  Button,
  Heading,
  Highlight,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Stepper from '../Stepper/Stepper';
import { useState } from 'react';

function RepresentCard() {
  const [content, setContent] = useState(0);
  return (
    <>
      <Box w={600}>
        <Stepper step={content} />
        <Heading as="h2" size="xl" noOfLines={1}>
          Представляем вам
        </Heading>
        <Stack
          divider={<StackDivider borderColor="gray.200"/>}
          spacing={4}
          align="stretch"
          
        >
          <Heading as="h2" size="xl" noOfLines={1}>
            карту
            <Highlight query='"Все музеи"' styles={{ color: '#16af8d' }}>
              "Все музеи"
            </Highlight>
          </Heading>
          <Box h={300} w={500}>
            {content === 0 && (
              <Box style={{overflow:'hidden' }} width={'100%'}>
                <div style={{display:'flex', transform:'translateX(-200px)'}}>
              <Stack minW={'100%'} maxW={'100%'}
              divider={<StackDivider borderColor="gray.200"/>}
              spacing={4}
              
            >
                <Text fontSize="2xl">Главные преимущества:</Text>
                <Text fontSize="2xl">
                  1. Посещение любого музея из списка без необходимости стоять в очереди.
                </Text>
                <Text fontSize="2xl">
                  2. Информация о более чем 30 музеях.
                </Text>
                </Stack><Stack minW={'100%'} maxW={'100%'} borderLeftWidth={'thin'}
              divider={<StackDivider borderColor="gray.200"/>}
              spacing={4}
              
            >
                <Text fontSize="2xl">111111 преимущества:</Text>
                <Text fontSize="2xl">
                  1. 11111111111го музея из списка без необходимости стоять в очереди.
                </Text>
                <Text fontSize="2xl">
                  2. 1111111111 более чем 30 музеях.
                </Text>
                </Stack></div>
                </Box>
            )}

            {content === 1 && <div>номер два</div>}
            {content === 2 && <div>номер три</div>}
          </Box>
          <Button
            onClick={() => setContent((pre) => (pre < 2 ? pre + 1 : (pre = 0)))}
          >
            {' '}
            &gt;&gt;&gt;{' '}
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default RepresentCard;
