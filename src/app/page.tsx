export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12">
      {/* HERO */}
      <header className="pt-24 pb-16 border-b-[3px] border-black">
        <h1 className="text-[clamp(1.75rem,5.2vw,3.75rem)] font-black uppercase tracking-tight leading-none flex items-center gap-2 sm:gap-4 flex-nowrap whitespace-nowrap">
          <span>Cristian Vargas</span>
          <span className="bg-[var(--color-neon-yellow)] border-2 md:border-[3px] border-black px-2 sm:px-2.5 py-0.5 text-[0.45em] shadow-[3px_3px_0px_#000] shrink-0">
            .NET
          </span>
        </h1>

        <div className="mt-8 border-l-4 border-black pl-4">
          <div className="font-extrabold text-base md:text-lg uppercase tracking-wider text-black">
            Backend &amp; Distributed Systems
          </div>
          <p className="text-base md:text-lg font-normal max-w-xl leading-relaxed text-gray-600 mt-2">
            Building production-ready distributed systems, scalable APIs with Clean Architecture, and cloud-native workflows on Azure.
          </p>
        </div>

        <p className="text-sm font-normal text-gray-400 mt-6">
          Santo Domingo, D.R.
        </p>
      </header>

      {/* PROJECTS */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-[4px] text-gray-400 border-b-[3px] border-black pt-12 pb-3">Projects</h2>

        <div className="py-7 border-b border-gray-200">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[2px] text-gray-300 mb-1">Performance &middot; Benchmarking</div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">Velox API</h3>
          <p className="text-[0.95rem] font-normal max-w-xl leading-relaxed text-gray-500">A performance-focused sandbox built to explore and benchmark Web API micro-optimizations in .NET 9. Evaluates advanced caching and efficient serialization techniques, load-tested against different data stores to measure maximum throughput and system latency under heavy traffic.</p>
          <div className="flex gap-2 flex-wrap mt-3">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">.NET 9</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">ASP.NET Core</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">k6</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">EF Core 9</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">SQL Server</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">Docker</span>
          </div>
          <a href="https://github.com/CVrgas/VeloxApi" target="_blank" rel="noopener noreferrer" className="font-semibold text-sm border-b-2 border-black inline-block mt-3 hover:bg-[var(--color-neon-yellow)] px-1 transition-colors">Source Code &rarr;</a>
        </div>

        <div className="py-7">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[2px] text-gray-300 mb-1">Modular Monolith &middot; DDD</div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">Distributed Commerce API</h3>
          <p className="text-[0.95rem] font-normal max-w-xl leading-relaxed text-gray-500">Production-grade backend simulating a high-concurrency ordering platform. Unit of Work for transactional consistency, Redis for idempotency, MediatR for CQRS, and a shift-left testing strategy with xUnit &amp; Testcontainers.</p>
          <div className="flex gap-2 flex-wrap mt-3">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">.NET 8</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">Clean Architecture</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">Redis</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">SQL Server</span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[1px] text-gray-400">Docker</span>
          </div>
          <a href="https://github.com/CVrgas/CommerceBack" target="_blank" rel="noopener noreferrer" className="font-semibold text-sm border-b-2 border-black inline-block mt-3 hover:bg-[var(--color-neon-yellow)] px-1 transition-colors">Source Code &rarr;</a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-[4px] text-gray-400 border-b-[3px] border-black pt-12 pb-3">Experience</h2>

        <div className="py-5 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50 transition-colors">
          <div>
            <h3 className="text-lg font-bold">Software Engineer</h3>
            <p className="text-[0.95rem] font-normal text-gray-500 mt-0.5">Belkoro Business Group &middot; Santo Domingo, D.R.</p>
          </div>
          <div className="mt-2 md:mt-0 text-sm font-semibold text-gray-400 tracking-wide">
            Sep 2023 &mdash; Present
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-[4px] text-gray-400 border-b-[3px] border-black pt-12 pb-3">Education</h2>

        <div className="py-5 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-bold">B.S. Software Engineering</h3>
            <p className="text-[0.95rem] font-normal text-gray-500 mt-0.5">Universidad del Caribe (UNICARIBE)</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-[3px] border-black py-10 flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="text-sm font-normal text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Cristian Vargas</p>
        <div className="flex gap-6 text-sm">
          <a href="https://github.com/CVrgas" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bg-[var(--color-neon-yellow)] px-2 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/cristian-vargas-alarcon" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bg-[var(--color-neon-cyan)] px-2 transition-colors">LinkedIn</a>
          <a href="mailto:vargasalarconcr@gmail.com" className="font-semibold hover:bg-[var(--color-neon-magenta)] px-2 transition-colors">Email</a>
        </div>
      </footer>
    </div>
  );
}
