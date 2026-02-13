import { Moon, Sun } from 'lucide-react';
import useTheme from '../Hooks/useTheme';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5" />
            ) : (
                <Sun className="w-5 h-5 text-amber-400" />
            )}
        </button>
    );
}
