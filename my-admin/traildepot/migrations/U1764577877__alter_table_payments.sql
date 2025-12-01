PRAGMA foreign_keys = OFF;

CREATE TABLE "__alter_table_payments" (
    'id' INTEGER PRIMARY KEY,
    'rental_id' INTEGER NOT NULL REFERENCES 'rentals'('id'),
    'payment_date' ANY NOT NULL DEFAULT (datetime ('now')),
    'amount' REAL NOT NULL,
    'payment_method' TEXT NOT NULL CHECK (
        payment_method IN (
            'Cash',
            'Card',
            'Bank Transfer',
            'Mobile Payment'
        )
    ),
    'transaction_ref' TEXT,
    'payment_type' TEXT NOT NULL CHECK (
        payment_type IN (
            'Deposit',
            'Rental',
            'Damage',
            'Late Fee',
            'Refund'
        )
    ),
    'notes' TEXT,
    'created_at' ANY NOT NULL DEFAULT (datetime ('now')),
    FOREIGN KEY ('rental_id') REFERENCES 'rentals'('id') ON DELETE CASCADE
) STRICT;

INSERT INTO
    "__alter_table_payments" (
        notes,
        created_at,
        payment_method,
        rental_id,
        amount,
        payment_type,
        id,
        transaction_ref,
        payment_date
    )
SELECT
    notes,
    created_at,
    payment_method,
    rental_id,
    amount,
    payment_type,
    id,
    transaction_ref,
    payment_date
FROM
    "payments";

DROP TABLE "payments";

PRAGMA legacy_alter_table = ON;

ALTER TABLE
    "__alter_table_payments" RENAME TO "payments";

PRAGMA legacy_alter_table = OFF;

PRAGMA foreign_keys = ON;