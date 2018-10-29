import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initalProps = await Document.getInitialProps(ctx);
        return {...initalProps};
    }

    render(){
        return (
            <html lang="ko">
                <Head>
                    <meta name="author" content={"Seungyong Lee"} />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.1/antd.min.css" rel="stylesheet" />
                </Head>
                <style>{`body {background-color: #EFF2F5!important}`}</style>
                <meta name="theme-color" content="black" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="IamwhatIam store" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}