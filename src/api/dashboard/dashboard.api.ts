import { Course } from './dashboard.models.ts';

export const getCourses: () => Promise<Course[]> = async () => {
    try {
        const response = await fetch('https://logiclike.com/docs/courses.json');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
