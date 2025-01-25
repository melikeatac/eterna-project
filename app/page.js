import Image from 'next/image';
import "./globals.css";
import Textbox from './components/Textbox';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <div className="bg-[#011e3c] sm:h-[700px] h-[400px] flex items-center">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex-1 relative">
              <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col sm:items-start items-center">
                <h1 className="text-white font-semibold text-5xl text-center sm:text-5xl sm:text-left md:text-6xl lg:text-7xl leading-tight m-0">
                  Geleceği Bugün İnşa Ediyoruz
                </h1>
                <p className="text-2xl leading-8 font-normal text-white my-5 sm:text-left text-center">
                  Tekar, yapay zekâ ile teknolojide öncülük eden ve geleceği şekillendiren bir şirkettir.
                </p>
                <button className="w-44 h-14 text-center cursor-pointer text-white font-medium bg-[#009fb2] text-lg border-0 rounded mt-5">
                  Daha Fazla Keşfet
                </button>
              </div>
            </div>
            <div className="flex-1 relative h-[550px] sm:flex hidden">
              <Image
                src="/artificle1.png"
                alt="Yapay Zeka Görseli"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section-3 bg-[#011e3c] overflow-hidden">
        <div className="container mx-auto">
          <div className="cs-sec3-2 sm:mt-20 mt-10 d-none d-lg-block" id="services">
            <div className="cs-item flex justify-between gap-12 mb-8">
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold sm:flex hidden">01</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Siber güvenlik çözümleri ve danışmanlık</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Siber güvenlik çözümleri ve danışmanlık, işletmelerin dijital varlıklarını korumak, siber tehditlere karşı önlem almak ve güvenlik açıklarını gidermek için sunulan profesyonel hizmetlerdir.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden sm:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-1.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow sm:flex hidden">
                <Image
                  src="/text-input.svg"
                  alt=""
                  width={115}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="cs-item flex justify-between gap-12 mb-8">
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold sm:flex hidden">02</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Bulut ve ağ çözümleri</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Bulut ve ağ çözümleri, işletmelerin dijital altyapısını modernize ederek daha verimli, esnek ve güvenli hale getiren teknolojilerdir. </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden sm:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-2.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow sm:flex hidden">
                <Image
                  src="/text-input.svg"
                  alt=""
                  width={115}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="cs-item flex justify-between gap-12 mb-8">
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold sm:flex hidden">03</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Yapay zeka ve büyük veri</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Yapay zeka, büyük veri analitiği ile birleşerek işletmelere anlamlı içgörüler sunar ve stratejik karar alma süreçlerini güçlendirir.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden sm:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-4.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow sm:flex hidden">
                <Image
                  src="/text-input.svg"
                  alt=""
                  width={115}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="cs-item flex justify-between gap-12 mb-8">
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold sm:flex hidden">04</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Makine öğrenmesi</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Makine öğrenmesi, verilerden anlam çıkararak karar verme süreçlerini optimize eden yapay zeka teknolojisidir. İşletmelere verimlilik, otomasyon ve daha doğru öngörüler sağlar.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden sm:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-3.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow sm:flex hidden">
                <Image
                  src="/text-input.svg"
                  alt=""
                  width={115}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="cs-item flex justify-between gap-12 mb-8">
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold sm:flex hidden">05</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Yazılım ve otomasyon</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Yazılım ve otomasyon çözümleri, iş süreçlerini dijitalleştirerek verimliliği artırır ve manuel iş yükünü en aza indirir.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden sm:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-5.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow sm:flex hidden">
                <Image
                  src="/text-input.svg"
                  alt=""
                  width={115}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Textbox />

      <div className=''>
        <div className="bg-white py-24 sm:py-32">
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

      </div>
      <Footer />
    </div>
  );
}
