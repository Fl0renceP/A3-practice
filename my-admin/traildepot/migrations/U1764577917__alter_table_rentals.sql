PRAGMA foreign_keys = OFF;

CREATE TABLE "__alter_table_rentals" (
    'id' INTEGER PRIMARY KEY,
    'rental_number' TEXT NOT NULL UNIQUE,
    'vehicle_id' INTEGER NOT NULL REFERENCES 'vehicles'('id'),
    'customer_id' INTEGER NOT NULL REFERENCES 'customers'('id'),
    'start_date' TEXT NOT NULL,
    'end_date' TEXT NOT NULL,
    'actual_return_date' TEXT,
    'pickup_mileage' INTEGER NOT NULL,
    'return_mileage' INTEGER,
    'daily_rate' REAL NOT NULL,
    'total_days' INTEGER NOT NULL,
    'total_amount' REAL NOT NULL,
    'deposit_paid' REAL NOT NULL,
    'status' TEXT NOT NULL DEFAULT 'active' CHECK (STATUS IN ('active', 'completed', 'cancelled')),
    'notes' TEXT,
    'created_at' ANY NOT NULL DEFAULT (datetime ('now')),
    FOREIGN KEY ('vehicle_id') REFERENCES 'vehicles'('id') ON DELETE RESTRICT,
    FOREIGN KEY ('customer_id') REFERENCES 'customers'('id') ON DELETE RESTRICT
) STRICT;

INSERT INTO
    "__alter_table_rentals" (
        rental_number,
        start_date,
        total_amount,
        STATUS,
        id,
        created_at,
        actual_return_date,
        notes,
        customer_id,
        daily_rate,
        return_mileage,
        total_days,
        pickup_mileage,
        end_date,
        deposit_paid,
        vehicle_id
    )
SELECT
    rental_number,
    start_date,
    total_amount,
    STATUS,
    id,
    created_at,
    actual_return_date,
    notes,
    customer_id,
    daily_rate,
    return_mileage,
    total_days,
    pickup_mileage,
    end_date,
    deposit_paid,
    vehicle_id
FROM
    "rentals";

DROP TABLE "rentals";

PRAGMA legacy_alter_table = ON;

ALTER TABLE
    "__alter_table_rentals" RENAME TO "rentals";

PRAGMA legacy_alter_table = OFF;

PRAGMA foreign_keys = ON;