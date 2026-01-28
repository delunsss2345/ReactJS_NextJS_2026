import Footer from "../../components/Footer";
import Header from "../../components/Header";
import StudentInfo from "../../components/StudentInfo";
import { student } from "../../constant";
const Info = () => {
    return <>
        <div style={{
            width: "fit-content",
            display: "block",
            marginInline: "auto",
        }}>
            <Header title="Trang giới thiệu sinh viên" />

            <StudentInfo
                fullName={student.fullName}
                studentId={student.studentId}
                className={student.className}
            />

            <Footer text="Buổi 2" />
        </div>
    </>
}
export default Info;