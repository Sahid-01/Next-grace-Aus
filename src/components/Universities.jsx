import { FadeIn } from "./FadeIn";
import Trobe from "../assets/La Trobe University.webp";
import Tas from "../assets/University of Tasmania.svg";
import Charles from "../assets/Charles Sturt University.svg";
import Torrens from "../assets/Torrens University.webp";
import Southern from "../assets/Southern Cross University (1).webp";
import Murdoch from "../assets/Murdoch University.webp";
import Sunshine from "../assets/University of the Sunshine Coast.webp";
import CQUN from "../assets/CQUniversity.svg";
import ECU from "../assets/Edith Cowan University.webp";
import JCU from "../assets/James Cook University.webp";
import USQ from "../assets/University of Southern Queensland.svg";
import VU from "../assets/Victoria University.svg";
import UN from "../assets/University of Newcastle.webp";
import UW from "../assets/University of Wollongong.webp";
import EUC from "../assets/Excelsia College.webp";
import ACAP from "../assets/ACAP University College.webp";
import SAE from "../assets/SAE University College.webp";
import THS from "../assets/The Hotel School.svg";
import BMIHMS from "../assets/Blue Mountains International Hotel Management School.svg";
import MP from "../assets/Melbourne Polytechnic.webp";
import HI from "../assets/Holmes Institute.webp";
import CI from "../assets/Chisholm Institute.avif";
import BHI from "../assets/Box Hill Institute.webp";
import MIT from "../assets/Melbourne Institute of Technology.webp";
import KBS from "../assets/Kaplan Business School.svg";
import APIC from "../assets/APIC.webp";
import VIT from "../assets/VIT.webp";
import ICHM from "../assets/ICHM.webp";
import SC from "../assets/Stotts College.avif";
import NV from "../assets/Navitas University.svg";
import HOI from "../assets/Holmes Institute.webp";
import ECA from "../assets/ECA.webp";
import AIH from "../assets/AIH.svg";
import EIT from "../assets/EIT.webp";
import KOI from "../assets/KOI.webp";
import SCEL from "../assets/Southern Cross University (1).webp";
import CHE from "../assets/CIC.webp";
import KI from "../assets/Kent Institute.webp";
import WI from "../assets/Wentworth Institute.webp";
import IIBIT from "../assets/IIBIT.webp";
import TEI from "../assets/Top Education Institute.webp";
import EI from "../assets/Equal International.webp";
import CIM from "../assets/Canterbury Institute.webp";
import TN from "../assets/TAFE NSW.webp";
import IIA from "../assets/IKON Institute.svg";
import IHM from "../assets/IHM.svg";
import GHE from "../assets/Global Higher Education.webp";
import CIBT from "../assets/Crown Institute of Business and Technology.gif";
import ICMS from "../assets/ICMS.webp";

