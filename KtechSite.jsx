const R = window.React;
const {
  Logo, Button, IconButton, Icon, Badge, Card, Tag, Tabs, Switch,
  Input, Select, Checkbox, Radio, Dialog, Toast,
  SectionHeading, ServiceCard, StatBlock, AccreditationStrip,
} = window.KtechDesignSystem_6974e7;

const BASE = ".";
const MobileCtx = R.createContext(false);
const useM = () => R.useContext(MobileCtx);

const NAV = [
  { id: "home", label: "Home" },
  { id: "security", label: "Security Services" },
  { id: "property", label: "Property Services" },
  { id: "reconeyez", label: "Reconeyez" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact Us" },
];

/* ---------- chrome ---------- */

function TopBar() {
  const m = useM();
  if (m) {
    return (
      <div style={{ background: "var(--surface-brand-deep)", color: "var(--text-inverse-muted)" }}>
        <div style={{ padding: "0 var(--space-4)", height: 34, display: "flex", alignItems: "center", justifyContent: "space-between", font: "var(--type-caption)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon name="map-pin" size={13} color="var(--cyan-400)" />Tallaght, Dublin 24</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 600 }}><Icon name="clock" size={13} color="var(--cyan-400)" />24/7</span>
        </div>
      </div>
    );
  }
  return (
    <div style={{ background: "var(--surface-brand-deep)", color: "var(--text-inverse-muted)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--space-6)", height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", font: "var(--type-body-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="map-pin" size={14} color="var(--cyan-400)" />7 First Avenue, Cookstown Industrial Estate, Tallaght, Dublin 24</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="mail" size={14} color="var(--cyan-400)" />admin@ktech.ie</span>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 600 }}>
          <Icon name="clock" size={14} color="var(--cyan-400)" />Nationwide · 24/7
        </span>
      </div>
    </div>
  );
}

function Header({ route, onNavigate }) {
  const m = useM();
  const [open, setOpen] = R.useState(false);
  const go = (id) => { setOpen(false); onNavigate(id); };

  if (m) {
    return (
      <header style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--surface-page)", boxShadow: "var(--shadow-header)" }}>
        <TopBar />
        <div style={{ padding: "0 var(--space-4)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ border: 0, display: "flex" }}>
            <Logo height={32} basePath={BASE} />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <IconButton icon="phone-call" label="Call the office" variant="outline" />
            <IconButton icon={open ? "x" : "menu"} label="Menu" variant="outline" onClick={() => setOpen(!open)} />
          </div>
        </div>
        {open ? (
          <nav style={{ borderTop: "1px solid var(--border-hairline)", display: "flex", flexDirection: "column", background: "var(--surface-page)" }}>
            {NAV.map((n) => (
              <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }}
                style={{
                  border: 0, borderBottom: "1px solid var(--border-hairline)",
                  borderLeft: `var(--rule-width) solid ${route === n.id ? "var(--rule-accent)" : "transparent"}`,
                  padding: "14px var(--space-4)", minHeight: 48, display: "flex", alignItems: "center",
                  font: "var(--type-label)", fontSize: 15,
                  color: route === n.id ? "var(--text-heading)" : "var(--text-body)",
                }}>{n.label}</a>
            ))}
          </nav>
        ) : null}
      </header>
    );
  }

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--surface-page)", boxShadow: "var(--shadow-header)" }}>
      <TopBar />
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--space-6)", height: 84, display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ border: 0, display: "flex" }}>
          <Logo height={42} basePath={BASE} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", marginLeft: "auto" }}>
          {NAV.map((n) => {
            const on = route === n.id;
            return (
              <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }}
                style={{
                  border: 0, borderBottom: `var(--rule-width) solid ${on ? "var(--rule-accent)" : "transparent"}`,
                  padding: "6px 0", font: "var(--type-label)", fontSize: 15, whiteSpace: "nowrap",
                  color: on ? "var(--text-heading)" : "var(--text-body)",
                }}>{n.label}</a>
            );
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <Button variant="secondary" iconLeft={<Icon name="phone-call" size={16} />} href="#">01 437 0570</Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ onNavigate }) {
  const m = useM();
  const col = (title, items) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--cyan-400)" }}>{title}</span>
      {items.map((i) => (
        <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{ border: 0, font: "var(--type-body-sm)", color: "#c9cbd6" }}>{i}</a>
      ))}
    </div>
  );
  return (
    <footer style={{ background: "var(--surface-ink)", color: "var(--text-inverse)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: m ? "var(--space-10) var(--space-4) var(--space-6)" : "var(--space-16) var(--space-6) var(--space-8)", display: "grid", gridTemplateColumns: m ? "1fr" : "1.4fr 1fr 1fr 1fr", gap: m ? "var(--space-8)" : "var(--space-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <Logo variant="white" height={40} basePath={BASE} />
          <p style={{ font: "var(--type-body-sm)", color: "#b6b8c2", maxWidth: 300 }}>
            Established nearly 40 years ago in Dublin. One of the first companies licensed by the Private Security Authority.
          </p>
          <span style={{ font: "var(--type-body-sm)", fontFamily: "var(--font-mono)", color: "var(--cyan-400)" }}>PSA Licence 00041</span>
        </div>
        {col("Security", ["Uniformed Security Services", "Electronic Security Systems", "Construction Security", "Reconeyez", "Locksmith Solutions"])}
        {col("Property", ["Property Maintenance", "Vacant Property Inspections", "Keyholding", "Power Washing", "Waste Clearance"])}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--cyan-400)" }}>Contact</span>
          <span style={{ font: "var(--type-body-sm)", color: "#c9cbd6" }}>7 First Avenue,<br />Cookstown Industrial Estate,<br />Tallaght, Dublin 24, D24 F20X</span>
          <span style={{ font: "var(--type-body-sm)", color: "#c9cbd6" }}>+353 (0)1 437 0570</span>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("contact"); }} style={{ border: 0, font: "var(--type-label)", color: "var(--white)", display: "inline-flex", gap: 6, alignItems: "center" }}>Request a survey <Icon name="arrow-right" size={15} /></a>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: m ? "var(--space-4)" : "var(--space-5) var(--space-6)", display: "flex", flexDirection: m ? "column" : "row", gap: m ? "var(--space-2)" : 0, justifyContent: "space-between", font: "var(--type-caption)", color: "#8f919c" }}>
          <span>© 2026 K-Tech Security UC. All rights reserved.</span>
          <span style={{ display: "flex", gap: "var(--space-6)" }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ border: 0, color: "#8f919c" }}>Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ border: 0, color: "#8f919c" }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function Section({ children, tone = "light", tight = false, style }) {
  const m = useM();
  const bg = { light: "var(--surface-page)", subtle: "var(--surface-subtle)", brand: "var(--surface-brand)", ink: "var(--surface-ink)" }[tone];
  return (
    <section style={{ background: bg, padding: m ? `var(--space-10) var(--space-4)` : `${tight ? "var(--section-y-tight)" : "var(--section-y)"} var(--space-6)`, ...style }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

/* ---------- shared blocks ---------- */

const DIVISIONS = [
  { icon: "shield-check", title: "Uniformed Security Services", description: "Trained, licensed personnel for static guarding, mobile patrols, vacant property inspections, keyholding and alarm response.", bullets: ["Static guarding", "Mobile patrol fleet", "Keyholding & alarm response"] },
  { icon: "cctv", title: "Electronic Security Systems", description: "Design, installation and maintenance of CCTV, intruder alarms and access control by our own specialist engineers.", bullets: ["CCTV", "Intruder alarms", "Access control"] },
  { icon: "satellite-dish", title: "Reconeyez Distribution", description: "Ireland's distributor and installer of Reconeyez — solar and battery powered remote CCTV, managed from your phone.", bullets: ["Solar powered", "No mains or cabling", "Mobile app"] },
  { icon: "hard-hat", title: "Construction Security", description: "Packages built around the site programme to stop theft, vandalism and unauthorised access from first fix to handover.", bullets: ["Site guarding", "Remote surveillance", "Plant protection"] },
  { icon: "key-round", title: "Locksmith Solutions", description: "Commercial locksmithing: lockout response, lock changes between tenants, master key suites and break-in repairs.", bullets: ["Lockout response", "Master key systems", "Break-in repairs"] },
  { icon: "wrench", title: "Property Maintenance", description: "Certified, insured tradespeople — electricians, plumbers, carpenters, roofers, painters and landscapers.", bullets: ["General & reactive works", "Landscaping & clearance", "Power washing"] },
];

const SECURITY = [
  { icon: "shield-check", title: "Static Guarding", description: "Uniformed, PSA-licensed officers on site, with documented patrol reporting." },
  { icon: "car", title: "Mobile Patrols", description: "Marked patrol vehicles on scheduled and random visits, nationwide." },
  { icon: "siren", title: "Alarm Response", description: "Keyholding and emergency response to intruder, fire and panic activations." },
  { icon: "cctv", title: "CCTV Systems", description: "Design, installation and maintenance of camera systems by our own engineers." },
  { icon: "fingerprint", title: "Access Control", description: "Door entry, fobs, readers and permission management for multi-tenant buildings." },
  { icon: "key-round", title: "Locksmith Solutions", description: "Lockouts, lock changes, master key suites and post break-in repairs." },
];

const PROPERTY = [
  { icon: "clipboard-check", title: "Vacant Property Inspections", description: "Weekly, fortnightly or monthly inspections with photographic reporting." },
  { icon: "wrench", title: "Reactive Maintenance", description: "Certified electricians, plumbers, carpenters, roofers and painters." },
  { icon: "droplets", title: "Power Washing", description: "Annual exterior cleaning that removes moss, algae, trip and skid hazards." },
  { icon: "trees", title: "Landscaping & Clearance", description: "Overgrown grounds cut back, junk and clutter removed under licence." },
  { icon: "key-round", title: "Keyholding", description: "Secure key storage with logged issue and return, and 24/7 attendance." },
  { icon: "file-check", title: "Pre-Letting Assessments", description: "Security, plumbing, heating, electrical and fire compliance checks before listing." },
];

function CardGrid({ items, cols = 3 }) {
  const m = useM();
  return (
    <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : `repeat(${cols},1fr)`, gap: "var(--space-6)" }}>
      {items.map((s) => <ServiceCard key={s.title} {...s} href="#" />)}
    </div>
  );
}

function CallToAction({ onNavigate }) {
  const m = useM();
  return (
    <section style={{ background: "var(--surface-brand-deep)", color: "var(--text-inverse)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: m ? "var(--space-10) var(--space-4)" : "var(--space-16) var(--space-6)", display: "flex", flexDirection: m ? "column" : "row", alignItems: m ? "stretch" : "center", justifyContent: "space-between", gap: m ? "var(--space-6)" : "var(--space-10)" }}>
        <div>
          <h2 style={{ font: m ? "var(--type-h2)" : "var(--type-h1)", color: "var(--white)" }}>Need cover tonight?</h2>
          <p style={{ font: "var(--type-body-lg)", color: "var(--text-inverse-muted)", marginTop: "var(--space-3)" }}>Our control room is staffed 24 hours a day, every day of the year.</p>
        </div>
        <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: "var(--space-3)", flexShrink: 0 }}>
          <Button variant="inverse" size="lg" fullWidth={m} iconLeft={<Icon name="phone-call" size={18} />}>01 437 0570</Button>
          <Button variant="inverse-outline" size="lg" fullWidth={m} onClick={() => onNavigate("contact")}>Send an enquiry</Button>
        </div>
      </div>
    </section>
  );
}

function Accreditations() {
  const m = useM();
  return (
    <Section tight style={{ paddingTop: "var(--space-12)", paddingBottom: "var(--space-12)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "center" }}>
        <span className="ktech-eyebrow">Licensed, certified, accredited</span>
        <AccreditationStrip basePath={BASE} height={m ? 34 : undefined} gap={m ? "var(--space-5)" : undefined} style={m ? { flexWrap: "wrap", justifyContent: "center" } : undefined} />
      </div>
    </Section>
  );
}

function ScreenHero({ eyebrow, title, lede, image }) {
  const m = useM();
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <img src={`${BASE}/${image}`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-brand)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: m ? "var(--space-10) var(--space-4)" : "var(--space-16) var(--space-6)" }}>
        <SectionHeading tone="inverse" eyebrow={eyebrow} title={title} lede={lede} />
      </div>
    </section>
  );
}

