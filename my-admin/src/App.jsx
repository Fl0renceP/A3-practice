import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import dataProvider from "./trailbasedataProvider";
import { authProvider } from "./trailbasedataProvider";
import { CustomersList } from "./customers/CustomersList";
import { CustomersShow } from "./customers/CustomersShow";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersCreate } from "./customers/CustomersCreate";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="customers" list={CustomersList} edit={CustomersEdit} show={CustomersShow} create={CustomersCreate}/>
    <Resource name="maintenance_records" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="payments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="rentals" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="vehicle_categories" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="vehicles" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
  </Admin>
);

export default App;