function Spinner({ label = 'Đang tải...' }) {
  return (
    <div className="spinner-wrap" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true"></span>
      <span>{label}</span>
    </div>
  )
}

export default Spinner
