// file: RootLayout.js

//ReactRouter Imports
import { Outlet } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

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
            <header className="text-center">
                <TopNav />
                <PageTitle />
            </header>
        );
    }

    function MainContent() {
        return (
            <main className="text-center">
                <Outlet />
            </main>
        );
    }

    function Footer() {
        return (
            <header className="text-center">
                <BottomNav />
            </header>
        );
    }

    return (
        <div className="root-layout">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
