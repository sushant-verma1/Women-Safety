import {
  ArrowRight,
  Shield,
  MessageCircle,
  FileText,
  Heart,
  CheckCircle,
  Lock,
  Minus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StepCard from "../components/StepCard";
import TelegramIcon from "../components/Telegram";

const TELEGRAM_BOT_URL = "t.me/women_safety_assistant_bot"

const steps = [
  {
    number: "01",
    title: "Start a Conversation",
    desc: "Connect with our Telegram Bot.",
    icon: (
      <svg
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
      >
        <ellipse cx="34" cy="34" rx="26" ry="21" fill="#f97040" />
        <path
          d="M14 54 Q18 48 20 46"
          stroke="#f97040"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="24" cy="34" r="3.5" fill="white" />
        <circle cx="34" cy="34" r="3.5" fill="white" />
        <circle cx="44" cy="34" r="3.5" fill="white" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Share Your Concern",
    desc: "Tell us what happened or ask for help.",
    icon: (
      <svg
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
      >
        <rect x="16" y="8" width="32" height="42" rx="6" fill="#9d93e0" />
        <rect x="18" y="10" width="28" height="38" rx="5" fill="#b0a8f0" />
        <rect
          x="22"
          y="18"
          width="20"
          height="4"
          rx="2"
          fill="white"
          opacity="0.9"
        />
        <rect
          x="22"
          y="26"
          width="20"
          height="4"
          rx="2"
          fill="white"
          opacity="0.9"
        />
        <rect
          x="22"
          y="34"
          width="14"
          height="4"
          rx="2"
          fill="white"
          opacity="0.9"
        />
        <rect
          x="36"
          y="40"
          width="14"
          height="18"
          rx="3"
          fill="#f97040"
          transform="rotate(-15 36 40)"
        />
        <rect
          x="39"
          y="42"
          width="2"
          height="11"
          rx="1"
          fill="white"
          transform="rotate(-15 36 40)"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Instant Support",
    desc: "Receive guidance, resources & next steps.",
    icon: (
      <svg
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
      >
        <path
          d="M18 36 C18 24 50 24 50 36"
          stroke="#a89fe8"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="11" y="34" width="10" height="16" rx="5" fill="#9d93e0" />
        <rect x="47" y="34" width="10" height="16" rx="5" fill="#9d93e0" />
        <ellipse cx="34" cy="46" rx="14" ry="11" fill="#f97040" />
        <path
          d="M26 55 Q28 50 30 48"
          stroke="#f97040"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="28" cy="46" r="2" fill="white" />
        <circle cx="34" cy="46" r="2" fill="white" />
        <circle cx="40" cy="46" r="2" fill="white" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Stay Safe & Informed",
    desc: "We're with you, always.",
    icon: (
      <svg
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
      >
        <path
          d="M34 8 L52 16 L52 35 C52 47 34 57 34 57 C34 57 16 47 16 35 L16 16 Z"
          fill="#e05820"
        />
        <path
          d="M34 10 L50 17.5 L50 35 C50 46 34 55.5 34 55.5 C34 55.5 18 46 18 35 L18 17.5 Z"
          fill="#f47840"
        />
        <path
          d="M24 34 L30 41 L44 26"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white">
        {/* Hero Section - UNCHANGED */}
        <section className="relative min-h-screen bg-[#FFFDFB] overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF1E8_0%,transparent_55%)]" />

          {/* Hero Content */}
          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 text-center">
            {/* Heading */}
            <h1 className="z-20 mt-5 text-6xl font-black leading-[0.9] md:text-7xl lg:text-[5.5rem]">
              <span className="block text-[#0A1E5E]">Report.</span>
              <span className="block text-[#0A1E5E]">Protect.</span>
              <span className="block text-[#FF5A1F]">Empower.</span>
            </h1>

            {/* Description */}
            <p className="z-20 mt-6 max-w-2xl text-lg text-slate-600">
              <span className="font-bold text-slate-900">SakhiAI</span> is your
              trusted companion for filing complaints,
              <br />
              getting guidance, and staying safe anytime, anywhere.
            </p>

            {/* Buttons */}
            <div className="z-20 mt-5 flex flex-col gap-8 sm:flex-row">
              <button
                onClick={() => navigate("/complaint")}
                className="flex items-center gap-4 rounded-2xl border border-orange-400 px-7 py-2 shadow-lg hover:shadow-xl bg-[#f2d3c8]/80"
              >
                <span className="text-3xl">📋</span>
                <span className="font-bold text-lg ">File a Complaint</span>
                <ArrowRight className="h-15 w-10 pl-2 text-orange-500" />
              </button>

              <button
                onClick={() => navigate("/chatbot")}
                className="flex items-center gap-4 rounded-2xl border border-blue-300 bg-blue-100/80 px-7 py-2 shadow-lg hover:shadow-xl"
              >
                <span className="text-3xl">🤖</span>
                <span className="font-bold text-[#0A1E5E] text-lg">
                  AI Safety Assistant
                </span>
                <ArrowRight className="h-15 w-10 pl-2 text-blue-500" />
              </button>
            </div>

            {/* Illustration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/5 w-full ">
              <img
                src="/bg.png"
                alt="Women Empowerment"
                className="w-full object-contain opacity-90"
              />
            </div>
          </div>
        </section>

        {/* Bot Features Section */}
        <section className="relative mx-3 my-4 rounded-2xl bg-gradient-to-b from-purple-300/50 to-purple-50 px-3 py-10 sm:mx-4 sm:px-4 sm:py-12 md:mx-8 md:px-6 md:py-14 lg:mx-40 lg:my-15 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-12">
              {/* Left - Bot Image Placeholder */}
              <div className="flex justify-center lg:justify-start items-start">
                <div className="relative flex h-70 w-full items-center justify-center sm:h-60 md:h-70 lg:w-100">
                  <div className="text-7xl mb-2 rounded-3xl">
                    <img
                      src="/Bot.png"
                      alt=""
                      className="w-full object-contain opacity-90 overflow-hidden rounded-5xl"
                    />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                {/* Heading */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    We designed a bot for{" "}
                    <span className="text-purple-600">your safety.</span>
                  </h2>
                  <p className="mt-3 text-lg text-slate-600 leading-relaxed">
                    Our AI Safety Assistant is always here to listen, guide and
                    support you. Report incidents, get instant help and access
                    important resources{" "}
                    <span className="text-pink-600">
                      {" "}
                      — because your safety is our priority.
                    </span>
                  </p>
                </div>

                {/* Feature Cards - 4 in a row */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                  {/* Report Anonymously */}
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-base font-semibold text-slate-900 leading-tight">
                      Report Anonymously
                    </p>
                  </div>

                  {/* Get Instant Guidance */}
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <MessageCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-base font-semibold text-slate-900 leading-tight">
                      Get Instant Guidance
                    </p>
                  </div>

                  {/* 24x7 Confidential Support */}
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Lock className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-base font-semibold text-slate-900 leading-tight">
                      24x7 Confidential Support
                    </p>
                  </div>

                  {/* You Are Not Alone */}
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Heart className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-base font-semibold text-slate-900 leading-tight">
                      You Are Not Alone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Telegram Bot CTA */}
        <section onClick={() =>
                  window.open(
                    "https://t.me/women_safety_assistant_bot",
                    "_blank"
                  )
                } className="relative mx-3 rounded-3xl bg-gradient-to-b from-purple-50 to-white px-3 py-8 sm:mx-4 sm:px-4 sm:py-10 md:mx-8 md:px-5 md:py-10 lg:mx-40 lg:px-6 lg:py-15">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl p-4 backdrop-blur-base sm:p-5 md:p-6">
              {/* Decorative sparkles */}
              <div className="absolute top-6 left-12 text-2xl opacity-30">
                ✨
              </div>
              <div className="absolute bottom-8 right-12 text-2xl opacity-30">
                ✨
              </div>

              <div className="grid items-center gap-6 px-2 sm:grid-cols-1 sm:px-3 md:grid-cols-2 md:px-4 lg:grid-cols-2 lg:gap-8 lg:px-5 ">
                <div onClick={() =>
                  window.open(
                    "https://t.me/women_safety_assistant_bot",
                    "_blank"
                  )
                } className="w-full sm:text-center md:w-80 md:text-left cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ">
                  <h3 className="text-lg md:text-3xl font-bold text-slate-900 mb-4 ">
                    Click to connect with <br />
                    <span className="text-purple-600">Telegram Bot</span>
                  </h3>
                  <p className="text-xl text-slate-700">
                    Get instant support and guidance in your Telegram app.
                  </p>
                </div>

                <div className="flex justify-center sm:justify-center md:justify-end">
                  <button
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center w-15 h-15 bg-white rounded-full">
                      <TelegramIcon size={40} color="blue" />
                    </div>

                    <span className="text-xl">Connect with Telegram Bot</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* How our bot works */}
        <section className="mx-3 rounded-[32px] bg-[#fdf7f4] px-3 py-10 font-['Segoe_UI',Arial,sans-serif] sm:mx-4 sm:px-4 sm:py-12 md:mx-10 md:px-6 md:py-14 lg:mx-[150px] lg:px-4 lg:py-[60px]">
          <div className="mx-auto max-w-[1100px] rounded-[40px] bg-white p-6 shadow-[0_8px_48px_rgba(200,120,70,0.10)] sm:p-8 md:p-10 lg:p-[56px_48px_48px]">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 20px",
                  borderRadius: 50,
                  background: "#fff0e8",
                  color: "#e07030",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                — THE PROCESS —
              </div>

              <h2
                style={{
                  fontSize: 45,
                  fontWeight: 900,
                  background:
                    "linear-gradient(90deg, #6c32c8 0%, #c0399e 50%, #e96520 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  margin: "0 0 14px",
                  fontFamily: "Georgia, serif",
                }}
              >
                How Our Bot Works
              </h2>

              <p style={{ color: "#999", fontSize: 18, margin: 0 }}>
                Simple steps to get the support and guidance you need.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="relative grid gap-8 sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  style={{
                    textAlign: "center",
                    position: "relative",
                    padding: "0 12px",
                  }}
                >
                  {/* Number Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: -8,
                      left: 20,
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #f97030 0%, #e05a20 100%)",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 3px 10px rgba(230,100,30,0.35)",
                      zIndex: 2,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 40% 35%, #fff 55%, #f5ede8 100%)",
                      boxShadow: "0 4px 28px rgba(200,120,70,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 22px",
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Text */}
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#1a1a2e",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#aaa",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>

                  {/* Dashed Arrow (not on last step) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-[70px] right-[-16px] z-[3] hidden items-center md:flex">
                      <div
                        style={{
                          width: 26,
                          borderTop: "2px dashed #f0a070",
                        }}
                      />
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "6px solid transparent",
                          borderBottom: "6px solid transparent",
                          borderLeft: "9px solid #f0a070",
                          marginLeft: 2,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Dots */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 40,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 5,
                  borderRadius: 3,
                  background: "#f0a070",
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
            </div>
          </div>
        </section>

        {/* NGO Partners Section - HORIZONTAL SCROLL CAROUSEL */}
        <section className="relative mx-3 my-5 rounded-3xl bg-gradient-to-b from-white via-orange-50/50 to-white px-3 py-12 sm:mx-4 sm:px-4 sm:py-14 md:mx-8 md:px-6 md:py-16 lg:mx-40 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl w-full">
            {/* Header */}
            <div className="text-center space-y-3 mb-16">
              <p className="text-sm uppercase tracking-widest font-semibold text-orange-600">
                Supported by
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">
                Connect with{" "}
                <span className="text-[#FF5A1F]">Women Safety NGOs</span>
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Partner organizations dedicated to women's safety and
                empowerment
              </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative">
              {/* Left Gradient Fade */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

              {/* Right Gradient Fade */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Scroll Container */}
              <div
                className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
                style={{
                  scrollBehavior: "smooth",
                  msOverflowStyle: "none",
                  scrollbarWidth: "thin",
                }}
              >
                {/* Jagori Card */}
                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop")',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                          <p className="text-xs uppercase tracking-widest font-bold text-white">
                            NGO Partner
                          </p>
                        </div>
                        <h4 className="text-3xl font-black mb-2">Jagori</h4>
                        <p className="text-sm text-white/90 leading-relaxed">
                          Women's safety and empowerment support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safecity Card */}
                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop")',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                          <p className="text-xs uppercase tracking-widest font-bold text-white">
                            NGO Partner
                          </p>
                        </div>
                        <h4 className="text-3xl font-black mb-2">Safecity</h4>
                        <p className="text-sm text-white/90 leading-relaxed">
                          Safety mapping and awareness
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SNEHA Card */}
                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1543269865-cbdf26effbad?w=600&h=800&fit=crop")',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                          <p className="text-xs uppercase tracking-widest font-bold text-white">
                            NGO Partner
                          </p>
                        </div>
                        <h4 className="text-3xl font-black mb-2">SNEHA</h4>
                        <p className="text-sm text-white/90 leading-relaxed">
                          Crisis intervention and support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nirbhaya Card */}
                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1552664730-1d95fbc8b3ff?w=600&h=800&fit=crop")',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                          <p className="text-xs uppercase tracking-widest font-bold text-white">
                            NGO Partner
                          </p>
                        </div>
                        <h4 className="text-3xl font-black mb-2">Nirbhaya</h4>
                        <p className="text-sm text-white/90 leading-relaxed">
                          Legal empowerment and aid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Maitri Card */}
                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop")',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                          <p className="text-xs uppercase tracking-widest font-bold text-white">
                            NGO Partner
                          </p>
                        </div>
                        <h4 className="text-3xl font-black mb-2">Maitri</h4>
                        <p className="text-sm text-white/90 leading-relaxed">
                          Counselling and crisis care
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Hint */}
              <div className="flex justify-center mt-8">
                <p className="text-base text-slate-500 font-semibold">
                  ← Scroll to explore →
                </p>
              </div>
            </div>
          </div>

          <style jsx>{`
            div::-webkit-scrollbar {
              height: 4px;
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
            div::-webkit-scrollbar-thumb {
              background: #ff5a1f;
              border-radius: 10px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #e84b0f;
            }
          `}</style>
        </section>

        {/* Final CTA Section */}
        <section className="mx-3 my-5 rounded-3xl bg-gradient-to-b from-purple-50 to-pink-50 px-3 py-10 sm:mx-4 sm:px-4 sm:py-12 md:mx-8 md:px-6 md:py-14 lg:mx-40 lg:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl">
              <div className="grid items-center gap-8 p-4 sm:grid-cols-1 sm:p-6 md:grid-cols-2 md:gap-10 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-16">
                {/* Left Content */}
                <div className="w-full space-y-6 sm:w-full md:w-90">
                  <p className="text-sm uppercase tracking-widest font-semibold text-purple-600">
                    You deserve to be safe.
                  </p>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900">
                    We're here for you,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      always.
                    </span>
                  </h3>
                  <p className="text-lg text-slate-900">
                    Save our bot and take the first step towards a safer you.
                    Start the chat, get confidential help, and keep moving
                    forward with confidence.
                  </p>

                  <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                    <span>💬</span>
                    Start Chat Now
                  </button>
                </div>

                {/* Right Phone Mockup */}
                <div className="relative mx-0 my-4 flex items-center justify-center rounded-3xl sm:mx-0 sm:my-6 md:mx-8 md:my-10">
                  <div className="relative flex h-96 w-72 items-center justify-center overflow-hidden rounded-3xl border-8 border-black bg-black shadow-2xl sm:w-80 md:h-100 md:w-90">
                    {/* Phone Screen */}
                    <div className="absolute inset-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-2xl flex flex-col items-center justify-center p-6">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <span className="text-4xl">
                          <img
                            src="/Bot.png"
                            alt=""
                            srcSet=""
                            className="overflow-hidden rounded-full "
                          />
                        </span>
                      </div>
                      <p className="text-white font-bold text-center mb-4">
                        Sakhi AI Bot
                      </p>
                      <p className="text-white/80 text-base text-center mb-6">
                        Always here to support you
                      </p>
                      <button className="px-8 py-2 rounded-full bg-purple-600 text-white font-semibold text-base hover:bg-purple-700 transition-all">
                        Start Chat
                      </button>
                    </div>

                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-8 right-12 text-4xl opacity-40">
                    💕
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-6xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Ready to take the first step?
            </h3>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Connect with Sakhi AI today and join thousands of women who are
              taking <br />control of their safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/chatbot")}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all"
              >
                Chat with Sakhi AI
              </button>
              <button
                onClick={() => navigate("/complaint")}
                className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-all"
              >
                File a Complaint
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
