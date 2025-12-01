import { DataTable, DateField, List, ReferenceField, ChipField } from 'react-admin';

export const RentalsList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="actual_return_date">
                <DateField source="actual_return_date" />
            </DataTable.Col>
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customers" />
            </DataTable.Col>
            <DataTable.NumberCol source="daily_rate" />
            <DataTable.NumberCol source="deposit_paid" />
            <DataTable.Col source="end_date">
                <DateField source="end_date" />
            </DataTable.Col>
            <DataTable.Col source="id" />
            <DataTable.Col source="notes" />
            <DataTable.NumberCol source="pickup_mileage" />
            <DataTable.Col source="rental_number" />
            <DataTable.NumberCol source="return_mileage" />
            <DataTable.Col source="start_date">
                <DateField source="start_date" />
            </DataTable.Col>
            <ChipField source="status" />
            <DataTable.NumberCol source="total_amount" />
            <DataTable.NumberCol source="total_days" />
            <DataTable.Col source="vehicle_id">
                <ReferenceField source="vehicle_id" reference="vehicles" />
            </DataTable.Col>
        </DataTable>
    </List>
);