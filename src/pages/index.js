import React from "react"
import {css} from "@emotion/react"
import Layout from "../components/layout"
import MailChimpForm from "../components/MailChimpForm";

export default function Home() {
    return (
        <Layout>
            <MailChimpForm/>
            <div>
                <h1 css={css`display: inline-block; border-bottom: 1px solid;`}>
                    Coucou c'est l'accueil du site
                </h1>
            </div>
        </Layout>
    )
}