
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';
// import ShowSenderTeam from './show-sender-team';
// import EyeCatcher from './components/eye-catcher';
import PageTitle from '../components/page-title';
// import TopNavBar from './components/top-nav-bar';
// import BottomNav from './components/bottom-nav';

function App() {

  function Header() {
    return (
      <header>
        {/* <TopNavBar /> */}
        <PageTitle />
      </header>
    );
  }
  // function MainContent() {
  //         return (
  //           <main>
  //             Main
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
    <div className="app">
      <Header />
      {/* <MainContent /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
