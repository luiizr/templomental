type IconeWorkspaceProps = {
  nome:
    | "adicionar"
    | "ajustes"
    | "arquivo"
    | "conexoes"
    | "dashboard"
    | "gerar"
    | "notificacoes"
    | "pesquisa"
    | "perfil"
    | "projeto"
    | "sair"
    | "suporte";
  className?: string;
};

export function IconeWorkspace({
  nome,
  className = "h-5 w-5",
}: IconeWorkspaceProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {nome === "dashboard" ? (
        <>
          <rect x="3" y="3" width="7" height="7" rx="1.6" />
          <rect x="14" y="3" width="7" height="5" rx="1.6" />
          <rect x="14" y="12" width="7" height="9" rx="1.6" />
          <rect x="3" y="14" width="7" height="7" rx="1.6" />
        </>
      ) : nome === "conexoes" ? (
        <>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M8.2 10.9 15.7 7.2" />
          <path d="M8.2 13.1 15.7 16.8" />
        </>
      ) : nome === "arquivo" ? (
        <>
          <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5H10l2 2h4.5A2.5 2.5 0 0 1 19 9.5v7A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5z" />
          <path d="M5 10h14" />
        </>
      ) : nome === "ajustes" ? (
        <>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3.5v2.2" />
          <path d="M12 18.3v2.2" />
          <path d="m5.9 5.9 1.6 1.6" />
          <path d="m16.5 16.5 1.6 1.6" />
          <path d="M3.5 12h2.2" />
          <path d="M18.3 12h2.2" />
          <path d="m5.9 18.1 1.6-1.6" />
          <path d="m16.5 7.5 1.6-1.6" />
        </>
      ) : nome === "suporte" ? (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M9.5 9.5a2.5 2.5 0 1 1 4.4 1.6c-.8.8-1.9 1.4-1.9 2.7" />
          <circle cx="12" cy="16.8" r="0.8" fill="currentColor" stroke="none" />
        </>
      ) : nome === "notificacoes" ? (
        <>
          <path d="M8 17h8" />
          <path d="M10.5 20a1.8 1.8 0 0 0 3 0" />
          <path d="M6.5 17V11a5.5 5.5 0 1 1 11 0v6l1.5 1.5H5Z" />
        </>
      ) : nome === "gerar" ? (
        <>
          <path d="M12 3.5 13.8 8l4.7 1.2-4 2.9.3 5-4.8-2.5L7.2 17l.3-5-4-2.9L8.2 8Z" />
          <path d="M18.5 16.5 19 18l1.5.5-1.3 1 .1 1.6-1.3-.8-1.3.8.1-1.6-1.3-1 1.5-.5Z" />
        </>
      ) : nome === "pesquisa" ? (
        <>
          <circle cx="11" cy="11" r="5.5" />
          <path d="m15.2 15.2 4.3 4.3" />
        </>
      ) : nome === "adicionar" ? (
        <>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </>
      ) : nome === "perfil" ? (
        <>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19a7 7 0 0 1 14 0" />
        </>
      ) : nome === "projeto" ? (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 8h8" />
          <path d="M8 12h5" />
          <path d="M8 16h8" />
        </>
      ) : nome === "sair" ? (
        <>
          <path d="M10 7V5.5A2.5 2.5 0 0 1 12.5 3H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5A2.5 2.5 0 0 1 10 18.5V17" />
          <path d="M14 12H4" />
          <path d="m7.5 8.5-3.5 3.5 3.5 3.5" />
        </>
      ) : (
        <>
          <path d="M12 6v12" />
          <path d="M6 12h12" />
        </>
      )}
    </svg>
  );
}
