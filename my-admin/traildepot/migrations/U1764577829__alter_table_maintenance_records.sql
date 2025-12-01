PRAGMA foreign_keys = OFF;

CREATE TABLE "__alter_table_maintenance_records" (
    'id' INTEGER PRIMARY KEY,
    'vehicle_id' INTEGER NOT NULL REFERENCES 'vehicles'('id'),
    'maintenance_type' TEXT NOT NULL CHECK (
        maintenance_type IN ('Service', 'Repair', 'Inspection', 'Accident')
    ),
    'description' TEXT NOT NULL,
    'cost' REAL NOT NULL,
    'service_date' TEXT NOT NULL,
    'service_provider' TEXT,
    'next_service_due' TEXT,
    'parts_replaced' TEXT,
    'status' TEXT NOT NULL DEFAULT 'completed' CHECK (
        STATUS IN ('scheduled', 'in-progress', 'completed')
    ),
    'created_at' ANY NOT NULL DEFAULT (datetime ('now')),
    FOREIGN KEY ('vehicle_id') REFERENCES 'vehicles'('id') ON DELETE CASCADE
) STRICT;

INSERT INTO
    "__alter_table_maintenance_records" (
        created_at,
        cost,
        maintenance_type,
        next_service_due,
        id,
        vehicle_id,
        service_date,
        service_provider,
        parts_replaced,
        STATUS,
        description
    )
SELECT
    created_at,
    cost,
    maintenance_type,
    next_service_due,
    id,
    vehicle_id,
    service_date,
    service_provider,
    parts_replaced,
    STATUS,
    description
FROM
    "maintenance_records";

DROP TABLE "maintenance_records";

PRAGMA legacy_alter_table = ON;

ALTER TABLE
    "__alter_table_maintenance_records" RENAME TO "maintenance_records";

PRAGMA legacy_alter_table = OFF;

PRAGMA foreign_keys = ON;