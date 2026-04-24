import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Panel from '../../components/common/Panel'
import Spinner from '../../components/common/Spinner'
import UserList from '../../components/users/UserList'
import {
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from '../../features/users/selector'
import { fetchUsers } from '../../features/users/slice/usersSlice'

function FetchUsersPage() {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const loading = useSelector(selectUsersLoading)
  const error = useSelector(selectUsersError)

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, [dispatch, users.length])

  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 7</p>
        <h2>Fetch Users</h2>
        <p className="hero-copy">State global cho async gồm `data`, `loading`, `error` và UI phản ánh đủ 3 trạng thái.</p>
      </section>

      <Panel
        title="Danh sách users từ API"
        subtitle="Dữ liệu lấy từ DummyJSON và lưu trong Redux store."
        actions={
          <button type="button" className="btn btn-secondary" onClick={() => dispatch(fetchUsers())}>
            Tải lại
          </button>
        }
      >
        {loading ? <Spinner label="Đang tải user..." /> : null}
        {error ? <p className="error-text">{error}</p> : null}
        {!loading && !error ? <UserList users={users} /> : null}
      </Panel>
    </div>
  )
}

export default FetchUsersPage
