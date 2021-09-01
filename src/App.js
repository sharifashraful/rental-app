import { Container } from '@material-ui/core';
import './App.css';
import RentalScreen from './screens/RentalScreen';

function App() {
  return (
    <Container maxWidth="md" className="container" >
      <RentalScreen />
    </Container>
  );
}

export default App;
