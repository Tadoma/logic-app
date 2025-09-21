import { Course } from '../../../api/dashboard/dashboard.models.ts';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getCourses } from '../../../api/dashboard/dashboard.api.ts';
import { NETWORK_ERROR } from '../../../constants/error.constants.ts';
import { ALL_THEMES } from '../../themes/constants/themes.contants.ts';

type HookReturnObject = {
    courses: Course[];
    tags: string[];
    isLoading: boolean;
    error?: string;
};

export const useCourses = (selectedTag?: string): HookReturnObject => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const coursesResponse = await getCourses();
                setCourses(coursesResponse);
            } catch (err) {
                setError(NETWORK_ERROR);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredCourses = useMemo<Course[]>(
        () =>
            selectedTag && selectedTag !== ALL_THEMES
                ? courses.filter(course => course.tags.includes(selectedTag))
                : courses,

        [courses, selectedTag],
    );

    const tagsRef = useRef<string[]>([]);
    if (tagsRef.current.length === 0) {
        const flatTags = courses.flatMap(course => course.tags);
        const uniqueTags = new Set(flatTags);
        tagsRef.current = [...uniqueTags];
    }

    return {
        courses: filteredCourses,
        tags: tagsRef.current,
        isLoading,
        error,
    };
};
