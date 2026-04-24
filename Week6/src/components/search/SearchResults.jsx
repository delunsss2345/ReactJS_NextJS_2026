function SearchResults({ query, results, loading, error }) {
  if (!query.trim()) {
    return <p className="muted-text">Nhập tên hoặc username để bắt đầu tìm kiếm.</p>
  }

  if (loading) {
    return <p className="muted-text">Đang debounce và gọi API...</p>
  }

  if (error) {
    return <p className="error-text">{error}</p>
  }

  if (results.length === 0) {
    return <p className="muted-text">Không tìm thấy user phù hợp.</p>
  }

  return (
    <div className="stack-gap">
      {results.map((user) => (
        <article key={user.id} className="search-row">
          <div>
            <strong>{user.firstName} {user.lastName}</strong>
            <p className="muted-text">@{user.username}</p>
          </div>
          <span className="tag">{user.email}</span>
        </article>
      ))}
    </div>
  )
}

export default SearchResults
