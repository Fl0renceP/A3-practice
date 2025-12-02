import { BooleanField, DataTable, DateField, EmailField, List, TextInput, SearchInput } from 'react-admin';

const CustomersFilter = [
    <SearchInput source='q' alwaysOn />,
    <TextInput label='Customer Number' source='customer_number'/>,
    <TextInput label='Drivers License' source='drivers_license'/>,
];

export const CustomersList = () => (
    <List filters={CustomersFilter}>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="customer_number" />
            <DataTable.Col source="address" />
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
            
            <DataTable.Col source="date_of_birth">
                <DateField source="date_of_birth" />
            </DataTable.Col>
            <DataTable.Col source="drivers_license" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            
            <DataTable.Col source="is_blacklisted" >
                
            </DataTable.Col>
            <DataTable.Col source="license_expiry">
                <DateField source="license_expiry" />
            </DataTable.Col>
            <DataTable.Col source="name" />
            <DataTable.Col source="notes" />
            <DataTable.Col source="phone" />
            <DataTable.Col source="registration_date">
                <DateField source="registration_date" />
            </DataTable.Col>
        </DataTable>
    </List>
);