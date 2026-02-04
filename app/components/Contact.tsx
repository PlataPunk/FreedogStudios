"use client";

import { useState } from "react";
import { Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
    });

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es obligatorio";
        }
        if (!formData.company.trim()) {
            newErrors.company = "La empresa es obligatoria";
        }
        if (!formData.email.trim()) {
            newErrors.email = "El correo es obligatorio";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Ingresa un correo válido";
        }
        if (!formData.projectType) {
            newErrors.projectType = "Selecciona un tipo de proyecto";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isFormValid =
        formData.name.trim() &&
        formData.company.trim() &&
        formData.email.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
        formData.projectType;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        const response = await fetch("https://formspree.io/f/xeezgeev", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmitted(true);
        }
    };

    const inputClass =
        "w-full bg-transparent border-b border-slate-200 focus:border-secondary outline-none py-3 text-textPrimary placeholder-textMuted text-sm transition-colors duration-300";

    const inputErrorClass =
        "w-full bg-transparent border-b border-red-500 focus:border-red-500 outline-none py-3 text-textPrimary placeholder-textMuted text-sm transition-colors duration-300";

    const labelClass =
        "block text-xs font-semibold text-textMuted uppercase tracking-widest mb-2";

    if (submitted) {
        return (
            <section className="py-20 px-6 bg-bgMain">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} color="#3B82F6" />
                    </div>
                    <p className="text-secondary font-semibold text-2xl mb-3">
                        ¡Mensaje Enviado!
                    </p>
                    <p className="text-textMuted text-sm max-w-md mx-auto">
                        Gracias por tu interés en Freedog Studios. Hemos recibido tu solicitud y nos contactaremos contigo a la brevedad para discutir tu proyecto.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="contacto" className="py-20 px-6 bg-bgMain">
            <div className="max-w-2xl mx-auto">
                <p className="text-secondary text-center text-sm uppercase tracking-widest mb-4">
                    Contacto
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-surface mb-6">
                    Hablemos de tu Proyecto
                </h2>
                <p className="text-textMuted text-center max-w-xl mx-auto mb-16">
                    Si tienes un reto técnico complejo, estamos listos para escucharte.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Row: Nombre & Empresa */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Nombre */}
                        <div>
                            <label className={labelClass}>Nombre <span className="text-secondary">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? inputErrorClass : inputClass}
                                placeholder="Tu nombre completo"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        {/* Empresa */}
                        <div>
                            <label className={labelClass}>Empresa <span className="text-secondary">*</span></label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className={errors.company ? inputErrorClass : inputClass}
                                placeholder="Nombre de tu empresa"
                            />
                            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                        </div>
                    </div>

                    {/* Row: Email & Teléfono */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className={labelClass}>Email <span className="text-secondary">*</span></label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-textMuted" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${errors.email ? inputErrorClass : inputClass} pl-6`}
                                    placeholder="tu@empresa.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1 pl-6">{errors.email}</p>}
                        </div>
                        <div>
                            <label className={labelClass}>Teléfono</label>
                            <div className="relative">
                                <Phone
                                    size={16}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 text-textMuted"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`${inputClass} pl-6`}
                                    placeholder="+52 55 0000 0000"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className={labelClass}>Tipo de Proyecto <span className="text-secondary">*</span></label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className={`${errors.projectType ? inputErrorClass : inputClass} appearance-none cursor-pointer bg-transparent`}>
                                <option value="" disabled>Selecciona una categoría</option>
                                <option value="fintech">Fintech & Pagos</option>
                                <option value="conversacional">Comercio Conversacional</option>
                                <option value="ai">AI & Data Engineering</option>
                                <option value="cloud">Cloud & IoT</option>
                                <option value="scraping">Web Scraping & Data</option>
                                <option value="otro">Otro</option>
                            </select>
                            {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Describe tu Reto Técnico</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`${inputClass} resize-none border border-slate-200 rounded-lg px-4 pt-4 focus:border-secondary`}
                            placeholder="Cuéntanos sobre el problema que necesitas resolver, tecnologías que ya usan y el alcance del proyecto..."
                        />
                    </div>

                    <div className="flex flex-col items-center pt-4">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 ${
                                isFormValid
                                    ? "bg-secondary hover:bg-accent text-bgMain cursor-pointer"
                                    : "bg-textMuted/30 text-textMuted/60 cursor-not-allowed"}`}>
                            Solicitar Revisión Técnica
                            <ArrowRight size={20} />
                        </button>
                        <p className="text-textMuted text-xs text-center mt-4 max-w-sm">
                            Tratamos tus datos y diagramas bajo estrictos acuerdos de
                            confidencialidad (NDA por solicitud).
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}