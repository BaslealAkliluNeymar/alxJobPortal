import { MOCK_TALENTS } from './mockData.js'

export const getSearchJobs = async (data) => {
    let results = [...MOCK_TALENTS];
    if (data.title) {
        results = results.filter(t => t.role.toLowerCase().includes(data.title.toLowerCase()));
    }
    if (data.location) {
        results = results.filter(t => t.location.toLowerCase().includes(data.location.toLowerCase()));
    }
    return results;
}