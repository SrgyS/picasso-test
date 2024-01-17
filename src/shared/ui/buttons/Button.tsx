import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className='bg-blue-500 text-white px-4 py-2 rounded-md p-4 w-48'
        >
            {children}
        </button>
    );
};
