import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { sectors } from '../data'

const Sectors = () => {
  return (
    <section id="sectors" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Sektor Bisnis"
            title="Kami Melayani Berbagai Sektor"
            description="Solusi energi kami dirancang untuk memenuhi kebutuhan spesifik setiap industri dengan pendekatan yang tepat sasaran."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="group relative rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="mb-2">
                  <Icon icon={sector.icon} width={28} height={28} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{sector.title}</h3>
                <p className="text-blue-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100
                               translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sectors
