import Image from 'next/image'
import React from 'react'
import { ChartNoAxesCombined, Workflow, FileUser, ImagePlay, TrendingUpDown } from 'lucide-react';

const page = () => {
  return (
    <div>
      <div className="cs-banner-services w-full sm:h-[750px] h-[500px] relative">
        <Image src="/bg1.webp" alt="" layout="fill" objectFit="cover" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75%] z-[2]">
          <p className="text-[#011d3c] font-semibold text-4xl md:text-7xl leading-tight m-0 text-center">Yapay Zekanın Gücüyle Geleceği Şekillendirin</p>
          <p className="text-[#011d3c] font-medium text-lg md:text-2xl mt-5 text-center">Yapay zeka teknolojilerimizle işletmenizi bir adım öne taşıyın. İster otomasyon, ister veri analizi olsun, yapay zeka çözümlerimizle iş süreçlerinizi hızlandırın, verimliliği artırın ve yeni nesil teknolojilere adım atın. Hedeflerinize ulaşmanız için yanınızdayız.</p>
        </div>
      </div>

      <div className="cs-sec-video-area py-12 overflow-x-hidden w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="text-3xl md:text-5xl text-[#011d3c] text-center font-medium w-full sm:h-[200px] flex flex-col items-center justify-center">
              En İyi Çözümlerimizle Hizmetinizdeyiz
            </div>
            <div className="border border-[#e9e9e9] rounded-md w-full h-[200px] flex flex-col items-center justify-center p-3">
              <ChartNoAxesCombined size={40} color="#4A90E2" />
              <p className='text-xl md:text-2xl text-[#011d3c] mb-4 mt-2.5 text-center font-medium'>Akıllı Veri Analizi</p>
              <p className='text-sm md:text-base text-[#6c6c6c] text-center'>Yapay zeka algoritmalarımızla doğru kararlar için güvenilir içgörüler elde edin.</p>
            </div>
            <div className="border border-[#e9e9e9] rounded-md w-full h-[200px] flex flex-col items-center justify-center p-3">
              <Workflow size={40} color="#4A90E2" />
              <p className='text-xl md:text-2xl text-[#011d3c] mb-4 mt-2.5 text-center font-medium'>Otomasyon Çözümleri</p>
              <p className='text-sm md:text-base text-[#6c6c6c] text-center'>Rutin ve tekrarlayan işlerinizi otomatikleştirerek zamandan ve maliyetten tasarruf edin.</p>
            </div>
            <div className="border border-[#e9e9e9] rounded-md w-full h-[200px] flex flex-col items-center justify-center p-3">
              <FileUser size={40} color="#4A90E2" />
              <p className='text-xl md:text-2xl text-[#011d3c] mb-4 mt-2.5 text-center font-medium'>Kişiselleştirilmiş Müşteri Deneyimi</p>
              <p className='text-sm md:text-base text-[#6c6c6c] text-center'>Yapay zeka destekli çözümlerle müşterilerinizi daha iyi anlayın ve onlara özel hizmetler sunun.</p>
            </div>
            <div className="border border-[#e9e9e9] rounded-md w-full h-[200px] flex flex-col items-center justify-center p-3">
              <ImagePlay size={40} color="#4A90E2" />
              <p className='text-xl md:text-2xl text-[#011d3c] mb-4 mt-2.5 text-center font-medium'>Gelişmiş Görüntü İşleme</p>
              <p className='text-sm md:text-base text-[#6c6c6c] text-center'>Görsellerden ve videolardan veriler elde ederek süreçlerinizi optimize edin.</p>
            </div>
            <div className="border border-[#e9e9e9] rounded-md w-full h-[200px] flex flex-col items-center justify-center p-3">
              <TrendingUpDown size={40} color="#4A90E2" />
              <p className='text-xl md:text-2xl text-[#011d3c] mb-4 mt-2.5 text-center font-medium'>Tahmin ve Öngörü Modelleri</p>
              <p className='text-sm md:text-base text-[#6c6c6c] text-center'>İş stratejilerinizi geleceği öngören modellerle şekillendirin ve riskleri minimize edin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
