import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <div className="absolute w-1/5 rounded-b-lg bg-slate-800 py-4 flex flex-row justify-between">
            <div className="px-4 flex gap-2">
                <Image src="/icons/github-logo.svg" width={30} height={30} />
                <Link href="https://github.com/mx1613/michele.info">
                    Source Code
                </Link>
            </div>
        </div>
    )
}