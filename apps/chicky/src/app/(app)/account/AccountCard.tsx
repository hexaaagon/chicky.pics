interface AccountCardProps {
  params: {
    header: string;
    description: string;
    price?: number;
  };
  children: React.ReactNode;
}

export function AccountCard({ params, children }: AccountCardProps) {
  const { header, description } = params;
  return (
    <div className="rounded-lg border border-neutral-200 bg-white">
      <div id="body" className="p-4">
        <h3 className="text-xl font-semibold">{header}</h3>
        <p className="text-neutral-500">{description}</p>
      </div>
      {children}
    </div>
  );
}

export function AccountCardBody({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function AccountCardFooter({
  description,
  children,
}: {
  children: React.ReactNode;
  description: string;
}) {
  return (
    <div
      className="flex items-center justify-between rounded-b-lg border border-neutral-200 bg-neutral-50 p-4"
      id="footer"
    >
      <p className="text-sm text-neutral-500">{description}</p>
      {children}
    </div>
  );
}
