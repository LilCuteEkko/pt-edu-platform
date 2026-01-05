const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} PT Education Platform. All rights reserved.</p>
            </div>
            <style>{`
        .footer {
          background: var(--color-surface);
          border-top: 1px solid #e2e8f0;
          padding: 2rem 0;
          margin-top: auto;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.875rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
