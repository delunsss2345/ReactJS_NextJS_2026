import { useNavigate } from "react-router-dom";

export function PageTest() {
    const navigate = useNavigate();
    return (
        <>
            <div>PageTest</div>
            <button onClick={() => navigate("/test/1")}>Test Detai</button></>
    )
}