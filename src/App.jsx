import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaTools,
  FaCarBattery,
  FaFan,
  FaBars,
  FaTimes,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaWrench,
  FaShieldAlt,
  FaCogs,
  FaCar,
  FaGasPump,
  FaTachometerAlt,
  FaStar,
  FaTruck,
  FaUserCheck,
  FaCertificate,
  FaBuilding,
  FaClipboardCheck,
} from "react-icons/fa";

// ============================================================================
// CORE GRAPHICS & WORKSHOP MEDIA ASSETS
// ============================================================================
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";

// ============================================================================
// FRAMER MOTION PERSISTENT SCROLL VIEWPORT ANIMATION BLUEPRINTS
// ============================================================================
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slowFadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const intenseFadeInUp = {
  hidden: { opacity: 0, y: 120 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slowStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

function App() {
  // ============================================================================
  // APPLICATION HOOKS & COMPONENT STATES
  // ============================================================================
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Unified Form Control Matrix Object state with integrated priority element
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    priority: "",
    message: ""
  });
  const [formConsent, setFormConsent] = useState(false);

  // Dynamic Cursor coordinates trackers aura glow maps
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  // ============================================================================
  // REACT SIDE EFFECTS EFFECTS CHANNELS
  // ============================================================================
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ============================================================================
  // INPUT CONTROLLER ACTION CHANGES
  // ============================================================================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // ============================================================================
  // ROOT SUBMIT SYSTEM INTERACTION FUNCTION (WITH REDIRECT NOTICE ALERT)
  // ============================================================================
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const message = `🚗
*NEW BOOKING REQUEST* %0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Service: ${formData.service}%0A
Priority: ${formData.priority}%0A
Message: ${formData.message}`; 
    
    // Confirmation flash message banner before redirect action
    alert("Booking request prepared successfully! Redirecting to WhatsApp..."); 

    window.open( 
      `https://wa.me/2348033077485?text=${message}`,
      "_blank"
    );
    
    setShowModal(false);
    
    // Clear structural fields cleanly including priority tracker
    setFormData({
      name: "",
      phone: "",
      service: "",
      priority: "",
      message: ""
    });
    setFormConsent(false);
  };

  // ============================================================================
  // ROOT FULL SCREEN INITIALIZING SCREEN LOADER INTERACTION
  // ============================================================================
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[99999]">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="w-36 h-36 border-[5px] border-red-600 border-t-transparent rounded-full shadow-[0_0_60px_rgba(220,38,38,0.7)]"
            animate={{ rotate: 360, scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
          <div className="absolute font-mono font-black text-xs tracking-widest text-white animate-pulse uppercase">
            System Scan
          </div>
        </div>
        <h1 className="mt-12 text-5xl md:text-7xl font-black text-red-600 tracking-widest text-center uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          LA AUTOWORKS
        </h1>
        <div className="w-48 h-[2px] bg-red-900/40 mt-6 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-red-500 w-16"
            animate={{ x: [-64, 256] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <p className="mt-4 text-gray-400 font-mono text-sm uppercase tracking-widest font-semibold">
          Performance • Precision • Excellence
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden pb-24 md:pb-0">
      
      {/* BACKGROUND NOISE CANVAS DUST MATRICES OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      ></div>
      
      {/* REALTIME GRAPHICAL INTERACTIVE CURSOR GLOW FIELD AURA */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-red-600/10 blur-[150px] pointer-events-none z-0 hidden lg:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 35,
          damping: 30,
        }}
      />

      {/* PERSISTENT POSITIONED AMBIENT LIGHT SOURCES */}
      <motion.div
        className="fixed top-[15%] left-[-5%] w-[600px] h-[600px] bg-red-700/[0.03] rounded-full blur-[200px] pointer-events-none z-0"
        animate={{ y: [0, -80, 0], x: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed bottom-[15%] right-[-5%] w-[700px] h-[700px] bg-red-600/[0.03] rounded-full blur-[220px] pointer-events-none z-0"
        animate={{ y: [0, 90, 0], x: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* TOP SCROLL DEPTH METRIC STATUS TRACKER */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-red-800 via-red-500 to-red-900 z-[99999] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ============================================================================
          STICKY HEADER NAVIGATION LAYOUT SYSTEM
         ============================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-6 border-b border-red-900/40 bg-black/95 shadow-lg">
        <h1 className="text-2xl md:text-4xl font-black text-red-600 tracking-tighter cursor-pointer font-sans uppercase hover:text-red-500 transition-colors">
          LA AUTOWORKS
        </h1>

        {/* EXPLICIT UNROLLED DESKTOP APP LINKS NAVIGATION MATRICES */}
        <div className="hidden xl:flex gap-10 font-black tracking-widest uppercase text-[11px] text-gray-400">
          <a href="#home" className="hover:text-red-500 transition-colors py-2">Home Base</a>
          <a href="#services" className="hover:text-red-500 transition-colors py-2">Services</a>
          <a href="#brands" className="hover:text-red-500 transition-colors py-2">Focus Brands</a>
          <a href="#stats" className="hover:text-red-500 transition-colors py-2">Metrics</a>
          <a href="#gallery" className="hover:text-red-500 transition-colors py-2">Gallery Hub</a>
          <a href="#beforeafter" className="hover:text-red-500 transition-colors py-2">Transformations</a>
          <a href="#maps" className="hover:text-red-500 transition-colors py-2">Workshop Map</a>
          <a href="#contact" className="hover:text-red-500 transition-colors py-2">Contact Desk</a>
        </div>

        {/* MOBILE DRAWER TOGGLE TRIGGER BUTTON */}
        <button
          className="xl:hidden text-2xl text-red-600 focus:outline-none p-2.5 bg-zinc-950/80 rounded-xl border border-red-900/40 shadow-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Control Drawer"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* MOBILE DROPDOWN MODAL EXPANDED INTERACTIVE DRAWER LINK WRAPPER */}
        {menuOpen && (
          <div className="absolute top-[88px] left-0 w-full bg-black/95 backdrop-blur-3xl border-t border-b border-red-900/50 flex flex-col items-center gap-6 py-12 xl:hidden shadow-2xl z-50 font-mono">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Home Base</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Repair Solutions</a>
            <a href="#brands" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Focus Brands</a>
            <a href="#stats" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Metrics</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Workshop Gallery</a>
            <a href="#beforeafter" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Transformations</a>
            <a href="#maps" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Workshop Map</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors">Contact Desk</a>
          </div>
        )}
      </nav>

      {/* ============================================================================
          APP CORE HERO MAIN INTRODUCTION SPLASH AREA
         ============================================================================ */}
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-28"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Core Layout Layer Shadows and Alpha Color Grids */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/90 z-0" />
        <div className="absolute inset-0 opacity-15 z-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-6">
          <motion.h2
            className="text-4xl sm:text-6xl md:text-8xl font-black leading-none tracking-tight uppercase font-sans"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          >
            Professional Toyota & Nissan
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 bg-clip-text text-transparent block mt-5 drop-shadow-[0_6px_30px_rgba(220,38,38,0.45)] font-sans">
              Auto Repairs
            </span>
            In Nigeria
          </motion.h2>

          <p className="mt-10 max-w-4xl mx-auto text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light tracking-wide">
            Specialists in Toyota Hiace Commercial Vehicles, Nissan Urvan Fleet Buses, Premium SUV Diagnostics, Structural Frame Correction, High-Gloss Baked Paints, Refurbishing & Master Fleet Operations Maintenance.
          </p>
<div className="flex flex-wrap justify-center gap-4 mt-8">

  <div className="bg-white/5 border border-red-800 rounded-full px-5 py-3 text-sm text-gray-300">
    ✔ 10+ Years Experience
  </div>
<div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">

  <span className="flex items-center gap-2">
    ✔ Advanced Diagnostics
  </span>

  <span className="flex items-center gap-2">
    ✔ Fleet Maintenance
  </span>

  <span className="flex items-center gap-2">
    ✔ Emergency Support
  </span>

  <span className="flex items-center gap-2">
    ✔ Genuine Parts Focus
  </span>

</div>
  <div className="bg-white/5 border border-red-800 rounded-full px-5 py-3 text-sm text-gray-300">
    ✔ Toyota & Nissan Specialists
  </div>

  <div className="bg-white/5 border border-red-800 rounded-full px-5 py-3 text-sm text-gray-300">
    ✔ Professional Diagnostics
  </div>

</div>
          {/* Interactive Trigger Button Row Matrices */}
          <div className="flex gap-6 mt-16 flex-wrap justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowModal(true)}
              className="bg-red-600 hover:bg-red-700 hover:shadow-[0_0_50px_rgba(220,38,38,1)] px-14 py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all duration-300 shadow-2xl border border-red-500/30 cursor-pointer"
            >
              Book Service
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/2348033077485"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 hover:shadow-[0_0_50px_rgba(22,163,74,0.95)] transition-all duration-300 px-14 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl border border-green-500/30"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp Us
            </motion.a>
          </div>
          
          {/* Scroll Navigation Micro-prompt */}
          <div className="mt-20 hidden md:block animate-pulse font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            Secure Diagnostics Link Channels Active Below • Scroll to Inspect
          </div>
        </div>
      </motion.section>

      {/* ============================================================================
          EMERGENCY SYSTEM NOTIFICATION HIGH LIGHT BLOCK BANNER
         ============================================================================ */}
      <motion.section
        className="py-10 px-6 md:px-16 bg-gradient-to-r from-red-800 via-red-600 to-red-900 text-center relative z-10 shadow-2xl border-t border-b border-red-500/40"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto text-left">
          <div className="space-y-2 max-w-4xl text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase">
              🚨 24/7 Roadside Emergency Breakdown Technical Support Across Lagos State
            </h3>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-3xl leading-relaxed">
              Stranded on a highway route? Engine overheating or transmission gears slipping? Our active tactical mobile mechanical team is immediately dispatched with computed scanner kits.
            </p>
          </div>
          <div className="shrink-0 mx-auto lg:mx-0">
            <motion.a
              whileHover={{ scale: 1.07, shadow: "0 15px 35px rgba(0,0,0,0.5)" }}
              whileTap={{ scale: 0.93 }}
              href="tel:08033077485"
              className="bg-black hover:bg-zinc-950 transition-all duration-300 px-12 py-5 rounded-2xl font-black text-base text-white shadow-2xl tracking-widest uppercase block border border-white/10"
            >
              Call Hotline Now
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* ============================================================================
          ✅ 1. SERVICES SECTION (FULLY EXPLICIT UNROLLED LAYOUT COMPONENT)
         ============================================================================ */}
      <motion.section
        id="services"
        className="py-36 px-6 md:px-16 bg-gradient-to-b from-black via-zinc-950 to-black relative z-10 border-b border-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center mb-28">
          <motion.span variants={fadeInUp} className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/40 shadow-inner">
            Garage Engineering Matrices
          </motion.span>
          <motion.h3 variants={fadeInUp} className="text-4xl md:text-7xl font-black tracking-tight text-red-600 uppercase mt-6 drop-shadow-[0_0_25px_rgba(220,38,38,0.45)] font-sans">
            Our Premium Service Hub
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Uncompromising workshop expertise designed to match original equipment manufacturer mechanical standards across premium transport architectures.
          </motion.p>
        </div>
<div className="grid md:grid-cols-3 gap-6 mb-14">

  <div className="bg-white/5 border border-red-800 rounded-2xl p-6 text-center">

    <h4 className="text-red-500 font-bold text-xl">
      Accurate Diagnostics
    </h4>

    <p className="text-gray-400 mt-3">
      Professional troubleshooting using structured diagnostic procedures.
    </p>

  </div>

  <div className="bg-white/5 border border-red-800 rounded-2xl p-6 text-center">

    <h4 className="text-red-500 font-bold text-xl">
      Experienced Technicians
    </h4>

    <p className="text-gray-400 mt-3">
      Skilled specialists focused on Toyota and Nissan repair solutions.
    </p>

  </div>

  <div className="bg-white/5 border border-red-800 rounded-2xl p-6 text-center">

    <h4 className="text-red-500 font-bold text-xl">
      Customer-Focused Service
    </h4>

    <p className="text-gray-400 mt-3">
      Transparent communication and service-oriented support processes.
    </p>

  </div>

</div>
        {/* 6 Grid Service Blocks Manually Written to Fulfill Direct Mass Completeness */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          
          {/* Card Item 1: Engine Overhauls */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -16, borderColor: "rgba(220,38,38,0.7)", boxShadow: "0 20px 45px rgba(220,38,38,0.15)" }}
            className="bg-zinc-950/70 backdrop-blur-2xl border border-zinc-900 rounded-3xl p-10 group cursor-pointer transition-all duration-500 relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-8 border border-red-900/40 group-hover:bg-red-600/20 group-hover:border-red-600/60 transition-all duration-300">
              <FaTools className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-white uppercase group-hover:text-red-500 transition-colors tracking-wide">Engine Overhauls & Repairs</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Complete diagnostic teardown of motor internal structures. Specialized processing for multi-cylinder piston ring matching, rod bearing grinding, cylinder head valve resurfacing, complete timing belt configuration adjustments, and pressure loss tracing for heavy continuous-duty commercial bus power blocks.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 text-red-500 hover:text-red-400 transition font-semibold"
            >
              Book This Service →
            </button>
            <div className="mt-8 border-t border-zinc-900/60 pt-5 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>Hiace • Caravan • SUVs</span>
              <span className="text-red-600 font-extrabold tracking-widest bg-red-950/20 px-2 py-0.5 rounded border border-red-900/20">Master Tier</span>
            </div>
          </motion.div>

          {/* Card Item 2: Auto Electrical Integration */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -16, borderColor: "rgba(220,38,38,0.7)", boxShadow: "0 20px 45px rgba(220,38,38,0.15)" }}
            className="bg-zinc-950/70 backdrop-blur-2xl border border-zinc-900 rounded-3xl p-10 group cursor-pointer transition-all duration-500 relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-8 border border-red-900/40 group-hover:bg-red-600/20 group-hover:border-red-600/60 transition-all duration-300">
              <FaCarBattery className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-white uppercase group-hover:text-red-500 transition-colors tracking-wide">ECU & Electrical Integration</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Locating multiplex harness wiring short circuits using state-of-the-art diagnostic logical analyzers. Complete powertrain control module firmware updates, sensor logic validation (MAF, Oxygen, Camshaft, Wheel Speed ABS components), instrumentation rewiring, and electronic transponder adaptation.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 text-red-500 hover:text-red-400 transition font-semibold"
            >
              Book This Service →
            </button>
            <div className="mt-8 border-t border-zinc-900/60 pt-5 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>ECU Coding • Scans</span>
              <span className="text-red-600 font-extrabold tracking-widest bg-red-950/20 px-2 py-0.5 rounded border border-red-900/20">Advanced Scans</span>
            </div>
          </motion.div>

          {/* Card Item 3: Sub-Zero Climate Controls */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -16, borderColor: "rgba(220,38,38,0.7)", boxShadow: "0 20px 45px rgba(220,38,38,0.15)" }}
            className="bg-zinc-950/70 backdrop-blur-2xl border border-zinc-900 rounded-3xl p-10 group pointer-events-auto cursor-pointer transition-all duration-500 relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-8 border border-red-900/40 group-hover:bg-red-600/20 group-hover:border-red-600/60 transition-all duration-300">
              <FaFan className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-white uppercase group-hover:text-red-500 transition-colors tracking-wide">A/C Evaporation Restoration</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              High-pressure gas line structural mapping for micro-pore cooling leaks tracking. Core rebuilding for climate pump pistons, thermal expansion block module swap, complete dash vacuum evacuation cycles, deep evaporator decontamination, and precision R134a cooling agent re-metering.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 text-red-500 hover:text-red-400 transition font-semibold"
            >
              Book This Service →
            </button>
            <div className="mt-8 border-t border-zinc-900/60 pt-5 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>Pumps • Condensers</span>
              <span className="text-red-600 font-extrabold tracking-widest bg-red-950/20 px-2 py-0.5 rounded border border-red-900/20">Sub-Zero Loop</span>
            </div>
          </motion.div>

          {/* Card Item 4: Industrial Corporate Fleet Overhauls */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -16, borderColor: "rgba(220,38,38,0.7)", boxShadow: "0 20px 45px rgba(220,38,38,0.15)" }}
            className="bg-zinc-950/70 backdrop-blur-2xl border border-zinc-900 rounded-3xl p-10 group cursor-pointer transition-all duration-500 relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-8 border border-red-900/40 group-hover:bg-red-600/20 group-hover:border-red-600/60 transition-all duration-300">
              <FaCogs className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-white uppercase group-hover:text-red-500 transition-colors tracking-wide">Enterprise Fleet Maintenance</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Custom preventive check blueprints crafted explicitly for logistics shipping firms and corporate transport networks. Dedicated priority access bays, real-time vehicle structural fluid diagnostic logging logs, suspension reinforcement mappings, and targeted breakdown minimization workflows.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 text-red-500 hover:text-red-400 transition font-semibold"
            >
              Book This Service →
            </button>
            <div className="mt-8 border-t border-zinc-900/60 pt-5 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>Logistics • High Uptime</span>
              <span className="text-red-600 font-extrabold tracking-widest bg-red-950/20 px-2 py-0.5 rounded border border-red-900/20">Corporate Bay</span>
            </div>
          </motion.div>

          {/* Card Item 5: Metal Structural Panel Beating */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -16, borderColor: "rgba(220,38,38,0.7)", boxShadow: "0 20px 45px rgba(220,38,38,0.15)" }}
            className="bg-zinc-950/70 backdrop-blur-2xl border border-zinc-900 rounded-3xl p-10 group cursor-pointer transition-all duration-500 relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-8 border border-red-900/40 group-hover:bg-red-600/20 group-hover:border-red-600/60 transition-all duration-300">
              <FaWrench className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-white uppercase group-hover:text-red-500 transition-colors tracking-wide">Body Panel Beating & Refurbishing</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Reversing severe impact damage back to precise manufacturer technical panel profiles. Heavy structural hydraulic pulling, sandblasting surface scaling treatments, premium zinc-chromate structural anti-rust coat application, manual block leveling, and premium dustless thermal oven paint baking.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 text-red-500 hover:text-red-400 transition font-semibold"
            >
              Book This Service →
            </button>
            <div className="mt-8 border-t border-zinc-900/60 pt-5 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>Oven Baked • Real Polish</span>
              <span className="text-red-600 font-extrabold tracking-widest bg-red-950/20 px-2 py-0.5 rounded border border-red-900/20">Oven Spray</span>
            </div>
          </motion.div>

          {/* Card Item 6: Transmission Hydraulic Gears */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -16, borderColor: "rgba(220,38,38,0.7)", boxShadow: "0 20px 45px rgba(220,38,38,0.15)" }}
            className="bg-zinc-950/70 backdrop-blur-2xl border border-zinc-900 rounded-3xl p-10 group cursor-pointer transition-all duration-500 relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-8 border border-red-900/40 group-hover:bg-red-600/20 group-hover:border-red-600/60 transition-all duration-300">
              <FaTachometerAlt className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-white uppercase group-hover:text-red-500 transition-colors tracking-wide">Gearboxes & Hydraulic Braking</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Correcting sluggish automatic shift points or torque converter clutch slip issues. Complete synchronization mesh replacements for manual bus boxes, high-load brake fluid line vacuum extraction flushes, master safety cylinder overhauls, and ABS pressure system logic troubleshooting.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 text-red-500 hover:text-red-400 transition font-semibold"
            >
              Book This Service →
            </button>
            <div className="mt-8 border-t border-zinc-900/60 pt-5 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>AT / MT Systems • Braking</span>
              <span className="text-red-600 font-extrabold tracking-widest bg-red-950/20 px-2 py-0.5 rounded border border-red-900/20">Safety Lock</span>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ============================================================================
          ✅ 2. BRANDS SECTION (MANUALLY UNROLLED INDIVIDUAL ELEMENT CARD LAYOUTS)
         ============================================================================ */}
      <motion.section
        id="brands"
        className="py-32 px-6 md:px-16 bg-black relative z-10 border-b border-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slowStaggerContainer}
      >
        <div className="text-center mb-20">
          <motion.span variants={fadeInUp} className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/40">
            Automotive Diagnostics Matrix Range
          </motion.span>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mt-6">
            Focused Vehicle Specialization
          </motion.h3>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto font-light">
            We operate model-specific scanning profiles matching exact factory tolerances for Nigeria's core transport options.
          </motion.p>
        </div>

        {/* 5 Distinct Hard-Coded Structural Card Panels to Guarantee Full Length Footprints */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          
          {/* Card Brand 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.04, borderColor: "rgba(220,38,38,0.8)", backgroundColor: "rgba(220,38,38,0.05)" }}
            className="bg-zinc-950 border border-zinc-900 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-2xl transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-3xl font-black text-white tracking-widest group-hover:text-red-500 transition-colors">TOYOTA</h4>
            <span className="text-[10px] font-mono text-gray-500 mt-3 tracking-widest uppercase font-bold group-hover:text-white transition-colors">Hiace • Hilux • Prado</span>
          </motion.div>

          {/* Card Brand 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.04, borderColor: "rgba(220,38,38,0.8)", backgroundColor: "rgba(220,38,38,0.05)" }}
            className="bg-zinc-950 border border-zinc-900 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-2xl transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-3xl font-black text-white tracking-widest group-hover:text-red-500 transition-colors">NISSAN</h4>
            <span className="text-[10px] font-mono text-gray-500 mt-3 tracking-widest uppercase font-bold group-hover:text-white transition-colors">Urvan • Patrol • NV350</span>
          </motion.div>

          {/* Card Brand 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.04, borderColor: "rgba(220,38,38,0.8)", backgroundColor: "rgba(220,38,38,0.05)" }}
            className="bg-zinc-950 border border-zinc-900 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-2xl transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-3xl font-black text-white tracking-widest group-hover:text-red-500 transition-colors">LEXUS</h4>
            <span className="text-[10px] font-mono text-gray-500 mt-3 tracking-widest uppercase font-bold group-hover:text-white transition-colors">LX570 • GX460 • RX350</span>
          </motion.div>

          {/* Card Brand 4 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.04, borderColor: "rgba(220,38,38,0.8)", backgroundColor: "rgba(220,38,38,0.05)" }}
            className="bg-zinc-950 border border-zinc-900 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-2xl transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-3xl font-black text-white tracking-widest group-hover:text-red-500 transition-colors">HONDA</h4>
            <span className="text-[10px] font-mono text-gray-500 mt-3 tracking-widest uppercase font-bold group-hover:text-white transition-colors">Accord • Pilot • Civic Range</span>
          </motion.div>

          {/* Card Brand 5 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.04, borderColor: "rgba(220,38,38,0.8)", backgroundColor: "rgba(220,38,38,0.05)" }}
            className="bg-zinc-950 border border-zinc-900 rounded-2xl p-12 text-center flex flex-col items-center justify-center shadow-2xl transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-3xl font-black text-white tracking-widest group-hover:text-red-500 transition-colors">FORD</h4>
            <span className="text-[10px] font-mono text-gray-500 mt-3 tracking-widest uppercase font-bold group-hover:text-white transition-colors">Ranger • Explorer • Transit</span>
          </motion.div>

        </div>
      </motion.section>

      {/* ============================================================================
          ✅ 3. STATS SECTION (FULLY EXPANDED DATA DISPLAY BLOCK)
         ============================================================================ */}
      <motion.section
        id="stats"
        className="py-32 px-6 md:px-16 bg-gradient-to-b from-black to-zinc-950 relative z-10 border-b border-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          {/* Statistical Matrix 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10, borderBottomColor: "#dc2626" }}
            className="bg-zinc-950 border border-zinc-900/60 rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-red-600/5 mx-auto flex items-center justify-center mb-4 border border-red-900/20 group-hover:bg-red-600/10 transition-colors">
              <FaCertificate className="text-red-600 text-xl" />
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter mb-2 drop-shadow-[0_4px_15px_rgba(220,38,38,0.45)]">
              10+
            </h3>
            <p className="text-white font-black text-sm tracking-widest uppercase mb-2">
              Years Experience
            </p>
            <p className="text-gray-500 text-xs font-light leading-relaxed">
              Continuous direct delivery technical execution solutions based within the Lagos mechanical engineering environment.
            </p>
          </motion.div>

          {/* Statistical Matrix 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10, borderBottomColor: "#dc2626" }}
            className="bg-zinc-950 border border-zinc-900/60 rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-red-600/5 mx-auto flex items-center justify-center mb-4 border border-red-900/20 group-hover:bg-red-600/10 transition-colors">
              <FaCar className="text-red-600 text-xl" />
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter mb-2 drop-shadow-[0_4px_15px_rgba(220,38,38,0.45)]">
              5K+
            </h3>
            <p className="text-white font-black text-sm tracking-widest uppercase mb-2">
              Vehicles Serviced
            </p>
            <p className="text-gray-500 text-xs font-light leading-relaxed">
              Comprehensive processing configurations from singular custom utility assets to dense corporate distribution transport lines.
            </p>
          </motion.div>

          {/* Statistical Matrix 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10, borderBottomColor: "#dc2626" }}
            className="bg-zinc-950 border border-zinc-900/60 rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-red-600/5 mx-auto flex items-center justify-center mb-4 border border-red-900/20 group-hover:bg-red-600/10 transition-colors">
              <FaUserCheck className="text-red-600 text-xl" />
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter mb-2 drop-shadow-[0_4px_15px_rgba(220,38,38,0.45)]">
              2K+
            </h3>
            <p className="text-white font-black text-sm tracking-widest uppercase mb-2">
              Happy Customers
            </p>
            <p className="text-gray-500 text-xs font-light leading-relaxed">
              Verified corporate transport fleet managers, asset managers, and high-frequency logistics logistics companies.
            </p>
          </motion.div>

          {/* Statistical Matrix 4 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10, borderBottomColor: "#dc2626" }}
            className="bg-zinc-950 border border-zinc-900/60 rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-red-600/5 mx-auto flex items-center justify-center mb-4 border border-red-900/20 group-hover:bg-red-600/10 transition-colors">
              <FaTruck className="text-red-600 text-xl" />
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter mb-2 drop-shadow-[0_4px_15px_rgba(220,38,38,0.45)]">
              24/7
            </h3>
            <p className="text-white font-black text-sm tracking-widest uppercase mb-2">
              Breakdown Care
            </p>
            <p className="text-gray-500 text-xs font-light leading-relaxed">
              Continuous operational emergency recovery communication frameworks routing live technician vehicles straight to your route location.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* DETAILED TRUST ASSURANCES CARD CAROUSEL SEPARATOR */}
      <section className="py-24 px-6 md:px-16 bg-black relative z-10 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex gap-5 items-start p-8 bg-zinc-950/40 rounded-3xl border border-zinc-900 shadow-xl group hover:border-red-900/40 transition-colors">
            <div className="p-3 bg-red-600/5 rounded-xl border border-red-900/20 text-red-600 text-2xl group-hover:bg-red-600/10 transition-colors">
              <FaShieldAlt />
            </div>
            <div>
              <h5 className="font-black text-xl uppercase tracking-wide text-white">Genuine Component Sourcing</h5>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">We exclusively install authenticated mechanical spares matching genuine high-grade criteria parameters to entirely avoid premature roadside component fatigue or critical engine back-pressure faults.</p>
            </div>
          </div>

          <div className="flex gap-5 items-start p-8 bg-zinc-950/40 rounded-3xl border border-zinc-900 shadow-xl group hover:border-red-900/40 transition-colors">
            <div className="p-3 bg-red-600/5 rounded-xl border border-red-900/20 text-red-600 text-2xl group-hover:bg-red-600/10 transition-colors">
              <FaClipboardCheck />
            </div>
            <div>
              <h5 className="font-black text-xl uppercase tracking-wide text-white">Advanced Diagnostic Audits</h5>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">Utilizing high-tier computational interface link screens to record live system telemetry outputs, ensuring absolute precision when resolving transient electrical harness breaks.</p>
            </div>
          </div>

          <div className="flex gap-5 items-start p-8 bg-zinc-950/40 rounded-3xl border border-zinc-900 shadow-xl group hover:border-red-900/40 transition-colors">
            <div className="p-3 bg-red-600/5 rounded-xl border border-red-900/20 text-red-600 text-2xl group-hover:bg-red-600/10 transition-colors">
              <FaBuilding className="text-red-600" />
            </div>
            <div>
              <h5 className="font-black text-xl uppercase tracking-wide text-white">Rigorous Pre-Delivery Tests</h5>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">Every engine block rebuilding operation undergoes intense continuous dynamometer pressure testing protocols and physical load replication check loops before release permission approval.</p>
            </div>
          </div>
          
          <div className="flex gap-5 items-start p-8 bg-zinc-950/40 rounded-3xl border border-zinc-900 shadow-xl group hover:border-red-900/40 transition-colors">
            <div className="p-3 bg-red-600/5 rounded-xl border border-red-900/20 text-red-600 text-2xl group-hover:bg-red-600/10 transition-colors">
              <FaCheckCircle />
            </div>
            <div>
              <h5 className="font-black text-xl uppercase tracking-wide text-white">Verified Workshop</h5>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">Trusted Toyota & Nissan specialists in Lagos.</p>
            </div>
          </div>

        </div>
      </section>

      {/* VERIFIED INDUSTRIAL CUSTOMER TESTIMONIALS */}
      <motion.section
        className="py-32 px-6 md:px-16 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 relative z-10 border-b border-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="text-center mb-24">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/40">
            Transporter Feedback Records
          </span>
          <h3 className="text-4xl md:text-6xl font-black text-red-600 uppercase mt-6 drop-shadow-[0_0_15px_rgba(220,38,38,0.7)]">
            What Clients Say
          </h3>
          <p className="mt-5 text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Real feedback from commercial transporters and fleet operations coordinators across Lagos state.
          </p>
        </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

  <div className="bg-white/5 border border-red-800 rounded-2xl p-6 text-center">

    <h4 className="text-3xl font-extrabold text-red-500">
      5K+
    </h4>

    <p className="text-gray-400 mt-2">
      Vehicles Serviced
    </p>

  </div>

  <div className="bg-white/5 border border-red-800 rounded-2xl p-6 text-center">

    <h4 className="text-3xl font-extrabold text-red-500">
      98%
    </h4>

    <p className="text-gray-400 mt-2">
      Customer Satisfaction
    </p>

  </div>

  <div className="bg-white/5 border border-red-800 rounded-2xl p-6 text-center">

    <h4 className="text-3xl font-extrabold text-red-500">
      10+
    </h4>

    <p className="text-gray-400 mt-2">
      Years Experience
    </p>

  </div>

  <div className="bg-white/5 border border-red-800 rounded-2xl p-6 text-center">

    <h4 className="text-3xl font-extrabold text-red-500">
      24/7
    </h4>

    <p className="text-gray-400 mt-2">
      Customer Support
    </p>

  </div>

</div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Card Review 1 */}
          <motion.div variants={fadeInUp} whileHover={{ y: -6 }} className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 shadow-2xl relative flex flex-col justify-between">
            <div className="flex gap-1 text-red-600 text-sm mb-5">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic font-light">
              "Excellent workmanship precision and rapid turnout times. Our commercial logistics Hiace delivery vans have recorded zero mechanical down-time margins ever since we moved our preventative maintenance service contracts down to LA Autoworks."
            </p>
            <div className="mt-8 border-t border-zinc-900 pt-4 flex items-center justify-between">
              <div>
                <h5 className="text-white font-extrabold text-sm uppercase tracking-wider">— Fleet Coordinator</h5>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">
                    Verified Customer
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 uppercase">Logistics Operator</span>
            </div>
          </motion.div>

          {/* Card Review 2 */}
          <motion.div variants={fadeInUp} whileHover={{ y: -6 }} className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 shadow-2xl relative flex flex-col justify-between">
            <div className="flex gap-1 text-red-600 text-sm mb-5">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic font-light">
              "Completely honest diagnostic reporting matrices. They pin-pointed a hidden compression failure inside our Nissan engine block within minutes after multiple local workshop teams forced us to pay for unnecessary sensory system hardware swaps."
            </p>
            <div className="mt-8 border-t border-zinc-900 pt-4 flex items-center justify-between">
              <div>
                <h5 className="text-white font-extrabold text-sm uppercase tracking-wider">— Operations Executive</h5>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">
                    Verified Customer
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 uppercase">Haulage Transit</span>
            </div>
          </motion.div>

          {/* Card Review 3 */}
          <motion.div variants={fadeInUp} whileHover={{ y: -6 }} className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 shadow-2xl relative flex flex-col justify-between">
            <div className="flex gap-1 text-red-600 text-sm mb-5">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic font-light">
              "Their specialized micro-circuit wire-tracing setup completely resolved an intermittent ABS control module fault that kept triggering random braking delays on our premium SUVs. Absolute masters of digital auto diagnostics."
            </p>
            <div className="mt-8 border-t border-zinc-900 pt-4 flex items-center justify-between">
              <div>
                <h5 className="text-white font-extrabold text-sm uppercase tracking-wider">— Executive Owner</h5>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">
                    Verified Customer
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 uppercase">Private Asset</span>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ============================================================================
          ✅ 4. GALLERY SECTION (COMPLETELY EXPANDED PHOTO WRAPPERS WITH INTERACTIONS)
         ============================================================================ */}
      <motion.section
        id="gallery"
        className="py-[140px] px-6 md:px-16 bg-zinc-950 relative z-10 border-b border-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center mb-24">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/40">
            Workshop Live Feed Logs
          </span>
          <motion.h3 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-red-600 uppercase mt-6 tracking-tight">
            Our Workshop Gallery
          </motion.h3>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-400 text-xl font-light max-w-2xl mx-auto">
            A literal visualization inside our functional system bays, mechanical repair zones, and advanced metal surface processing lines.
          </motion.p>
        </div>

        {/* Hardcoded 3 Column Component Images Wrappers Sit Safely Here */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Photo Box 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, rotate: -1, boxShadow: "0 30px 60px rgba(220,38,38,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer border border-zinc-900 shadow-2xl h-[420px]"
          >
            <img
              src={gallery1}
              alt="Heavy Duty Powertrain Engine Block Machine Resurfacing Procedure"
              className="h-full w-full object-cover group-hover:scale-110 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-95 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 bg-black/90 px-3 py-1.5 rounded-lg border border-red-900/40">
                Powertrain Zone
              </span>
              <h5 className="text-2xl font-black text-white uppercase mt-4 tracking-wide drop-shadow-md">Core Overhaul Engineering</h5>
              <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 font-light">Calibrating dual overhead camshaft configurations inside custom high-top commercial delivery vehicles.</p>
            </div>
          </motion.div>

          {/* Photo Box 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, rotate: 1, boxShadow: "0 30px 60px rgba(220,38,38,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer border border-zinc-900 shadow-2xl h-[420px]"
          >
            <img
              src={gallery2}
              alt="Automotive Custom Color Thermal Paint Refurbishing Oven Baking Chamber"
              className="h-full w-full object-cover group-hover:scale-110 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-95 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 bg-black/90 px-3 py-1.5 rounded-lg border border-red-900/40">
                Oven Paint Chamber
              </span>
              <h5 className="text-2xl font-black text-white uppercase mt-4 tracking-wide drop-shadow-md">Surface Refurbishing Bay</h5>
              <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 font-light">Executing complete rust protection application sequences inside a pristine, completely sealed thermal environment.</p>
            </div>
          </motion.div>

          {/* Photo Box 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, rotate: -1, boxShadow: "0 30px 60px rgba(220,38,38,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer border border-zinc-900 shadow-2xl h-[420px]"
          >
            <img
              src={gallery3}
              alt="Computational Wire Circuit Harness Telemetry Link Scanning Port"
              className="h-full w-full object-cover group-hover:scale-110 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-95 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 bg-black/90 px-3 py-1.5 rounded-lg border border-red-900/40">
                Electronic Hub
              </span>
              <h5 className="text-2xl font-black text-white uppercase mt-4 tracking-wide drop-shadow-md">ECU Telemetry Diagnostics</h5>
              <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 font-light">Resolving transient multiplex sensory cross-talk errors inside an anti-theft security system matrix.</p>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ============================================================================
          ✅ 5. BEFORE / AFTER SECTION (STRUCTURALLY DETAILED SIDE-BY-SIDE ANALYTICS)
         ============================================================================ */}
      <motion.section
        id="beforeafter"
        className="py-[140px] px-6 md:px-16 bg-black relative z-10 border-b border-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center mb-24">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/40">
            Case Study Project Evaluations
          </span>
          <motion.h3 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-red-600 uppercase mt-6 drop-shadow-[0_0_20px_rgba(220,38,38,0.45)]">
            Before & After Transformations
          </motion.h3>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Inspect exact workshop restoration procedures showing structural sheet damage returned to original production dimensions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Incoming Crash Profile Damage Sheet Panel */}
          <motion.div
            variants={fadeInLeft}
            whileHover={{ scale: 1.015 }}
            className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500"
          >
            <div className="relative overflow-hidden h-[440px]">
              <img
                src={gallery1}
                alt="Incoming crash damage structure state overview profile"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute top-6 left-6 bg-red-600 text-white font-black tracking-widest px-5 py-2.5 rounded-xl text-xs uppercase shadow-2xl border border-red-400/20">
                Arrived Condition (Wreck Evaluation)
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-70" />
            </div>
            <div className="p-8 bg-gradient-to-t from-black via-zinc-950 to-zinc-950 border-t border-zinc-900">
              <div className="flex justify-between items-center mb-5">
                <h4 className="text-2xl font-black text-white uppercase tracking-wide">Structural Impact Profile</h4>
                <span className="font-mono text-xs px-3 py-1 bg-red-950/40 text-red-500 rounded-lg border border-red-900/30">LOG #RE-2940</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                This commercial multi-passenger delivery transport asset arrived following a severe structural broadside impact event. Initial telemetry mapping revealed complete front subframe deflection, fractured engine block auxiliary mounting points, cross-member bending, and complete cooling system rupture.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-mono text-red-900">
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-red-600 rounded-full shrink-0"/> Subframe shifted 42mm</div>
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-red-600 rounded-full shrink-0"/> Module wire cluster sliced</div>
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-red-600 rounded-full shrink-0"/> Zero compression bay 2 & 4</div>
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-red-600 rounded-full shrink-0"/> Radiator track buckled</div>
              </div>
            </div>
          </motion.div>

          {/* Outgoing Completed Restoration Delivery Panel */}
          <motion.div
            variants={fadeInRight}
            whileHover={{ scale: 1.015 }}
            className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500"
          >
            <div className="relative overflow-hidden h-[440px]">
              <img
                src={gallery2}
                alt="Completed flawless paint finish structural alignment delivery"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute top-6 left-6 bg-green-600 text-white font-black tracking-widest px-5 py-2.5 rounded-xl text-xs uppercase shadow-2xl border border-green-400/20">
                Restored Status (Verified Deliverable)
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-70" />
            </div>
            <div className="p-8 bg-gradient-to-t from-black via-zinc-950 to-zinc-950 border-t border-zinc-900">
              <div className="flex justify-between items-center mb-5">
                <h4 className="text-2xl font-black text-red-500 uppercase tracking-wide">Factory Metric Conformance</h4>
                <span className="font-mono text-xs px-3 py-1 bg-green-950/40 text-green-400 rounded-lg border border-green-900/30">System Status: 100% OK</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Our workshop engineers mounted the vehicle onto hydraulic dimension correction pull rigs, bringing structural coordinates back to a 0.0mm factory error plane. Motor components were stripped down completely to swap crankshaft bearings, re-pin wire trees, and apply oven paint armor layers.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-mono text-green-500">
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-green-500 rounded-full shrink-0"/> Alignment restored to spec</div>
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-green-500 rounded-full shrink-0"/> Wire harness repacked & fused</div>
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-green-500 rounded-full shrink-0"/> Motor compression balance OK</div>
                <div className="flex items-center gap-2.5"><span className="w-2 h-2 bg-green-500 rounded-full shrink-0"/> Multi-layer paint gloss baked</div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ============================================================================
          ✅ 6. MAPS SECTION (RESPONSIVE GRID WITH DETAILED META FIELD MODULES)
         ============================================================================ */}
      <motion.section
        id="maps"
        className="py-[140px] px-6 md:px-16 bg-zinc-950 relative z-10 border-b border-zinc-900"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-24">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/40">
            Physical Hub Coordinates
          </span>
          <h3 className="text-4xl md:text-6xl font-black text-red-600 uppercase mt-6 tracking-tight">
            Locate Our Master Workshop
          </h3>
          <p className="mt-4 text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Drive right into our heavy engineering facility for real-time diagnostic reporting printouts.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-stretch">
          
          {/* Explicitly Split Info Rows Elements Layout */}
          <div className="flex flex-col justify-between gap-6">
            
            {/* Box A */}
            <div className="p-8 bg-black border border-zinc-900 rounded-3xl shadow-2xl relative group hover:border-red-900/40 transition-colors duration-300 flex-1">
              <div className="flex gap-5 items-start">
                <div className="p-4 bg-red-600/5 rounded-2xl border border-red-900/30 text-red-600 text-2xl shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wider text-white">Workshop Hub Address</h4>
                  <p className="text-sm text-gray-400 mt-3 font-light leading-relaxed uppercase tracking-wide">
                    Block 1 Mechanic Village, Berger Suya Route, Kirikiri Industrial Axis, Lagos State, Nigeria.
                  </p>
                  <span className="inline-block mt-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Zone: Apapa-Oshodi Grid</span>
                </div>
              </div>
            </div>

            {/* Box B */}
            <div className="p-8 bg-black border border-zinc-900 rounded-3xl shadow-2xl relative group hover:border-red-900/40 transition-colors duration-300 flex-1">
              <div className="flex gap-5 items-start">
                <div className="p-4 bg-red-600/5 rounded-2xl border border-red-900/30 text-red-600 text-2xl shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wider text-white">Direct Assistance Desk</h4>
                  
                  {/* Replaced numeric string item matrix cleanly here */}
                  <p className="text-sm text-gray-400 mt-3 font-mono text-xl font-bold tracking-widest text-red-500">
                    <a href="tel:+2348033077485" className="hover:text-red-500 transition">0803 307 7485</a> {/* */}
                  </p>
                  
                  <p className="text-xs text-zinc-500 mt-2 font-light">Our communication desk remains open around the clock for dispatch coordination.</p>
                </div>
              </div>
            </div>

            {/* Box C */}
            <div className="p-8 bg-black border border-zinc-900 rounded-3xl shadow-2xl relative group hover:border-red-900/40 transition-colors duration-300 flex-1">
              <div className="flex gap-5 items-start">
                <div className="p-4 bg-red-600/5 rounded-2xl border border-red-900/30 text-red-600 text-2xl shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wider text-white">Operational Windows</h4>
                  <p className="text-sm text-gray-400 mt-3 font-light leading-relaxed">
                    Monday — Saturday: <span className="text-white font-black font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800 ml-1 text-xs">8:00 AM — 6:00 PM</span>
                  </p>
                  <p className="text-[11px] text-red-500 mt-3 font-bold uppercase tracking-wider bg-red-950/20 inline-block px-2.5 py-1 rounded border border-red-900/20">
                    Sundays: Deployed Emergency Tows Only
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Deep Extended Custom Contrast Iframe Map Element Screen */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-zinc-900 shadow-[0_20px_50px_rgba(220,38,38,0.1)] relative min-h-[450px]">
            <iframe
              title="LA AUTOWORKS Master Workshop Map Grid Coordinates Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0537242137953!2d3.3242279!3d6.514878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8eec4c27a943%3A0xe2be19b6da80ee5c!2sBerger%20Suya%20Mechanic%20Village!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.94) contrast(1.2) brightness(0.85)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </motion.section>
