import Image from "next/image";

export default function Contact() {
    return (
        <div>
            <div className="relative bg-white">
                <div className="lg:absolute lg:inset-0 lg:left-1/2 hidden lg:flex">
                    <Image src="/contact-bg.jpeg" alt="" layout="fill" objectFit="cover" />
                </div>
                <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                    <div className="px-6 lg:px-8">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#011e3c] sm:text-5xl">Birlikte Çalışalım</h2>
                            <p className="text-lg/8 text-gray-600 mt-3">Aşağıdaki formu doldurarak bizimle çalışmak için ilk adımı atabilirsiniz. Ekibimiz en kısa sürede sizinle iletişime geçecektir. Geleceği birlikte şekillendirelim!</p>
                            <form action="#" method="POST" className="mt-16">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-base font-semibold text-[#011e3c]">İsim</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#011e3c] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#009fb2]" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-base font-semibold text-[#011e3c]">Soyisim</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#011e3c] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#009fb2]" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-base font-semibold text-[#011e3c]">Email</label>
                                        <div className="mt-2.5">
                                            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#011e3c] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#009fb2]" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="flex justify-between text-base">
                                            <label htmlFor="phone" className="block font-semibold text-[#011e3c]">Telefon</label>
                                        </div>
                                        <div className="mt-2.5">
                                            <input type="tel" name="phone" id="phone" autoComplete="tel" aria-describedby="phone-description" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#011e3c] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#009fb2]" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="flex justify-between text-base">
                                            <label htmlFor="message" className="block text-base font-semibold text-[#011e3c]">Nasıl Yardımcı Olabiliriz?</label>
                                        </div>
                                        <div className="mt-2.5">
                                            <textarea id="message" name="message" rows="4" aria-describedby="message-description" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#011e3c] resize-none outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#009fb2]"></textarea>
                                        </div>
                                    </div>
                                    <fieldset className="sm:col-span-2">
                                        <legend className="block text-base font-semibold text-[#011e3c]">Maaş Beklentisi</legend>
                                        <div className="mt-4 space-y-4 text-base text-gray-600">
                                            <div className="flex gap-x-2.5">
                                                <input id="budget-under-25k" name="budget" value="under_25k" type="radio" className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#009fb2] checked:bg-[#009fb2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009fb2] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                                                <label htmlFor="budget-under-25k" className="text-base font-medium">25K'dan az </label>
                                            </div>
                                            <div className="flex gap-x-2.5">
                                                <input id="budget-25k-50k" name="budget" value="25k-50k" type="radio" className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#009fb2] checked:bg-[#009fb2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009fb2] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                                                <label htmlFor="budget-25k-50k" className="text-base font-medium">25K – 50K</label>
                                            </div>
                                            <div className="flex gap-x-2.5">
                                                <input id="budget-50k-100k" name="budget" value="50k-100k" type="radio" className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#009fb2] checked:bg-[#009fb2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009fb2] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                                                <label htmlFor="budget-50k-100k" className="text-base font-medium">50K – 100K</label>
                                            </div>
                                            <div className="flex gap-x-2.5">
                                                <input id="budget-over-100k" name="budget" value="over_100k" type="radio" className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#009fb2] checked:bg-[#009fb2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009fb2] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                                                <label htmlFor="budget-over-100k" className="text-base font-medium">100K+</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                                    <button type="submit" className="rounded-md bg-[#009fb2] px-8 py-4 text-center text-base font-semibold text-white shadow-sm hover:bg-[#009fb2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009fb2] cursor-pointer">Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}