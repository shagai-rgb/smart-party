import { Plus, PlusCircle, Sparkles, Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-slate-900 text-balance">
            Button Style Variations
          </h1>
          <p className="text-lg text-slate-600">
            Choose your perfect button design
          </p>
        </div>

        {/* Gradient Styles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Button Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Original Emerald */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                variant = &quot;create&quot;
              </p>
              <Button size="sm" variant="create">
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                variant = &quot;create_outline&quot;
              </p>
              <Button size="sm" variant="create_outline">
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Blue Ocean */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Blue Ocean</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-md hover:from-blue-700 hover:to-cyan-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Purple Midnight */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                Purple Midnight
              </p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md hover:from-indigo-700 hover:to-purple-700"
              >
                <Sparkles strokeWidth={2} className="size-4" />
                Нэмэх
              </Button>
            </div>

            {/* Orange Sunset */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                Orange Sunset
              </p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-md hover:from-orange-600 hover:to-rose-700"
              >
                <Zap strokeWidth={2} className="size-4" />
                Нэмэх
              </Button>
            </div>

            {/* Teal Fresh */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Teal Fresh</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-md hover:from-teal-700 hover:to-emerald-700"
              >
                <Plus strokeWidth={2} className="size-4" />
                Нэмэх
              </Button>
            </div>

            {/* Slate Professional */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                Slate Professional
              </p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-md hover:from-slate-800 hover:to-black"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>
          </div>
        </section>

        {/* Solid Modern Styles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Solid Modern
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Solid Blue */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Solid Blue</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-blue-600 text-white shadow-sm hover:bg-blue-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Solid Indigo */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Solid Indigo</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Solid Emerald */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                Solid Emerald
              </p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Solid Rose */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Solid Rose</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-rose-600 text-white shadow-sm hover:bg-rose-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Solid Amber */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Solid Amber</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-amber-600 text-white shadow-sm hover:bg-amber-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Solid Dark */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Solid Dark</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-slate-900 text-white shadow-sm hover:bg-black"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>
          </div>
        </section>

        {/* Outline & Ghost Styles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Outline & Ghost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Outline Blue */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Outline Blue</p>
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-1.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Outline Emerald */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                Outline Emerald
              </p>
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-1.5 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Outline Indigo */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                Outline Indigo
              </p>
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-1.5 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Ghost Blue */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Ghost Blue</p>
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-1.5 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Ghost Emerald */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">
                Ghost Emerald
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-1.5 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Ghost Slate */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Ghost Slate</p>
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-1.5 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>
          </div>
        </section>

        {/* Premium Styles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Premium & Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Glow Effect Blue */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Glow Blue</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-700 hover:shadow-blue-600/60"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Glow Effect Emerald */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Glow Emerald</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-emerald-600 text-white shadow-lg shadow-emerald-500/50 hover:bg-emerald-700 hover:shadow-emerald-600/60"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Glass Morphism */}
            <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-white">Glass Morphism</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-white/20 text-white border border-white/30 backdrop-blur-md hover:bg-white/30 shadow-lg"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* 3D Effect */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">3D Effect</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-blue-600 text-white shadow-[0_6px_0_0_rgb(37,99,235)] hover:shadow-[0_4px_0_0_rgb(37,99,235)] hover:translate-y-0.5 active:shadow-[0_2px_0_0_rgb(37,99,235)] active:translate-y-1 transition-all"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Neon */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-300">Neon</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:bg-cyan-400 font-semibold"
              >
                <PlusCircle strokeWidth={2} />
                Нэмэх
              </Button>
            </div>

            {/* Minimalist */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <p className="text-sm font-medium text-slate-600">Minimalist</p>
              <Button
                size="sm"
                className="flex items-center gap-1.5 bg-slate-900 text-white rounded-sm hover:bg-slate-800"
              >
                <Plus strokeWidth={2} className="size-3.5" />
                Нэмэх
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
