import App, { Container } from "next/app";
import Header from "../components/Header";
import React from "react";

export default class MyApp extends App {
    static async getInitalProps({Component, router, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;
        return(
            <Container>
                <Header />
                <Component {...pageProps} />
            </Container>
        );
    }
}