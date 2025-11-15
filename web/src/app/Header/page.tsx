import Image from "next/image"
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <Link href="/">
            <Image
              src="/dcp-logo.png"
              alt="DCP Logo"
              width={128}
              height={128}
            />
          </Link>
        </div>

        <div className="title-container">
          <h1 className="title">MARKETPLACE</h1>
        </div>

        <ul className="nav-list">
          <li>
            <Link href="/" className="nav-link">All</Link>
          </li>
          <li>
            <Link href="/ugc" className="nav-link">UGC</Link>
          </li>
          <li>
            <Link href="/shirts" className="nav-link">SHIRTS</Link>
          </li>
          <li>
            <Link href="/pants" className="nav-link">PANTS</Link>
          </li>
        </ul>

        <div className="social-icons">
          <a href="https://www.youtube.com/@Aradkhadem4" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube-icon.svg" alt="YouTube" width={64} height={64} />
          </a>
          <a href="https://discord.gg/Q9Aryhrz9F" target="_blank" rel="noopener noreferrer">
            <Image src="/discord-icon.svg" alt="Discord" width={64} height={64} />
          </a>
        </div>
      </nav>
    </header>
  );
}