import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const CustomersEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="address" />
            <DateInput source="created_at" />
            <TextInput source="customer_number" />
            <DateInput source="date_of_birth" />
            <TextInput source="drivers_license" />
            <TextInput source="email" />
            <TextInput source="id" disabled />
            <DateInput source="is_blacklisted" />
            <DateInput source="license_expiry" />
            <TextInput source="name" />
            <TextInput source="notes" />
            <TextInput source="phone" />
            <DateInput source="registration_date" />
        </SimpleForm>
    </Edit>
);