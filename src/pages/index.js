import React from "react"
import {css} from "@emotion/react"
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <div>
                <h1 css={css`display: inline-block; border-bottom: 1px solid;`}>
                    Coucou c'est l'accueil du site
                </h1>
            </div>
        </Layout>
    )
}