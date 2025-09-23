export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--secondary)]/5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 
                       bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] 
                       bg-clip-text text-transparent"
          >
            About Me
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--hero-paragraph)" }}
          >
            Passionate developer building fast, accessible, and delightful web
            experiences.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Profile image card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center md:justify-center md:pl-1"
            >
                <div className="rounded-3xl p-1 bg-gradient-to-tr from-[var(--primary)]/30 via-[var(--secondary)]/20 to-[var(--tertiary)]/25 shadow-lg">
                <div className="bg-[var(--background)]/80 dark:bg-[var(--background)]/60 rounded-2xl p-4 backdrop-blur-md">
                    <img
                    src={profilePic}
                    alt="Profile picture"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl shadow-inner"
                    />
                </div>
                </div>
            </motion.div>
            </div>

      </div>
    </section>
  );
}
