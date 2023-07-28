//ReactRouter Imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';


//Layouts
import RootLayout from "../layouts/RootLayout";
import ImpressLayout from "../layouts/ImpressLayout";

// Pages
import TopNav from '../pages/top-nav';
import PageTitle from '../pages/page-title';
import Impress from '../pages/Impress';
import Welcome from "../pages/Welcome";
import BottomNav from '../pages/bottom-nav';

import Error from "../pages/errors/Error";
import NotFound from "../pages/NotFound";

/*
* Welcome == Hauptseite
* NotFound == Wenn eine URL angefragt wird die nicht existiert wird diese Seite aufgerufen.
* errors == Error wird immer dann aufgerufen wenn ein Servefehler auftritt
* ImpressLayout == Impressum, ggf. später auch Datenschutz
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Welcome />} />
            
      <Route path="impress" element={<ImpressLayout />}>
        <Route index element={<Impress />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  function Header() {
    return (
      <header>
        {/* <TopNav /> */}
        <PageTitle />
      </header>
    );
  }

  // function MainContent() {
  //         return (
  //           <main>
  //             <h1>Main</h1>
  //           </main>
  //         );
  //       }

  // function Footer() {
  //   return (
  //     <footer>
  //       <BottomNav />
  //     </footer>
  //   );
  // }

  return (
    <RouterProvider router={router} />
    // <div className="app">
    //   <Header />
    //   {/* <MainContent /> */}
    //   <BottomNav />
    // </div>
  );
}

export default App;