const universities = [
  {
    id: 1,
    name: "La Trobe University",
    code: "(CRICOS 00115M)",
    logo: Trobe,
    url: "https://www.latrobe.edu.au",
  },
  {
    id: 2,
    name: "University of Tasmania",
    code: "(CRICOS 00586B)",
    logo: Tas,
    url: "https://www.utas.edu.au",
  },
  {
    id: 3,
    name: "Charles Sturt University",
    code: "(CRICOS 00005F)",
    logo: Charles,
    url: "https://www.csu.edu.au",
  },
  {
    id: 4,
    name: "Torrens University",
    code: "(CRICOS 03389E)",
    logo: Torrens,
    url: "https://www.torrens.edu.au",
  },
  {
    id: 5,
    name: "Southern Cross University",
    code: "(CRICOS 01241G)",
    logo: Southern,
    url: "https://www.scu.edu.au",
  },
  {
    id: 6,
    name: "Murdoch University",
    code: "(CRICOS 00125J)",
    logo: Murdoch,
    url: "https://www.murdoch.edu.au",
  },
  {
    id: 7,
    name: "University of the Sunshine Coast",
    code: "(CRICOS 01595D)",
    logo: Sunshine,
    url: "https://www.usc.edu.au",
  },
  {
    id: 8,
    name: "CQUniversity",
    code: "(CRICOS 00219C)",
    logo: CQUN,
    url: "https://www.cqu.edu.au",
  },
  {
    id: 9,
    name: "Edith Cowan University (ECU)",
    code: "(CRICOS 00279B)",
    logo: ECU,
    url: "https://www.ecu.edu.au",
  },
  {
    id: 10,
    name: "James Cook University",
    code: "(CRICOS 00117J)",
    logo: JCU,
    url: "https://www.jcu.edu.au",
  },
  {
    id: 11,
    name: "University of Southern Queensland",
    code: "(CRICOS 00244B)",
    logo: USQ,
    url: "https://www.usq.edu.au",
  },
  {
    id: 12,
    name: "Victoria University",
    code: "(CRICOS 00124K)",
    logo: VU,
    url: "https://www.vu.edu.au",
  },
  {
    id: 13,
    name: "University of Newcastle",
    code: "(CRICOS 00109J)",
    logo: UN,
    url: "https://www.newcastle.edu.au",
  },
  {
    id: 14,
    name: "University of Wollongong",
    code: "(CRICOS 00102E)",
    logo: UW,
    url: "https://www.uow.edu.au",
  },
  {
    id: 15,
    name: "Excelsia University College",
    code: "(CRICOS 02664K)",
    logo: EUC,
    url: "https://www.excelsia.edu.au",
  },
  {
    id: 16,
    name: "ACAP University College",
    code: "(CRICOS 01328A)",
    logo: ACAP,
    url: "https://www.acap.edu.au",
  },
  {
    id: 17,
    name: "SAE University College",
    code: "(CRICOS 00312F)",
    logo: SAE,
    url: "https://www.sae.edu.au",
  },
  {
    id: 18,
    name: "The Hotel School",
    code: "(CRICOS 01241G)",
    logo: THS,
    url: "https://www.thehotelschool.edu.au",
  },
  {
    id: 19,
    name: "Blue Mountains International Hotel Management School",
    code: "(CRICOS 00911E)",
    logo: BMIHMS,
    url: "https://www.bluemountains.edu.au",
  },
  {
    id: 20,
    name: "Melbourne Polytechnic",
    code: "(CRICOS 00724G)",
    logo: MP,
    url: "https://www.melbournepolytechnic.edu.au",
  },
  {
    id: 21,
    name: "Holmesglen Institute",
    code: "(CRICOS 00012G)",
    logo: HI,
    url: "https://www.holmesglen.edu.au",
  },
  {
    id: 22,
    name: "Chisholm Institute",
    code: "(CRICOS 00881F)",
    logo: CI,
    url: "https://www.chisholm.edu.au",
  },
  {
    id: 23,
    name: "Box Hill Institute",
    code: "(CRICOS 02411J)",
    logo: BHI,
    url: "https://www.boxhill.edu.au",
  },
  {
    id: 25,
    name: "Melbourne Institute of Technology",
    code: "(CRICOS 01545C)",
    logo: MIT,
    url: "https://www.mit.edu.au",
  },
  {
    id: 27,
    name: "Kaplan Business School",
    code: "(CRICOS 02426B)",
    logo: KBS,
    url: "https://www.kaplan.edu.au",
  },
  {
    id: 28,
    name: "Asia Pacific International College (APIC)",
    code: "(CRICOS 03048D)",
    logo: APIC,
    url: "https://www.apic.edu.au",
  },
  {
    id: 29,
    name: "Victorian Institute of Technology (VIT)",
    code: "(CRICOS 02044E)",
    logo: VIT,
    url: "https://www.vit.edu.au",
  },
  {
    id: 30,
    name: "International College of Hotel Management (ICHM)",
    code: "(CRICOS 02914G)",
    logo: ICHM,
    url: "https://www.ichm.edu.au",
  },
  {
    id: 31,
    name: "Stott's College",
    code: "(CRICOS 01439E)",
    logo: SC,
    url: "https://www.stotts.edu.au",
  },
  {
    id: 32,
    name: "Navitas University",
    code: "(CRICOS 00231G)",
    logo: NV,
    url: "https://www.navitas.com",
  },
  {
    id: 33,
    name: "Holmes Institute",
    code: "(CRICOS 02767C)",
    logo: HOI,
    url: "https://www.holmes.edu.au",
  },
  {
    id: 34,
    name: "Education Centre of Australia (ECA)",
    code: "(CRICOS 02997M)",
    logo: ECA,
    url: "https://www.eca.edu.au",
  },
  {
    id: 35,
    name: "Australian Institute of Higher Education (AIH)",
    code: "(CRICOS 03147A)",
    logo: AIH,
    url: "https://www.aih.edu.au",
  },
  {
    id: 36,
    name: "Engineering Institute of Technology (EIT)",
    code: "(CRICOS 03567C)",
    logo: EIT,
    url: "https://www.eit.edu.au",
  },
  {
    id: 37,
    name: "King's Own Institute (KOI)",
    code: "(CRICOS 03171A)",
    logo: KOI,
    url: "https://www.koi.edu.au",
  },
  {
    id: 38,
    name: "Southern Cross Education Institute (SCEI)",
    code: "(CRICOS 02934D)",
    logo: SCEL,
    url: "https://www.scei.edu.au",
  },
  {
    id: 39,
    name: "CIC Higher Education",
    code: "(CRICOS 01718J)",
    logo: CHE,
    url: "https://www.cic.edu.au",
  },
  {
    id: 40,
    name: "Kent Institute",
    code: "(CRICOS 00161E)",
    logo: KI,
    url: "https://www.kent.edu.au",
  },
  {
    id: 41,
    name: "Wentworth Institute",
    code: "(CRICOS 03246B)",
    logo: WI,
    url: "https://www.wentworth.edu.au",
  },
  {
    id: 42,
    name: "IIBIT",
    code: "(CRICOS 01917B)",
    logo: IIBIT,
    url: "https://www.iibit.edu.au",
  },
  {
    id: 43,
    name: "Top Education Institute",
    code: "(CRICOS 02491D)",
    logo: TEI,
    url: "https://www.top.edu.au",
  },
  {
    id: 44,
    name: "Equal International",
    code: "(CRICOS 02491D)",
    logo: EI,
    url: "https://www.equal.edu.au",
  },
  {
    id: 45,
    name: "Canterbury Institute of Management",
    code: "(CRICOS 03809A)",
    logo: CIM,
    url: "https://www.canterbury.edu.au",
  },
  {
    id: 46,
    name: "TAFE NSW",
    code: "(CRICOS 00591E)",
    logo: TN,
    url: "https://www.tafensw.edu.au",
  },
  {
    id: 47,
    name: "IKON Institute of Australia",
    code: "(CRICOS 03581E)",
    logo: IIA,
    url: "https://www.ikon.edu.au",
  },
  {
    id: 47,
    name: "Institute of Health & Management (IHM)",
    code: "(CRICOS 03407G)",
    logo: IHM,
    url: "https://www.ihm.edu.au",
  },
  {
    id: 48,
    name: "Global Higher Education",
    code: "(CRICOS 03386G)",
    logo: GHE,
    url: "https://www.globalhighereducation.edu.au",
  },
  {
    id: 49,
    name: "Crown Institute of Business and Technology",
    code: "(CRICOS 02971G)",
    logo: CIBT,
    url: "https://www.crowninstitute.edu.au",
  },
  {
    id: 50,
    name: "International College of Management Sydney (ICMS)",
    code: "(CRICOS 01484M)",
    logo: ICMS,
    url: "https://www.icms.edu.au",
  },
];

