import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  ArrowDown,
} from "lucide-react";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    agency: "",
    spend: "",
  });

  // Scroll reveal animation configuration
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen w-screen max-w-[100vw] bg-[#050507] text-gray-200 font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-x-clip">
      {/* Custom Animations for Floating Elements */}
      <style>{`
        html, body {
          overflow-x: clip !important;
          width: 100vw !important;
          max-width: 100vw !important;
          position: relative;
        }
        * {
          box-sizing: border-box;
          max-width: 100%;
          overflow-x: visible;
        }
        input, select, button, textarea {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="w-full max-w-7xl mx-auto px-6 sm:px-4 py-4 sm:py-6 flex justify-between items-center relative z-40">
        <div className="text-white font-black text-lg sm:text-xl tracking-tighter flex items-center gap-1 sm:gap-2">
          <img src="/logo.png" alt="Logo" className="h-6 sm:h-7" />
        </div>
        <a
          href="#apply"
          className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-gray-400 hover:text-white transition-colors"
        >
          Secure Slot
        </a>
      </nav>

      {/* SEAMLESS HERO & VSL WRAPPER */}
      <div className="relative w-screen max-w-[100vw] overflow-x-clip pb-20 sm:pb-32">
        {/* Continuous Orbital Background - hidden on mobile for performance */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-[100vw] h-[150vh] z-0 pointer-events-none flex flex-col items-center justify-start pt-[30vh] overflow-hidden">
          {/* Main Glows */}
          <div className="absolute w-[120%] sm:w-[150%] h-[400px] sm:h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-orange-900/5 to-transparent blur-3xl"></div>
          <div className="absolute w-[70%] sm:w-[80%] h-[300px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/15 sm:from-orange-500/20 via-transparent to-transparent blur-2xl mt-[10vh]"></div>

          {/* Concentric Circles (Orbitals) bleeding down */}
          <div className="absolute top-[20vh] w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] rounded-full border border-white/[0.02] sm:border-white/[0.03] shadow-[0_0_50px_rgba(234,88,12,0.03)] sm:shadow-[0_0_50px_rgba(234,88,12,0.05)]"></div>
          <div className="absolute top-[10vh] w-[550px] sm:w-[1100px] h-[550px] sm:h-[1100px] rounded-full border border-white/[0.02] sm:border-white/[0.04]"></div>
          <div className="absolute top-[0vh] w-[700px] sm:w-[1400px] h-[700px] sm:h-[1400px] rounded-full border border-white/[0.03] sm:border-white/[0.05] border-dashed"></div>
        </div>

        {/* HERO SECTION */}
        <section className="relative w-full pt-6 sm:pt-10 pb-12 sm:pb-20 flex flex-col items-center justify-center overflow-x-clip">

          {/* Hero Content - Optimized for Cold Email Attention Spans */}
          <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-4 text-center mt-6 sm:mt-10">
            <div className="hidden sm:inline-flex items-center px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#15181d]/95 border border-white/10 text-[11px] sm:text-[13px] font-mono font-semibold uppercase tracking-normal sm:tracking-wider text-orange-200 shadow-[0_10px_30px_rgba(0,0,0,0.28)] mb-4 sm:mb-6 max-w-none">
              FOR PERFORMANCE AGENCIES STRUGGLING WITH CLIENT CHURN &amp; AD FATIGUE
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 sm:mb-6">
              Stop Feeding the Meta Machine{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                More Garbage.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white mb-0 sm:mb-1 max-w-3xl mx-auto font-medium leading-relaxed">
              You Don't Have a Volume Problem. You Have a Messaging Problem.
            </p>
          </div>
        </section>

        {/* VSL SECTION - Seamlessly integrated */}
        <section className="relative z-30 w-full px-6 sm:px-4 mt-0 overflow-x-clip">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#151820]/80 to-[#0f131a]/80 px-4 py-4 sm:px-5 sm:py-6 border-b border-white/5 backdrop-blur-sm rounded-t-xl">
            <h3 className="text-xs sm:text-base md:text-lg lg:text-xl text-orange-100 font-medium text-center leading-relaxed">
              The 3-Minute Brief: How our 'Messaging-First' creative system fixes failing accounts without increasing your ad spend.
            </h3>
          </div>
          <div className="max-w-5xl mx-auto w-full">
            <div className="relative w-full rounded-b-xl border border-white/10 border-t-0 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden max-w-full">
            <div className="relative w-full pt-[56.25%]">
              <video
                className="absolute inset-0 w-full h-full rounded-b-lg"
                controls
                preload="metadata"
                controlsList="nodownload"
                poster="/thumbnail.png"
              >
                <source src="/vsl.mp4" type="video/mp4" />
                <p>Your browser doesn't support HTML5 video. Here's a <a href="/vsl.mp4">link to the video</a> instead.</p>
              </video>
            </div>
          </div>
          </div>
          
          <div className="max-w-5xl mx-auto w-full px-6 sm:px-4 flex flex-col items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="#apply"
              className="group relative inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 font-bold text-white transition-all duration-200 bg-gradient-to-b from-orange-500 to-orange-700 rounded-md hover:from-orange-400 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 focus:ring-offset-[#050507] overflow-hidden shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] min-h-[48px] sm:min-h-[52px]"
            >
              <span className="relative z-10 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 uppercase tracking-wide text-[10px] sm:text-sm text-center">
                Apply for the Beta
              </span>
              <div className="absolute inset-0 h-full w-full rotate-45 translate-x-[-70%] transition-all group-hover:translate-x-[50%] z-0 bg-white/10 duration-1000"></div>
            </a>
            <p className="text-[11px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">
              Takes 30 seconds. No credit card required.
            </p>
          </div>
        </section>
      </div>

      {/* THE DIAGNOSTIC (KNIFE TWIST) - Seamless transition via gradient fade */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={scrollRevealVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-4xl mx-auto px-6 sm:px-4 py-12 sm:py-20 overflow-x-hidden"
      >
        <div className="absolute top-0 left-0 right-0 w-full h-32 bg-gradient-to-b from-[#050507] to-transparent z-10 pointer-events-none"></div>

        <div className="text-center mb-12 sm:mb-16 relative z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            The 7-Day Death Cycle
          </h2>
          <p className="text-orange-500/80 font-mono text-sm uppercase tracking-widest">
            Is this your current workflow?
          </p>
        </div>

        <div className="relative border-l border-red-900/30 ml-3 md:ml-12 pl-2 md:pl-8 pb-8 space-y-8 sm:space-y-12 z-20 overflow-hidden">
          {/* Timeline Nodes */}
          <div className="relative group">
            <h3 className="text-base sm:text-xl font-semibold text-gray-300 mb-2">
              Find a "Winner."
            </h3>
          </div>
          <div className="relative group">
            <h3 className="text-base sm:text-xl font-semibold text-gray-300 mb-2">
              Clone the format/style.
            </h3>
          </div>
          <div className="relative group">
            <h3 className="text-base sm:text-xl font-semibold text-gray-300 mb-2">
              Launch 10 variations.
            </h3>
          </div>
          <div className="relative">
            <h3 className="text-base sm:text-xl font-bold text-red-500 mb-2">
              Watch ROAS tank by day 5.
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              As Frequency hits 1.5, the audience goes blind to the message. You
              repeat the cycle until your margins vanish.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-red-950/40 to-transparent border-l-2 border-red-500 p-5 sm:p-8 rounded-r-lg relative z-20">
          <div className="flex items-start gap-3 sm:gap-4">
            <ShieldAlert className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">
                System Over Status
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Most agencies rely on "gut feel" or a creative director's mood. I don't. I obsess over buyer psychology and the raw data of ad decay to build a machine that treats messaging like math. I'm not an "Ad Exec." I'm a researcher who builds engines for people who actually run the ads.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* THE SOLUTION & DELIVERABLES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={scrollRevealVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-6xl mx-auto px-6 sm:px-4 pt-12 sm:pt-20 pb-20 sm:pb-32 overflow-x-hidden"
      >
        {/* Soft background glow to connect sections */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="text-center mb-12 sm:mb-16 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our system
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            How we break the creative fatigue cycle, step by step.
          </p>
        </div>

        {/* Numbered Process Flow */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {[
            {
              number: 1,
              title: "The Setup & Matrix Audit",
              description: "We mine your buyers' actual words to build a custom Voice Bank and audit your current ads to find the exact messaging gaps we need to fill.",
            },
            {
              number: 2,
              title: "The Weekly Drop",
              description: "Every week, we deliver a fresh, ready-to-upload stack of statics and plug-and-play video briefs engineered specifically to replace your fatiguing ads.",
            },
            {
              number: 3,
              title: "The Rotation Protocol",
              description: "We monitor your Ads Manager data to catch ad fatigue before it tanks your ROAS, providing precise weekly instructions on exactly what to upload, pause, and test next.",
            },
            {
              number: 4,
              title: "The Monthly Reset & Winner Autopsy",
              description: "Instead of lazily cloning your winning ads until they burn out, we dissect exactly why they worked to map out a fresh, non-repetitive production roadmap for the month ahead.",
            },
          ].map((item, i) => (
            <div key={i} className="relative mb-8 sm:mb-12 last:mb-0">
              {/* Step Circle */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                    {item.number}
                  </div>
                  {i < 3 && (
                    <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-orange-500/50 to-transparent mt-2"></div>
                  )}
                </div>
                {/* Card Content */}
                <div className="flex-1 pt-1 sm:pt-2">
                  <div className="bg-[#0a0a0c]/80 backdrop-blur border border-white/5 p-4 sm:p-6 rounded-lg hover:border-orange-500/30 hover:bg-[#0d0d12] transition-all">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* MEET THE FOUNDER */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={scrollRevealVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full py-10 sm:py-16 overflow-x-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-4">
          <div className="rounded-2xl sm:rounded-3xl border border-orange-500/30 bg-[#13161a]/88 backdrop-blur-sm p-6 sm:p-8 md:p-12 text-left shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-10 lg:gap-12">
              <img src="/18.png" alt="Founder" className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl object-cover border border-white/10 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[9px] sm:text-[11px] font-mono uppercase tracking-tight sm:tracking-[0.24em] text-orange-300 mb-2 sm:mb-4">
                  Meet the Founder
                </p>
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Hi, I'm Abhi.
                </h3>
                <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I build the messaging engines that media buyers use to actually scale.
                  </p>
                  <p>
                    Working behind the scenes designing creatives for DTC brands and agencies, I realized a terrifying truth: media buyers are phenomenal at reading dashboards, but they are completely guessing on creative strategy. I built Genline to strip the "gut feeling" out of testing and treat messaging like math.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* THE OFFER - Seamless gradient transition */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={scrollRevealVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-b from-[#050507] via-[#0a0a0c] to-[#050507] py-16 sm:py-24 relative overflow-x-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvc3ZnPg==')] opacity-50"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-4 relative z-10">
          <div className="border border-orange-500/30 bg-[#050507]/80 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-[0_0_50px_rgba(234,88,12,0.1)]">
            {/* Offer Background Glow */}
            <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Help Me Build A Case Study, Get The Results For $0
              </h2>
              <p className="text-xl text-orange-400 mb-8 font-medium">
                I am looking for 1 of 5 "Early Adopter" Agencies.
              </p>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
                <p>
                  I am currently a solo-operator building Genline. I don't want
                  your money right now—
                  <strong className="text-white">
                    I want your data and your proof.
                  </strong>
                </p>
                <p>
                  I am waiving the standard{" "}
                  <strong className="text-white line-through decoration-red-500 decoration-2">
                    $1,110 Setup Fee
                  </strong>{" "}
                  for 5 agencies. I will perform the full Matrix Audit, build
                  your Voice Bank, and deliver your first "Ready Stack" of
                  creatives for{" "}
                  <strong className="text-white bg-orange-600/20 px-2 py-1 rounded">
                    $0
                  </strong>
                  .
                </p>
                <p>
                  If this setup beats your current CPA, we talk about a long-term white-label relationship. If it doesn't, you keep the $1,110 worth of assets and we part ways.
                </p>
              </div>

              <div className="bg-black/60 border border-white/10 p-6 rounded-xl">
                <h4 className="text-sm font-mono text-red-400 uppercase tracking-widest mb-4">
                  The Catch:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-gray-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300">
                      You must be spending at least <strong>$5k/mo</strong> on
                      Meta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-gray-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300">
                      You must be willing to provide a brief video testimonial
                      if (when) we beat your current CPA.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-gray-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300">
                      I only have capacity for 5 partners. Once these slots are
                      filled, the price reverts to $1,110.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* LEAD FORM */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={scrollRevealVariants}
        viewport={{ once: true, amount: 0.2 }}
        id="apply"
        className="max-w-xl mx-auto px-6 sm:px-4 py-24 relative z-20 w-full overflow-x-hidden"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Secure Your Diagnostic Slot
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Enter your details below to claim 1 of the 5 free setup slots.
          </p>
        </div>

        <form className="space-y-5" method="POST" action="https://formspree.io/f/xbdzalza">
          <div>
            <label className="block text-xs font-mono text-gray-500 uppercase mb-2 ml-1">
              Work Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              placeholder="founder@agency.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-500 uppercase mb-2 ml-1">
              Agency Name
            </label>
            <input
              type="text"
              name="agency"
              required
              className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              placeholder="Acme Media"
              value={formData.agency}
              onChange={(e) =>
                setFormData({ ...formData, agency: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-500 uppercase mb-2 ml-1">
              Monthly Ad Spend
            </label>
            <div className="relative">
              <select
                name="spend"
                required
                className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none"
                value={formData.spend}
                onChange={(e) =>
                  setFormData({ ...formData, spend: e.target.value })
                }
              >
                <option value="" disabled>
                  Select your spend tier
                </option>
                <option value="under_5k">
                  Under $5k/mo (Does not qualify)
                </option>
                <option value="5k_20k">$5k - $20k/mo</option>
                <option value="20k_50k">$20k - $50k/mo</option>
                <option value="50k_plus">$50k+/mo</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ArrowDown size={16} />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 group relative inline-flex items-center justify-center px-4 sm:px-8 py-4 sm:py-5 font-bold text-white transition-all duration-200 bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 focus:ring-offset-[#050507] shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]"
          >
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-base text-center">
              Get the Full Matrix Audit & First Stack for $0
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform hidden sm:block"
              />
            </span>
          </button>
        </form>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center relative z-20 w-full overflow-x-clip">
        <div className="flex items-center justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" />
        </div>
        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-6">
          Creative is the new targeting. We own the creative.
        </p>
        <p className="text-gray-600 text-xs">
          &copy; 2026 Genline. Creative is the new targeting. We build the engine.
        </p>
      </footer>
    </div>
  );
};

export default App;
