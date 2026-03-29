import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { productFeatures } from '../data'

const Product = () => {
  return (
    <section id="product" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80"
                alt="ECOMO Power Saving Energy Device"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-br from-blue-600 to-navy-900
                             text-white rounded-2xl shadow-xl p-5 z-20">
              <div className="text-3xl font-bold">40%</div>
              <div className="text-xs text-blue-200 mt-0.5">Maks. Penghematan</div>
            </div>

            <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-blue-100 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              subtitle="Produk Unggulan"
              title="ECOMO Power Saving Energy"
              description="Teknologi penyimpan dan pengoptimal daya listrik generasi terbaru dengan algoritma cerdas berbasis riset Jepang."
              align="left"
            />

            {/* Feature list */}
            <ul className="space-y-4 mb-10">
              {productFeatures.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle-2" width={22} height={22} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>

            {/* Specs strip */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Kapasitas', value: '10–2000 kVA' },
                { label: 'Garansi', value: '5 Tahun' },
                { label: 'Sertifikasi', value: 'JIS / SNI' },
              ].map((spec) => (
                <div key={spec.label} className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-navy-900 text-sm">{spec.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{spec.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800
                         text-white font-semibold px-7 py-3 rounded-full shadow-md
                         hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300"
            >
              Minta Penawaran
              <Icon icon="lucide:arrow-right" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
