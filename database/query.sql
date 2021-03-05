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
