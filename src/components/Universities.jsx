import { FadeIn } from "./FadeIn";

const universities = [
  {
    id: 1,
    name: "La Trobe University",
    code: "(CRICOS 00115M)",
    logo: "",
  },
  {
    id: 2,
    name: "University of Tasmania",
    code: "(CRICOS 00586B)",
    logo: "",
  },
  {
    id: 3,
    name: "Charles Sturt University",
    code: "(CRICOS 00005F)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%232ECC71' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECSU%3C/text%3E%3C/svg%3E",
  },
  {
    id: 4,
    name: "Torrens University",
    code: "(CRICOS 03389E)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%23F39C12' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETorrens%3C/text%3E%3C/svg%3E",
  },
  {
    id: 5,
    name: "RMIT University",
    code: "(CRICOS 00122F)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%239B59B6' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERMIT%3C/text%3E%3C/svg%3E",
  },
  {
    id: 6,
    name: "Macquarie University",
    code: "(CRICOS 00002J)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%231ABC9C' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMacquarie%3C/text%3E%3C/svg%3E",
  },
];

export function Universities() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-[70px]">
            <div className="inline-block py-2 px-5 rounded-[30px] mb-5">
              <span className="text-[#0025faff] text-[13px] font-bold tracking-[1px] uppercase">
                Our Partners
              </span>
            </div>
            <h1 className="text-[50px] font-extrabold text-heading mb-5 font-poppins">
              Educational Partners
            </h1>
            <p className="text-[19px] text-body max-w-[650px] mx-auto leading-[1.7]">
              Partner with world-leading universities and unlock your global
              education journey
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 w-full">
          {universities.map((uni, idx) => (
            <div
              key={uni.id}
              className="bg-white rounded-3xl py-9 px-8 text-center shadow-[0_10px_40px_rgba(10,25,60,0.08)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer flex flex-col items-center justify-between min-h-[360px] border border-[rgba(226,232,240,0.8)] relative overflow-visible hover:shadow-[0_20px_60px_rgba(21,101,192,0.18)] hover:-translate-y-3 hover:border-[rgba(21,101,192,0.2)]"
            >
              {/* Top decorative line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-brand to-[#22C55E] rounded-b" />

              {/* Logo container */}
              <div className="w-full h-[100px] flex items-center justify-center mb-7 mt-2">
                <div className="w-[160px] h-[100px] flex items-center justify-center bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] rounded-2xl p-5 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE]">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* University name */}
              <div className="mb-8 flex-1 w-full">
                <h3 className="text-[22px] font-bold text-heading mb-3 leading-[1.3] font-poppins">
                  {uni.name}
                </h3>
                <div className="inline-flex items-center bg-[#EFF6FF] py-2 px-4 rounded-3xl border border-[#BFDBFE]">
                  <span className="text-[13px] text-brand font-semibold tracking-[0.3px]">
                    {uni.code}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white border-none py-4 px-9 rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out w-full shadow-[0_8px_24px_rgba(34,197,94,0.25)] tracking-[0.3px] font-poppins hover:bg-gradient-to-br hover:from-[#16A34A] hover:to-[#15803D] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(34,197,94,0.35)]">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
