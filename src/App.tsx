import {
  Box,
  Heading,
  Center,
  Input,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [numeroProva, setNumeroProva] = useState(0);
  const [valoreDaInserire, setValoreDaInserire] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const checkAnswer = () => {
    if (numeroProva === 1 && valoreDaInserire === "a") {
      setAnswer("link");
      setShowAnswer(true);
    } else {
      setAnswer("errore");
      setShowAnswer(true);
    }
  };

  return (
    <Box>
      <Center>
        <Box top={10} w="50%" p={4}>
          <Heading>
            Ora inserirete prima il numero della vostra prova e poi la parola
            magica!
          </Heading>
        </Box>
      </Center>
      <Box top={10} w="50%" p={4} m="auto">
        <Text mb={4}>Inserire il numero della prova</Text>
        <NumberInput
          defaultValue={0}
          onChange={(valueString) => setNumeroProva(parseInt(valueString))}
          value={numeroProva}
          min={0}
        >
          <NumberInputField />
        </NumberInput>
      </Box>
      <Box top={10} w="50%" p={4} m="auto">
        <Text mb={4}> Inserire la parola magica</Text>
        <Input
          onChange={(e) => setValoreDaInserire(e.target.value)}
          value={valoreDaInserire}
          placeholder="Dario"
        ></Input>
      </Box>
      <Box top={10} w="50%" p={4} m="auto">
        <Button colorScheme="blue" onClick={checkAnswer}>
          Controlla i risultati!
        </Button>
      </Box>
      {showAnswer ? (
        <Box top={10} w="50%" p={4} m="auto">
          <Heading>{answer}</Heading>
        </Box>
      ) : null}
    </Box>
  );
}

export default App;
