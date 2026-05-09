const items = [
  'React.js', 'Flutter', 'Unity', 'Next.js', 'Godot',
  'Node.js', 'React Native', 'C#', 'Laravel', 'Dart',
  'TypeScript', 'Firebase', 'Blender', 'PostgreSQL', 'GDScript',
]
const track = [...items, ...items]

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}