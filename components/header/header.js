import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <div className="absolute w-64 py-4 rounded-bl-lg bg-slate-800 flex justify-between top-0 right-0 ">
            <div className="px-4  gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://scholar.google.com/citations?user=e8gAwugAAAAJ&hl=en">
                    <Image src="/icons/scholar.svg" width={30} height={30} />
                </Link>
            </div>
            <div className="px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://github.com/mx1613/michele.info">
                    <Image src="/icons/github-logo.svg" width={30} height={30} />
                </Link>
            </div>
            <div className="px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://www.linkedin.com/in/michelexiloyannis/">
                    <Image src="/icons/linkedin.svg" width={30} height={30} />
                </Link>
            </div>
            <div className="px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://medium.com/@m.xiloyannis">
                    <Image src="/icons/medium.svg" width={30} height={30} />
                </Link>
            </div>
        </div>
    )
}