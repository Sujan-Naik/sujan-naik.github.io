import Link from "next/link";

export default function Navbar() {

    return (<nav className={"flex flex-row justify-center"}>
        <form>
            <input type={"search"} name={"q"} placeholder={"Search My Work"}/>
            <input type={"submit"} value={"Go!"}/>
        </form>
    </nav>)
}