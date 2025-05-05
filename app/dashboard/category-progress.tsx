'use client'

import React from 'react'
import { Progress } from '@/Components/ui/progress'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip"

export type CategoryTypeScript = {
    id: number,
    title: string,
    subtitle: string,
    completeForm: number,
    totalForm: number
}

type CategoryProgressProps = {
    completedSteps: number[];
  };

const CategoryProgress = ({ completedSteps }: CategoryProgressProps) => {

    const countCompleted = (stepNums: number[]) =>
        stepNums.filter(step => completedSteps.includes(step)).length

    const personalSteps = [1, 2]
    const contactSteps = [3, 4]
    const preferenceSteps = [5, 6]

    const categories = [
        {
            id: 1,
            title: "Personal Information",
            subtitle: "Basic personal details",
            completeForm: countCompleted(personalSteps),
            totalForm: personalSteps.length
        },
        {
            id: 2,
            title: "Contact Details",
            subtitle: "Your contact information",
            completeForm: countCompleted(contactSteps),
            totalForm: contactSteps.length
        },
        {
            id: 3,
            title: "Preferences",
            subtitle: "Your preferences and settings",
            completeForm: countCompleted(preferenceSteps),
            totalForm: preferenceSteps.length
        }
    ]

    return (
        <TooltipProvider>
            {categories.map((item) => {
                const categoryPercentage = (item.completeForm / item.totalForm) * 100
                return (
                    <Tooltip key={item.id}>
                        <TooltipTrigger asChild>
                            <div
                                className={`border border-gray-200 rounded-lg p-3.5 col-span-1 hover:shadow-lg ${item.completeForm === 0 ? 'bg-gray-100' : 'bg-white'
                                    }`}
                            >
                                <div className='flex justify-between'>
                                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                                    <span className={`text-sm py-1.5 sm:py-0.5 px-3 sm:px-2 h-fit rounded-full  ${item.completeForm === item.totalForm
                                        ? 'bg-emerald-500 text-white'
                                        : item.completeForm > 0
                                            ? 'bg-yellow-500 text-white'
                                            : 'bg-gray-300 text-gray-700'
                                        }`}>
                                        {item.completeForm === item.totalForm
                                            ? 'Completed'
                                            : item.completeForm > 0
                                                ? 'In Progress'
                                                : 'Not Started'}
                                    </span>
                                </div>
                                <p className='text-md py-0.5'>{item.subtitle}</p>
                                <div className='py-1'>
                                    <div className="flex justify-between items-center pb-1">
                                        <p className='text-xs text-gray-600'>Progress</p>
                                        <p className='text-sm font-semibold'>
                                            {item.completeForm}/{item.totalForm} forms
                                        </p>
                                    </div>
                                    <Progress
                                        value={categoryPercentage}
                                        className="h-2.5 bg-gray-200 [&>div]:bg-black"
                                    />
                                </div>
                            </div>
                        </TooltipTrigger>
                        {item.completeForm === 0 && (
                            <TooltipContent
                                side="bottom"
                                align="center"
                                sideOffset={0}
                                className="!absolute left-1/2 top-2/2 -translate-x-3/7 sm:-translate-x-1/2 -translate-y-1/2 sm:-translate-y-3/2 bg-white shadow-md rounded px-3 py-2 text-sm z-50 text-nowrap"
                            >
                                <p>Please complete previous categories first</p>
                            </TooltipContent>
                        )}
                    </Tooltip>
                )
            })}
        </TooltipProvider>
    )
}

export default CategoryProgress
