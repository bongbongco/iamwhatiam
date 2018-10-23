import Head from "next/head";
import Link from "next/link";
import { Input, Row, Layout } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
const { Content } = Layout;

export default ({ data, updateSearchTerm, searchTerm }) => (
    <>
        <Head>
            <title>Search | IamwhatIam Store</title>
        </Head>
        <Header
            centerColumn={<h4>{searchTerm === "" ? "Search" : `Searching by ${searchTerm}`}</h4>}
            rightColumn={
                <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
            }
            leftColumn={<Button href="/" text="Home" />}
        />
        <Content style={{ padding: "0 50px" }}>
            <Input onChange={updateSearchTerm} placeholder={"Search by name"} />
        </Content>
    </>
)