const toggleMenu = () => {
    console.log("Toggling menu"); // Debug log
    setIsMenuOpen(!isMenuOpen);
};

return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>Nexura.Code</div>
      
      <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <div 
          className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}
          onClick={() => { 
            scrollToSection("home"); 
            setIsMenuOpen(false); // Close menu on click
          }} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          {isHovering ? "127.0.0.1" : "Home"}
        </div>
        {/* ... existing nav links ... */}
      </div>
      
      {/* ... existing code ... */}
    </div>
  );
}; 