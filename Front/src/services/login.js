export const LoginPost = async (credential) => {
    // Artificial delay for realism
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: "mock-token-12345",
                user: {
                    _id: "mock-id-123",
                    name: "Demo Admin",
                    role: "Employer",
                    email: credential.email
                },
                _id: "mock-id-123",
                role: "Employer",
                email: credential.email
            });
        }, 800);
    });
}

export const signup = async (credential) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: "Mock signup successful!" });
        }, 800);
    });
}