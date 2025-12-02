import { DataTable, DateField, List, ReferenceField, ChipField, TextField, Datagrid, NumberField, DateInput, SearchInput, SelectInput} from 'react-admin';

const RentalsFilters = [
    <SearchInput source='q' alwaysOn/>,
    <SelectInput source='status' choices={[
        {id:'Active', name:'Active'},
        {id:'Completed', name:'Completed'},
        {id: 'Cancelled', name:'Cancelled'},
    ]}/>,
    <DateInput source='start_date'/>
]

export const RentalsList = () => (
    <List filters={RentalsFilters} sort={{ field: 'start_date', order: 'DESC' }}>
        <Datagrid>
            <TextField source="actual_return_date" />
            <ReferenceField source="customer_id" reference="customers">
                <TextField source='name'/>
            </ReferenceField>
            <NumberField source="deposit_paid" />
            <TextField source="end_date" />
            <TextField source="rental_number" />
            <TextField source="start_date" />
            <ChipField source="status" />
            <NumberField source="total_amount" />
            <NumberField source="total_days" />
            <ReferenceField source="vehicle_id" reference="vehicles" label="Vehicle Registration Number">
                    <TextField source='registration_number'/>
            </ReferenceField>    
        </Datagrid>
    </List>
);