import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArticleCard, CTA, ContactForm, IndustryCard, PageHero, ProcessTimeline, SectionHeading, ServiceCard } from './components'
import { articles, industries, services, team } from './data'

const meta = (title: string, description: string) => {
  document.title = `${title} | POLCEBLAZER LLC`
  const descriptionTag = document.querySelector('meta[name="description"]') ?? document.createElement('meta')
  descriptionTag.setAttribute('name', 'description')
  descriptionTag.setAttribute('content', description)
  document.head.appendChild(descriptionTag)
}

export default function Pages() {
  const path = window.location.pathname
  const slug = path.startsWith('/insights/') ? path.split('/')[2] : undefined
  if (path === '/') return <Home />
  if (path === '/services') return <Services />
  if (path === '/solutions') return <Solutions />
  if (path === '/industries') return <Industries />
  if (path === '/process') return <Process />
  if (path === '/teams') return <Teams />
  if (path === '/about') return <About />
  if (path === '/insights') return <Insights />
  if (path === '/contact') return <Contact />
  if (path === '/privacy') return <Legal title="Privacy Policy" />
  if (path === '/terms') return <Legal title="Terms of Use" />
  if (path.startsWith('/insights/') && slug) return <ArticleDetail slug={slug} />
  return <NotFound />
}

