import React, { useState } from 'react';
import {
  Box,
  VStack,
  Flex,  
  useColorMode,
  Image,
  IconButton,
  Heading,
  Wrap,
  WrapItem,
  Center,
  Button,
  Text,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'



// Components
import Container from '../../container';
import MatchCard from './helper-components/match_card';

import axios from "axios";

import HomePageTitle from "./helper-components/home-title"

import FactsBox from './helper-components/home-factsBox';

import {
    useEffect
  } from 'react';


function HomePage () {
const {colorMode, toggleColorMode} = useColorMode();
  return (
    
      <VStack>
        <Box my={10} p={2}>
          <IconButton 
            size="lg" 
            colorScheme={colorMode ==='dark'? "pink" : "none"} 
            variant={colorMode === 'dark' ? "solid" : "outline"} 
            shadow="md" borderRadius="full" 
            onClick={toggleColorMode} 
            icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} 
            border='2px'>
          </IconButton>
        </Box>
        
        <Flex direction="column">

          <HomePageTitle/>

          

          <FactsBox/>

          
            
          

    
          <Box>
            <MatchCard/>
          </Box>

        </Flex>
      </VStack>
    
  )
}

        



export default HomePage