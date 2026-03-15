import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";

const Card = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={theme === 'light' ? { backgroundColor: "#fafafa" } : { backgroundColor: "#333" }}>
            <h1>Card</h1>
        </div>
    );
};

export default Card;