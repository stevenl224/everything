import { FormEvent, useCallback, useState } from 'react';
import { 
    Button, 
    FormControl, 
    FormErrorMessage, 
    FormHelperText, 
    Input,
    Text
} from '@chakra-ui/react';

type ShortenUrlFormProps = {
  requestShortUrl: (original: string) => Promise<void>;
};

export const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({
    requestShortUrl,
  }) => {
    const [inputUrl, setInputUrl] = useState<string>('');
    const onSubmit = useCallback(
      async (event: FormEvent) => {
        event.preventDefault();
        await requestShortUrl(inputUrl);
        setInputUrl('');
      },
      [inputUrl, setInputUrl]
    );

  const isError = inputUrl === ''

  return (
    <FormControl isInvalid={isError}>
        <form onSubmit={onSubmit}>
        <Input
            id="url-input"
            size="lg"
            type="url"
            marginBlock={4}
            value={inputUrl}
            onChange={(e) => {
            setInputUrl(e.target.value);
            }}
            placeholder="www.my-super-long-url-here.com/12345"
        />
        {!isError ? (
            <FormHelperText>
              <Text fontSize="xl" marginBlock={4} align="left">
                Enter the url you'd like to shorten.
              </Text>
            </FormHelperText>
            ) : (
              <FormErrorMessage lineHeight="normal">
                <Text fontSize="xl" marginBlock={2} align="left">
                  Url is required.
                </Text>
                </FormErrorMessage>
            )
          }
        <Button id="submit-btn" type="submit" colorScheme="teal" size="lg" isDisabled={isError}>
            Generate
        </Button>
        </form>
    </FormControl>
  );
};

export default ShortenUrlForm;

