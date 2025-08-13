export default function Website() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-600 grid place-items-center text-white font-bold">CX</div>
            <div className="font-semibold tracking-tight">CX Stacks</div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#layers" className="hover:text-slate-600">Layers</a>
            <a href="#offerings" className="hover:text-slate-600">Offerings</a>
            <a href="#process" className="hover:text-slate-600">Process</a>
            <a href="#proof" className="hover:text-slate-600">Proof</a>
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800">Book a Call</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
          <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Build a CX engine that scales — one layer at a time.</h1>
            <p className="mt-6 text-lg md:text-xl text-slate-200">We design, staff, instrument, and tune modern Customer Experience orgs for high‑growth startups. Faster time‑to‑value, lower support cost per ticket, and happier customers.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#layers" className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-slate-100">Explore the 4 Layers</a>
              <a href="#contact" className="rounded-xl ring-1 ring-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Get a Free CX Layer Audit</a>
            </div>
            <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div><dt className="text-slate-300">Avg. CSAT Lift</dt><dd className="text-2xl font-bold">+6–12 pts</dd></div>
              <div><dt className="text-slate-300">Self‑Serve Resolution</dt><dd className="text-2xl font-bold">30–60%</dd></div>
              <div><dt className="text-slate-300">Cost / Ticket</dt><dd className="text-2xl font-bold">↓ 15–35%</dd></div>
              <div><dt className="text-slate-300">Time to Value</dt><dd className="text-2xl font-bold">≤ 30 days</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Layers */}
      <section id="layers" className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The 4 Layers of a High‑Performing CX Team</h2>
          <p className="mt-4 text-slate-600">We call it the Stack. Each layer compounds value; together they deliver durable customer love and efficient growth.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Strategy */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="text-xs font-semibold text-slate-500">Layer 1</div>
            <h3 className="mt-2 text-xl font-semibold">Strategy</h3>
            <p className="mt-2 text-sm text-slate-600">Vision, operating model, KPIs, governance. Define outcomes, align incentives, and choose the right service model for your stage.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>North Star metrics & OKRs</li>
              <li>Capacity & channel mix planning</li>
              <li>Policy & quality framework</li>
            </ul>
          </div>
          {/* Staffing */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="text-xs font-semibold text-slate-500">Layer 2</div>
            <h3 className="mt-2 text-xl font-semibold">Staffing</h3>
            <p className="mt-2 text-sm text-slate-600">Org design, hiring profiles, playbooks, and vendor strategy. Build a scalable bench without losing quality.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Org & leveling frameworks</li>
              <li>WFM & outsourcing strategy</li>
              <li>QA, coaching & enablement</li>
            </ul>
          </div>
          {/* Technology */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="text-xs font-semibold text-slate-500">Layer 3</div>
            <h3 className="mt-2 text-xl font-semibold">Technology</h3>
            <p className="mt-2 text-sm text-slate-600">Modern tooling that plays well together: CRM, help desk, AI assistant, knowledge, telephony, data. Ship automation that customers love.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>System architecture & RFPs</li>
              <li>AI chatbot & workflow design</li>
              <li>Knowledge & deflection strategy</li>
            </ul>
          </div>
          {/* Insights */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="text-xs font-semibold text-slate-500">Layer 4</div>
            <h3 className="mt-2 text-xl font-semibold">Insights</h3>
            <p className="mt-2 text-sm text-slate-600">Turn conversations into product change. Close the loop with executives and ship what matters.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>VOC program & taxonomy</li>
              <li>Ticket & churn analytics</li>
              <li>Executive reporting & loops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Advisory & Delivery</h2>
            <p className="mt-4 text-slate-600">Engagements designed for speed, clarity, and measurable outcomes.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Package 1 */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">30 Days</div>
              <h3 className="mt-2 text-xl font-semibold">Foundation Sprint</h3>
              <p className="mt-2 text-sm text-slate-600">Rapid assessment across all four layers with a prioritized 90‑day roadmap.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Onsite/remote discovery</li>
                <li>Metric baseline + target model</li>
                <li>Quick‑win automations</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">Get the Sprint Guide</a>
            </div>
            {/* Package 2 */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">90 Days</div>
              <h3 className="mt-2 text-xl font-semibold">Scale‑Up Build</h3>
              <p className="mt-2 text-sm text-slate-600">Implement org, tooling, and analytics; hire and enable your team.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Help desk & AI assistant rollout</li>
                <li>WFM, QA, & playbooks live</li>
                <li>VOC dashboards & loops</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">Request a Sample Plan</a>
            </div>
            {/* Package 3 */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">Quarterly</div>
              <h3 className="mt-2 text-xl font-semibold">Fractional CX Leader</h3>
              <p className="mt-2 text-sm text-slate-600">Hands‑on leadership to steer KPIs, budgets, and roadmap with your exec team.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Weekly exec syncs</li>
                <li>Vendor & budget ownership</li>
                <li>Hiring & coaching pipeline</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">Check Availability</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How We Work</h2>
          <p className="mt-4 text-slate-600">Simple, transparent, outcome‑driven.</p>
        </div>
        <ol className="mt-10 grid md:grid-cols-4 gap-6">
          {[
            {title: 'Assess', desc: 'Baseline metrics, map the stack, and surface constraints.'},
            {title: 'Align', desc: 'Co‑create targets, budgets, and resourcing.'},
            {title: 'Activate', desc: 'Ship playbooks, automation, and reporting.'},
            {title: 'Advance', desc: 'Quarterly planning, reviews, and continuous improvement.'},
          ].map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <div className="text-xs font-semibold text-slate-500">Step {i+1}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Proof */}
      <section id="proof" className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Results</h2>
            <p className="mt-4 text-slate-600">Outcomes from recent builds across fintech, marketplaces, and SaaS.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {kpi: 'CSAT 84 → 92', note: 'Rebuilt QA & coaching; launched deflection flows.'},
              {kpi: 'AHT −22%', note: 'Workflow automation + knowledge revamp.'},
              {kpi: 'Ticket Rate −31%', note: 'Proactive comms and in‑product help.'},
            ].map((c) => (
              <div key={c.kpi} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-2xl font-bold">{c.kpi}</div>
                <p className="mt-2 text-sm text-slate-600">{c.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Case Study Template</h3>
            <p className="mt-2 text-sm text-slate-600">Problem → Approach → Stack → Outcome → Lessons → Next.</p>
            <ul className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-slate-700 list-disc list-inside">
              <li><span className="font-semibold">Problem:</span> What hurt and why it mattered.</li>
              <li><span className="font-semibold">Approach:</span> What we changed, in what order.</li>
              <li><span className="font-semibold">Stack:</span> Org, tools, and data we put in place.</li>
              <li><span className="font-semibold">Outcome:</span> Before/after metrics with dates.</li>
              <li><span className="font-semibold">Lessons:</span> What we’d repeat or skip.</li>
              <li><span className="font-semibold">Next:</span> Phase 2 opportunities.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Led by operators, not theorists</h2>
            <p className="mt-4 text-slate-600">We’ve built and led CX & Support orgs for high‑growth startups — scaling teams, implementing tooling, and owning outcomes. We slot in as builder, advisor, or fractional leader, depending on what you need now.</p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {[
                {title: '20+ years building CX', desc: 'From seed to post‑IPO across multiple industries.'},
                {title: 'Hands‑on delivery', desc: 'We ship playbooks, automations, and dashboards.'},
                {title: 'Operator network', desc: 'Senior specialists we trust for niche work.'},
                {title: 'NYC‑based, remote‑friendly', desc: 'Onsite when it counts, async by default.'},
              ].map((b) => (
                <div key={b.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                  <div className="font-semibold">{b.title}</div>
                  <div className="mt-2 text-sm text-slate-600">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold">The CX Layer Audit Checklist</h3>
            <p className="mt-2 text-sm text-slate-600">A 2‑page worksheet to score your team across Strategy, Staffing, Technology, and Insights — and pick the fastest wins.</p>
            <a href="#contact" className="mt-4 inline-flex rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">Get the Checklist</a>
            <p className="mt-4 text-xs text-slate-500">We’ll email a copy after our intro call.</p>
          </aside>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s talk</h2>
            <p className="mt-4 text-slate-600">Tell us about your goals, and we’ll share where the fastest ROI sits in your stack.</p>
          </div>
          <form className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Name</label>
              <input className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Work Email</label>
              <input className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="name@company.com" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm">Company</label>
              <input className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Company name" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm">What are you trying to improve?</label>
              <textarea rows={5} className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="e.g., reduce ticket volume, increase self‑serve, implement AI assistant, raise CSAT..." />
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center gap-4">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4" /> Send me the CX Layer Audit Checklist
              </label>
              <button type="button" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold">Book Intro Call</button>
            </div>
            <p className="md:col-span-2 text-xs text-slate-500">By submitting, you agree to be contacted about your request. We won’t spam you or share your info.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-slate-900 grid place-items-center text-white text-xs font-bold">CX</div>
            <span>© {new Date().getFullYear()} CX Stacks</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800">Privacy</a>
            <a href="#" className="hover:text-slate-800">Terms</a>
            <a href="#contact" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
