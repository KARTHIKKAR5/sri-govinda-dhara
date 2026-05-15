import { Link } from 'react-router-dom'

function Button({ children, to, type = 'button', className = '', onClick }) {
  const buttonClasses = `inline-flex items-center justify-center rounded-full bg-farm-green px-6 py-3 text-sm font-bold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-farm-dark focus:outline-none focus:ring-4 focus:ring-emerald-200 ${className}`

  // If the button receives a "to" prop, it works like a React Router Link.
  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
