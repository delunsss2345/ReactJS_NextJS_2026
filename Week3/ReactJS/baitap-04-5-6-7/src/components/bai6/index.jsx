import { useReducer } from "react";

const initState = {
    status: "idle",
    users: [],
    error: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, status: "loading", error: null }
        case 'FETCH_SUCCESS':

            return { ...state, status: "success", users: action.payload }
        case 'FETCH_ERROR':
            return { ...state, status: "error", error: action.payload }
        default:
            return state;
    }
}

const Bai6 = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const fetchUsers = async () => {
        dispatch({ type: "FETCH_START" });
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) {
                dispatch({ type: "FETCH_ERROR", payload: 'Fetch err' });
                return;
            }
            const data = await res.json();
            dispatch({ type: "FETCH_SUCCESS", payload: data });
        } catch (err) {
            dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
    };
    return (
        <div>
            {state.status === "idle" && (
                <button onClick={fetchUsers}>Loading user</button>
            )}

            {state.status === "loading" && <p>Loading...</p>}

            {state.status === "error" && (
                <div>
                    <p>Error: {state.error}</p>
                    <button onClick={fetchUsers}>Retry</button>
                </div>
            )}

            {state.status === "success" && (
                <ul>
                    {state.users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Bai6;