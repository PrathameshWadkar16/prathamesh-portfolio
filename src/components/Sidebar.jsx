import {
  sidebarItems,
  socialLinks,
} from "../data/portfolioData";

function Sidebar() {
  return (
    <aside className="showcase-sidebar">
      <div className="sidebar-icons">
        {sidebarItems.map(({ name, icon: Icon }, index) => (
          <div
            key={name}
            className={`sidebar-icon ${index === 0 ? "active" : ""}`}
            title={name}
          >
            <Icon size={20} />
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-socials">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={name}
            title={name}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;