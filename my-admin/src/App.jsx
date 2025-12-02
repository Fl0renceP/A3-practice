import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import dataProvider from "./trailbasedataProvider";
import { authProvider } from "./trailbasedataProvider";
import { CustomersList } from "./customers/CustomersList";
import { CustomersShow } from "./customers/CustomersShow";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersCreate } from "./customers/CustomersCreate";
import { RentalsList } from "./rentals/RentalsList";
import { RentalsShow } from "./rentals/RentalsShow";
import { RentalsEdit } from "./rentals/RentalsEdit";
import { RentalsCreate } from "./rentals/RentalsCreate";
import { VehicleList } from "./vehicles/VehiclesList";


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="customers" list={CustomersList} edit={CustomersEdit} show={CustomersShow} create={CustomersCreate}/>
    <Resource name="maintenance_records" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="payments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="rentals" list={RentalsList} edit={RentalsEdit} show={RentalsShow} create={RentalsCreate}/>
    <Resource name="vehicle_categories" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="vehicles" list={VehicleList} edit={EditGuesser} show={ShowGuesser}/>
  </Admin>
);

export default App;