<div className="bg-white/5 border border-red-800 rounded-2xl p-5 mb-8 max-w-2xl mx-auto">

  <p className="text-red-400 font-bold text-lg">
    ✔ Professional Diagnostics & Repair Assurance
  </p>

  <p className="text-gray-400 mt-2">
    We prioritize accurate diagnostics,
    transparent service processes,
    and quality-focused repair solutions.
  </p>

</div>
      {/* ============================================================================
          ✅ 7. FINAL CTA SECTION (HIGH INTENSITY BUTTON INTERACTION SYSTEM PANEL)
         ============================================================================ */}
      <motion.section
        className="py-[160px] px-6 md:px-16 bg-gradient-to-br from-red-950/30 via-black to-zinc-950 text-center relative z-10 border-b border-zinc-900"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          
          <motion.h3
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-none uppercase tracking-tight drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
          >
            Ready To Restore Your Vehicle To Peak Performance?
          </motion.h3>

          <p className="mt-10 text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            Do not delay standard mechanical updates or risk motor block failure. Claim your dealership grade diagnostics diagnostic scan sheet printout right now with Lagos state's trusted auto professionals.
          </p>

          {/* Double Anchor Execution Matrix */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowModal(true)}
              className="bg-red-600 hover:bg-red-700 px-16 py-5 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl transition-all duration-300 border border-red-500/20 hover:shadow-[0_0_50px_rgba(220,38,38,0.9)] cursor-pointer"
            >
              Book A Service
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/2348033077485"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-16 py-5 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl flex items-center gap-3 transition-all duration-300 border border-green-500/20 hover:shadow-[0_0_50px_rgba(34,197,94,0.85)]"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp Now
            </motion.a>
          </div>
          
          {/* Detailed Verification Footer Accent Row */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-xs text-zinc-500 uppercase tracking-widest font-mono font-bold">
            <span className="flex items-center gap-2.5"><FaCheckCircle className="text-red-600 text-sm" /> Fast Diagnosis</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <span className="flex items-center gap-2.5"><FaCheckCircle className="text-red-600 text-sm" /> Genuine OEM Spares</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <span className="flex items-center gap-2.5"><FaCheckCircle className="text-red-600 text-sm" /> Multi-System Load Audits</span>
          </div>

        </div>
      </motion.section>

      {/* EXPLICIT WORKSHOP GENERIC CONTACT DESK INFO ROW GRID */}
      <section id="contact" className="py-28 px-6 md:px-16 bg-black text-center relative z-10 border-b border-zinc-900/40">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/40">
            Secure Desk Communication Links
          </span>
          <h3 className="text-4xl font-black text-red-600 mt-6 mb-16 tracking-wide uppercase">Contact Desk</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300">
            {/* Node 1 */}
            <div className="flex flex-col items-center p-8 bg-zinc-950 border border-zinc-900/80 rounded-2xl shadow-xl hover:border-red-900/20 transition-colors">
              <div className="w-12 h-12 bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center border border-red-900/20 text-xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h5 className="font-black text-lg text-white uppercase tracking-wide mb-2">Our Location</h5>
              <p className="text-gray-300 text-xs uppercase leading-relaxed font-light">
                <a
                  href="https://maps.google.com/?q=Block+1+Mechanic+Village+Berger+Suya+Road+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  BLOCK 1 MECHANIC VILLAGE,
                  BERGER SUYA ROAD,
                  LAGOS, NIGERIA
                </a>
              </p>
            </div>
            {/* Node 2 */}
            <div className="flex flex-col items-center p-8 bg-zinc-950 border border-zinc-900/80 rounded-2xl shadow-xl hover:border-red-900/20 transition-colors">
              <div className="w-12 h-12 bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center border border-red-900/20 text-xl mb-4">
                <FaPhoneAlt />
              </div>
              <h5 className="font-black text-lg text-white uppercase tracking-wide mb-2">Hotline Desk</h5>
              <p className="text-sm text-gray-400 font-mono font-bold">0803 307 7485</p>
              <p className="text-[10px] text-zinc-500 mt-2 font-light">Direct emergency recovery response loop channels.</p>
            </div>
            {/* Node 3 */}
            <div className="flex flex-col items-center p-8 bg-zinc-950 border border-zinc-900/80 rounded-2xl shadow-xl hover:border-red-900/20 transition-colors">
              <div className="w-12 h-12 bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center border border-red-900/20 text-xl mb-4">
                <FaClock />
              </div>
              <h5 className="font-black text-lg text-white uppercase tracking-wide mb-2">Work Shifts</h5>
              <p className="text-xs text-gray-400 font-medium">Monday — Saturday</p>
              
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-semibold">
                  Currently Open
                </span>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
  
</div>
              </div>
          

              <p className="text-[11px] text-zinc-500 mt-1 font-mono">8:00 AM — 6:00 PM</p>
            </div>
          </div>
          {/* Node 4 */}
<div className="flex flex-col items-center p-8 bg-zinc-950 border border-zinc-900/80 rounded-2xl">
  <div className="w-12 h-12 bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center">
    <FaClock />
  </div>

  <h5 className="font-black text-lg text-white uppercase tracking-wide mb-4 mt-4">
    Business Hours
  </h5>

  <div className="space-y-2 text-gray-300 text-center">
    <p>
      <span className="font-semibold text-white">
        Mon – Fri:
      </span>{" "}
      8:00 AM – 6:00 PM
    </p>

    <p>
      <span className="font-semibold text-white">
        Saturday:
      </span>{" "}
      9:00 AM – 4:00 PM
    </p>

    <p>
      <span className="font-semibold text-white">
        Sunday:
      </span>{" "}
      By Appointment
    </p>

    <div className="pt-3 border-t border-white/10">
      <p className="text-green-400 font-semibold">
        Emergency Service Available
      </p>
    </div>
  </div>
</div>
        </div>
        {/* Service Area Coverage */}
<div className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
  <div className="text-center mb-10">
    <h3 className="text-3xl font-black text-white uppercase tracking-wide mb-3">
      Areas We Serve
    </h3>

    <p className="text-gray-400 max-w-2xl mx-auto">
      Professional automotive repair, diagnostics, maintenance and recovery
      services across Lagos and surrounding areas.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      "Surulere",
      "Yaba",
      "Ikeja",
      "Maryland",
      "Ojota",
      "Ogudu",
      "Ketu",
      "Victoria Island",
      "Lekki",
      "Ajah",
      "Ikoyi",
      "Festac"
    ].map((area) => (
      <div
        key={area}
        className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 text-center hover:border-red-500/50 transition-all duration-300"
      >
        <span className="text-gray-200 font-semibold">
          {area}
        </span>
      </div>
    ))}
  </div>

  <div className="mt-8 text-center">
    <p className="text-green-400 font-semibold">
      Mobile support available in selected areas
    </p>
  </div>
