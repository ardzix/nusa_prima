const SectionTitle = ({ subtitle, title, description, align = 'center', light = false }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'
  const textColor = light ? 'text-white' : 'text-navy-900'
  const subColor = light ? 'text-blue-300' : 'text-blue-600'
  const descColor = light ? 'text-blue-100' : 'text-gray-500'

  return (
    <div className={`max-w-2xl ${alignClass} mb-14`}>
      {subtitle && (
        <span className={`text-sm font-semibold uppercase tracking-widest ${subColor} mb-2 block`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${textColor} leading-tight mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg ${descColor} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
