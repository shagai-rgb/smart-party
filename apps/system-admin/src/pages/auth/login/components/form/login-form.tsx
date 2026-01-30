import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { LoginStep } from '../steps/login-step'
import { OtpStep } from '../steps/otp-step'

export const LoginForm = () => {
  const [step, setStep] = useState<'login' | 'otp'>('login')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  return (
    <div className="w-full flex items-center justify-center h-screen relative">
      <img
        src="/home-header-bg.svg"
        alt="Background"
        className="w-full h-full object-cover absolute opacity-60"
      />
      <div className="w-sm sm:w-[500px] h-[400px] border  rounded-2xl bg-white/40 backdrop-blur-lg flex flex-col justify-between z-10">
        <div className="py-10 text-center text-3xl font-bold  ">
          {step === 'login' ? 'Системд нэвтрэх' : 'OTP код баталгаажуулалт'}
        </div>
        <div className="px-6 pb-6">
          {step === 'login' ? (
            <LoginStep
              error={error}
              setError={setError}
              onSuccess={() => setStep('otp')}
            />
          ) : (
            <OtpStep
              error={error}
              setError={setError}
              onSuccess={() => {
                toast.success('Амжилттай нэвтэрлээ!')
                navigate('/')
              }}
              onBack={() => setStep('login')}
            />
          )}
        </div>
      </div>
    </div>
  )
}
