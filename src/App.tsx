import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Contacts from './components/Contacts/Contacts';
import { useRoutes } from 'react-router';
import { routes } from './routes/routes';

function App() {
  const routerRender = useRoutes(routes);
  return (
    <>
      <main className="app-content">
        <NavBar />
        <main className="app-main">{routerRender}</main>
      </main>
      <footer className="pageFooter">
        <Contacts />
        <div className="pageFooter__branding">© copyright 2022</div>
      </footer>
    </>
  );
}

export default App;