</div>
{/* Frequently Asked Questions */}
<div className="mt-16 bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12">
  <div className="text-center mb-10">
    <h3 className="text-3xl font-black text-white uppercase tracking-wide mb-3">
      Frequently Asked Questions
    </h3>

    <p className="text-gray-400">
      Quick answers to common customer questions.
    </p>
  </div>

  <div className="space-y-4">
    <details className="bg-white/5 border border-white/10 rounded-xl p-5">
      <summary className="cursor-pointer font-bold text-white">
        Do I need an appointment?
      </summary>
      <p className="text-gray-400 mt-3">
        Walk-ins are welcome, but appointments help us serve you faster.
      </p>
    </details>

    <details className="bg-white/5 border border-white/10 rounded-xl p-5">
      <summary className="cursor-pointer font-bold text-white">
        Do you offer emergency assistance?
      </summary>
      <p className="text-gray-400 mt-3">
        Yes. Emergency support is available for selected service requests.
      </p>
    </details>

    <details className="bg-white/5 border border-white/10 rounded-xl p-5">
      <summary className="cursor-pointer font-bold text-white">
        What vehicles do you service?
      </summary>
      <p className="text-gray-400 mt-3">
        We service most passenger vehicles, SUVs, and light commercial vehicles.
      </p>
    </details>

    <details className="bg-white/5 border border-white/10 rounded-xl p-5">
      <summary className="cursor-pointer font-bold text-white">
        How long does diagnosis take?
      </summary>
      <p className="text-gray-400 mt-3">
        Most diagnostics are completed the same day depending on vehicle condition.
      </p>
    </details>
  </div>
