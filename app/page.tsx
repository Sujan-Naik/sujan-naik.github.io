import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header/>

            <Navbar/>

            <main className={"flex flex-col p-6"}>
                <article>
                    <h2>Welcome to my Portfolio, here you can see what I do...</h2>
                    <div className={"flex flex-row p-6 justify-evenly"}>
                        <section className={"flex flex-row justify-center p-6"}>
                            <h3><Link href={"/projects/swe"}>as a Software Engineer</Link> </h3>
                        </section>
                        <section className={"flex flex-row justify-center p-6"}>
                        <h3><Link href={"/projects/game-dev"}>as a Game Developer</Link> </h3>
                        </section>
                    </div>
                </article>
                <aside>
                    <h2>My Hobbies</h2>
                    <h3>Fitness</h3>
                    <ul>
                        <li><a href={"#"}>Lifting Weights</a></li>
                        <li><a href={"#"}>Bouldering</a></li>
                        <li><a href={"#"}>Running</a></li>
                        <li><a href={"#"}>Swimming</a></li>
                    </ul>

                    <h3>Music</h3>
                    <ul>
                        <li><a href={"#"}>Grade 7 Electric Guitarist</a></li>
                    </ul>
                </aside>
            </main>
        </>
    );
}
