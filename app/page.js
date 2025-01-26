import Image from 'next/image';
import "./globals.css";
import Textbox from './components/Textbox';
import Blog from './components/Blog';

export default function Home() {
  return (
    <div>
      <div className="bg-[#011e3c] lg:h-[700px] h-[400px] flex items-center">
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
            <div className="flex-1 relative h-[550px] lg:flex hidden">
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
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold lg:flex hidden">01</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Siber güvenlik çözümleri ve danışmanlık</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Siber güvenlik çözümleri ve danışmanlık, işletmelerin dijital varlıklarını korumak, siber tehditlere karşı önlem almak ve güvenlik açıklarını gidermek için sunulan profesyonel hizmetlerdir.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden lg:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-1.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow lg:flex hidden">
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
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold lg:flex hidden">02</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Bulut ve ağ çözümleri</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Bulut ve ağ çözümleri, işletmelerin dijital altyapısını modernize ederek daha verimli, esnek ve güvenli hale getiren teknolojilerdir. </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden lg:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-2.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow lg:flex hidden">
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
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold lg:flex hidden">03</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Yapay zeka ve büyük veri</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Yapay zeka, büyük veri analitiği ile birleşerek işletmelere anlamlı içgörüler sunar ve stratejik karar alma süreçlerini güçlendirir.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden lg:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-4.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow lg:flex hidden">
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
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold lg:flex hidden">04</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Makine öğrenmesi</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Makine öğrenmesi, verilerden anlam çıkararak karar verme süreçlerini optimize eden yapay zeka teknolojisidir. İşletmelere verimlilik, otomasyon ve daha doğru öngörüler sağlar.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden lg:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-3.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow lg:flex hidden">
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
              <h4 className="cs-count-1 text-2xl leading-8 text-[#d6d6d6] font-bold lg:flex hidden">05</h4>
              <div className="cs-tab-2 max-w-[500px] w-full sm:mb-0 mb-4">
                <h6 className="cs-title-1 sm:text-left text-center text-2xl sm:text-4xl sm:leading-11 leading-8 text-[#d6d6d6] font-bold mb-2.5">Yazılım ve otomasyon</h6>
                <p className="cs-desc-1 text-base leading-6  sm:text-left text-center text-[#d6d6d6] font-medium">
                  Yazılım ve otomasyon çözümleri, iş süreçlerini dijitalleştirerek verimliliği artırır ve manuel iş yükünü en aza indirir.
                </p>
              </div>
              <div className="cs-animation-img-main max-w-[350px] w-full h-[150px] rounded-4xl bg-[#f5f5f5] hidden lg:flex justify-center items-center opacity-0 invisible">
                <Image
                  src="/home-5.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="cs-icon-arrow lg:flex hidden">
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
      <Blog />

    </div>
  );
}
