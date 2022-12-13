SELECT cohorts.name as cohort, SUM(completed_at - started_at) as total_duration
FROM cohorts
JOIN students ON students.cohort_id = cohorts.id
JOIN assistance_requests ON assistance_requests.student_id = students.id
GROUP BY cohorts.name
ORDER BY total_duration;