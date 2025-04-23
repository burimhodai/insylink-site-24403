import React from 'react';

const App = () => {
  const styles = {
    appContainer: {
      fontFamily: 'sans-serif',
      lineHeight: 1.6,
      color: '#333',
    },
    header: {
      backgroundColor: '#F6F8D5',
      padding: '20px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#205781',
    },
    navButton: {
      backgroundColor: '#205781',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    heroSection: {
      backgroundColor: '#F6F8D5',
      padding: '100px 20px',
      textAlign: 'center',
    },
    heroHeadline: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#205781',
    },
    heroSubheadline: {
      fontSize: '20px',
      marginBottom: '40px',
      color: '#4F959D',
    },
    heroButton: {
      backgroundColor: '#205781',
      color: 'white',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
    },
    featureSection: {
      padding: '80px 20px',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    featureItem: {
      width: '300px',
      textAlign: 'center',
      marginBottom: '40px',
    },
    featureIcon: {
      fontSize: '40px',
      color: '#4F959D',
      marginBottom: '20px',
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    testimonialSection: {
      backgroundColor: '#F6F8D5',
      padding: '80px 20px',
      textAlign: 'center',
    },
    testimonialTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '40px',
      color: '#205781',
    },
    clientLogos: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    clientLogo: {
      width: '150px',
      height: '80px',
      backgroundColor: '#ddd',
      margin: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      color: '#555',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
    },
    footerLinks: {
      marginBottom: '20px',
    },
    footerLink: {
      color: 'white',
      margin: '0 10px',
      textDecoration: 'none',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
    },
    socialIcon: {
      width: '30px',
      height: '30px',
      backgroundColor: '#555',
      borderRadius: '50%',
      margin: '0 10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '16px',
      color: 'white',
    },
    '@media (max-width: 768px)': {
      heroHeadline: {
        fontSize: '36px',
      },
      featureSection: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      featureItem: {
        width: '100%',
      }
    },
    '@media (max-width: 480px)': {
      logo: {
        fontSize: '20px',
      },
      navButton: {
        padding: '8px 16px',
        fontSize: '14px',
      },
      heroHeadline: {
        fontSize: '30px',
      },
      heroSubheadline: {
        fontSize: '16px',
      },
      heroButton: {
        fontSize: '16px',
      },
      featureIcon: {
        fontSize: '30px',
      },
      featureTitle: {
        fontSize: '20px',
      }
    }
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <div style={styles.logo}>LuxuryBrand</div>
        <button style={styles.navButton}>Contact Us</button>
      </header>

      <main>
        <section style={styles.heroSection}>
          <h1 style={styles.heroHeadline}>Experience Unparalleled Luxury</h1>
          <p style={styles.heroSubheadline}>Indulge in the finest things life has to offer.</p>
          <button style={styles.heroButton}>Explore More</button>
        </section>

        <section style={styles.featureSection}>
          <div style={styles.featureItem}>
            <div style={styles.featureIcon}>&#x2728;</div>
            <h3 style={styles.featureTitle}>Exclusive Services</h3>
            <p>Personalized attention to every detail.</p>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIcon}>&#x1F4B0;</div>
            <h3 style={styles.featureTitle}>Exceptional Value</h3>
            <p>Unmatched quality and craftsmanship.</p>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIcon}>&#x1F30D;</div>
            <h3 style={styles.featureTitle}>Global Reach</h3>
            <p>Access to our services worldwide.</p>
          </div>
        </section>

        <section style={styles.testimonialSection}>
          <h2 style={styles.testimonialTitle}>Trusted by the Best</h2>
          <div style={styles.clientLogos}>
            <div style={styles.clientLogo}>Client A</div>
            <div style={styles.clientLogo}>Client B</div>
            <div style={styles.clientLogo}>Client C</div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a style={styles.footerLink} href="#">About</a>
          <a style={styles.footerLink} href="#">Services</a>
          <a style={styles.footerLink} href="#">Contact</a>
        </div>
        <div style={styles.socialIcons}>
          <div style={styles.socialIcon}>FB</div>
          <div style={styles.socialIcon}>TW</div>
          <div style={styles.socialIcon}>IN</div>
        </div>
        <p>&copy; 2024 LuxuryBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;