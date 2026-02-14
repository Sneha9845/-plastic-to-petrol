export default function HowToContribute() {
    const steps = [
        {
            id: 1,
            title: 'Collect & Sort',
            description: 'Gather your non-recyclable plastic waste. Separate it from organic or hazardous materials.',
            icon: '📦',
        },
        {
            id: 2,
            title: 'Submit Request',
            description: 'Fill out the form below to schedule a pickup or find a drop-off location near you.',
            icon: '📝',
        },
        {
            id: 3,
            title: 'Earn & Contribute',
            description: 'Get paid for large volumes (if applicable) and feel good about saving the planet!',
            icon: '💰',
        },
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-600">Get Involved</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        How You Can Help
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Becoming a partner in our mission is easy. Follow these simple steps to turn your waste into wealth.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center text-center">
                                <dt className="flex flex-col items-center gap-y-4 text-base font-semibold leading-7 text-gray-900">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                                        {step.icon}
                                    </div>
                                    {step.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{step.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
