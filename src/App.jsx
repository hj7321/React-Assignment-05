import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import TextsContextProvider from "./context/TextsContextProvider";

const App = () => {
  return (
    <TextsContextProvider>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </TextsContextProvider>
  );
};

export default App;
