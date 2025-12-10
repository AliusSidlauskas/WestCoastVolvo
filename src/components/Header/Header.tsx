"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

type LinkType = {
  id: number;
  title: string;
  href: string;
};

type HeaderProps = {
  links?: LinkType[];
};

const Header = ({ links = [] }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={styles.headerBase}>
      <div className={styles.headerBox}>
        <h1>WestCoastVolvo</h1>

        <nav className={styles.nav}>
          {links.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.title}
            </Link>
          ))}
        </nav>

        <button
          className={styles.burgerButton}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image
            className={styles.burger}
            src="/hamburger-sidebar.svg"
            alt="burger"
            width={30}
            height={30}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
