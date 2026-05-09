const domains = [
  { id: 'all',    label: 'Semua' },
  { id: 'web',    label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'game',   label: 'Game Dev' },
]

export default function DomainFilter({ active, onChange }) {
  return (
    <div className="domain-filter r">
      {domains.map(d => (
        <button
          key={d.id}
          className={`df-btn${active === d.id ? ' active' : ''}`}
          onClick={() => onChange(d.id)}
        >
          {d.label}
        </button>
      ))}
    </div>
  )
}
