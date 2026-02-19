import { MOCK_TALENTS } from './mockData.js'

export const getAll = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_TALENTS), 500);
    });
}

export const getByCountry = async (country) => {
    return MOCK_TALENTS.filter(t => t.location.toLowerCase() === country.toLowerCase());
}

export const getByRole = async (role) => {
    return MOCK_TALENTS.filter(t => t.role.toLowerCase().includes(role.toLowerCase()));
}

export const getSingle = async (id) => {
    return MOCK_TALENTS.find(t => t._id === id) || MOCK_TALENTS[0];
}

export const getFiltered = async (data) => {
    let filtered = [...MOCK_TALENTS];
    if (data.role) {
        filtered = filtered.filter(t => t.role.toLowerCase().includes(data.role.toLowerCase()));
    }
    if (data.location) {
        filtered = filtered.filter(t => t.location.toLowerCase() === data.location.toLowerCase());
    }
    return filtered;
}

export const getProfile = async (data) => {
    return MOCK_TALENTS[0];
}
