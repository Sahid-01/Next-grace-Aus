import { useState } from "react";

// Icons define (SVG paths)
const ICONS = {
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.38 1.61.75 2.36a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.33 6.33l1.27-1.27a2 2 0 0 1 2.11-.45c.75.37 1.55.63 2.36.75a2 2 0 0 1 1.72 2z",
  mail: "M4 4h16v16H4z",
  location: "M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z",
};

export default function OurBranch() {
  const branches = [
    {
      country: "Australia",
      office: "Adelaide Office",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
      address: "Suite 2, Level 1, 9A Hindley St., Adelaide, SA 5000, Australia",
      contact: "+61 (08) 7225 7892",
      email: "adelaide@graceintlgroup.com",
    },
    {
      country: "New Zealand",
      office: "Auckland Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
      address: "456 New York Ave, New York, NY",
      contact: "+64 95585152",
      email: "director.nz@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Bagbazar Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Bagbazar, Kathmandu (Opposite of Pipalbot), Nepal",
      contact: "+977 (01) 4256121 / 5356121 / 4212374",
      email: "bagbazar@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Baglung Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address:
        "Hanumandas Road, Next building to Hotel Peace Palace, Baglung, Nepal",
      contact: "+977(068)522667",
      email: "baglung@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Banepa Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Banepa, Tindobato",
      contact: "9709160061/62/63",
      email: "banepa@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Biratnagar Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: " Hanumandas Road, Biratnagar-7, Nepal",
      contact: "+977 9820709054 / (021) 570133",
      email: "biratnagar@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Birtamode Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Hanuman Central, 4th Floor, Birtamode, Nepal",
      contact: "(023) 536117",
      email: "birtamod@grace.edu.np",
    },
    {
      country: "Australia",
      office: "Brisbane Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "Level 5, 190 Edward Street, Brisbane 4000, Australia ",
      contact: " +61 (08) 0732663358 ",
      email: "brisbane@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Buddhanagar Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address:
        " Buddhanagar, Nearby Himalayan Ayurved Medical Science College, Kathmandu, Nepal",
      contact: "+977 01 5913321 / 20",
      email: "reception.buddhanagar@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Butwal Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Aurahi Road, Near Subhaswostik Hospital, Bardibas, Nepal",
      contact: "+977-044-590312 / 9841133810",
      email: "bardibas@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Bardibas Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Aurahi Road, Near Subhaswostik Hospital, Bardibas, Nepal",
      contact: "+977-044-590312 / 9841133810",
      email: "bardibas@grace.edu.np",
    },

    {
      country: "Austrlia",
      office: "Canberra Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "Suite 1.04/ 17-21 University Avenue City ACT 2601, Australia",
      contact: "+61 262 471 050",
      email: "canberra@graceintlgroup.com",
    },
    {
      country: "Philippins",
      office: "Cebu Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
      address:
        "Shope 220 Raintree Mall “Annex A” 528 General Maxilom Avenue Cebu City Philippines, 6000",
      contact: "+63 956 291 0349",
      email: "admission.ph@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Chitwan Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Sahid Chowk, Narayangarh, Chitwan, Nepal",
      contact: "(056) 590712 / (056) 590812 / +977 9855019790",
      email: "chitwan@grace.edu.np",
    },
    {
      country: "Srilanka",
      office: "Colombo Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
      address: "6A 1/1, Vajira road, Colombo 4, Sri Lanka",
      contact: "61 430500165",
      email: "srilanka@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Damak Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Beldangi Road Damak 6 Jhapa at KD complex, Damak, Nepal",
      contact: "+977 9845863530 / +977 (023) 572536",
      email: "damak@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Damauli Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Bhorletar Chowk, Damauli, Tanahun, Nepal",
      contact: "065-590550",
      email: "damauli@grace.edu.np",
    },
    {
      country: "Austrlia",
      office: "Dandenong Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "Level 10, 14 Mason Street, Dandenong, VIC 3175, Australia",
      contact: "+61 (03) 70097653, +61 (0)431794684",
      email: "Not Provided",
    },
    {
      country: "Nepal",
      office: "Dang Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address:
        "Ghorahi 15, Newroad Dang Infront of Ganesh Chitralaya, Dang, Nepal",
      contact: "(082) 2590719 / +977 9857870719",
      email: "dang@grace.edu.np",
    },
    {
      country: "Australia",
      office: "Darwin Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "43 Cavenagh Street, Darwin, NT, 0800 Level 1, Australia",
      contact: "+61 411 632 575",
      email: "darwin@graceintlgroup.com",
    },
    {
      country: "India",
      office: "Delhi Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
      address:
        "Office No. 505, 6th Floor, Westend Mall, Near District Centre, Janak Puri (West), New Delhi, 110058, India",
      contact: "+91 (11) 45542231",
      email: "india@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Dharan Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Sadan Road, Dharan, Nepal",
      contact: "+977 025 579595",
      email: "dharan@grace.edu.np",
    },
    {
      country: "UAE",
      office: "Dubai Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
      address:
        "PO Box 33256, Office S02 Bin Hareb Building AI Mararr Dubai 33256, UAE",
      contact: "+971 45548034 / +971 523110230",
      email: "dubai@graceintlgroup.com",
    },
    {
      country: "Kenya",
      office: "Eldoret Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
      address:
        "Kenya Office Eldoret, 301/2nd Floor, Stow-burg Plaza Oginga Odinga Street, Eldoret, Kenya",
      contact: "+254 716361048",
      email: "deldoret@graceintlgroup.com",
    },
    {
      country: "Austrlia",
      office: "Glenroy Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "Unit 3/1 Post Office Pl, Glenroy, VIC 3046, Australia",
      contact: "+61 431 715 577",
      email: "glenroy@graceintlgroup.com",
    },
    {
      country: "India",
      office: "Gurugram Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
      address:
        "G-308, Floor 3rd, Sushant Shopping Arcade, Sushant Lok Phase -1, Gurugram, Haryana, India",
      contact: "+91 (01) 244367660",
      email: "bdm@graceintlgroup.com",
    },
    {
      country: "Australia",
      office: "Haymarket Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address:
        "Suite 453, Level 5, 311-315 Castlereagh St, Haymarket NSW 2000, Australia",
      contact: "+61 (02) 9286 3447",
      email: "entral.aus@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Hetauda Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Hetauda-04, Parijatpath, Hetauda, Nepal",
      contact: "+977 9843690518 / (057) 524403",
      email: "hetauda@grace.edu.np",
    },
    {
      country: "Australia",
      office: "Hobart Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address:
        "Suite 105, Level 1, 86 Murray Street, Hobart TAS 7000, Australia",
      contact: "03 6289 6655",
      email: "tasmania@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Itahari Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Sangit Chowk, Itahari, Nepal",
      contact: "+977-25-590581 / +977 9762378608",
      email: "itahari@grace.edu.np",
    },
    {
      country: "Indonesia",
      office: "Jakarta Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
      address:
        "Wisma Kodel, 9th floor, Jl. H. R. Rasuna Said kavling B4, Kuningan, Jakarta 12910 Indonesia",
      contact: "(+62) 87850020074",
      email: "director.indonesia@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Kawasoti Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Indrachowk, kawasoti-2, Nawalpur, Nepal",
      contact: "+977 9849898606 / 078-590992",
      email: "kawasoti@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Lalitpur Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Kumaripati, Lalitpur (3rd Floor, CG Building)",
      contact: "+977 9766385821 / +977 1-5920013/14",
      email: "kumaripati@grace.edu.np",
    },
    {
      country: "Australia",
      office: "Melbourne Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "Level 14, 282 Collins Street, Melbourne, VIC 3000, Australia",
      contact: "+61 (03) 9662 9020",
      email: "melbourne@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "New Baneshwor Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "PC Complex 2nd Floor, New Baneshwor, Kathmandu, Nepal",
      contact: "+977 (01) 4796880 / 4796881",
      email: "baneshwor@grace.edu.np",
    },
    {
      country: "Pakistan",
      office: "Pakistan Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
      address: "F-8 Markaz, Al Babar Center Level 1 Islamabad, Pakistan",
      contact: "+92 (335) 5441602",
      email: "pakistan@graceintlgroup.com",
    },
    {
      country: "Australia",
      office: "Parramatta Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "109 Church Street, Parramatta, NSW 2150, Australia",
      contact: "+61 (02) 9286 3447",
      email: "parramatta@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Parsa Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Khairahani, Parsa, Nepal",
      contact: "+977 9855019797 / (056) 582053",
      email: "parsa@grace.edu.np",
    },
    {
      country: "Australia",
      office: "Perth Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "383 Hay St, Perth WA 6000, Australia",
      contact: "+61 450570884",
      email: "perth@graceintlgroup.com",
    },
    {
      country: "Nepal",
      office: "Pokhara Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Mahendrapool, Pokhara",
      contact: "+977 9846054807 / (061) 551013/ (061) 553013",
      email: "pokhara@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Simara Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Simara Business Center, Simara, Nepal",
      contact: "+977 985-5030941",
      email: "simara@grace.edu.np",
    },
    {
      country: "Australia",
      office: "Strathfield Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address: "Unit 1/14 Boulevarde, Strathfield NSW 2135, Australia",
      contact: "+61 (02) 9286 3447",
      email: "strathfield@grace.edu.np",
    },
    {
      country: "Nepal",
      office: "Surkhet Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      address: "Birendranagar-6, Surkhet (Near Maya Nursing Home)",
      contact: "+977 9858054080 / (083) 520211",
      email: "surkhet@grace.edu.np",
    },
    {
      country: "Australia",
      office: "Sydney Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      address:
        "Suite 1305, Level 13, 97-99 Bathurst Street, Sydney, NSW, Australia, New South Wales",
      contact: "+61 (02) 9286 3447",
      email: "strathfield@grace.edu.npsydney@graceintlgroup.com",
    },
    {
      country: "Bangladesh",
      office: "Sylhet Office",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
      address:
        "Abdul Hamid Road, Kadamtoli, Sylhet, (1st Floor), Humayun Rashid Chattar, Bangladesh",
      contact: "+8801765710165 / +61469884800",
      email: "director.bangladesh@graceintlgroup.com",
    },

    // नया branch add गर्न सजिलो: {} add गरेर
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="our-branches"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#1565C0",
              display: "block",
              marginBottom: 12,
            }}
          >
            Our Global Presence
          </span>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#0A1F44",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Our Branches Worldwide
          </h2>
        </div>

        {/* Branches Grid - 3 Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {branches.map((branch, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: "24px",
                borderRadius: 16,
                background: "#fff",
                border: "1px solid #EBF0FB",
                boxShadow:
                  hoveredIndex === i
                    ? "0 12px 40px rgba(21,101,192,0.15)"
                    : "0 2px 20px rgba(10,31,68,0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                minHeight: "280px",
                transform:
                  hoveredIndex === i ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Flag & Country Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: "1px solid #EBF0FB",
                }}
              >
                <img
                  src={branch.flag}
                  alt={`${branch.country} flag`}
                  style={{
                    width: 48,
                    height: 32,
                    objectFit: "cover",
                    borderRadius: 6,
                    border: "1px solid #E2E8F0",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#0A1F44",
                      margin: 0,
                      marginBottom: 2,
                    }}
                  >
                    {branch.country}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#1565C0",
                      margin: 0,
                    }}
                  >
                    {branch.office}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1565C0"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS.location} />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "#64748B",
                    margin: 0,
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {branch.address}
                </p>
              </div>

              {/* Contact */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1565C0"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS.phone} />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "#0A1F44",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {branch.contact}
                </p>
              </div>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1565C0"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS.mail} />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    color: "#1565C0",
                    margin: 0,
                    fontWeight: 500,
                    wordBreak: "break-word",
                  }}
                >
                  {branch.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
