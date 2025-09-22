import { Course } from './dashboard.models.ts';

export const getCourses: () => Promise<Course[]> = async () => {
    const response = await fetch('https://logiclike.com/docs/courses.json');
    return await response.json();
};
