import network from "../assets/network.png";
import sponsors from "../assets/sponsors.png";
export default function Network() {
  return (
    <section className="network-section">
      <h2 className="network-title">Huge Global Network of Fast VPN</h2>
      <p className="network-subtitle">
        See <span className="bold-light-small">LaslesVPN</span> everywhere to
        make it easier for you when you move locations.
      </p>
      <img className="network-image" src={network} />
      <img className="sponsors-image" src={sponsors} />
    </section>
  );
}
