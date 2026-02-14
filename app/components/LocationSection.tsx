export default function LocationSection() {
    return (
        <div id="locations" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-green-600">Our Network</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Find a Collection Center
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Visit our main processing plant or one of our authorized collection points to drop off your plastic waste.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Mock Map */}
                    <div className="relative h-96 w-full bg-gray-300 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13&size=600x400&maptype=roadmap&markers=color:green%7Clabel:A%7C40.7128,-74.0060&key=YOUR_API_KEY')] bg-cover bg-center opacity-70"></div>
                        {/* Fallback visual if no API key/internet */}
                        <div className="relative z-10 text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
                            <span className="text-4xl mb-4 block">🗺️</span>
                            <p className="text-gray-900 font-semibold">Interactive Map Loading...</p>
                            <p className="text-sm text-gray-600">(Mock Representation)</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <span className="text-green-600">📍</span> Main Processing Plant
                            </h3>
                            <p className="mt-2 text-gray-600">
                                123 Green Energy Way, Industrial Sector 4,<br />
                                Eco City, EC 54321
                            </p>
                            <p className="mt-2 text-sm text-gray-500">Open: Mon-Sat, 8:00 AM - 6:00 PM</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <span className="text-green-600">📍</span> North Collection Hub
                            </h3>
                            <p className="mt-2 text-gray-600">
                                45 Recycling Road, North District,<br />
                                Eco City, EC 54325
                            </p>
                            <p className="mt-2 text-sm text-gray-500">Open: Mon-Fri, 9:00 AM - 5:00 PM</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <span className="text-green-600">📞</span> Need Help?
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Call our support line for bulk pickup arrangements: <br />
                                <span className="font-semibold text-green-700">+1 (555) 123-4567</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
