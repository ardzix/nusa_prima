import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'

const features = [
  { icon: 'lucide:trending-down', text: 'Membantu pelanggan dalam meningkatkan efisiensi energi dan menurunkan biaya operasional' },
  { icon: 'lucide:building',      text: 'Penyedia solusi handal untuk gedung perkantoran, pabrik, hotel, hingga rumah sakit' },
  { icon: 'lucide:leaf',          text: 'Mendukung implementasi konsep green building dan keberlanjutan lingkungan' },
]

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                alt="Kantor PT Nusa Prima Energi Indonesia"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 z-20 max-w-[200px]">
              <div className="text-4xl font-bold text-blue-700">100%</div>
              <div className="text-sm text-gray-500 mt-1">Komitmen Efisiensi Energi</div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <SectionTitle
              subtitle="Tentang Kami"
              title="Mitra Terpercaya dalam Efisiensi Energi"
              align="left"
            />

            <p className="text-gray-600 leading-relaxed mb-6">
              PT Nusa Prima Energi Indonesia adalah perusahaan spesialis solusi hemat energi
              yang berdiri sejak 2024. Kami berkomitmen menghadirkan teknologi mutakhir berbasis
              riset Jepang untuk membantu bisnis Anda memangkas biaya operasional secara
              signifikan tanpa mengorbankan performa.
            </p>
            {/* <p className="text-gray-600 leading-relaxed mb-10">
              Dengan rekam jejak lebih dari 500 proyek sukses, kami telah dipercaya oleh
              perusahaan-perusahaan terkemuka di berbagai sektor untuk mengimplementasikan
              solusi energi yang berkelanjutan dan terukur.
            </p> */}

            <ul className="space-y-4">
              {features.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 flex-shrink-0 text-blue-600">
                    <Icon icon={icon} width={22} height={22} />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800
                         text-white font-semibold px-7 py-3 rounded-full shadow-md
                         hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
