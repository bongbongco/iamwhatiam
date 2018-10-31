import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import ReactDOM from "react-dom";
import withApollo from "../lib/withApollo";
import Subscription, { ApolloProvider } from "react-apollo";
import NProgressStyles from "next-nprogress/styles";
import withNProgress from "next-nprogress";
import convertDataURIToBinary from "../lib/base64";
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

    componentDidMount() {
        if ("serviceWorker" in navigator && 
        "PushManager" in window) 
        {
            navigator.serviceWorker
                .register("/sw.js")
                .then(swReg => {
                    console.log("SW Registered: ", swReg); 
                    swReg.pushManager.getSubscription().then(subscription => {
                        if (subscription === null) {
                            Notification.requestPermission().then(permission => {
                                if(permission === "granted") {
                                    swReg.pushManager.subscribe({
                                        userVisibleOnly: true,
                                        applicationServerKey: convertDataURIToBinary(
                                            "BHWawc3L7sMETVbpfwF3eNfLWSKlhm5t-plnRu6UMuT1_4BFgW8u8LKNmME_HTvOXjGeFo-0DAP8Pt_DDC1dCYE"
                                        )
                                    }).then(PushSubscriptionObject => {
                                        console.log(JSON.stringify(PushSubscriptionObject));
                                    })
                                }
                            });
                        } else {
                            console.log(JSON.stringify(subscription));
                        }
                    });
                })
                .catch(error => console.log("Can't register SW: ", error));
        }
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