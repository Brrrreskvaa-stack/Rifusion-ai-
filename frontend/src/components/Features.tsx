import React from 'react'
import { Zap, Palette, Layers, BarChart3 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Generation',
      description: 'Generate content in seconds with GPU acceleration',
    },
    {
      icon: Palette,
      title: 'Customizable Styles',
      description: 'Fine-tune parameters for perfect results',
    },
    {
      icon: Layers,
      title: 'Batch Processing',
      description: 'Create multiple variations at once',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track your creations and improve over time',
    },
  ]

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Why Choose Riffusion?</h2>
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <div
              key={idx}
              className="bg-dark-surface border border-dark-border rounded-xl p-6 hover:border-primary transition-colors"
            >
              <Icon className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