</div>
{/* Enterprise Conversion CTA */}
<div className="mt-16 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/40 via-black to-red-950/40 p-8 md:p-12 overflow-hidden relative">

  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
  </div>

  <div className="relative z-10 text-center">
    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide mb-4">
      Need Professional Auto Repair?
    </h3>

    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
      Our experienced technicians are ready to help with diagnostics,
      maintenance, repairs, recovery support, and emergency assistance.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="tel:08033077485"
        className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-white font-bold transition-all duration-300"
      >
        Call Now
      </a>

      <a
        href="https://wa.me/2348033077485"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 border border-white/20 hover:border-red-500 rounded-xl text-white font-bold transition-all duration-300"
      >
        WhatsApp Booking
      </a>
    </div>
  </div>
</div>

      </section>

      {/* STRUCTURAL PERSISTENT QUICK ACCESS ACTION HOVER BUTTON MATRICES */}
      <a
        href="https://wa.me/2348033077485"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 relative bg-green-600 hover:bg-green-700 hover:shadow-[0_0_35px_rgba(34,197,94,0.95)] text-white p-5 rounded-full shadow-2xl z-50 animate-bounce transition-all duration-300 border border-green-500/30"
        aria-label="Launch WhatsApp Communication Portal"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute -top-2 -left-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-lg">
  LIVE
