const BASE_URL = "http://localhost:3000/todos";

export const getTodos = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
};

export const createTodo = async (todo) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
    });
    if (!res.ok) throw new Error("Create fail");
    return res.json();
};

export const deleteTodo = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Delete failed");
};