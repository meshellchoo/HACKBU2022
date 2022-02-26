import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  IconButton,
  Button,
  Flex,
  useColorMode,
  Spinner,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './container';
import HomePage from './pages/home-page/home-page';
import LoadingPage from './pages/loading-page';
import { useParams } from 'react-router-dom';

function App() {
  const [userObject, setUserObject] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { email } = useParams(); // <-check if it's undefined, if it is just hardcode email
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/spotability/search-by-email?email=' + email)
      .then(data => {
        setUserObject(data);
        // console.log("%j", data);
        setLoading(false);
        // var a = JSON.parse(JSON.stringify(data["data"]["token_type"]));
      });
  }, []);

  if (isLoading) {
    return (
      // <div className="App">
      // <Spinner size="xl" color="red.500" />
      // </div>
      <LoadingPage />
    );
  }

  return (
    <Container>
      <Box>
        <VStack>
          <HomePage userObject={userObject} />
        </VStack>
      </Box>
    </Container>
  );
}

export default App;
