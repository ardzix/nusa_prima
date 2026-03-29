const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-outline'

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  )
}

export default Button
