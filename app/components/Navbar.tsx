import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="text-2xl">♻️</span>
                        <span className="font-bold text-xl text-gray-900">GreenFuel</span>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="#process" className="text-sm font-semibold leading-6 text-gray-900">
                        Process
                    </Link>
                    <Link href="#impact" className="text-sm font-semibold leading-6 text-gray-900">
                        Impact
                    </Link>
                    <Link href="#partner" className="text-sm font-semibold leading-6 text-gray-900">
                        Partner
                    </Link>
                    <Link href="#locations" className="text-sm font-semibold leading-6 text-gray-900">
                        Locations
                    </Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        About Us
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
