import {
  BriefcaseBusiness,
  Check,
  SearchIcon,
  UserPlusIcon
} from 'lucide-react'

interface TProps {
  step: string
}

export const StepLine = ({ step }: TProps) => {
  return (
    <div className="relative ">
      <div className="flex items-center justify-center relative max-w-6xl mx-auto">
        <div className="flex items-start justify-between w-full relative z-10">
          {/*  Check */}
          <div className="flex flex-col items-center gap-4 flex-1 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center font-semibold transition-all duration-500 border-2 ${
                step === 'check'
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 ring-4 ring-blue-100 shadow-lg shadow-blue-200/50 scale-110'
                  : 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-emerald-600 shadow-md'
              }`}
            >
              {step !== 'check' ? (
                <Check className="w-7 h-7" strokeWidth={2} />
              ) : (
                <SearchIcon className="w-7 h-7" />
              )}
            </div>
            <div className="text-center">
              <div
                className={`text-sm font-semibold transition-colors duration-300 ${
                  step !== 'check' ? 'text-emerald-700' : 'text-blue-700'
                }`}
              >
                Ажилтны мэдээлэл шалгах
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Алхам 1
              </div>
            </div>
          </div>

          {/*Registration */}
          <div className="flex flex-col items-center gap-4 flex-1 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center font-semibold transition-all duration-500 border-2 ${
                step === 'registration'
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 ring-4 ring-blue-100 shadow-lg shadow-blue-200/50 scale-110'
                  : step === 'position-add'
                    ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-emerald-600 shadow-md'
                    : 'bg-white text-slate-400 border-slate-200 shadow-sm'
              }`}
            >
              {step === 'position-add' ? (
                <Check className="w-7 h-7" strokeWidth={2} />
              ) : (
                <UserPlusIcon className="w-7 h-7" />
              )}
            </div>
            <div className="text-center">
              <div
                className={`text-sm font-semibold transition-colors duration-300 ${
                  step === 'registration'
                    ? 'text-blue-700'
                    : step === 'position-add'
                      ? 'text-emerald-700'
                      : 'text-slate-500'
                }`}
              >
                Хувь хүний мэдээлэл бүртгэх
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Алхам 2
              </div>
            </div>
          </div>

          {/* Position Add */}
          <div className="flex flex-col items-center gap-4 flex-1 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center font-semibold transition-all duration-500 border-2 ${
                step === 'position-add'
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 ring-4 ring-blue-100 shadow-lg shadow-blue-200/50 scale-110'
                  : 'bg-white text-slate-400 border-slate-200 shadow-sm'
              }`}
            >
              <BriefcaseBusiness className="w-7 h-7" />
            </div>
            <div className="text-center">
              <div
                className={`text-sm font-semibold transition-colors duration-300 ${
                  step === 'position-add' ? 'text-blue-700' : 'text-slate-500'
                }`}
              >
                Албан тушаалд томилох
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Алхам 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
