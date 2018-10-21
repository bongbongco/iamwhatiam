import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initalProps = await Document.getInitialProps(ctx);
        return {...initalProps};
    }
    render(){
        return (
            <html>
                <Head>
                    <meta name="author" content={"Seungyong Lee"} />
                    <link href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.1/antd.min.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}