/* ---------- home ---------- */

function Hero({ onNavigate }) {
  const m = useM();
  return (
    <section style={{ position: "relative", minHeight: m ? 440 : 560, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <img src={`${BASE}/assets/img-cctv-patrol.jpg`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-brand)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: m ? "var(--space-12) var(--space-4)" : "var(--space-20) var(--space-6)", width: "100%" }}>
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <Badge tone="inverse" dot style={{ alignSelf: "flex-start" }}>Nationwide · 24/7</Badge>
          <h1 style={{ font: m ? "var(--type-display-2)" : "var(--type-display-1)", letterSpacing: "var(--tracking-display)", color: "var(--white)" }}>
            Security and property services, done properly.
          </h1>
          <p style={{ font: "var(--type-body-lg)", color: "#d7dbee", maxWidth: 560 }}>
            Established nearly 40 years ago in Dublin, Ktech was one of the first companies licensed by the Private Security Authority. Six divisions, one point of contact.
          </p>
          <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button variant="inverse" size="lg" fullWidth={m} onClick={() => onNavigate("contact")}>Request a survey</Button>
            <Button variant="inverse-outline" size="lg" fullWidth={m} iconLeft={<Icon name="phone-call" size={18} />}>01 437 0570</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatStrip() {
  const m = useM();
  const stats = [["40", "Years in operation"], ["24/7", "Nationwide cover"], ["6", "Specialist divisions"], ["00041", "PSA licence"]];
  return (
    <Section tone="subtle" tight>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr 1fr" : "repeat(4,1fr)", gap: m ? "var(--space-6)" : "var(--space-8)" }}>
        {stats.map(([v, l], i) => {
          const divider = m ? i % 2 === 1 : i > 0;
          return (
            <div key={l} style={{ paddingLeft: divider ? "var(--space-6)" : 0, borderLeft: divider ? "1px solid var(--border-hairline)" : "none" }}>
              <StatBlock value={v} label={l} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ReconeyezBand({ onNavigate }) {
  const m = useM();
  return (
    <section style={{ background: "var(--surface-brand)", color: "var(--text-inverse)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: m ? "var(--space-10) var(--space-4)" : "var(--section-y) var(--space-6)", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "var(--space-8)" : "var(--space-16)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <SectionHeading tone="inverse" eyebrow="Reconeyez" title="Remote CCTV with no mains, no cabling, no trenching."
            lede="At Ktech Security we are Ireland's distributor and installer of Reconeyez: solar and battery powered detectors and cameras, monitored and managed from a mobile app." />
          <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: "var(--space-3)" }}>
            <Button variant="inverse" fullWidth={m} onClick={() => onNavigate("reconeyez")}>See how it works</Button>
            <Button variant="inverse-outline" fullWidth={m} onClick={() => onNavigate("contact")}>Talk to an engineer</Button>
          </div>
        </div>
        <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", borderTop: "var(--rule-width) solid var(--rule-accent)" }}>
          <img src={`${BASE}/assets/img-fleet-02.jpg`} alt="Ktech fleet at the Tallaght depot" style={{ width: "100%", height: m ? 220 : 320, objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const m = useM();
  return (
    <Section tone="subtle" tight>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "2fr 1fr", gap: m ? "var(--space-8)" : "var(--space-16)", alignItems: "center" }}>
        <blockquote style={{ margin: 0, borderLeft: "var(--rule-width) solid var(--rule-accent)", paddingLeft: "var(--space-6)" }}>
          <p style={{ font: m ? "var(--type-h4)" : "var(--type-h3)", fontWeight: 500, color: "var(--text-heading)" }}>
            “When we bought our premises we needed the property secured from the time we got the keys to once we started trading. I found Ktech invaluable in terms of preparing us along the way to have the property secured, from our reconstruction phase to opening the place up for trading and since, with the installation of our cameras and alarm. No hesitation in recommending Ktech.”
          </p>
          <footer style={{ marginTop: "var(--space-4)", font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
            Mr. A. H. — Owner of a fast growing logistics and storage business, Dublin
          </footer>
        </blockquote>
        <Card accent>
          <span className="ktech-eyebrow">Quality system</span>
          <p style={{ marginTop: "var(--space-3)", font: "var(--type-body)" }}>
            We take quality very seriously and have a robust Quality System in place to ensure that we remain compliant with industry legislation in all areas.
          </p>
        </Card>
      </div>
    </Section>
  );
}

function HomeScreen({ onNavigate }) {
  const m = useM();
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <StatStrip />
      <Section>
        <SectionHeading eyebrow="Our services" title="Six divisions, one point of contact"
          lede="There are six divisions within our company, each with their own specialisms, staff, services and equipment." />
        <div style={{ marginTop: m ? "var(--space-8)" : "var(--space-12)" }}>
          <CardGrid items={DIVISIONS} />
        </div>
      </Section>
      <ReconeyezBand onNavigate={onNavigate} />
      <Testimonial />
      <Accreditations />
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
}

/* ---------- services ---------- */

function ServicesScreen({ onNavigate, initialTab = "security" }) {
  const m = useM();
  const [tab, setTab] = R.useState(initialTab);
  const list = tab === "security" ? SECURITY : PROPERTY;
  const steps = [
    ["1", "Site survey", "A specialist walks the site and agrees the scope with you."],
    ["2", "Written proposal", "Fixed costs, response times and equipment specified in writing."],
    ["3", "Installation & handover", "Our own engineers install, commission and train your team."],
    ["4", "Maintenance & monitoring", "Planned servicing, 24/7 response, documented reporting."],
  ];
  return (
    <div>
      <ScreenHero
        eyebrow="Our solutions"
        title="Security and property services for every market sector"
        lede="We offer a comprehensive service to determine the best solution for your requirements. We take care of the design, installation and maintenance of our security services."
        image="assets/img-fleet-03.jpg"
      />
      <Section>
        <Tabs items={[{ value: "security", label: "Security Services" }, { value: "property", label: "Property Services" }]} value={tab} onChange={setTab} />
        <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)", flexWrap: "wrap" }}>
          {(tab === "security" ? ["Guarding", "Patrols", "CCTV", "Alarms", "Access control", "Locksmiths"] : ["Inspections", "Maintenance", "Cleaning", "Grounds", "Keyholding"]).map((t, i) => (
            <Tag key={t} active={i === 0}>{t}</Tag>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-8)" }}>
          <CardGrid items={list} />
        </div>
      </Section>
      <Section tone="subtle" tight>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "var(--space-8)" : "var(--space-10)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <span className="ktech-eyebrow">How we work</span>
            <h2>Survey, design, install, maintain.</h2>
            <p style={{ font: "var(--type-body-lg)" }}>No job is too small or big for us to quote for. We use Work Pal field management software for our operational and property maintenance personnel, so every visit is logged and reportable.</p>
            <div><Button fullWidth={m} onClick={() => onNavigate("contact")}>Request a survey</Button></div>
          </div>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {steps.map(([n, t, d]) => (
              <Card key={n} style={{ display: "flex", gap: "var(--space-4)", padding: "var(--space-4) var(--space-5)" }}>
                <span style={{ font: "var(--type-h3)", color: "var(--blue-300)", minWidth: 24 }}>{n}</span>
                <span>
                  <strong style={{ font: "var(--type-h4)", display: "block", color: "var(--text-heading)" }}>{t}</strong>
                  <span style={{ font: "var(--type-body-sm)", color: "var(--text-body)" }}>{d}</span>
                </span>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
}

/* ---------- reconeyez ---------- */

function ReconeyezScreen({ onNavigate }) {
  const m = useM();
  const [alerts, setAlerts] = R.useState(true);
  const features = [
    ["sun", "Solar + battery", "Weeks of autonomy through Irish winters."],
    ["radio", "Own mesh network", "No site Wi-Fi or power required."],
    ["smartphone", "Manage in the app", "Arm, disarm and review alerts anywhere, anytime."],
    ["move", "Redeployable", "Moves as the works move, no re-installation cost."],
  ];
  return (
    <div>
      <ScreenHero
        eyebrow="Reconeyez"
        title="Solar powered remote CCTV, monitored from your phone"
        lede="At Ktech Security, Ireland's distributor and installer of Reconeyez security cameras, we understand that sites change week to week. The system moves with them."
        image="assets/img-cctv-patrol.jpg"
      />
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1.1fr .9fr", gap: m ? "var(--space-8)" : "var(--space-16)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <SectionHeading eyebrow="Why it suits Irish sites" title="No mains. No cabling. No trenching."
              lede="Detectors and cameras run on solar panels and long-life batteries, communicate over their own mesh, and are redeployed as the site programme moves." />
            <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "var(--space-4)" }}>
              {features.map(([ic, t, d]) => (
                <Card key={t} accent>
                  <Icon name={ic} size={24} color="var(--blue-600)" />
                  <strong style={{ display: "block", font: "var(--type-h4)", marginTop: "var(--space-3)", color: "var(--text-heading)" }}>{t}</strong>
                  <span style={{ font: "var(--type-body-sm)", color: "var(--text-body)" }}>{d}</span>
                </Card>
              ))}
            </div>
          </div>
          <Card tone="ink" padding="0" style={{ overflow: "hidden" }}>
            <div style={{ padding: "var(--space-5)", borderBottom: "1px solid rgba(255,255,255,.14)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
              <span style={{ font: "var(--type-label)", color: "var(--white)" }}>Site: Naas Road — Unit 4</span>
              <Badge tone="secure" dot>Armed</Badge>
            </div>
            <div style={{ position: "relative" }}>
              <img src={`${BASE}/assets/img-fleet-01.jpg`} alt="Camera view" style={{ width: "100%", height: 200, objectFit: "cover", filter: "saturate(.7)", display: "block" }} />
              <span style={{ position: "absolute", left: 12, top: 12, font: "var(--type-caption)", fontFamily: "var(--font-mono)", color: "#fff", background: "rgba(12,12,86,.7)", padding: "3px 8px" }}>CAM 02 · 23:41:07</span>
            </div>
            <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {[["Battery", "86%"], ["Signal", "Strong"], ["Last event", "Detector 3 · 22:16"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", font: "var(--type-body-sm)", color: "#c9cbd6" }}>
                  <span>{k}</span><span style={{ fontFamily: "var(--font-mono)", color: "var(--white)" }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: "var(--space-3)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ font: "var(--type-body-sm)", color: "#c9cbd6" }}>Push alerts</span>
                <Switch checked={alerts} onChange={setAlerts} />
              </div>
              <Button fullWidth onClick={() => onNavigate("contact")}>Book a site survey</Button>
            </div>
          </Card>
        </div>
      </Section>
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
}

/* ---------- about ---------- */

function AboutScreen({ onNavigate }) {
  const m = useM();
  const milestones = [
    ["Late 1980s", "Founded in Dublin by Kevin McGarry as a uniformed guarding company."],
    ["PSA Licence 00041", "One of the first companies in the country to be licensed by the Private Security Authority."],
    ["Six divisions", "Electronic systems, Reconeyez distribution, construction security, locksmithing and property maintenance added alongside guarding."],
    ["Nationwide today", "Corporate and SME clients across Ireland, served from the Tallaght head office and the mobile patrol fleet."],
  ];
  return (
    <div>
      <ScreenHero
        eyebrow="About us"
        title="Nearly 40 years securing Irish property"
        lede="Ktech Security & Property Services is an Irish owned company operating nationwide, 24 hours a day. Six divisions, each with their own specialists, staff and equipment."
        image="assets/photography/construction-site-guard.jpg"
      />
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1.15fr .85fr", gap: m ? "var(--space-8)" : "var(--space-16)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", maxWidth: 820 }}>
            <SectionHeading eyebrow="Who we are" title="One point of contact for security and maintenance"
              lede="We were established nearly 40 years ago in Dublin and were one of the first companies to be licensed by the Private Security Authority." />
            <p style={{ font: "var(--type-body-lg)" }}>
              Our clients range from major corporates to small and medium businesses. Each division has its own specialists, staff, services and equipment, so a site can be guarded, monitored, maintained and repaired under one agreement.
            </p>
            <p style={{ font: "var(--type-body)" }}>
              We take quality very seriously and have a robust Quality System in place to ensure that we remain compliant with industry legislation in all areas. Every guarding, engineering and maintenance visit is logged and reportable. No job is too small or big for us to quote for.
            </p>
            <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: "var(--space-3)" }}>
              <Button fullWidth={m} onClick={() => onNavigate("contact")}>Request a survey</Button>
              <Button variant="outline" fullWidth={m} iconLeft={<Icon name="phone-call" size={16} />}>01 437 0570</Button>
            </div>
          </div>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {milestones.map(([k, d]) => (
              <Card key={k} accent>
                <span className="ktech-eyebrow">{k}</span>
                <p style={{ marginTop: "var(--space-3)", font: "var(--type-body)" }}>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="subtle" tight>
        <SectionHeading eyebrow="Head office" title="Tallaght, Dublin 24" />
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "var(--space-6)" : "var(--space-10)", marginTop: "var(--space-8)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", font: "var(--type-body)" }}>
            <span>7 First Avenue, Cookstown Industrial Estate,<br />Tallaght, Dublin 24</span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--blue-600)" }}>Eircode D24 F20X · PSA Licence 00041</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="phone" size={15} color="var(--blue-600)" />+353 (0)1 437 0570</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="mail" size={15} color="var(--blue-600)" />admin@ktech.ie</span>
          </div>
          <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", borderTop: "var(--rule-width) solid var(--rule-accent)" }}>
            <img src={`${BASE}/assets/img-fleet-03.jpg`} alt="Ktech patrol fleet at the Tallaght depot" style={{ width: "100%", height: m ? 200 : 280, objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </Section>
      <Accreditations />
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
}

/* ---------- contact ---------- */

function ContactScreen() {
  const m = useM();
  const [sent, setSent] = R.useState(false);
  const [toast, setToast] = R.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <div style={{ position: "relative" }}>
      <ScreenHero
        eyebrow="Contact us"
        title="Tell us about the site. We'll come and look at it."
        lede="Call the office on +353 (0)1 437 0570, or send the details below and a specialist will come back to you."
        image="assets/img-fleet-02.jpg"
      />
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1.2fr .8fr", gap: m ? "var(--space-8)" : "var(--space-16)", alignItems: "start" }}>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <SectionHeading eyebrow="Enquiry" title="Request a survey or quote" />
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>"(Required)" indicates required fields</p>
            <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "var(--space-4)" }}>
              <Input label="Name" name="name" required placeholder="Your name" />
              <Input label="Company" name="company" placeholder="Company or agent" />
              <Input label="Email" name="email" type="email" required placeholder="you@company.ie" />
              <Input label="Phone" name="phone" required placeholder="087 000 0000" iconLeft={<Icon name="phone" size={16} />} />
              <Select label="Service required" required placeholder="Choose a division"
                options={["Uniformed Security Services", "Electronic Security Systems", "Reconeyez", "Construction Security", "Locksmith Solutions", "Property Maintenance"]} />
              <Input label="Site Eircode" name="eircode" placeholder="D24 F20X" />
            </div>
            <Input label="What do you need?" name="detail" multiline rows={5} placeholder="Site type, size, current arrangements, timescale." />
            <div>
              <span style={{ font: "var(--type-label)", display: "block", marginBottom: "var(--space-2)" }}>How soon do you need cover?</span>
              <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: m ? "var(--space-3)" : "var(--space-8)" }}>
                <Radio name="when" value="now" label="Tonight" defaultChecked />
                <Radio name="when" value="week" label="This week" />
                <Radio name="when" value="plan" label="Planning ahead" />
              </div>
            </div>
            <Checkbox label="Keep me posted on Ktech news and Reconeyez updates" />
            <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: "var(--space-3)", alignItems: m ? "stretch" : "center" }}>
              <Button type="submit" size="lg" fullWidth={m}>Send enquiry</Button>
              <Button variant="ghost" size="lg" fullWidth={m} iconLeft={<Icon name="phone-call" size={18} />} onClick={() => setToast(true)}>Or call 01 437 0570</Button>
            </div>
          </form>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Card accent>
              <span className="ktech-eyebrow">Head office</span>
              <p style={{ marginTop: "var(--space-3)", font: "var(--type-body)" }}>
                KTech Security<br />7 First Avenue, Cookstown Industrial Estate<br />Tallaght, Dublin 24<br />Eircode D24 F20X
              </p>
              <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)", font: "var(--type-body-sm)" }}>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="phone" size={15} color="var(--blue-600)" />+353 (0)1 437 0570</span>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="mail" size={15} color="var(--blue-600)" />admin@ktech.ie</span>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="clock" size={15} color="var(--blue-600)" />Control room staffed 24/7</span>
              </div>
            </Card>
            <Card tone="tint">
              <span className="ktech-eyebrow">Trade enquiries</span>
              <p style={{ marginTop: "var(--space-3)", font: "var(--type-body)" }}>
                Installers and facilities contractors: we supply and install Reconeyez nationwide. Ask for the trade desk.
              </p>
            </Card>
            <AccreditationStrip basePath={BASE} align="flex-start" gap="var(--space-6)" height={40} style={{ flexWrap: "wrap" }} />
          </div>
        </div>
      </Section>
      {toast ? (
        <div style={{ position: m ? "absolute" : "fixed", right: 24, bottom: 24, zIndex: 50 }}>
          <Toast tone="info" title="Control room" message="+353 (0)1 437 0570 — answered 24 hours a day." onDismiss={() => setToast(false)} />
        </div>
      ) : null}
      <Dialog open={sent} eyebrow="Enquiry received" title="Thanks — we have your details" onClose={() => setSent(false)}
        footer={<Button onClick={() => setSent(false)}>Close</Button>}>
        <p>A specialist will call you back to arrange a site survey. If it's urgent, ring the control room on +353 (0)1 437 0570.</p>
      </Dialog>
    </div>
  );
}

/* ---------- router ---------- */

function KtechSite({ route, mobile, onNavigate, scrollRef }) {
  const go = (r) => {
    onNavigate(r);
    const el = scrollRef && scrollRef.current;
    if (el) el.scrollTo({ top: 0 });
    else window.scrollTo({ top: 0 });
  };
  let screen;
  if (route === "security") screen = <ServicesScreen key="s" onNavigate={go} initialTab="security" />;
  else if (route === "property") screen = <ServicesScreen key="p" onNavigate={go} initialTab="property" />;
  else if (route === "reconeyez") screen = <ReconeyezScreen onNavigate={go} />;
  else if (route === "about") screen = <AboutScreen onNavigate={go} />;
  else if (route === "contact") screen = <ContactScreen onNavigate={go} />;
  else screen = <HomeScreen onNavigate={go} />;
  return (
    <MobileCtx.Provider value={!!mobile}>
      <div style={{ background: "var(--surface-page)" }}>
        <Header route={route} onNavigate={go} />
        {screen}
        <Footer onNavigate={go} />
      </div>
    </MobileCtx.Provider>
  );
}

window.KtechSite = KtechSite;
if (typeof module !== "undefined" && module.exports) { module.exports = { KtechSite, NAV }; }
