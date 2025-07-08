-- Clients Table
CREATE TABLE Clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  company VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE Projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  status ENUM('Not Started', 'In Progress', 'Completed') DEFAULT 'Not Started',
  deadline DATE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE
);

-- Tasks Table
CREATE TABLE Tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status ENUM('To Do', 'In Progress', 'Done') DEFAULT 'To Do',
  due_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE
);

-- Meetings Table
CREATE TABLE Meetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT NOT NULL,
  project_id INT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE SET NULL
);

-- Portfolios Table
CREATE TABLE Portfolios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT NOT NULL,
  file_url TEXT,
  description TEXT,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE
);

SHOW DATABASES;
