import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const RentalsEdit = () => (
    <Edit>
        <SimpleForm>
            <DateInput source="actual_return_date" />
            <DateInput source="created_at" />
            <ReferenceInput source="customer_id" reference="customers" />  {/*works the same as SelectInput, the user can type to bring the name up*/}
            <NumberInput source="daily_rate" />
            <NumberInput source="deposit_paid" />
            <DateInput source="end_date" />
            <TextInput source="id" disabled/>
            <TextInput source="notes" multiline />
            <NumberInput source="pickup_mileage" />
            <TextInput source="rental_number" />
            <NumberInput source="return_mileage" />
            <DateInput source="start_date" />
            <TextInput source="status" />
            <NumberInput source="total_amount" />
            <NumberInput source="total_days" />
            <ReferenceInput source="vehicle_id" reference="vehicles" />
        </SimpleForm>
    </Edit>
);