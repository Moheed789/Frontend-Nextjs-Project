"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"
import { useState } from "react";

const navlinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "ForgotPassword", href: "/forgot-password"},
];

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [input, setInput] = useState();
    const target = (e) => {
        setInput(e.target.value)
    };
    return (
        <div>
            <div>
                <input value={input} onChange={target} />
            </div>
            {navlinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return(
                    <Link href={link.href} key={link.name}
                    className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                );
            })}
            {children}
        </div>
    )
}