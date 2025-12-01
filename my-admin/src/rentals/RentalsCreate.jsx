import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, NumberInput, DateTimeInput } from "react-admin";

export const RentalsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="rental_number" defaultValue={'R2024000'}/>
            <ReferenceInput source="vehicle_id" reference="vehicles">
                <SelectInput />
            </ReferenceInput>
            <ReferenceInput source="customer_id" reference="customers" label='Customer'>
                <SelectInput/>
            </ReferenceInput>
            <DateInput source="start_date"/>
            <DateInput source="end_date"/>
            <DateInput source="actual_return_date"/>
            <NumberInput source="pickup_mileage"/>
            <NumberInput source="return_mileage"/>
            <NumberInput source="daily_rate"/>
            <NumberInput source="total_days"/>
            <NumberInput source="total_amount"/>
            <NumberInput source="deposit paid"/>
            <SelectInput source="status" choices={[
                {id: 'completed', name:'Completed'},
                {id: 'active', name:'Active'}
            ]} />
            <TextInput source="notes" multiline/>
            <DateTimeInput source="created_at"/>
        </SimpleForm>
    </Create>
)