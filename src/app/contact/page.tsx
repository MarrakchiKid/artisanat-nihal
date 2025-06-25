"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import styles from "@/styles/contact.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Animation de succès
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactContent}>
            <div className={styles.contactHeader}>
              <span className={styles.contactBadge}>Parlons ensemble</span>
              <h1 className={styles.contactTitle}>
                Créons Quelque Chose
                <br />
                <span className={styles.highlight}>d'Exceptionnel</span>
              </h1>
              <p className={styles.contactDescription}>
                Une question sur nos créations artisanales ? Un projet sur mesure en tête ? 
                Notre équipe d'artisans passionnés est là pour donner vie à vos idées les plus créatives.
              </p>
            </div>

            <div className={styles.contactInfos}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Mail size={20} />
                </div>
                <span>contact@artisanat.com</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Phone size={20} />
                </div>
                <span>+212 6 1234 5678</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <MapPin size={20} />
                </div>
                <span>Marrakech, Maroc</span>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Envoyez-nous un message</h2>
                <p className={styles.formSubtitle}>
                  Nous vous répondrons dans les plus brefs délais
                </p>
              </div>

              <div className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Votre email"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou posez votre question..."
                    className={styles.textarea}
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={styles.submitButton}
                >
                  <span>Envoyer le message</span>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}