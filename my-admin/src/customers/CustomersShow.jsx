import { AUTH_LOGIN, DateField, EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CustomersShow = () => (
    <Show>
        <SimpleShowLayout sx={{bgcolor: 'lavender'}}>
            <TextField source="address" />
            <DateField source="created_at" />
            <TextField source="customer_number" />
            <DateField source="date_of_birth" />
            <TextField source="drivers_license" />
            <EmailField source="email" />
            <TextField source="id" />
            <DateField source="is_blacklisted" />
            <DateField source="license_expiry" />
            <TextField source="name" />
            <TextField source="notes" />
            <TextField source="phone" />
            <DateField source="registration_date" />
        </SimpleShowLayout>
    </Show>
);