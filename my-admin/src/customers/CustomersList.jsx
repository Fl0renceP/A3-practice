import { BooleanField, DataTable, DateField, EmailField, List, TextInput, SearchInput, Datagrid, TextField, BooleanInput, useRecordContext } from 'react-admin';

const CustomersFilter = [
    <SearchInput source='q' alwaysOn />,
    <TextInput source='name'/>,
    <TextInput label='Customer Number' source='customer_number'/>,
    <TextInput label='Drivers License' source='drivers_license'/>,
    <BooleanInput source='is_blacklisted'/>
];

const ColoredBlacklistedField = (props) => {
    const record = useRecordContext();
    const isBlacklisted = record?.is_blacklisted === 1;
    
    return (
        <TextField
            sx={{ 
                color: isBlacklisted ? 'red' : 'green',
                fontWeight: isBlacklisted ? 'bold' : 'normal'
            }}
            {...props}
        />
    );
};

export const CustomersList = () => (
    <List filters={CustomersFilter}>
        <Datagrid
            rowStyle={(record) => ({
                backgroundColor: record.is_blacklisted === 1 ? '#ffebee' : 'white',
            })}
        >
            <TextField source="customer_number" sortable={true}/>
            
            <TextField source="drivers_license" sortable={false}/>
            
            <EmailField source="email" sortable={false} />
            <ColoredBlacklistedField source="is_blacklisted" sortable={false} /> 
            <DateField source="license_expiry" sortable={false}/>
            <TextField source="name" sortable={true}/>
            <TextField source="phone" sortable={false}/>
            <DateField source="registration_date" sortable={false}/>
        </Datagrid>
    </List>
);