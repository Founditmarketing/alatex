import { useSearchParams } from 'react-router-dom';

export function useGeo() {
    const [searchParams] = useSearchParams();

    // Default to the full Birmingham-metro + West Alabama service area. Both can
    // still be overridden via ?city= / ?region= for geo-targeted ad campaigns.
    const locCities =
        searchParams.get('city') || 'Hoover, Vestavia Hills, Mountain Brook & Irondale';
    const locName = searchParams.get('region') || 'Greater Birmingham & West Alabama';

    return { locCities, locName };
}
