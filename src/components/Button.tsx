import classNames from "classnames";

type ButtonProps = {
  variant?: "primary" | "outline";
  label: string;
  href?: string;
  target?: string;
  icon?: string;
  className?: string;
};

const Button = ({
  variant = "primary",
  label,
  target = "_self",
  href,
  icon,
  className,
}: ButtonProps) => {
  const customClass = classNames(
    "btn",
    { "btn-primary": variant === "primary" },
    { "btn-outline": variant === "outline" },
    className
  );

  if (href)
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={customClass}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden>
            {icon}
          </span>
        )}
      </a>
    );

  return (
    <button className={customClass}>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
