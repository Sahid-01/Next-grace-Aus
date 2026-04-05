export default function WhatsappButton() {
  return (
    <>
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 56px;
          height: 56px;
          background: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          animation: whatsapp-pulse 2s infinite;
        }
        .whatsapp-float:hover {
          background: #20ba5a;
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.6);
        }
        .whatsapp-float:active {
          transform: scale(0.95);
        }
        @keyframes whatsapp-pulse {
          0%   { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
          50%  { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7); }
          100% { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
        }
        @media (max-width: 640px) {
          .whatsapp-float { width: 50px; height: 50px; bottom: 16px; right: 16px; }
        }
      `}</style>

      <a
        href="https://wa.me/96629020"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.736 5.484 2.02 7.78L.068 30.548a.998.998 0 001.22 1.22l6.768-1.952A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.2c-2.444 0-4.78-.668-6.804-1.932a1 1 0 00-.732-.112l-4.428 1.276 1.276-4.428a1 1 0 00-.112-.732A13.158 13.158 0 012.8 16C2.8 8.708 8.708 2.8 16 2.8S29.2 8.708 29.2 16 23.292 29.2 16 29.2z" />
          <path d="M23.548 18.796c-.372-.188-2.196-1.084-2.536-1.208-.34-.124-.588-.188-.836.188-.248.372-.96 1.208-1.176 1.456-.216.248-.432.28-.804.092-.372-.188-1.572-.58-2.992-1.848-1.108-.988-1.856-2.208-2.072-2.58-.216-.372-.024-.572.164-.756.168-.168.372-.436.556-.656.188-.216.248-.372.372-.62.124-.248.064-.464-.032-.652-.092-.188-.836-2.012-1.144-2.756-.3-.724-.608-.624-.836-.636-.216-.012-.464-.012-.712-.012s-.648.092-.988.464c-.34.372-1.3 1.272-1.3 3.1s1.332 3.596 1.516 3.844c.188.248 2.616 3.996 6.34 5.604.884.38 1.576.608 2.116.78.888.28 1.696.24 2.336.144.712-.104 2.196-.896 2.504-1.764.308-.868.308-1.612.216-1.764-.092-.152-.34-.248-.712-.436z" />
        </svg>
      </a>
    </>
  );
}
