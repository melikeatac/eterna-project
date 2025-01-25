import React from 'react'
import Image from 'next/image';

const Textbox = () => {
    return (
        <div className="cs-sec-video-area overflow-x-hidden bg-[#d6d6d6] w-full py-24 sm:py-32">
            <div className="container mx-auto" >
                <div className="flex justify-between items-center gap-12 px-[5%]">
                    <div className="max-w-[500px] w-full">
                        <h6 className="text-base leading-7 font-bold text-[020d19]">Biz Kimiz?</h6>
                        <h1 className="sm:text-4xl text-3xl leading-9 sm:leading-11 font-bold text-[#020d19] my-6">Tekar, yapay zeka projelerinde uzmanlaşmış, yenilikçi ve teknoloji odaklı bir şirkettir.</h1>
                        <p className="text-base leading-7 font-medium text-[#020d19]">
                            Hedefimiz, yapay zeka teknolojilerini kullanarak iş dünyasının ve bireylerin karşılaştığı sorunlara akıllı ve sürdürülebilir çözümler sunmaktır.
                            Dünya genelindeki gelişmeleri yakından takip ederek, müşterilerimize ileri teknolojiyi erişilebilir ve etkili bir şekilde ulaştırıyoruz. Tecrübeli ekibimiz, özelleştirilmiş yapay zeka projelerinden büyük veri analitiğine, makine öğrenmesi uygulamalarından otomasyon çözümlerine kadar geniş bir yelpazede hizmet sunmaktadır.
                            Çözüm odaklı ve müşteri ihtiyaçlarına göre uyarlanabilir projeler geliştiriyoruz.
                        </p>
                    </div>
                    <div className="cs-img-area sm:flex hidden max-w-[500px] w-full h-[560px] relative overflow-hidden rounded-3xl">
                        <Image
                            src="/whoweare.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Textbox