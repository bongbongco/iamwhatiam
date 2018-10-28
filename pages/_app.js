import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import ReactDOM from "react-dom";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import NProgressStyles from "next-nprogress/styles";
import withNProgress from "next-nprogress";
const { Footer } = Layout;
const msDelay = 300;

class MyApp extends App {
    static async getInitalProps({Component, router, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, apollo } = this.props;
        return(
                <Container>
                    <NProgressStyles color="black" spinner={true} />
            <ApolloProvider client={apollo}>
                    <Layout>
                        <Component {...pageProps} />
                        <Footer>This is important</Footer>
                    </Layout>
            </ApolloProvider>
                </Container>
        );
    }
}

export default withNProgress()(withApollo(MyApp));
//export default withApollo(MyApp);