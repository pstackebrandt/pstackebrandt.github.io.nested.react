// file: RootLayout.js

//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import TopNav from '../pages/top-nav';
import PageTitle from '../pages/page-title';
import BottomNav from '../pages/bottom-nav';


/**
 * Repräsentiert das Hauptlayout,
 * welches alle anderen Layouts
 * passend importiert und mithilfe von react-router
 * sicherstellt, dass die Inhalte anstelle
 * des Outlet Tags angezeigt werden.
 */
export default function RootLayout() {

    function Header() {

        return (
            <header>
                <TopNav />
                <PageTitle />
            </header>
        );
    }

    function MainContent() {
        return (
            <main>
                <Outlet />
            </main>
        );
    }

    function Footer() {
        return (
            <footer>
                <p>Footer von RH</p>
                <Nav>
                    {/* todo use component bottom-nav */}
                    <NavLink to="/" as={Nav.Link}>Home</NavLink>
                    <NavLink to="/impressum" as={Nav.Link}>Impressum</NavLink>
                </Nav>
            </footer>
        );
    }

    return (
        <div className="root-layout">
            <Header />
            <MainContent />
            <BottomNav />
        </div>
    );
}
