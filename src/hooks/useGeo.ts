import { useSearchParams } from 'react-router-dom';

export function useGeo() {
    const [searchParams] = useSearchParams();

    // Default to the West Alabama strategy baseline if no params are present
    const locCities = searchParams.get('city') || 'Tuscaloosa & Northport';
    const locName = searchParams.get('region') || 'West Alabama';

    return { locCities, locName };
}
