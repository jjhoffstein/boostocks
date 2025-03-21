-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TEXT NOT NULL,
  ip_address TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);

-- Create index on creation date for chronological sorting
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at); 