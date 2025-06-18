import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';

interface Album {
  title: string;
  photoCount: string;
  image: string;
  images: string[];
}

const albums: Album[] = [
  {
    title: 'Saudi Agriculture Exhibition 2024',
    photoCount: '5 photos',
    image: '/images/Minerva5.png',
    images: [
      '/images/Minerva5.png',
      '/images/Minerva5.png',
      '/images/Minerva5.png',
      '/images/Minerva5.png',
      '/images/Minerva5.png',
    ],
  },
  {
    title: 'Saudi International Marine Exhibition',
    photoCount: '1 photo',
    image: '/images/Minerva6.png',
    images: ['/images/Minerva7.png'],
  },
  {
    title: 'SALIC Day',
    photoCount: '8 photos',
    image: '/images/Minerva7.png',
    images: Array(8).fill('/images/Minerva7.png'),
  },
  {
    title: 'New Forum 2025',
    photoCount: '3 photos',
    image: '/images/Minerva5.png',
    images: Array(3).fill('/images/Minerva5.png'),
  },
];

const AlbumsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      '(max-width: 1024px)': { slides: { perView: 2, spacing: 12 } },
      '(max-width: 640px)': { slides: { perView: 1, spacing: 8 } },
    },
    created(slider: any) {
      const details = slider.track.details;
      const perView = typeof slider.options.slides === 'object'
        ? Number(slider.options.slides.perView) || 1
        : 1;

      setMaxSlide(details.slides.length - perView);
      setCurrentSlide(details.rel);
    },
    slideChanged(slider: any) {
      const details = slider.track.details;
      const perView = typeof slider.options.slides === 'object'
        ? Number(slider.options.slides.perView) || 1
        : 1;

      setMaxSlide(details.slides.length - perView);
      setCurrentSlide(details.rel);
    }
  });

  const openViewer = (album: Album) => {
    alert(`Gallery clicked: ${album.title}`);
  };

  return (
    <div
      className="bg-salic-primary rounded-lg text-white p-4 sm:p-6 max-w-full overflow-hidden h-full"
      style={{
        backgroundImage: 'url(/images/bgImg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'auto',
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[18px] md:text-[17px] font-semibold text-white">
          SALIC Albums
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
            className={`w-8 h-8 border flex items-center justify-center rounded transition ${
              currentSlide === 0 ? 'opacity-30' : 'hover:bg-white/10'
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            disabled={currentSlide >= maxSlide}
            className={`w-8 h-8 border flex items-center justify-center rounded transition ${
              currentSlide >= maxSlide ? 'opacity-30' : 'hover:bg-white/10'
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {albums.map((album, index) => (
          <div key={index} className="keen-slider__slide flex flex-col items-center">
            <div className="group relative w-full flex flex-col items-center pb-3 ">
              <div className="group-hover:scale-[1.025] absolute top-[86%] translate-y-2 z-0 bg-[#5482AD] h-6 rounded-lg w-[80%] transition-all" />
              <div className="group-hover:scale-[1.035] absolute top-[84%] translate-y-1 z-10 bg-white h-6 rounded-lg w-[90%] shadow transition-all" />
              <div
                className="relative z-20 w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => openViewer(album)}
              >
                <img
                  src={album.image}
                  alt={album.title}
                  className="group-hover:scale-105 w-full h-40 sm:h-48 object-cover rounded-xl transition-all"
                />
              </div>
            </div>
            <div className="mt-5 w-full text-center">
              <h3 className="font-semibold text-[20px] sm:text-lg text-white line-clamp-1">
                {album.title}
              </h3>
              <p className="text-[16px] text-white">{album.photoCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsCarousel;
