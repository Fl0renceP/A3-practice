import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField, TabbedShowLayout, TabbedShowLayoutTabs, } from 'react-admin';

export const RentalsShow = () => (
    <Show>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label='Rental'>
            <TextField source="id" />
            <TextField source="rental_number" />
            <ReferenceField source="customer_id" reference="customers" />
            <ReferenceField source="vehicle_id" reference="vehicles" />
            <TextField source="start_date" />
            <TextField source="end_date" />
            </TabbedShowLayout.Tab>

            <TabbedShowLayout.Tab label='Details'>
            <TextField source="actual_return_date" />
            <TextField source="created_at" />
            <NumberField source="daily_rate" />
            <NumberField source="deposit_paid" />
            <TextField source="notes" />
            <NumberField source="pickup_mileage" />
            <NumberField source="return_mileage" />
            <TextField source="status" />
            <NumberField source="total_amount" />
            <NumberField source="total_days" />
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);