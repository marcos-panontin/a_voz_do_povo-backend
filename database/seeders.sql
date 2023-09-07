DROP DATABASE IF EXISTS aVozDoPovo;

CREATE DATABASE IF NOT EXISTS aVozDoPovo;

USE aVozDoPovo;

DROP table users;
DROP table answers
CREATE TABLE users ( user_id VARCHAR(55) PRIMARY KEY
created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE
    answers (
        answer_id INT AUTO_INCREMENT PRIMARY KEY,
        created_at DATETIME NOT NULL,
        option_selected BOOLEAN NOT NULL,
        user_id VARCHAR(55) NOT NULL,
        question_id INT NOT NULL,
    );

    -- Insert fake data into the "users" table

INSERT INTO users (user_id)
VALUES ('mdasdasnj'), ('awpolkjh'), ('ddc9kngbm');



