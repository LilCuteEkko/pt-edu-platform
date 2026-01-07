import { motion } from 'framer-motion';
import PTSettingsSection from '../components/treatments/PTSettingsSection';

const PTSettingsPage = () => {
    return (
        <div className="pt-settings-page" style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Clinical Settings
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Explore the diverse environments where physical therapists practice, from acute care to home health.
                    </p>
                </div>

                <PTSettingsSection />
            </motion.div>
        </div>
    );
};

export default PTSettingsPage;
