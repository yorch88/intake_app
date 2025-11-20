"use client";

import { FormEvent, useState } from "react";
import { useTenant } from "@/context/TenantContext";
import { API_BASE_URL } from "@/lib/apiClient";
import { Button } from "@/components/ui/Button";

export default function LeadForm() {
  const { slug } = useTenant();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      serviceType: formData.get("serviceType")
    };

    const res = await fetch(`${API_BASE_URL}/public/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tenant-slug": slug
      },
      body: JSON.stringify(payload)
    });

    setIsLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    } else {
      alert("Ocurrió un error al enviar tu solicitud. Intenta de nuevo.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Nombre completo
        </label>
        <input
          name="name"
          required
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Dirección</label>
        <input
          name="address"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Tipo de servicio
        </label>
        <input
          name="serviceType"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Aquí podrás integrar CAPTCHA más adelante */}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Solicitar cotización"}
      </Button>

      {success && (
        <p className="text-sm text-green-600">
          ¡Gracias! Hemos recibido tu solicitud.
        </p>
      )}
    </form>
  );
}
