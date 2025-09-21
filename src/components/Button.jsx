function Button({ 
    children, 
    variant = "solid", 
    as = "button", 
    ...props }) {
  
    const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none";
  
    const variants = {
    solid: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary/20 bg-transparent",
    ghost: "text-primary hover:bg-primary/10",
  };

    const Comp = as === "a" ? "a" : as === "link" ? "a" : "button";
    
    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const classes = clsx(base, variants[variant], sizes[size]);

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}

export default Button;