function Home() {
  meta('Engineering Better Business Systems', 'POLCEBLAZER LLC helps organizations align strategy, operating models, and technology to improve performance and scale with control.')
  const challenges = [
    ['01', 'Strategy is not reaching execution', 'Translate priorities into accountable workflows, decision rights, information, and systems that teams can use.'],
    ['02', 'Operating models are fragmented', 'Connect functions, locations, and platforms around a shared view of how value moves through the organization.'],
    ['03', 'Manual coordination is limiting capacity', 'Reduce avoidable handoffs while preserving the controls and judgment that the work requires.'],
    ['04', 'Leaders lack decision confidence', 'Create governed information and performance views that clarify what is happening and what to do next.'],
  ]
  return <>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">Operating strategy · technology execution</span><h1>Engineering better <em>business systems.</em></h1><p>We help leadership teams turn strategic intent into connected operating capabilities, clearer decisions, and technology the organization can sustain.</p><div className="hero-actions"><Link className="button button-dark" to="/contact">Start a Project <ArrowUpRight size={17} /></Link><Link className="button button-ghost" to="/services">Explore Our Services <ArrowDownRight size={17} /></Link></div></div><div className="hero-visual hero-real-image" aria-label="Leadership team working together around business systems"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90" alt="A leadership team collaborating around a table" /></div></div></section>
    <div className="capability-bar"><div className="container capability-list">{['Operating Model', 'ERP Strategy', 'Connected Operations', 'Technology Portfolio', 'Performance Data', 'Responsible Automation'].map(item => <span key={item}>{item}</span>)}</div></div>
    <section className="section"><div className="container"><SectionHeading eyebrow="The operating reality" title="Technology is an operating decision, not an isolated project." text="When systems, processes, and accountability are designed together, teams can make better decisions, manage risk, and execute the strategy with less friction." /><div className="challenge-grid">{challenges.map(([number, title, text]) => <article className="challenge" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="Capabilities" title="Connect strategic intent to operational capability." text="Our services help organizations make priorities executable across processes, information, technology, and the people responsible for results." /><div className="card-grid">{services.slice(0, 6).map(service => <ServiceCard key={service.title} service={service} />)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Where we help" title="Operating context changes the technology answer." /><div className="industry-grid">{industries.map(item => <IndustryCard key={item.title} item={item} />)}</div></div></section>
    <section className="section section-navy"><div className="container split-section"><div><SectionHeading eyebrow="Why Polceblazer" title="A bridge between strategy, operations, and technology." text="Good technology is not measured by novelty. It is measured by whether the organization can make decisions, coordinate work, manage risk, and improve performance more effectively." /></div><div className="check-list">{['Business-led prioritization', 'End-to-end operating perspective', 'Scalable organizational capability', 'Clear ownership and governance', 'Risk-aware implementation', 'Transferable knowledge and documentation'].map(item => <div key={item}><Check size={18} />{item}</div>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="A clear path forward" title="From strategic question to operating capability." /><ProcessTimeline /></div></section>
    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="Example Solutions" title="What strategic alignment can look like." text="Illustrative capability examples, not real customer case studies." /><div className="outcome-grid">{['Connected ERP and warehouse operating model', 'Modernized a legacy order-to-cash capability', 'Created executive performance and risk dashboards'].map((item, i) => <div className="outcome" key={item}><span>0{i + 1}</span><h3>{item}</h3><ArrowUpRight size={20} /></div>)}</div></div></section>
    <CTA />
  </>
}

function Services() {
  meta('Services', 'Strategic technology services for operating model design, ERP, integration, cloud, data, automation, and sustainable execution.')
  return <><PageHero eyebrow="Capabilities" title="Make the strategy executable." text="We connect leadership priorities to the processes, information, platforms, and organizational practices required to deliver them." /><section className="section"><div className="container service-detail-list">{services.map(service => <article className="service-detail" id={service.title.toLowerCase().replaceAll(' ', '-')} key={service.title}><div className="service-detail-head"><div className="card-icon"><span className="service-icon">{service.icon.slice(0, 2).toUpperCase()}</span></div><div><span className="eyebrow">Capability</span><h2>{service.title}</h2><p>{service.description}</p></div></div><ul>{service.bullets.map(bullet => <li key={bullet}><Check size={17} />{bullet}</li>)}</ul><Link className="text-link" to="/contact">Start a Project <ArrowUpRight size={16} /></Link></article>)}</div></section><CTA /></>
}

const solutionData = [
  ['Digital transformation', 'Strategic priorities are not translating consistently into operating behavior.', 'Establish the current state, target capabilities, decision rights, investment logic, and a sequenced transformation portfolio.', 'A more coherent link between strategy, funding, execution, and accountability.', 'Technology Strategy, Custom Software, Data'],
  ['Legacy modernization', 'Critical systems contain institutional knowledge but limit change, resilience, and visibility.', 'Protect continuity while modernizing the highest-value capabilities in deliberate increments.', 'Reduced dependency risk and a stronger platform for organizational change.', 'Custom Software, Cloud and DevOps'],
  ['Connected operations', 'Functions and sites optimize locally while information and accountability break between them.', 'Connect the systems, data definitions, and workflows that move value across the enterprise.', 'More coordinated execution and fewer blind spots between teams.', 'Systems Integration, ERP Solutions'],
  ['Operational automation', 'Coordination effort is consuming capacity that should be available for judgment and improvement.', 'Redesign the workflow first, then automate repeatable work with clear exception ownership.', 'More consistent throughput without removing human accountability.', 'AI and Automation, Integration'],
  ['ERP optimization', 'The ERP investment is not producing consistent adoption, management insight, or process discipline.', 'Align process ownership, configuration, data governance, and adoption around the operating model.', 'A more useful management system and clearer accountability for improvement.', 'ERP Solutions, Data'],
  ['Data visibility', 'Leaders debate the numbers because definitions, ownership, and reporting logic differ.', 'Create governed performance information tied to decisions, operating rhythms, and risk management.', 'Greater confidence in where performance is moving and why.', 'Data and Business Intelligence, Integration'],
  ['Technology strategy', 'Technology choices are urgent but disconnected from enterprise priorities and risk appetite.', 'Shape an actionable portfolio across architecture, investment, capabilities, controls, and delivery.', 'Better sequencing and more disciplined technology decisions.', 'Strategy, all capabilities'],
]

function Solutions() {
  meta('Solutions', 'Strategic business outcomes supported by operating model design, technology portfolio planning, engineering, integration, and automation.')
  return <><PageHero eyebrow="Outcomes" title="Start with the business system, not the software category." text="The right technical solution begins with a clear view of the operating model, the constraint, the decision that matters, and the capability the organization needs next." /><section className="section"><div className="container solution-list">{solutionData.map(([title, challenge, approach, benefit, related], index) => <article className="solution-card" key={title}><span className="solution-number">0{index + 1}</span><div><h2>{title}</h2><div className="solution-columns"><div><b>The challenge</b><p>{challenge}</p></div><div><b>The approach</b><p>{approach}</p></div><div><b>Potential benefits</b><p>{benefit}</p></div></div><small>Related services: {related}</small></div></article>)}</div></section><CTA title="Turn a strategic priority into an executable next step." text="Tell us which capability, decision, or operating constraint needs attention. We will help frame a practical path forward." /></>
}

function Industries() {
  meta('Industries', 'Industrial and organizational technology perspectives for automotive, retail, logistics, manufacturing, professional services, and financial services.')
  return <><PageHero eyebrow="Industries" title="Context changes the operating model." text="We learn how value is created, controlled, and measured in your environment before recommending how technology should change it." /><section className="section"><div className="container industry-detail-grid">{industries.map((industry, index) => <article className="industry-detail" key={industry.title}><span className="industry-number">0{index + 1}</span><h2>{industry.title}</h2><p>{industry.description}</p><ul>{['Operating model and workflow alignment', 'Systems and information integration', 'Performance and management visibility', 'Practical modernization roadmap'].map(item => <li key={item}><Check size={16} />{item}</li>)}</ul></article>)}</div><p className="container disclaimer">Specific services depend on project requirements, applicable regulations, organizational context, and technical assessment. Industry examples describe areas we can explore, not guaranteed outcomes.</p></section><CTA /></>
}

function Process() {
  meta('Our Process', 'A six-step operating and technology delivery process for aligning priorities, designing capabilities, launching change, and improving performance.')
  return <><PageHero eyebrow="Our process" title="Change needs an operating rhythm." text="We give complex work enough structure to make decisions visible, ownership clear, and progress measurable, while leaving room for the realities of the organization." /><section className="section"><div className="container"><ProcessTimeline /></div></section><CTA title="Create a more deliberate path from priority to performance." /></>
}

function About() {
  meta('About', 'POLCEBLAZER LLC helps organizations align strategy, operating models, and technology to build sustainable digital capability.')
  return <><PageHero eyebrow="About Polceblazer" title="Practical strategy. Disciplined execution." text="POLCEBLAZER LLC is a software engineering and technology consulting company focused on helping organizations improve how work is designed, coordinated, measured, and supported by technology." /><section className="section"><div className="container about-grid"><div><SectionHeading eyebrow="Mission" title="Make complex business change more executable." text="We solve complex business problems by connecting strategic intent to practical operating design, thoughtful system architecture, and dependable technology delivery." /><SectionHeading eyebrow="Vision" title="Build sustainable digital capability, not dependency." text="We aim to become a trusted partner for organizations modernizing operations, connecting critical systems, and strengthening the capabilities required to keep improving after delivery." /></div><div className="values-panel"><span className="eyebrow">Core values</span>{['Integrity in decisions', 'Quality in execution', 'Practicality over theater', 'Partnership with owners', 'Continuous improvement', 'Security and stewardship'].map(value => <div key={value}><Check size={18} />{value}</div>)}</div></div></section><CTA /></>
}

function Teams() {
  meta('Teams', 'Meet the POLCEBLAZER LLC team working across strategy, operations, technology, data, and delivery.')
  const leadership = team.filter(member => member.leadership)
  const deliveryTeam = team.filter(member => !member.leadership)
  const renderMember = (member: typeof team[number]) => <article className="team-card" key={member.name}><div className="team-avatar" aria-hidden="true">{member.name.split(' ').map(part => part[0]).join('')}</div><div className="team-card-body"><span className="eyebrow">{member.focus}</span><h3>{member.name}</h3><strong>{member.role}</strong><p>{member.bio}</p></div></article>
  return <><PageHero eyebrow="Our team" title="The people behind the operating perspective." text="We bring strategy, operations, engineering, data, and delivery together so the work stays connected from the first question to the capabilities that endure." /><section className="section"><div className="container"><SectionHeading eyebrow="Leadership" title="Experienced enough to see the whole system." text="Our leadership team helps frame the right problem, make tradeoffs visible, and keep technology connected to the way the organization creates value." /><div className="team-grid team-grid-leadership">{leadership.map(renderMember)}</div></div></section><section className="section section-soft"><div className="container"><SectionHeading eyebrow="The wider team" title="Different disciplines. One accountable way of working." text="Our consultants and engineers work across the boundaries where business change tends to stall: process, information, platforms, adoption, and delivery." /><div className="team-grid">{deliveryTeam.map(renderMember)}</div></div></section><CTA title="Bring the right people into your next decision." text="Tell us where strategy, operations, or technology needs to come together. We will help you find a practical place to begin." /></>
}

function Insights() {
  const [query, setQuery] = useState('')
  const filtered = articles.filter(article => `${article.title} ${article.category} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase()))
  meta('Insights', 'Educational sample content on operating models, ERP, technology strategy, integration, modernization, data governance, and organizational capability.')
  return <><PageHero eyebrow="Insights" title="Useful thinking for better organizations." text="Educational sample content for leaders navigating operating model change, technology investment, performance, and organizational capability." /><section className="section"><div className="container"><div className="search-field"><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search insights" aria-label="Search insights" /></div><div className="article-grid">{filtered.map(article => <ArticleCard key={article.slug} article={article} />)}</div>{filtered.length === 0 && <p className="empty-state">No insights match that search.</p>}</div></section></>
}

function ArticleDetail({ slug }: { slug: string }) {
  const article = articles.find(item => item.slug === slug)
  if (!article) return <NotFound />
  meta(article.title, article.excerpt)
  return <><PageHero eyebrow={`Educational sample · ${article.category}`} title={article.title} text={article.excerpt} /><article className="article-body container"><p className="article-meta">{article.date} <span>•</span> {article.readTime}</p><p>{article.excerpt}</p>{article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p></section>)}</article><CTA /></>
}

function Contact() {
  meta('Start a Project', 'Tell POLCEBLAZER LLC about the strategic priority, operating constraint, or technology capability you want to address.')
  return <><PageHero eyebrow="Start a project" title="Let’s make the next strategic step useful." text="Tell us about the business priority, current operating model, systems, and desired outcome. POLCEBLAZER LLC will review your information and follow up about possible next steps." /><section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="A practical beginning" title="Bring us the decision behind the project." text="You do not need a finished brief. A useful first conversation can start with the performance gap, organizational constraint, or strategic priority that needs a more executable path." /><div className="contact-placeholders"><span>Business email</span>hello@polceblazerllc.xyz<span>Business phone</span>1-512-474-1990<span>Service area</span>Austin, TX</div></div><ContactForm /></div></section></>
}

function Legal({ title }: { title: string }) {
  meta(title, `${title} template for POLCEBLAZER LLC.`)
  return <><PageHero eyebrow="Legal template" title={title} text="This starter template should be reviewed and completed with qualified legal advice before publication." /><section className="section legal"><div className="container"><h2>Overview</h2><p>This page is a plain-language placeholder for the policies that govern use of the POLCEBLAZER LLC website. Replace this content with reviewed legal terms before launch.</p><h2>Information and communication</h2><p>The website does not currently transmit or permanently store contact form submissions. Any future integration should document what information is collected, why it is collected, how it is protected, and how long it is retained.</p><h2>Legal review required</h2><p>Confirm applicable privacy, accessibility, cookies, communications, and jurisdiction requirements for your business and service area.</p></div></section></>
}

export function NotFound() {
  meta('Page Not Found', 'The page you are looking for could not be found.')
  return <section className="not-found"><div className="container"><span className="eyebrow">404</span><h1>That page moved on.</h1><p>Let’s get you back to the useful parts of the site.</p><Link className="button button-dark" to="/">Back to home <ArrowUpRight size={17} /></Link></div></section>
}
