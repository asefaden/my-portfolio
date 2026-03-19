import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 600;
      setIsDesktop(desktop);
      // On desktop always show the menu; on mobile hide by default
      setMobileMenuOpen(desktop);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      exit={{ y: -300 }}
      transition={{ duration: 0.3 }}
      className={`navbar ${sticky ? "dark-nav" : ""}`}
    >
      {!isDesktop && (
        <Hamburger
          toggled={mobileMenuOpen}
          toggle={setMobileMenuOpen}
          size={30}
          color="#fff"
          onClick={toggleMobileMenu}
          className="menu-icon"
        />
      )}
      {!isDesktop && (
        <div className="header">
          {/* show the currently active label (derived from path) */}
          <h3 id="nav-selected" className="nav-selected">
            {(() => {
              const path = window.location.pathname.replace("/", "") || "about";
              return path.toUpperCase();
            })()}
          </h3>
        </div>
      )}

      {/* on mobile render the same list inside the header area when menu is open.
            Each Link also writes the clicked label into #nav-selected so the header updates immediately. */}
      {!isDesktop && mobileMenuOpen && (
        <ul className="mobile-menu-in-header">
          <li>
            <Link
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("nav-selected");
                if (el) el.textContent = "ABOUT";
              }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("nav-selected");
                if (el) el.textContent = "RESUME";
              }}
            >
              RESUME
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("nav-selected");
                if (el) el.textContent = "EXPERIENCE";
              }}
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("nav-selected");
                if (el) el.textContent = "PROJECTS";
              }}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("nav-selected");
                if (el) el.textContent = "SKILLS";
              }}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("nav-selected");
                if (el) el.textContent = "BLOGS";
              }}
            >
              BLOGS
            </Link>
          </li>
        </ul>
      )}
      {/* always show menu on desktop; on mobile show based on mobileMenuOpen */}
      <ul className={`${mobileMenuOpen || isDesktop ? "" : "hide-menu"}`}>
        <li>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="resume" onClick={() => setMobileMenuOpen(false)}>
            RESUME
          </Link>
        </li>
        <li>
          <Link to="/experience" onClick={() => setMobileMenuOpen(false)}>
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setMobileMenuOpen(false)}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>
            BLOGS
          </Link>
        </li>
      </ul>
      <button>
        <a href="tel:+251-919133701">Call Me</a>
      </button>
    </motion.div>
  );
};

export default Navbar;
