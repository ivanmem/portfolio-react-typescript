import RoutePropsCustom from '../interfaces/RoutePropsCustom';
import AboutMe from '../components/AboutMe/AboutMe';
import { Navigate } from 'react-router';

export const routes: RoutePropsCustom[] = [
  {
    path: 'about-me',
    label: 'about me',
    element: <AboutMe/>,
  }, {
    path: "*",
    element: <Navigate to="about-me" replace />,
  }];