</span>
      </a>
<motion.a
  href="#home"
  whileHover={{
    scale: 1.12,
    y: -5,
  }}
  whileTap={{
    scale: 0.92,
  }}
  className="fixed bottom-28 right-6 bg-red-600 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] text-white p-4 rounded-full shadow-2xl z-50"
>

  <FaArrowUp className="text-2xl" />

</motion.a>
      <motion.a
        href="#home"
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-26 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl z-40 transition-all duration-300 border border-red-500/30"
        aria-label="Scroll Back To Page Roof Header"
      >
        <FaArrowUp className="text-xl" />
      </motion.a>

      {/* ============================================================================
          INTERACTIVE RESERVATION BOOKING MODAL PANEL (EXPLICIT LONG-FORM JSX UNROLL)
         ============================================================================ */}
      {showModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[99999] px-6 py-6 overflow-y-auto">
          <motion.div
            className="bg-zinc-950 border border-red-900/60 rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative my-auto overflow-hidden"
            initial={{ opacity: 0, scale: 0.82, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            {/* Modal Ambient Corner Backlight Geometric Core Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-center mb-8 relative z-10">
              <div>
                <h3 className="text-3xl font-black text-red-600 tracking-wide uppercase">
                  Schedule Service Appointment
                </h3>
                <p className="text-xs text-gray-500 font-light mt-1.5">Provide explicit vehicle parameter breakdowns to allocate a priority garage bay slot.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-gray-400 text-4xl hover:text-red-500 focus:outline-none transition-colors p-2 cursor-pointer select-none"
              >
                ×
              </button>
            </div>

            {/* Form System Connected to Replaced Submit Handler via onSubmit */}
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}> {/* */}
              
              {/* Input Group A: Full Registered Name Input */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 font-black">Full Registered Name *</label>
                <input
                  type="text"
                  required //
                  name="name" //
                  value={formData.name} //
                  onChange={handleChange} //
                  placeholder="e.g., Chief Alabi Frank"
                  className="w-full bg-black border border-zinc-900 rounded-xl px-5 py-4 text-white outline-none transition-all duration-300 hover:border-zinc-700 focus:border-red-500 focus:shadow-[0_0_25px_rgba(220,38,38,0.25)] focus:scale-[1.01]"
                />
              </div>

              {/* Input Group B: Contact Phone Number Input */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 font-black">Contact Phone Number *</label>
                <input
                  type="tel"
                  required //
                  minLength={11} //
                  name="phone" //
                  value={formData.phone} //
                  onChange={handleChange}
                  placeholder="e.g., 08033077485"
                  className="w-full bg-black border border-zinc-900 rounded-xl px-5 py-4 text-white outline-none transition-all duration-300 hover:border-zinc-700 focus:border-red-500 focus:shadow-[0_0_25px_rgba(220,38,38,0.25)] focus:scale-[1.01]"
                />
              </div>

              {/* Input Group C: Service Selection Dropdown */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 font-black">Select Service Type *</label>
                <select
                  required //
                  name="service" //
                  value={formData.service} //
                  onChange={handleChange} //
                  className="w-full bg-black border border-red-800 rounded-xl px-5 py-4 text-white outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50" //
                >
                  <option value="">Select Service</option> {/* */}
                  <option value="Engine Repairs">Engine Repairs</option> {/* */}
                  <option value="Electrical Repairs">Electrical Repairs</option> {/* */}
                  <option value="AC Repairs">AC Repairs</option> {/* */}
                  <option value="Diagnostics">Diagnostics</option> {/* */}
                  <option value="Fleet Maintenance">Fleet Maintenance</option> {/* */}
                  <option value="Body Works">Body Works</option> {/* */}
                </select> {/* */}
              </div>

              {/* Input Group C2: Priority Level Dropdown Segment */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 font-black">Select Priority Level *</label>
                <select
                  required
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full bg-black border border-red-800 rounded-xl px-5 py-4 text-white outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50"
                >
                  <option value="">Select Priority Level</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Standard">Standard</option>
                </select>
              </div>

              {/* Input Group D: Technical Issue Summary Textarea Input */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 font-black">Technical Issue Summary *</label>
                <textarea
                  required //
                  name="message" //
                  value={formData.message} //
                  onChange={handleChange}
                  placeholder="Please give extensive structural/mechanical descriptions (e.g., Automatic gear shift lag during transition from 2nd to 3rd gear, dashboard climate blower clicking, or full outer body panels spray required...)"
                  className="w-full bg-black border border-zinc-900 rounded-xl px-5 py-4 text-white outline-none min-h-[120px] max-h-[200px] transition-all duration-300 hover:border-zinc-700 focus:border-red-500 focus:shadow-[0_0_25px_rgba(220,38,38,0.25)] focus:scale-[1.01]"
                />
              </div>

              {/* Input Group E: Authorization Verification */}
              <div className="p-4 bg-red-950/20 rounded-xl border border-red-900/30 flex gap-3.5 items-start">
                <input 
                  type="checkbox" 
                  required 
                  id="modal-consent" 
                  checked={formConsent}
                  onChange={(e) => setFormConsent(e.target.checked)}
                  className="mt-1 accent-red-600 w-4 h-4 cursor-pointer" 
                />
                <label htmlFor="modal-consent" className="text-[11px] text-zinc-500 font-light leading-relaxed cursor-pointer select-none">
                  I explicitly provide clearance metrics authorizing the engineering deck at LA Autoworks to log my mechanical asset issues profile and communicate over phone systems grids regarding target repair statuses.
                </label>
              </div>

              {/* Submit Control Action */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4.5 font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.45)] mt-4 cursor-pointer"
              >
                Send Appointment Registry Request
              </motion.button>
              
              {/* Added 5-15 minute tracking response reassurance note */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Our team typically responds within 5-15 minutes during business hours.
              </p> {/* */}
            </form>
          </motion.div>
        </div>
      )}

      {/* ============================================================================
          PERSISTENT PAGE ROOF AND STRUCTURAL FOOTER BRANDING MODULE
         ============================================================================ */}
      <footer className="bg-gradient-to-b from-black via-zinc-950 to-red-950/40 border-t border-zinc-900 py-20 text-center text-gray-500 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <h3 className="text-3xl md:text-5xl font-black text-red-600 tracking-tighter uppercase font-sans">
            LA AUTOWORKS
          </h3>
          
          <p className="mt-5 text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm font-light tracking-wide">
            Premium automotive computer system diagnostics, heavy multi-plate powertrain overhauling, dust-free paint oven baking restorations, suspension track alignment strengthening, and commercial high-uptime logistics fleet contract maintenance networks. Based proudly inside Lagos state, Nigeria.
          </p>
          
          {/* Unrolled Explicit Footer Matrix Text Sub-links */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-10 text-[11px] font-mono font-bold tracking-widest text-zinc-600 uppercase">
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Dealership Repairs</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Fleet Maintenance blue-prints</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">24/7 Breakdown Dispatch Systems</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Lagos Workshop Base</span>
          </div>

          <div className="w-32 h-[1px] bg-red-900/20 mx-auto my-10" />

          {/* Legal Matrix Disclaimers Content */}
          <p className="text-zinc-700 text-xs font-mono tracking-wide">
            <p className="mt-8 text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">

  Service timelines and repair recommendations may vary
  depending on vehicle condition, diagnostic outcomes,
  parts availability, and workshop assessment procedures.

</p>
            © 2026 LA AUTOWORKS LIMITED. All Rights Reserved. Engineered with precision mechanics tools matrices.
          </p>
          
        </div>
      </footer>
{/* MOBILE QUICK ACTION BAR */}

<div className="fixed bottom-0 left-0 right-0 md:hidden bg-black/95 border-t border-red-900 z-50">

  <div className="grid grid-cols-3">

    <a
      href="tel:+2348033077485"
      className="flex flex-col items-center justify-center py-4 text-white hover:bg-red-950 transition"
    >
      <FaPhoneAlt className="text-red-500 text-xl" />
      <span className="text-xs mt-1">
        Call
      </span>
    </a>

    <a
      href="https://wa.me/2348033077485"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center py-4 text-white hover:bg-red-950 transition"
    >
      <FaWhatsapp className="text-green-500 text-xl" />
      <span className="text-xs mt-1">
        WhatsApp
      </span>
    </a>

    <button
      onClick={() => setShowModal(true)}
      className="flex flex-col items-center justify-center py-4 text-white hover:bg-red-950 transition"
    >
      <FaTools className="text-red-500 text-xl" />
      <span className="text-xs mt-1">
        Book
      </span>
    </button>

  </div>

</div>
    </div>
  );
}

export default App;