export function Universities() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(16px, 4vw, 24px)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <FadeIn>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(40px, 6vw, 70px)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                borderRadius: "30px",
                marginBottom: "20px",
                background: "rgba(21, 101, 192, 0.1)",
                border: "1px solid rgba(21, 101, 192, 0.2)",
              }}
            >
              <span
                style={{
                  color: "#1565C0",
                  fontSize: "13px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Our Partners
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: "800",
                color: "#0A1F44",
                marginBottom: "20px",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "1.2",
              }}
            >
              Educational Partners
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "#64748B",
                maxWidth: "650px",
                margin: "0 auto",
                lineHeight: "1.7",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Partner with world-leading universities and unlock your global
              education journey
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 w-full">
          {universities.map((uni) => (
            <div
              key={uni.id}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "36px 32px",
                textAlign: "center",
                boxShadow: "0 10px 40px rgba(10, 31, 68, 0.08)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "360px",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                position: "relative",
                overflow: "visible",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(21, 101, 192, 0.18)";
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.borderColor = "rgba(21, 101, 192, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 40px rgba(10, 31, 68, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.8)";
              }}
            >
              {/* Top decorative line */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #1565C0 0%, #42A5F5 100%)",
                  borderRadius: "0 0 4px 4px",
                }}
              />

              {/* Logo container */}
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)",
                    borderRadius: "16px",
                    padding: "20px",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.08)";
                    e.target.style.background =
                      "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.background =
                      "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)";
                  }}
                >
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>

              {/* University name */}
              <div
                style={{
                  marginBottom: "32px",
                  flex: "1",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: "bold",
                    color: "#0A1F44",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {uni.name}
                </h3>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "#EFF6FF",
                    padding: "8px 16px",
                    borderRadius: "24px",
                    border: "1px solid #BFDBFE",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#1565C0",
                      fontWeight: "600",
                      letterSpacing: "0.3px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {uni.code}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => window.open(uni.url, "_blank")}
                style={{
                  background:
                    "linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)",
                  color: "white",
                  border: "none",
                  padding: "16px 36px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  width: "100%",
                  boxShadow: "0 8px 24px rgba(21, 101, 192, 0.25)",
                  letterSpacing: "0.3px",
                  fontFamily: "Poppins, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 12px 32px rgba(21, 101, 192, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 8px 24px rgba(21, 101, 192, 0.25)";
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
