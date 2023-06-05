import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <>
            <header className="header">
                <nav className="mainNav">
                    <ul className="flex-md">
                        <li>
                            <Link href="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts" className="link">
                                Posts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="mainFooter">
                <div className="inside-xxl">
                    <p>Footer</p>
                </div>
            </footer>
        </>
    )
}

export default Layout;