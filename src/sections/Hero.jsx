import { Icon } from '@iconify/react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-blue-900/85 to-navy-800/80" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container-custom pt-24 pb-16">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30
                           text-blue-200 text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Solusi Energi Terpercaya #1 di Indonesia
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Solusi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Efisiensi Energi
            </span>{' '}
            Masa Depan
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            PT Nusa Prima Energi Indonesia hadir sebagai mitra strategis dalam menghadirkan
            solusi hemat energi berbasis teknologi Jepang untuk perkantoran, industri, hotel,
            dan rumah sakit di seluruh Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2
                         bg-gradient-to-r from-blue-500 to-blue-700
                         text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-blue-900/40
                         hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami
              <Icon icon="lucide:arrow-right" width={18} height={18} />
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40
                         text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm
                         hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Lihat Produk
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10">
            {[
              { value: '500+', label: 'Klien Aktif' },
              { value: '20–40%', label: 'Hemat Energi' },
              { value: '15+', label: 'Tahun Pengalaman' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60
                   hover:text-white transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <Icon icon="lucide:chevron-down" width={20} height={20} className="animate-bounce" />
      </a>
    </section>
  )
}

export default Hero
