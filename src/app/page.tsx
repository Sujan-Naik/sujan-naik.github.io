import {pixelifySans} from "@/app/ui/fonts";

export default function Home(){
  return (
    <div>
        <header>
            <hgroup className={"text-center"}>
                <h1 className={`${pixelifySans.className} antialiased`}> Sujan Naik </h1>
                <p > I'm an aspiring Game Developer and Web Developer (I built this website from scratch!)</p>
            </hgroup>
        </header>
        <section>
            <hgroup>
                <h1>
                    My Projects
                </h1>
            </hgroup>
        </section>
    </div>
  )
}