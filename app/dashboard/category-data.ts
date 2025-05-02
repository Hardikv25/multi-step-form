export const category = [
    {
        id: 1,
        title: "Personal Information",
        subtitle: "Basic personal details",
        completeForm: 2,
        totalForm: 2
    },
    {
        id: 2,
        title: "Contact Details",
        subtitle: "Your contact information",
        completeForm: 1,
        totalForm: 2
    },
    {
        id: 3,
        title: "Preferences",
        subtitle: "Your preferences and settings",
        completeForm: 0,
        totalForm: 2
    }
]

export type CategoryTypeScript = {
    id: number,
    title: string,
    subtitle: string,
    completeForm: number,
    totalForm: number
}