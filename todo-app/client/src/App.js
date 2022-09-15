
import { Box, Container } from '@chakra-ui/react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import FormTodo from './components/FormTodo';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <Container bg="blue.300" className='App'>
      <Box>
        <TodoCard />
        <FormTodo/>
        <Content/>

      

        <Footer/>
      </Box>
    </Container>

  );
}

export default App;
