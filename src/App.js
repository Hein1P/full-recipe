import { Container } from "@mui/system";
import Catagory from "./components/Catagory";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { GiKnifeFork } from 'react-icons/gi'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
function App() {
  return (
    <Container maxWidth='xl'>
      <div style={{ marginTop: '2rem' }}>
        <Link to={'/'} style={{ display: 'flex', textDecoration: 'none' }}>
          <GiKnifeFork style={{ fontSize: '2rem' }} />
          <Typography variant={'h5'} component={'h5'}>Delicious</Typography>
        </Link>
      </div>
      <Search />
      <Catagory />
      <Pages />
    </Container>

  );
}

export default App;
