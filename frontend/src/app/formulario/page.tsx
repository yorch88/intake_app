import LeadForm from "@/components/form/LeadForm";

export default function PublicFormPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-primary">
        Solicita tu cotización
      </h2>
      <p className="text-sm text-secondary">
        Déjanos tus datos y uno de nuestros asesores se pondrá en contacto contigo.
      </p>
      <LeadForm />
    </div>
  );
}
