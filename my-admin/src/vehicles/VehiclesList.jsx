import { DataTable, DateField, List, ReferenceField, ReferenceInput, SearchInput, SelectInput, Datagrid, TextField, NumberField } from 'react-admin';

const VehiclesFilters = [
    <SearchInput source='q' alwaysOn/>,
    <SelectInput source='status' choices={[
        {id:'available', name:'Available'},
        {id:'rented', name:'Rented'},
        {id: 'maintenance', name:'Maintenance'},
        {id:'retired', name:'Retired'}
    ]}/>,
    <ReferenceInput source='category_id' reference='vehicle_categories'/>,
    <SelectInput source='transmission' choices={[
        {id:'Manual', name:'Manual'},
        {id: 'Automatic', name:'Automatic'}
    ]}/>
]

export const VehicleList = () => (
    <List filters={VehiclesFilters}>
        <Datagrid>
            <ReferenceField source="category_id" reference="vehicles_categories" sortable={false}>
                <TextField source="name"/>
            </ReferenceField>
            <ReferenceField source='category_id' reference='vehicle_categories' label="Daily Rate">
                <TextField source='daily_rate' />      
            </ReferenceField>
            <TextField source="color" sortable={false}/>
            
            <TextField source="fuel_type" sortable={false}/>
            
            
            <TextField source="make" sortable={true}/>
            <NumberField source="mileage" />
            <TextField source="model" sortable={true}/>
            
            
            <NumberField source="registration_number" sortByOrder='ASC' />
            
            <TextField source="status" sortable={false}/>
            <TextField source="transmission" sortable={false} />
            <NumberField source="year" sortable={true}/>
        </Datagrid>
    </List>
);