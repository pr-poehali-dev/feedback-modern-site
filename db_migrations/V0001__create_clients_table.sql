CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    age INTEGER CHECK (age > 0 AND age < 150),
    phone VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_phone ON clients(phone);

COMMENT ON TABLE clients IS 'Таблица клиентов';
COMMENT ON COLUMN clients.last_name IS 'Фамилия клиента';
COMMENT ON COLUMN clients.first_name IS 'Имя клиента';
COMMENT ON COLUMN clients.age IS 'Возраст клиента';
COMMENT ON COLUMN clients.phone IS 'Номер телефона';
COMMENT ON COLUMN clients.email IS 'Email адрес (уникальный)';