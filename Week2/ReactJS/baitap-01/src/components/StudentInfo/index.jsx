const StudentInfo = ({ fullName, studentId, className }) => {
    return (
        <section>
            <h2>Thông tin sinh viên</h2>
            <ul >
                <li>Họ tên: {fullName}</li>
                <li>MSSV: {studentId}</li>
                <li>Lớp: {className}</li>
            </ul>
        </section>
    );
}

export default StudentInfo