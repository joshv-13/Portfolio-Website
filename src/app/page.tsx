import Hero from './components/Hero'
import Projects from './components/Projects'
import RecentPosts from './components/RecentPosts'
import Biography from './components/Biography'

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Hero />

      <main>

        {/* =========================
            INTERVIEWS SECTION
        ========================== */}
        <section className="section-projects" style={{ marginTop: '6rem' }}>
          <div className="container">
            <Projects/>
          </div>
        </section>

        {/* =========================
            RECENT POSTS
        ========================== 
        <section className="section-posts" style={{ marginTop: '7rem' }}>
          <div className="container">
            <RecentPosts />
          </div>
        </section>
        */}

        {/* =========================
            Biography
        ========================== */}
        <section className="section-biography" style={{ marginTop: '7rem' }}>
          <div className="container">
            <Biography />
          </div>
        </section>

      </main>

    </>
  )
}

