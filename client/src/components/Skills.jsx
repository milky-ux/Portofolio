import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = [
  {
    num: '01', domain: 'web',
    name: 'Web — Frontend',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    num: '02', domain: 'web',
    name: 'Web — Backend',
    tags: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'REST API', 'PostgreSQL', 'MySQL'],
  },
  {
    num: '03', domain: 'mobile',
    name: 'Mobile',
    tags: ['Flutter', 'Dart', 'React Native', 'Kotlin', 'Android Studio', 'Firebase'],
  },
  {
    num: '04', domain: 'game',
    name: 'Game Dev',
    tags: ['Unity', 'C#', 'Godot', 'GDScript', 'Blender', 'Tilemaps', 'Physics 2D'],
  },
  {
    num: '05', domain: 'all',
    name: 'Tools & DevOps',
    tags: ['Git', 'GitHub', 'Docker', 'Linux', 'Vercel', 'Figma', 'Postman'],
  },
]

export default function Skills({ filter }) {
  // Re-run reveal setiap filter berubah
  useScrollReveal([filter])

  const visible = filter === 'all'
    ? categories
    : categories.filter(c => c.domain === filter || c.domain === 'all')

  return (
    <section id="skills">
      <div className="container">
        <div className="sec-label r">Keahlian</div>
        <div className="sec-title r s1">Tech<br />Stack</div>
        <div className="skills-outer">
          {visible.map((cat, i) => (
            <div className={`skill-cat r s${(i % 5) + 1}`} key={cat.name}>
              <div className="skill-cat-head">
                <span className="skill-cat-name">{cat.name}</span>
                <span className="skill-cat-num">{cat.num}</span>
              </div>
              <div className="skill-tags-row">
                {cat.tags.map(t => <span className="stag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}