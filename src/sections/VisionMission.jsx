import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { missions } from '../data'

const VisionMission = () => {
  return (
    <section id="vision" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Visi & Misi"
            title="Arah Langkah Kami ke Depan"
            description="Dengan visi yang jelas dan misi yang terukur, kami terus bergerak mewujudkan Indonesia yang lebih hemat energi."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-gradient-to-br from-navy-900 to-blue-800 rounded-2xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-blue-500/20 rounded-xl px-4 py-2 mb-6">
                <Icon icon="lucide:eye" width={20} height={20} className="text-blue-300" />
                <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Visi</span>
              </div>
              <h3 className="text-white text-2xl font-bold leading-snug mb-6">
                Menjadi perusahaan solusi efisiensi energi terdepan di Asia Tenggara pada tahun 2030.
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Kami bercita-cita menjadi pemimpin regional dalam industri efisiensi energi,
                mendorong transformasi berkelanjutan di seluruh kawasan melalui inovasi dan
                teknologi terbaik dunia.
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
            <div className="inline-flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-2 mb-6">
              <Icon icon="lucide:target" width={20} height={20} className="text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Misi</span>
            </div>
            <ul className="space-y-4">
              {missions.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center
                                   bg-blue-100 rounded-full text-blue-700 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
