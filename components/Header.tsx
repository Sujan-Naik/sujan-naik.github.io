import Link from "next/link";

export default function Header() {

    return (<header className={"flex flex-col w-full items-center p-6"}>
        <h1>Sujan Naik</h1>
        <div className={"flex justify-evenly w-full p-6"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/projects/game-dev"}>Game Dev</Link>
            <Link href={"/projects/swe"}>Software Engineering</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
    </header>)
}