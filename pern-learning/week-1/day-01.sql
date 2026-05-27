-- ============================================
-- Day 1 — DDL Basics + Data Types
-- ============================================
-- Create your first table
CREATE TABLE books(
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL,
  author varchar(255) NOT NULL,
  published date,
  pages integer,
  in_stock boolean DEFAULT TRUE,
  created_at timestamptz DEFAULT NOW()
);

-- Insert some rows
INSERT INTO books(title, author, published, pages)
VALUES
  ('The Pragmatic Programmer', 'David Thomas', '1999-10-20', 352),
('Designing Data-Intensive Applications', 'Martin Kleppmann', '2017-03-16', 616),
('The Art of PostgreSQL', 'Dimitri Fontaine', '2019-09-01', 430);

-- Read them back
SELECT
  *
FROM
  books;

-- Filter
SELECT
  title,
  author
FROM
  books
WHERE
  pages > 400;

-- Order
SELECT
  title,
  pages
FROM
  books
ORDER BY
  pages DESC;

