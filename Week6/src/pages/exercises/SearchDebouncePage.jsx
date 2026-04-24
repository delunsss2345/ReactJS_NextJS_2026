import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Panel from '../../components/common/Panel'
import SearchResults from '../../components/search/SearchResults'
import {
  selectSearchError,
  selectSearchLoading,
  selectSearchQuery,
  selectSearchResults,
} from '../../features/search/selector'
import {
  clearSearchResults,
  setSearchQuery,
} from '../../features/search/slice/searchSlice'
import { searchUsers } from '../../features/search/slice/searchSlice'

function SearchDebouncePage() {
  const dispatch = useDispatch()
  const query = useSelector(selectSearchQuery)
  const results = useSelector(selectSearchResults)
  const loading = useSelector(selectSearchLoading)
  const error = useSelector(selectSearchError)

  useEffect(() => {
    if (!query.trim()) {
      dispatch(clearSearchResults())
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      dispatch(searchUsers(query.trim()))
    }, 500)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [dispatch, query])

  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 8</p>
        <h2>Search + Debounce + API</h2>
        <p className="hero-copy">Query cũng được đặt trong Redux, sau 500ms ngừng gõ mới gọi API để giảm số request.</p>
      </section>

      <Panel
        title="Tìm kiếm user"
        subtitle="Thử nhập em, mic, sophia hoặc username để thấy debounce hoạt động."
      >
        <div className="stack-gap">
          <input
            type="text"
            className="input"
            value={query}
            placeholder="Nhập từ khoá tìm kiếm..."
            onChange={(event) => dispatch(setSearchQuery(event.target.value))}
          />
          <SearchResults query={query} results={results} loading={loading} error={error} />
        </div>
      </Panel>
    </div>
  )
}

export default SearchDebouncePage
