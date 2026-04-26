
'use client'
import { useState } from 'react'
import { tours, categories, Tour } from '@/data/tours'
import TourCard from './TourCard'
import styles from './TourFilters.module.css'

export default function TourFilters() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? tours : tours.filter(t => t.category === active)

  return (
    <div>
      <div className={styles.filters} role="tablist" aria-label="Filter tours by category">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`${styles.filter} ${active === cat ? styles.active : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <p className={styles.count}>{filtered.length} packages found</p>
      <div className={styles.grid}>
        {filtered.map((tour, i) => (
          <TourCard key={tour.id} tour={tour} index={i} />
        ))}
      </div>
    </div>
  )
}
