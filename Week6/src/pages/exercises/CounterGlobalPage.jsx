import Panel from '../../components/common/Panel'
import CounterActions from '../../components/counter/CounterActions'
import CounterDisplay from '../../components/counter/CounterDisplay'

function CounterGlobalPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 1</p>
        <h2>Counter Global</h2>
        <p className="hero-copy">Một state `count` duy nhất trong Redux store, hai component đọc và cập nhật chung.</p>
      </section>

      <div className="two-column">
        <Panel title="Component A" subtitle="Chỉ có nhiệm vụ hiển thị count hiện tại.">
          <CounterDisplay />
        </Panel>
        <Panel title="Component B" subtitle="Chỉ thao tác tăng giảm thông qua action của Redux Toolkit.">
          <CounterActions />
        </Panel>
      </div>
    </div>
  )
}

export default CounterGlobalPage
