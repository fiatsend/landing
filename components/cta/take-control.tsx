import Image from "next/image";
import pic from './dashboard.png'

export const TakeControl = () => {

    return (
        <div className="relative overflow-hidden" id="take-control">
            <div className="bg-blue-200 pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
                <div className="mx-auto max-w-5xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-20">
                        <div className="mockup-browser h-126 lg:h-96  border shadow-2xl transition-transform transform hover:scale-110">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://app.fiatsend.com</div>
                            </div>
                            <Image src={pic} alt="finance dashboard" />
                        </div>
                        <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left mt-12">
                            <div className="lg:py-24">
                                <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                    <span className="block text-blue-500">Take Control of</span>
                                    <span className="block text-black">Your Funds</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Fiatsend allows you to control your funds in one platform. You can decide to change spending limits, block  or even delete your card.
                                </p>
                                <div className="mt-10 sm:mt-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
