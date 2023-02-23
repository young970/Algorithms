-- 코드를 입력하세요
SELECT C.MEMBER_NAME, B.REVIEW_TEXT, DATE_FORMAT(B.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE
FROM (SELECT MEMBER_ID, COUNT(MEMBER_ID), 
        DENSE_RANK()over(ORDER BY COUNT(MEMBER_ID) DESC) AS RAN
        FROM REST_REVIEW
        GROUP BY MEMBER_ID
        ORDER BY COUNT(MEMBER_ID) DESC) A
LEFT JOIN REST_REVIEW B ON A.MEMBER_ID = B.MEMBER_ID LEFT JOIN MEMBER_PROFILE C ON B.MEMBER_ID = C.MEMBER_ID
WHERE A.RAN = 1
ORDER BY B.REVIEW_DATE, B.REVIEW_TEXT;