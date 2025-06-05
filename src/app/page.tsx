'use client'
import Head from 'next/head';
import Image from 'next/image';
import FireworksCanvas from '@/components/FireworkCanvas';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [step, setStep] = useState(0); // 0: initial, 1: lights on, 2: music playing, 3: show main content
  const [showMain, setShowMain] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // After turning on music, wait 5s then show main content
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (step === 2) {
      if (audioRef.current) {
        audioRef.current.play();
      }
      timer = setTimeout(() => {
        setShowMain(true);
        setStep(3);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [step]);

  const messageLines = [
    "Assamualaikum, knock knock",
    "Sekarang tanggal kembar, lagi ada diskon yaa?",
    "NOPEEE, It's Pauline's Day!!",
    "HAPPY BIRTHDAYY BEBEBB🥳🥳🥳",
    "It's been a year, ga berasa yaaa",
    "Like a blink of the eyes",
    "Because today is ur special day",
    "Dan aku jago, I created all this..",
    "as a birthday present to you!!",
    "Thank you sudah jadi pasangan aku",
    "thanks for everything",
    "Wishing you all the best",
    "Wishing you anything, yang lagi ditargetkan tahun ini tercapai",
    "Kamu bisa lulus tepat waktu, IPK BAGUS",
    "Semoga kamu selalu diberikan kesehatan",
    "Punya uang yang banyak😁😁😁",
    "Selalu jadi anak ayah dan ibu yang membanggakan",
    "Jadi inspirasi dari adik adik kamu",
    "Last but not least...",
    "Semoga kita selalu bisa ngerayain ultah bareng ya!!",
    "Sampai selama lamanyaaaaaaaa",
    "Just believe this year will be better",
    "Trust, Allah has ur back",
    "It's okay kalo lagi capek, gagal",
    "Enjoy every single moment.. nikmatin aja prosesnya",
    "Never stop grinding",
    "tau tau sydney marathon bareng ga ada yang tau brok",
    "I'd like to wish you one more time",
    "SELAMAT ULANG TAHUN PAULINE ARRUMY",
    "LOVE YOUU MORE MORE MOREEE",
    "🫰🫰🫰🫰🫰🫰🫰🫰🫰"
  ];

  return (
    <>
      <Head>
        <title>🎉 Selamat Ulang Tahun!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {step >= 2 && (
        <audio ref={audioRef} src="/audio/birthday-song.mp3" loop />
      )}

      {/* 1. BACKGROUND LAYERS: These sit at the bottom and cover the screen */}

      {/* Main Background (from global.css) - Starts transparent, fades in */}
      <div
        className={`fixed inset-0 w-screen h-screen transition-opacity duration-5000 ${step >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {/* Black Background (for Step 0) - Starts opaque, fades out */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-black transition-opacity duration-5000 ${step >= 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      />

      {/* DEDICATED LAMP CONTAINER */}
      {/* This is always rendered, ensuring animations trigger and lamps persist */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-20 pointer-events-none">
        <div className="flex md:space-x-30 space-x-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="w-12 h-24 relative"
              style={{
                // Lamps become visible when step is 1 or greater
                opacity: step >= 1 ? 1 : 0,
                transform: step >= 1 ? 'translateY(0)' : 'translateY(-20px)',
                // The transition will now work correctly
                transition: `opacity 0.8s ease-out ${num * 0.3}s, transform 0.8s ease-out ${num * 0.3}s`,
              }}
            >
              <Image
                src={`/images/lamps/lamp${num}.png`}
                alt={`Lamp ${num}`}
                height={48}
                width={96}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[150px] w-full"></div> {/* Adjust height to match lamp */}

      {/* 2. CONTENT LAYERS: These sit on top of the backgrounds */}
      <div className="relative z-10 flex flex-col items-center justify-start w-screen">
        {/* Step 0 Content: Just the button */}
        {step === 0 && (
          <div className="flex items-center justify-center w-full h-full">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
            >
              Turn On The Light
            </button>
          </div>
        )}

        {/* Lamps, Buttons for Steps 1 & 2 */}
        {/* This content will now appear correctly on top of the faded-in background */}
        {step >= 1 && step <= 2 && (
          <div className='mt-50'>
            {/* Button in step 1, placeholder in step 2 */}
            {step === 1 && (
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
              >
                Turn On The Music
              </button>
            )}
            {step === 2 && (
              <div className="h-12"></div>
            )}
          </div>
        )}

        {showMain && (
          <div className="relative flex flex-col items-center justify-center w-full z-10 text-center">
            <FireworksCanvas />
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full z-10 text-center pointer-events-auto text-gray-800">
              <h1 className="text-3xl sm:text-5xl font-bold mb-6 animate-bounce font-fredoka-custom text-center">
                Happy Birthday Paulinee Tayangg
              </h1>
              <h1 className='text-3xl sm:text-5xl text-center animate-pulse mb-6'>
                🫶🎉😍🥰🥳🤝
              </h1>
              <div className="carousel rounded-box w-full rounded-none">
                {Array.from({length: 29}, (_,i) => i + 1).map( (num) => (
                <div className="carousel-item" key={num}>
                  <Image className='object-cover' src={`/images/carousel/carousel${num}.webp`} width={200} height={10} alt={`carousel-${num}`}/>
                </div>
                ))
                }
              </div>
              <div className="mt-4">
                <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
                {messageLines.map((line, index) => (
                  <p
                    key={index}
                    className="text-lg sm:text-xl mb-2 opacity-0"
                    style={{
                      animation: `fadeIn 1s ease-in-out forwards`,
                      animationDelay: `${(index + 1) * 2.5}s` // Adjusted delay for faster appearance
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Step 3: Show main content (lamps controlled by lampsVisible) */}

    </>
  );
}