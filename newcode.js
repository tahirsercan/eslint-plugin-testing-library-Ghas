const fetchById = async (endpoint, id) => {
    try {
        const response = await fetch(`/api/${endpoint}/${id}`);
        // ... rest of the logic
    } catch (error) {
        // ... error handling
    }
};

// Generic Card component
const Card = ({ header, body, footer }) => (
    <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-body">{body}</div>
        <div className="card-footer">{footer}</div>
    </div>
);
