import type { Metadata } from 'next';
import AboutSection from '../components/sections/AboutSection';

export const metadata: Metadata = {
  title: 'About Us | Putholi Empowerment Society',
};

export default function About() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <AboutSection />
    </div>
  );
}
