import Link from 'next/link';

export function Footer() {
    return (
        <footer className="absolute w-screen bg-slate-900 content-center bottom-0">
            <div className="right-0 px-4">
                Copyright Michele Xiloyannis &copy; {new Date().getFullYear()}
            </div>

            <div className="right-0 px-4">
                <Link href="https://github.com/mx1613/michele.info">
                    Source Code
                </Link>
            </div>
        </footer>
    )
}