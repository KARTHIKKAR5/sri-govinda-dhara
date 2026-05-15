import { useState } from 'react'
import Button from '../components/Button'

function Login() {
  // formData stores what the user types into the email and password inputs.
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Login form data:', formData)
  }

  return (
    <section className="bg-gradient-to-br from-farm-light via-white to-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-farm-green">
            Customer login
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Welcome back to Govinda Dhara
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Login to manage your milk subscription, update delivery details, and track fresh farm orders.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-emerald-100 bg-white p-6 shadow-soft sm:p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">Login</h2>
          <p className="mt-2 text-sm text-slate-500">Enter your account details below.</p>

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-farm-green focus:ring-4 focus:ring-emerald-100"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Password
              <div className="flex rounded-lg border border-slate-200 focus-within:border-farm-green focus-within:ring-4 focus-within:ring-emerald-100">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="min-w-0 flex-1 rounded-l-lg px-4 py-3 font-normal outline-none"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="rounded-r-lg px-4 text-sm font-bold text-farm-green transition hover:bg-farm-light"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>
          </div>

          <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <a href="#" className="font-semibold text-farm-green hover:text-farm-dark">
              Forgot Password?
            </a>
            <a href="#" className="font-semibold text-slate-600 hover:text-farm-dark">
              Create Account
            </a>
          </div>

          <Button type="submit" className="mt-8 w-full">
            Login
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Login
