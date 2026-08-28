import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  BriefcaseBusiness,
  CheckCircle2,
  LoaderCircle,
  Mail,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

function HireModal({ onClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [formStatus, setFormStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (formStatus === "error") {
      setFormStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!accessKey) {
      setFormStatus("error");
      setStatusMessage(
        "Web3Forms access key is missing. Check the .env file and restart Vite."
      );
      return;
    }

    setFormStatus("submitting");
    setStatusMessage("");

    const submissionData = {
      access_key: accessKey,
      subject: `New portfolio inquiry from ${formData.name}`,
      from_name: "Prathamesh Portfolio",
      name: formData.name,
      email: formData.email,
      company: formData.company || "Not provided",
      project_type: formData.projectType,
      budget: formData.budget || "Not specified",
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "The message could not be sent."
        );
      }

      setFormStatus("success");
      setStatusMessage(
        "Your message has been sent successfully. I’ll get back to you soon."
      );
      setFormData(initialForm);
    } catch (error) {
      setFormStatus("error");
      setStatusMessage(
        error.message ||
          "Something went wrong. Please try again or contact me by email."
      );
    }
  };

  return (
    <motion.div
      className="hire-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Hire Prathamesh"
      onClick={formStatus !== "submitting" ? onClose : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="hire-modal"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 35 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 35 }}
        transition={{ duration: 0.35 }}
      >
        <section className="hire-modal-introduction">
          <div className="hire-modal-pattern" />

          <span className="hire-modal-eyebrow">
            <BriefcaseBusiness size={16} />
            Available for opportunities
          </span>

          <h2>
            Let’s build something
            <span>meaningful together.</span>
          </h2>

          <p>
            Tell me about your idea, website or application. I’ll review the
            requirements and connect with you directly.
          </p>

          <div className="hire-process-list">
            <div>
              <span>01</span>

              <section>
                <strong>Share your idea</strong>
                <small>Describe your project and requirements.</small>
              </section>
            </div>

            <div>
              <span>02</span>

              <section>
                <strong>I review it</strong>
                <small>I’ll study the scope, timeline and technology.</small>
              </section>
            </div>

            <div>
              <span>03</span>

              <section>
                <strong>We connect</strong>
                <small>You’ll receive a direct response from me.</small>
              </section>
            </div>
          </div>

          <div className="hire-security-note">
            <ShieldCheck size={18} />

            <span>
              Your information is used only to respond to your inquiry.
            </span>
          </div>
        </section>

        <section className="hire-form-section">
          <button
            type="button"
            className="hire-close-button"
            onClick={onClose}
            disabled={formStatus === "submitting"}
            aria-label="Close Hire Me form"
          >
            <X size={21} />
          </button>

          {formStatus === "success" ? (
            <motion.div
              className="hire-success-state"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="hire-success-icon">
                <CheckCircle2 size={38} />
              </div>

              <span>Message delivered</span>

              <h2>Thank you for reaching out.</h2>

              <p>{statusMessage}</p>

              <button
                type="button"
                className="hire-success-button"
                onClick={onClose}
              >
                Return to portfolio
              </button>

              <button
                type="button"
                className="send-another-button"
                onClick={() => {
                  setFormStatus("idle");
                  setStatusMessage("");
                }}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <>
              <div className="hire-form-heading">
                <span>Project inquiry</span>
                <h3>Tell me what you have in mind.</h3>
                <p>
                  Required fields are marked with an asterisk.
                </p>
              </div>

              <form className="hire-form" onSubmit={handleSubmit}>
                <div className="hire-form-row">
                  <label>
                    <span>Your name *</span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      minLength="2"
                      required
                    />
                  </label>

                  <label>
                    <span>Email address *</span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                    />
                  </label>
                </div>

                <div className="hire-form-row">
                  <label>
                    <span>Company or brand</span>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </label>

                  <label>
                    <span>Project type *</span>

                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="Portfolio Website">
                        Portfolio website
                      </option>
                      <option value="Business Website">
                        Business website
                      </option>
                      <option value="E-commerce Website">
                        E-commerce website
                      </option>
                      <option value="Web Application">
                        Web application
                      </option>
                      <option value="Frontend Development">
                        Frontend development
                      </option>
                      <option value="Website Redesign">
                        Website redesign
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>Estimated budget</span>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select a budget range</option>
                    <option value="Below ₹10,000">Below ₹10,000</option>
                    <option value="₹10,000 – ₹25,000">
                      ₹10,000 – ₹25,000
                    </option>
                    <option value="₹25,000 – ₹50,000">
                      ₹25,000 – ₹50,000
                    </option>
                    <option value="₹50,000+">₹50,000+</option>
                    <option value="Need consultation">
                      Need consultation
                    </option>
                  </select>
                </label>

                <label>
                  <span>Project details *</span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the project, important features and expected timeline..."
                    rows="5"
                    minLength="20"
                    required
                  />

                  <small className="message-counter">
                    {formData.message.length} characters
                  </small>
                </label>

                {formStatus === "error" && (
                  <div className="hire-error-message">
                    <AlertCircle size={18} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="hire-submit-button"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <LoaderCircle
                        className="submit-loading-icon"
                        size={19}
                      />
                      Sending inquiry
                    </>
                  ) : (
                    <>
                      Send project inquiry
                      <Send size={18} />
                    </>
                  )}
                </button>

                <a
                  href="mailto:prathmeshwadkar03@gmail.com"
                  className="direct-email-link"
                >
                  <Mail size={15} />
                  Or email me directly
                </a>
              </form>
            </>
          )}
        </section>
      </motion.div>
    </motion.div>
  );
}

export default HireModal;