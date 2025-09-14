function Footer() {
  return (
    <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#333', color: '#fff', marginTop: '20px' }}>
      &copy; {new Date().getFullYear()} Our Company. All rights reserved.
    </footer>
  );
}

export default Footer;
