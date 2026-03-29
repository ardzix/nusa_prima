const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden
        ${hover ? 'card-hover' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
