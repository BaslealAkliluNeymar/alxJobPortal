import { MOCK_JOBS, MOCK_ANALYTICS } from './mockData.js'

// Fully static service layer
export const getJobs = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_JOBS), 500);
    });
}

export const ApplyJob = async (id) => {
    return { success: true, message: "Applied successfully (Static Mode)" };
}

export const saveJob = async (data) => {
    const newJob = { ...data, _id: Date.now().toString() };
    return newJob;
}

export const getUserJobs = async () => {
    return MOCK_JOBS;
}

export const Analytics = async () => {
    return MOCK_ANALYTICS;
}
