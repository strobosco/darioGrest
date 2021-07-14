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

// - contiene i link da esporre a combinazione corretta
const links = {
  "1": "https://maps.app.goo.gl/oyPtRfWrFCToikSf7",
  "2": "https://goo.gl/maps/vb4cn8LL25JL1Lax8",
  "3": "https://maps.app.goo.gl/KK7wFGKoVvJPceUQA",
  "4": "https://maps.app.goo.gl/B1LMJhE43oB7Ssrf6",
  "5": "https://goo.gl/maps/gZJzaY87cktM5LeD8",
};

// - contiene le combinazioni tra domanda e risposta
const combinazioni = {
  "1": "codroipo",
  "2": "3,66",
  "3": "50",
  "4": "c",
  "5": "b",
};

function App() {
  const [numeroProva, setNumeroProva] = useState(0); // - contiene il valore della prova inserito
  const [valoreDaInserire, setValoreDaInserire] = useState(""); // - contiene il valore inserito
  const [answer, setAnswer] = useState(""); // - contiene la risposta che verrà mostrata
  const [showAnswer, setShowAnswer] = useState(false); // - condizione per esporre la risposta,

  // - funzione che controlla il risultato
  const checkAnswer = () => {
    if (
      numeroProva === 1 &&
      valoreDaInserire.toLowerCase() === combinazioni["1"]
    ) {
      setAnswer(links["1"]);
      setShowAnswer(true);
    } else if (numeroProva === 2 && valoreDaInserire === combinazioni["2"]) {
      setAnswer(links["2"]);
      setShowAnswer(true);
    } else if (numeroProva === 3 && valoreDaInserire === combinazioni["3"]) {
      setAnswer(links["3"]);
      setShowAnswer(true);
    } else if (numeroProva === 4 && valoreDaInserire === combinazioni["4"]) {
      setAnswer(links["4"]);
      setShowAnswer(true);
    } else if (numeroProva === 5 && valoreDaInserire === combinazioni["5"]) {
      setAnswer(links["5"]);
      setShowAnswer(true);
    } else {
      setAnswer("Sbagliato! Prova a inserire un'altra combinazione!");
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
        <Text mb={4}>Inserisci il numero della prova:</Text>
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
        <Text mb={4}>Inserisci la parola magica:</Text>
        <Input
          onChange={(e) => setValoreDaInserire(e.target.value)}
          value={valoreDaInserire}
          placeholder=""
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
