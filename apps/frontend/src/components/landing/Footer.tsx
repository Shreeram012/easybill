import React from "react";

const links = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Guidelines", href: "#" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#5A7B94" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#5A7B94" strokeWidth="1.5" fill="none"/>
        <path d="M15 8.5h-2a1 1 0 0 0-1 1v2h3l-.5 2h-2.5v5h-2v-5h-2v-2h2v-2a3 3 0 0 1 3-3h2v2z" fill="none" stroke="#5A7B94" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#5A7B94" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#5A7B94" strokeWidth="1.5" fill="none"/>
        <path d="M8 15c7 0 9-5.5 9-9v-.5A6.5 6.5 0 0 0 19 4a6.5 6.5 0 0 1-1.89.52A3.28 3.28 0 0 0 18.5 3a6.56 6.56 0 0 1-2.08.8A3.28 3.28 0 0 0 12 2c-1.8 0-3.25 1.45-3.25 3.25 0 .25.03.5.08.73A9.32 9.32 0 0 1 3 3.5s-4 9 5 13c-1.5 1-3.5 1-5 1" fill="none" stroke="#5A7B94" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#5A7B94" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#5A7B94" strokeWidth="1.5" fill="none"/>
        <rect x="7" y="10" width="2" height="6" rx="1" stroke="#5A7B94" strokeWidth="1.5"/>
        <rect x="11" y="10" width="2" height="6" rx="1" stroke="#5A7B94" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="1" stroke="#5A7B94" strokeWidth="1.5"/>
        <rect x="15" y="10" width="2" height="6" rx="1" stroke="#5A7B94" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const Footer: React.FC = () => (
  <footer style={{
    background: "transparent",
    padding: "48px 0 24px 0",
    textAlign: "center",
    color: "#5A7B94",
    fontFamily: "inherit",
  }}>
    <nav>
      <ul style={{
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        listStyle: "none",
        padding: 0,
        margin: 0,
        fontSize: "18px",
        fontWeight: 400,
      }}>
        {links.map(link => (
          <li key={link.label}>
            <a href={link.href} style={{
              color: "#5A7B94",
              textDecoration: "none",
              transition: "color 0.2s",
            }}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      margin: "32px 0 0 0",
    }}>
      {socialLinks.map(social => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "transparent",
            border: "none",
            color: "#5A7B94",
            transition: "background 0.2s",
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
    <div style={{
      marginTop: "32px",
      fontSize: "18px",
      color: "#5A7B94",
      fontWeight: 400,
    }}>
       EasyBill | by Shreeram | 2025
    </div>
  </footer>
);

export default Footer;