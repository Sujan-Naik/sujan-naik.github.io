// components/Hero.tsx
"use client"
import { motion } from 'framer-motion';

const PrimaryHero: React.FC = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
            />
            <div className="relative z-10 text-center p-5">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl font-bold drop-shadow-lg"
                >
                    Welcome to the World of Games
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-xl"
                >
                    Join our adventures and experience epic quests!
                </motion.p>
                <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold shadow-lg"
                >
                    Play Now
                </motion.button>
            </div>
        </section>
    );
}

export default PrimaryHero;