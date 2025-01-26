import Image from "next/image";

export default function About() {
    return (
        <div>
            <div className="bg-[#ffffff]">
                <div className="container mx-auto">
                    {/* Misyonumuz Section */}
                    <div className="flex flex-col md:flex-row justify-between py-10 items-center gap-5">
                        <div className="cs-banner-about flex-1 rounded-b-[80px] rounded-t-[80px]">
                            <Image src="/ai.webp" width={550} alt="" height={400} />
                        </div>
                        <div className="flex-1">
                            <p className="text-[#020d19] px-0 lg:px-10 text-2xl sm:text-3xl md:text-4xl font-semibold">
                                <span className="text-3xl md:text-5xl">Misyonumuz</span>,<br /> yapay zeka teknolojilerinin gücünü herkes için erişilebilir ve etkili hale getirmek.
                            </p>
                            <p className="text-[#020d19] px-0 lg:px-10 text-lg mt-5">
                                Dijital dönüşüm çağında, yenilikçi yapay zeka çözümleri sunarak işletmelerin ve bireylerin en iyiye ulaşmasını sağlıyoruz. Müşteri memnuniyetini ve sürdürülebilirliği öncelik olarak benimseyen şirketimiz, teknoloji ve insan odaklı bir yaklaşımı bir araya getiriyor.
                            </p>
                        </div>
                    </div>

                    {/* Vizyonumuz Section */}
                    <div className="flex flex-col-reverse md:flex-row justify-between sm:py-10 py-4 items-center gap-5 mt-3 sm:mt-12">
                        <div className="flex-1">
                            <p className="text-[#020d19] px-0 lg:px-10 text-2xl sm:text-3xl md:text-4xl font-semibold">
                                <span className="text-3xl md:text-5xl">Vizyonumuz</span>,<br />küresel ölçekte teknolojik dönüşüme rehberlik etmek.
                            </p>
                            <p className="text-[#020d19] px-0 lg:px-10 text-lg mt-5">
                                Dijital dönüşüm çağında, yenilikçi yapay zeka çözümleri sunarak işletmelerin ve bireylerin en iyiye ulaşmasını sağlıyoruz. Müşteri memnuniyetini ve sürdürülebilirliği öncelik olarak benimseyen şirketimiz, teknoloji ve insan odaklı bir yaklaşımı bir araya getiriyor.
                            </p>
                        </div>
                        <div className="cs-banner-about flex-1">
                            <Image src="/global-2.avif" width={550} height={400} alt="" />
                        </div>
                    </div>

                    {/* Değerlerimiz Section */}
                    <div className="flex flex-col md:flex-row justify-between py-4 sm:py-10 items-center gap-5 mt-3 sm:mt-12">
                        <div className="cs-banner-about flex-1 rounded-b-[80px] rounded-t-[80px]">
                            <Image src="/global-2.jpg" width={550} alt="" height={400} />
                        </div>
                        <div className="flex-1">
                            <p className="text-[#020d19] px-0 lg:px-10 text-2xl sm:text-3xl md:text-4xl font-semibold">
                                <span className="text-3xl md:text-5xl">Değerlerimiz</span>,<br /> müşterilerimize yenilikçi, etik ve sürdürülebilir çözümler sunmak.
                            </p>
                            <p className="text-[#020d19] px-0 lg:px-10 text-lg mt-5">
                                Yenilikçilik: Sürekli gelişim ve yaratıcılık.<br />
                                Müşteri Odaklılık: İhtiyaçlara duyarlı, sonuç odaklı hizmet.<br />
                                Etik Yaklaşım: Şeffaf ve güvenilir iş süreçleri.<br />
                                Sürdürülebilirlik: Gelecek nesillere daha iyi bir dünya bırakmak.
                            </p>
                        </div>
                    </div>

                    {/* Ekibimiz Section */}
                    <div className="flex flex-col-reverse md:flex-row justify-between py-4 sm:py-10 items-center gap-5 mt-3 sm:mt-12">
                        <div className="flex-1">
                            <p className="text-[#020d19] px-0 lg:px-10 text-2xl sm:text-3xl md:text-4xl font-semibold">
                                <span className="text-3xl md:text-5xl">Ekibimiz</span>,<br />alanında uzman ve çözüm odaklı profesyonellerden oluşmaktadır.
                            </p>
                            <p className="text-[#020d19] px-0 lg:px-10 text-lg mt-5">
                                Yapay Zeka Uzmanları: En karmaşık problemlere akıllı çözümler üreten yaratıcı zihinler.<br />
                                Veri Bilimciler: Büyük veriyi işleyerek anlamlı içgörüler çıkaran analitik ustalar.<br />
                                Yazılım Mühendisleri: İş süreçlerini kolaylaştıran, yenilikçi yazılımlar geliştiren teknik uzmanlar.<br />
                                Danışmanlık Ekibi: İş hedeflerinize uygun stratejik çözümler sunan deneyimli danışmanlar.<br />
                                Ekibimizle teknoloji ve insan odaklı bir yaklaşımla, sizler için her zaman en iyisini hedefliyoruz!
                            </p>
                        </div>
                        <div className="cs-banner-about flex-1">
                            <Image src="/about-1.webp" width={550} height={400} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
