SELECT u.user_name, r.routine_id, r.date_start, r.date_end, e.name, s.reps, s.weight
FROM users u
JOIN stats s
ON u.user_id = s.user_id
JOIN routine_exercises re
ON s.routine_exercise_id = re.routine_exercise_id
JOIN exercises e
ON e.exercise_id = re.exercise_id
JOIN routines r
ON u.user_id = r.user_id
WHERE u.user_id = 2 AND r.routine_id = 1;

SELECT e.name, r.routine_id, r.user_id
FROM exercises e
JOIN routine_exercises re
ON e.exercise_id = re.exercise_id
JOIN routines r
ON r.routine_id = re.routine_id;

SELECT e.name, r.routine_id, r.user_id
FROM exercises e
JOIN routine_exercises re
ON e.exercise_id = re.exercise_id
JOIN routines r
ON r.routine_id = re.routine_id
WHERE r.routine_id != 1;

-- SELECT ALL EXERCISES THAT HAVENT BEEN LOGGED IN THE ROUTINE YET
SELECT DISTINCT e.name
FROM users u
JOIN routines r ON u.user_id = r.user_id
JOIN routine_exercises re ON r.routine_id = re.routine_id
JOIN exercises e ON e.exercise_id = re.exercise_id
JOIN stats s ON s.routine_exercise_id = re.routine_exercise_id
WHERE r.routine_id = 2
ORDER BY e.name;

-- SELECT ALL EXERCISES OF UNFINISHED ROUTINE
SELECT u.user_name, r.routine_id, e.name, s.weight, s.reps
FROM users u
JOIN routines r
  ON u.user_id = r.user_id
JOIN routine_exercises re
  ON r.routine_id = re.routine_id
JOIN stats s
  ON re.routine_exercise_id = s.routine_exercise_id
JOIN exercises e
  ON e.user_id = u.user_id;


-- DELETE SET DATA FOR AN EXERCISE OF A ROUTINE
SELECT e.name, s.weight, s.reps, u.user_name, r.routine_id, re.routine_exercise_id
FROM users u
JOIN routines r ON u.user_id = r.user_id
JOIN routine_exercises re ON r.routine_id = re.routine_id
JOIN exercises e ON e.exercise_id = re.exercise_id
JOIN stats s ON s.routine_exercise_id = re.routine_exercise_id
ORDER BY e.name;

-- GET EXERCISE DATA FROM ROUTINE
SELECT r.routine_id, e.name, s.weight, s.reps
FROM stats s
JOIN routine_exercises re
  ON s.routine_exercise_id = re.routine_exercise_id
JOIN exercises e
  ON e.exercise_id = re.exercise_id
JOIN routines r
  ON r.routine_id = re.routine_id
WHERE r.routine_id = 1;

-- WORKS! RETRIEVES MAX WEIGHT FOR EACH EXERCISE BY A USER
SELECT e.name, MAX(s.weight) AS max_weight, u.user_id
FROM users u
JOIN stats s ON u.user_id = s.user_id
JOIN routine_exercises re
  ON s.routine_exercise_id = re.routine_exercise_id
JOIN exercises e ON e.exercise_id = re.exercise_id
WHERE u.user_id = 2
GROUP BY e.name, u.user_id;

-- Gets the date and highest weight per routine for an exercise
SELECT u.user_name, r.date_end, r.routine_id, e.name, MAX(s.weight)
FROM users u
JOIN routines r ON u.user_id = r.user_id
JOIN routine_exercises re on r.routine_id = re.routine_id
JOIN stats s ON re.routine_exercise_id = s.routine_exercise_id
JOIN exercises e ON re.exercise_id = e.exercise_id
WHERE u.user_id = 2 AND e.exercise_id = 6
GROUP BY u.user_name,r.routine_id, e.name;
