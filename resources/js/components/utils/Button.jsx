import React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded border border-slate-800 shadow shadow-slate-800 transition-colors tracking-wide",
    {
        variants: {
            variant: {
                primary: "bg-blue-500 text-white hover:bg-blue-400",
                secondary: "bg-green-500 text-white hover:bg-green-400",
                ghost: "bg-slate-200 text-slate-600 hover:bg-slate-100",
            },
            size: {
                default: "px-3 py-2",
                sm: "px-3 py-1 text-sm",
                lg: "px-3 py-3",
            },
            disabled: {
                false: null,
                true: "opacity-60 cursor-not-allowed",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
            disabled: false,
        },
    }
);

const Button = ({ children, size, className, variant, disabled, ...props }) => {
    return (
        <button
            className={buttonVariants({ variant, size, disabled, className })}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
