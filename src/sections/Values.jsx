import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { values } from '../data'

const Values = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Nilai Perusahaan"
            title="Nilai yang Kami Junjung Tinggi"
            description="Empat pilar nilai yang menjadi landasan setiap keputusan dan tindakan kami dalam melayani klien."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => (
            <div
              key={val.id}
              className="group text-center bg-white border border-gray-100 rounded-2xl p-8
                         shadow-sm card-hover cursor-default"
            >
              {/* Icon circle */}
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${val.color}
                               flex items-center justify-center mb-5 shadow-md
                               group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={val.icon} width={30} height={30} className="text-white" />
              </div>

              <h3 className="text-navy-900 font-bold text-xl mb-3">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>

              {/* Bottom accent line */}
              <div className={`h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${val.color} mt-6
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
