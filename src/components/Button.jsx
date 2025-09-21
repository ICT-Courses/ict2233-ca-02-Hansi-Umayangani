function Button({ children, variant = "solid", as = "button", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none";
  const variants = {
    solid: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary/20 bg-transparent",
    ghost: "text-primary hover:bg-primary/10",
  };

  const Comp = as === "a" ? "a" : as === "link" ? "a" : "button";

  return (
    <Comp className={`${base} ${variants[variant]} px-6 py-3`} {...props}>
      {children}
    </Comp>
  );
}

export default Button;