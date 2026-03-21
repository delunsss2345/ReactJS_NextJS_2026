import { useState } from "react";
import { todoSchema } from "../../schema/create.schem";

export default function TodoForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const { error } = todoSchema.validate({ title });
        if (error) return setError(error.message);

        try {
            setLoading(true);
            await onAdd({ title });
            setTitle("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter todo"
            />
            <button disabled={loading}>
                {loading ? "Adding..." : "Add"}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
}