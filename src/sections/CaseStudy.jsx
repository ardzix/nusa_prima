import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { caseStudies } from '../data'

const CaseStudy = () => {
  return (
    <section id="case-study" className="section-padding gradient-navy">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Case Study"
            title="Hasil Nyata dari Instalasi ecomo"
            description="Berikut adalah contoh hasil penghematan energi yang telah dicapai di berbagai fasilitas industri di Jepang setelah instalasi ecomo."
            light
          />
        </div>

        {/* Stats highlight */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { value: '3.000+', label: 'Unit Terjual', icon: 'lucide:package-check' },
            { value: 'Sejak 2003', label: 'Pengalaman Global', icon: 'lucide:calendar' },
            { value: '5–15%', label: 'Rata-rata Penghematan', icon: 'lucide:trending-down' },
            { value: 'Jepang & Internasional', label: 'Pasar', icon: 'lucide:globe' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center backdrop-blur-sm"
            >
              <Icon icon={s.icon} width={24} height={24} className="text-blue-300 mx-auto mb-3" />
              <div className="text-white font-black text-xl leading-tight">{s.value}</div>
              <div className="text-blue-300 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div> */}

        {/* Case study grid — pamphlet style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="group bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-white/5">
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-4">
                {/* Company / facility name */}
                <h3 className="text-white font-semibold text-sm leading-snug mb-3 line-clamp-2">
                  {cs.name}
                </h3>

                {/* Install date & unit */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1.5 text-blue-300 text-xs">
                    <Icon icon="lucide:calendar" width={11} height={11} className="flex-shrink-0" />
                    {/* <span>Installation date · · · · {cs.installDate}</span> */}
                    <span>{cs.installDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-300 text-xs">
                    <Icon icon="lucide:zap" width={11} height={11} className="flex-shrink-0" />
                    <span>Unit {cs.unit}</span>
                  </div>
                </div>

                {/* Bold reduction % — matches pamphlet style */}
                <p
                  className="text-2xl text-emerald-400 font-black leading-none"
                
                >
                  {cs.reduction}% reduction
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Source note */}
        <p className="text-center text-blue-400 text-xs mt-10">
          * Data hasil instalasi berdasarkan catatan resmi Satsuki Co., Ltd., Osaka, Jepang — Pemegang hak paten ecomo.
        </p>
      </div>
    </section>
  )
}

export default CaseStudy
