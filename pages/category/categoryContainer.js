import { Query } from "react-apollo";
import CartPresenter from "./cartPresenter";

export default () => (
    <Query>{({ data}) => <CartPresenter data={data} />}</Query>
)