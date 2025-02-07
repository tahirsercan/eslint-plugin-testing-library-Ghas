onst fetchById = async (endpoint, id) => {
    try {
        const response = await fetch(`/api/${endpoint}/${id}`);
        // ... rest of the logic
    } catch (error) {
        // ... error handling
    }
};
