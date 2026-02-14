export default function ProcessFlow() {
    const steps = [
        {
            id: 1,
            name: 'Collection & Sorting',
            description: 'Gathering non-recyclable plastic waste and removing contaminants.',
            icon: '🗑️',
        },
        {
            id: 2,
            name: 'Shredding',
            description: 'Breaking down plastic into smaller, uniform pieces for efficient processing.',
            icon: '⚙️',
        },
        {
            id: 3,
            name: 'Pyrolysis',
            description: 'Heating plastic in an oxygen-free reactor to break down polymer chains into vapor.',
            icon: '🔥',
        },
        {
            id: 4,
            name: 'Condensation',
            description: 'Cooling the vapor to form liquid fuel (oil).',
            icon: '💧',
        },
        {
            id: 5,
            name: 'Refining',
            description: 'Distilling the oil into diesel, petrol, and kerosene equivalents.',
            icon: '⚗️',
        },
    ];

    return (
        <div id="process" className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-600">The Technology</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        From Waste to Energy
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our advanced pyrolysis process converts waste plastic into high-quality fuel with minimal emissions.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {steps.map((step) => (
                            <div key={step.id} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-2xl">
                                        {step.icon}
                                    </div>
                                    {step.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
