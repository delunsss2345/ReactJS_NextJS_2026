import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider';

const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            style={{ border: "1px solid" }}
            onClick={toggleTheme}
        >
            {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
};

export default Button;