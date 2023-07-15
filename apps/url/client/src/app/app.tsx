// import styles from './app.module.css';
import { useState, useCallback } from 'react';
import axios from 'axios';
import { Container, Text } from '@chakra-ui/react';
import ShortenUrlForm from './shortened-url-form';
import UrlList from './url-list';
import Shortened from './shortened';

export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);

  const requestShortUrl = useCallback(
    async (inputUrl: string) => {
      const response = await axios.post(
        `http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });
      
      const newUrl = response.data as Shortened;
      
      setUrls([newUrl, ...urls]);
    },
    [urls, setUrls]
  )

  return (
    <Container maxWidth="4xl" marginBlock={10} textAlign="center">
    <Text fontSize="4xl" fontWeight="bold">My URL Shortener</Text>
    <ShortenUrlForm requestShortUrl={requestShortUrl} />
    <UrlList urls={urls} />
  </Container>
  );
}

export default App;