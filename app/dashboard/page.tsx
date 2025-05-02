import { Progress } from '@/Components/ui/progress'
import React from 'react'
import CategoryProgress from './category-progress';

const page = () => {
    const totalForms = 6;
    const completedForms = 2;
    const percentage = (completedForms / totalForms) * 100
    return (
        <div className='border border-gray-200 rounded-lg bg-white mx-6 my-8 py-8 px-8 md:px-16 lg:px-40 xl:px-50'>
            <h1 className='text-3xl font-semibold'>Multi-Step Form Dashboard</h1>
            <div className='m-4  p-4 rounded-xl shadow-sm '>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold text-xl'>Overall Progress</p>
                    <p className='text-md text-right'>{completedForms}/{totalForms} forms completed</p>
                </div>
                <Progress value={percentage} className="h-3 bg-gray-200 [&>div]:bg-black" />
            </div>
            <div>
                <h1 className='font-semibold text-xl my-3'>Categories</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <CategoryProgress />
                </div>
            </div>
        </div>
    )
}
export default page;
