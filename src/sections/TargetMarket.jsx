import SectionTitle from '../components/SectionTitle'
import { targetMarkets } from '../data'

const TargetMarket = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Target Pasar"
            title="Siapa yang Kami Layani?"
            description="Produk dan solusi kami dirancang khusus untuk kebutuhan berbagai segmen bisnis yang memiliki konsumsi energi tinggi."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {targetMarkets.map((market) => (
            <div
              key={market.id}
              className="group relative rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={market.image}
                  alt={market.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-base mb-1">{market.title}</h3>
                <p className="text-blue-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100
                               translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {market.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetMarket
