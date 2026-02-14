'use client';

import { useState } from 'react';

export default function WasteSubmissionForm() {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        plasticType: 'Mixed Plastic',
        weight: '',
        contact: '',
        type: 'pickup', // pickup or dropoff
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        console.log('Form submitted:', formData);
        alert('Thank you! Your request has been submitted. We will contact you shortly.');
        setFormData({
            name: '',
            organization: '',
            plasticType: 'Mixed Plastic',
            weight: '',
            contact: '',
            type: 'pickup',
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div id="partner" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-green-600">Partner with Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Submit Your Plastic Waste
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Are you a garbage collector, industry, or individual with large quantities of plastic?
                        Partner with us to ensure it's recycled responsibly into fuel.
                    </p>
                </div>

                <div className="mx-auto max-w-xl bg-gray-50 rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Contact Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="organization" className="block text-sm font-semibold leading-6 text-gray-900">
                                Organization / Company (Optional)
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="organization"
                                    id="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="plasticType" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Plastic Type
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        name="plasticType"
                                        id="plasticType"
                                        value={formData.plasticType}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    >
                                        <option>Mixed Plastic</option>
                                        <option>PET (Bottles)</option>
                                        <option>HDPE (Containers)</option>
                                        <option>LDPE (Bags/Wraps)</option>
                                        <option>PP (Industrial)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="weight" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Est. Weight (kg)
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="number"
                                        name="weight"
                                        id="weight"
                                        required
                                        min="1"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone Number / Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    required
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Service Type</label>
                            <div className="mt-2.5 flex gap-x-6">
                                <div className="flex items-center">
                                    <input
                                        id="pickup"
                                        name="type"
                                        type="radio"
                                        value="pickup"
                                        checked={formData.type === 'pickup'}
                                        onChange={handleChange}
                                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                                    />
                                    <label htmlFor="pickup" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                        Schedule Pickup
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="dropoff"
                                        name="type"
                                        type="radio"
                                        value="dropoff"
                                        checked={formData.type === 'dropoff'}
                                        onChange={handleChange}
                                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                                    />
                                    <label htmlFor="dropoff" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                        I will Drop-off
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
