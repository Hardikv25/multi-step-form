'use client'

import { Button } from '@/Components/ui/button'
import { useEffect, useState } from 'react'

interface StepNavigationProps {
  currentStep: number
  setStep: (step: number) => void
}

const steps = [
  { label: 'Personal Information', step: 1 },
  { label: 'Contact Details', step: 3 },
  { label: 'Preferences', step: 5 },
]

export default function StepNavigation({ currentStep, setStep }: StepNavigationProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('completedSteps') || '[]')
    setCompletedSteps(new Set(stored.map(Number)))
  }, [])

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
      {steps.map(({ label, step }) => {
        const isActive = currentStep >= step && currentStep < step + 2
        const isCompleted = completedSteps.has(step)
        const isDisabled = !isCompleted && step !== currentStep

        return (
          <Button
            key={step}
            disabled={isDisabled}
            onClick={() => {
              if (!isDisabled) setStep(step)
            }}
            className={`rounded-md py-3 px-6 font-semibold ${
              isActive
                ? 'bg-gray-900 text-white'
                : isCompleted
                ? 'bg-white text-gray-500 border border-gray-200'
                : 'bg-white text-gray-400 border border-gray-200 cursor-not-allowed'
            }`}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}
