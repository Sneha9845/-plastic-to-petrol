export default function Footer() {
    return (
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl">♻️</span>
                        <p className="text-sm leading-6 text-gray-300">
                            Transforming plastic waste into a sustainable energy future.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Pyrolysis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Waste Management
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; 2024 GreenFuel Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
