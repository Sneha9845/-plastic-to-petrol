export default function ImpactStats() {
    const stats = [
        { id: 1, name: 'Plastic Waste Processed', value: '500+ Tons' },
        { id: 2, name: 'CO2 Emissions Prevented', value: '1,200 Tons' },
        { id: 3, name: 'Fuel Generated', value: '350,000 Liters' },
        { id: 4, name: 'Landfill Space Saved', value: '2,000 m³' },
    ];

    return (
        <div id="impact" className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Real World Impact
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            We are committed to creating a cleaner planet by reducing plastic pollution and providing sustainable fuel alternatives.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
