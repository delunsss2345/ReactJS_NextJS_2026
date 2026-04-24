function UserList({ users }) {
  return (
    <div className="card-grid">
      {users.map((user) => (
        <article key={user.id} className="user-card">
          <img className="avatar" src={user.image} alt={user.username} />
          <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <p className="muted-text">@{user.username}</p>
            <p className="muted-text">{user.email}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default UserList
