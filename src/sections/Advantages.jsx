import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'
import { advantages } from '../data'

const Advantages = () => {
  return (
    <section id="advantages" className="section-padding gradient-navy">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Keunggulan Kami"
            title="Mengapa Memilih Nusa Prima Energi?"
            description="Kami tidak hanya menjual produk – kami menghadirkan solusi lengkap yang memberi dampak nyata pada bisnis Anda."
            light
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={adv.id}
              className="group relative bg-white/10 border border-white/10 backdrop-blur-sm
                         rounded-2xl p-7 card-hover cursor-default"
            >
              {/* Number watermark */}
              {/* <span className="absolute top-5 right-5 text-5xl font-black text-white/5 select-none">
                {String(idx + 1).padStart(2, '0')}
              </span> */}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4
                               group-hover:bg-blue-500/40 transition-colors">
                <Icon name={adv.icon} size={22} className="text-blue-300" />
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{adv.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
