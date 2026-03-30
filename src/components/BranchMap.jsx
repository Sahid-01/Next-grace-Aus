import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const BRANCHES = [
  {
    id: 1,
    name: "Kathmandu Branch",
    city: "Kathmandu",
    address: "Thamel, Kathmandu",
    phone: "+977-1-4123456",
    email: "kathmandu@graceintl.com",
    lat: 27.7172,
    lng: 85.324,
  },
  {
    id: 2,
    name: "Pokhara Branch",
    city: "Pokhara",
    address: "Lakeside, Pokhara",
    phone: "+977-61-123456",
    email: "pokhara@graceintl.com",
    lat: 28.2096,
    lng: 83.9856,
  },
  {
    id: 3,
    name: "Lalitpur Branch",
    city: "Lalitpur",
    address: "Patan, Lalitpur",
    phone: "+977-1-5123456",
    email: "lalitpur@graceintl.com",
    lat: 27.676,
    lng: 85.316,
  },
  {
    id: 4,
    name: "Bhaktapur Branch",
    city: "Bhaktapur",
    address: "Bhaktapur Durbar Square",
    phone: "+977-6-123456",
    email: "bhaktapur@graceintl.com",
    lat: 27.6319,
    lng: 85.4304,
  },
];

export function BranchMap() {
  const center = [27.7172, 85.324]; // Kathmandu center

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={center}
        zoom={8}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {BRANCHES.map((branch) => (
          <Marker key={branch.id} position={[branch.lat, branch.lng]}>
            <Popup>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  minWidth: "200px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    color: "#0A1F44",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {branch.name}
                </h3>
                <p
                  style={{
                    margin: "4px 0",
                    fontSize: "13px",
                    color: "#4A5568",
                  }}
                >
                  <strong>Address:</strong> {branch.address}
                </p>
                <p
                  style={{
                    margin: "4px 0",
                    fontSize: "13px",
                    color: "#4A5568",
                  }}
                >
                  <strong>Phone:</strong> {branch.phone}
                </p>
                <p
                  style={{
                    margin: "4px 0",
                    fontSize: "13px",
                    color: "#4A5568",
                  }}
                >
                  <strong>Email:</strong> {branch.email}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
