import pawanImg from "../assets/Pawan.webp";
import violaImg from "../assets/Viola.webp";
import simritaImg from "../assets/Smrita.webp";
import siratImg from "../assets/Sirat.webp";

const TEAM_MEMBERS = [
  {
    name: "Pawan Thapaliya",
    role: "Principal Migration Agent",
    image: pawanImg,
    bio: "Pawan, our principal migration agent, leads Grace International's Melbourne team. Registered since 2014, he excels in time management, team leadership, and delivering exceptional migration services with expertise and dedication.",
  },
  {
    name: "Viola Rong",
    role: "Certified Migration Agent",
    image: violaImg,
    bio: "Certified migration agent since 2018, Viola has been working in visa and migration for almost seven years. She has an eye for detail and has excellent communication and interpersonal skills.",
  },
  {
    name: "Simrita Ranjitkar",
    role: "Registered Migration Agent",
    image: simritaImg,
    bio: "Simrita, a highly focused and reliable registered migration agent since 2017, works at Grace International's Sydney office. A team player with exceptional communication, she embraces challenges to support clients effectively.",
  },
  {
    name: "Sirat Teji",
    role: "Registered Migration Agent",
    image: siratImg,
    bio: "Sirat Teji, a skilled Registered Migration Agent at Grace International Sydney, specializes in Australian Migration Law, offering tailored solutions for General Skilled Migration, Partner, Student, and Temporary Graduate visas.",
  },
];

export function Team() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <h2 className="font-poppins text-[clamp(32px,4vw,48px)] font-bold text-heading mb-4">
            Meet Our Expert Team
          </h2>
          <p className="font-poppins text-[17px] text-[#6B7280] max-w-[600px] mx-auto leading-[1.7]">
            Our dedicated professionals are here to guide you through every step
            of your study abroad journey
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(21,101,192,0.15)]"
            >
              {/* Image */}
              <div
                className="w-full h-[280px] relative"
                style={{ background: `url(${member.image}) center/cover` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[rgba(10,31,68,0.8)] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-heading mb-1.5">
                  {member.name}
                </h3>
                <p className="font-poppins text-sm text-brand font-semibold mb-3">
                  {member.role}
                </p>
                <p className="font-poppins text-sm text-[#6B7280] leading-[1.6]">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
