import { BooleanField, DataTable, DateField, EmailField, List } from 'react-admin';

export const CustomersList = () => (
    <List>
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