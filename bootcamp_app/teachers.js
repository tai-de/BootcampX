const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const nodeCohort = process.argv[2];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = '${nodeCohort || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});