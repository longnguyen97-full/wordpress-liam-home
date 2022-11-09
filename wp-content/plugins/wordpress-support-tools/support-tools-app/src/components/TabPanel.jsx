import { Box, ButtonGroup, Button } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Features from './Features.jsx';
import Setting from './Setting.jsx';

function TabPanel(props) {
  const home = window.location.hostname == 'liamhome.wsl' ? '/wp-admin/admin.php?page=support_tools' : '';
  const page = window.location.hostname == 'liamhome.wsl' ? '/wp-admin/' : '';

  return (
    <>
    <Router>
      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
        <Button component={Link} to={home}>Home</Button>
        <Button component={Link} to={`${page}features`}>Features</Button>
        <Button component={Link} to={`${page}setting`}>Setting</Button>
      </ButtonGroup>
      <Routes>
        <Route path={`${page}features`} element={<Features/>}></Route>
        <Route path={`${page}setting`} element={<Setting/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default TabPanel;
