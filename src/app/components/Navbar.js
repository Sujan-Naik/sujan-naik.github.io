"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/"> Sujan Naik's Portfolio</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="navbar-button">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-button">About</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="navbar-button">Projects</Link>
                        </li>
                        <li>
                            <Link href="/hobbies" className="navbar-button">Hobbies</Link>
                        </li>
                        <li>
                            <Link href="/skills" className="navbar-button">Skills</Link>
                        </li>
                        <li>
                            <Link href="/resume" className="navbar-button">Resume</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="navbar-button">Contact</Link>
                        </li>
                    </ul>
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col bg-gray-700 p-4 space-y-2">
                        <li>
                            <Link href="/" className="navbar-button">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-button">About</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="navbar-button">Projects</Link>
                        </li>
                        <li>
                            <Link href="/hobbies" className="navbar-button">Hobbies</Link>
                        </li>
                        <li>
                            <Link href="/skills" className="navbar-button">Skills</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="navbar-button">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="navbar-button">Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;