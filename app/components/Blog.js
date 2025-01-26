import Image from 'next/image';

const Blog = () => {
    return (
        <div className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">İşinizi büyütmek için uzman tavsiyeleri</h2>
                    <p className="mt-3 text-lg/8 text-gray-600">
                        İşinizi büyütmek için doğru stratejilerle hareket etmek oldukça önemlidir. Pazarlama ve dijitalleşme alanında atacağınız adımlar, müşteri deneyimini iyileştirerek sadık bir kitle oluşturmanıza yardımcı olabilir. Ayrıca, finansal yönetimi doğru yaparak büyümeyi sürdürülebilir hale getirebilir ve ekibinizle güçlü bir işbirliği oluşturarak verimliliği artırabilirsiniz.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                        <Image src="/blog1.avif" alt="" className="absolute inset-0 -z-10 size-full object-cover" layout='fill' />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                            <time dateTime="2020-03-16" className="mr-8">Mart 16, 2020</time>
                        </div>
                        <h3 className="mt-3 text-lg/6 font-semibold text-white">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                Yapay zeka nedir? Ne hızla ilerliyor?
                            </a>
                        </h3>
                    </article>
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                        <Image src="/blog2.avif" alt="" className="absolute inset-0 -z-10 size-full object-cover" layout='fill' />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                            <time dateTime="2020-03-16" className="mr-8">Nisan 04, 2024</time>
                        </div>
                        <h3 className="mt-3 text-lg/6 font-semibold text-white">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                Derin Öğrenme Derinlikleri
                            </a>
                        </h3>
                    </article>
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                        <Image src="/blog3.avif" alt="" className="absolute inset-0 -z-10 size-full object-cover" layout='fill' />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                            <time dateTime="2020-03-16" className="mr-8">Kasım 10, 2024</time>
                        </div>
                        <h3 className="mt-3 text-lg/6 font-semibold text-white">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                Yapay zeka ile web sitesi tasarlamak
                            </a>
                        </h3>
                    </article>

                </div>
            </div>
        </div>
    )
}

export default Blog