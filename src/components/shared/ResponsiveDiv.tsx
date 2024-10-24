import { FC, ReactNode } from "react";

interface ResponsiveDivProps {
    children: ReactNode;
    className?: string;
}

const ResponsiveDiv: FC<ResponsiveDivProps> = ({ children,className }) => {
    return (
        <div className={`w-full px-4 ${className}`}>
            <div className="max-w-[1360px] mx-auto w-full flex justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default ResponsiveDiv;
