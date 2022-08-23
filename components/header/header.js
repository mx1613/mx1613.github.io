import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <div className="absolute w-64 py-4 rounded-bl-lg bg-slate-800 flex justify-between top-0 right-0 shadow-lg ">
            <div className="px-4  gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://scholar.google.com/citations?user=e8gAwugAAAAJ&hl=en">
                    <a>
                        <Image src="/icons/scholar.svg" alt="Scholar icon" width={30} height={30} />
                    </a>
                </Link>
            </div>
            <div className="px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://github.com/mx1613/" passHref>
                    <a>
                        <Image src="/icons/github-logo.svg" alt="Github icon" width={30} height={30} />
                    </a>
                </Link>
            </div>
            <div className="px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://www.linkedin.com/in/michelexiloyannis/" passHref>
                    <a>
                        <Image src="/icons/linkedin.svg" alt="Linkedin icon" width={30} height={30} />
                    </a>
                </Link>
            </div>
            <div className="px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://medium.com/@m.xiloyannis" passHref>
                    <a>
                        <Image src="/icons/medium.svg" alt="Medium icon" width={30} height={30} />
                    </a>
                </Link>
            </div>
        </div>
    )
}