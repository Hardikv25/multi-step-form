'use client'

import { Progress } from '@/Components/ui/progress'
import React, { useEffect, useState } from 'react'
import CategoryProgress from './category-progress'

const Page = () => {
  const totalForms = 6
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('completedSteps') || '[]')
    const steps = stored.map((step: string) => parseInt(step, 10))
    setCompletedSteps(steps)
  }, [])

  const percentage = (completedSteps.length / totalForms) * 100
  const isAllCompleted = completedSteps.length === totalForms

  return (
    <div className='border border-gray-200 rounded-lg bg-white mx-6 my-8 py-8 px-8 md:px-16 lg:px-40 xl:px-50'>
      <h1 className='text-3xl font-semibold'>Multi-Step Form Dashboard</h1>
      
      <div className='m-4 p-4 rounded-xl shadow-sm'>
        <div className='flex justify-between mb-2'>
          <p className='font-semibold text-xl'>Overall Progress</p>
          <p className='text-md text-right'>{completedSteps.length}/{totalForms} forms completed</p>
        </div>
        <Progress value={percentage} className="h-3 bg-gray-200 [&>div]:bg-black" />
        
        {isAllCompleted && (
          <div className="mt-4 p-4 bg-green-50 border border-green-300 text-green-800 rounded-lg">
            <p className="font-semibold">🎉 Congratulations! You have completed all forms.</p>
          </div>
        )}
      </div>

      <div>
        <h1 className='font-semibold text-xl my-3'>Categories</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <CategoryProgress completedSteps={completedSteps} />
        </div>
      </div>
    </div>
  )
}

export default Page
