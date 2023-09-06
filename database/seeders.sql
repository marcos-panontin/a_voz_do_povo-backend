DROP DATABASE IF EXISTS aVozDoPovo;

CREATE DATABASE IF NOT EXISTS aVozDoPovo;

USE aVozDoPovo;

CREATE TABLE users ( user_id VARCHAR(55) PRIMARY KEY );

CREATE TABLE
    questions (
        question_id INT AUTO_INCREMENT PRIMARY KEY,
        question VARCHAR(55) NOT NULL,
        option0 VARCHAR(55) NOT NULL,
        option1 VARCHAR(55) NOT NULL
    );

CREATE TABLE
    answers (
        answer_id INT AUTO_INCREMENT PRIMARY KEY,
        created_at DATETIME NOT NULL,
        option_selected BOOLEAN NOT NULL,
        user_id VARCHAR(55) NOT NULL,
        -- Change this to match the user_id data type
        question_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (question_id) REFERENCES questions(question_id)
    );

    -- Insert fake data into the "users" table

INSERT INTO users (user_id)
VALUES ('user1'), ('user2'), ('user3');

-- Insert fake data into the "questions" table

INSERT INTO
    questions (question, option0, option1)
VALUES (
        'Question 1',
        'Option A',
        'Option B'
    ), (
        'Question 2',
        'Option X',
        'Option Y'
    ), (
        'Question 3',
        'Choice 1',
        'Choice 2'
    );

-- Insert fake data into the "answers" table

INSERT INTO
    answers (
        created_at,
        option_selected,
        user_id,
        question_id
    )
VALUES 
    (NOW(), 1, 'user1', 1),
    (NOW(), 0, 'user2', 1),
    (NOW(), 1, 'user1', 2),
    (NOW(), 1, 'user2', 2),
    (NOW(), 0, 'user3', 3),
    (NOW(), 1, 'user1', 3);

