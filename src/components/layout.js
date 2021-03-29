import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

const ListLink = props => (
    <li style={{display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export default function Layout({children}) {
    const {site} = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
    );
    return (
        <div style={{margin: `0 auto`, maxWidth: 1100}}>
            <header style={{marginBottom: `1.5rem`}}>
                <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                    <h3 style={{display: `inline`}}>{site.siteMetadata.title}</h3>
                </Link>
                <ul style={{listStyle: `none`, float: `right`}}>
                    <ListLink to="/">Accueil</ListLink>
                    <ListLink to="/articles">Articles</ListLink>
                    <ListLink to="/formations">Formations</ListLink>
                    <ListLink to="/about/">A propos</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
            {children}
        </div>
    )
}