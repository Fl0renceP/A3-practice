import { Create, SimpleForm, TextInput, NumberInput, DateInput, DateTimeInput, BooleanInput } from "react-admin";

export const CustomersCreate = () => (
        <Create>
            <SimpleForm>
                <TextInput source="customer_number"/>
                <TextInput source="name"/>
                <TextInput source="email" type="email"/>
                <NumberInput source="phone"/>
                <TextInput source="address"/>
                <TextInput source="drivers_license"/>
                <DateInput source="license expiry"/>
                <DateInput source="date_of_birth" label='D.O.B'/>
                <DateTimeInput source="registration_date"/>
                <BooleanInput source="is_blacklisted"/>
                <TextInput source="notes" multiline/>
                <DateTimeInput source="created_at"/>
            </SimpleForm>
        </Create>
)