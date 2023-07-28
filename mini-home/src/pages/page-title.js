import React from "react";
import "./page-title.css";

function PageTitle() {

    const pageTitleAndSubtitle = {
        title: "Peter Stackebrandt",
        subtitle: "Software-Entwickler in Nürnberg"
    }

    return (
        <div className="container mt-5 text-primary">
            <h1 className="display-3">{pageTitleAndSubtitle.title}</h1>
            <p className="lead">{pageTitleAndSubtitle.subtitle}</p>
        </div>
    );
}

export default PageTitle;