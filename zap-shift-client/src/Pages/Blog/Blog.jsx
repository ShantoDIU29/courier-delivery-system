const Blog = () => {
  return (
    <main className="px-5 py-12 sm:px-8 lg:px-12">
      <section className="rounded-3xl bg-[#063f45] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
          ZapShift Blog
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Updates and ideas for better deliveries
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
          Blog articles are coming soon. Check back for delivery tips and
          updates from ZapShift.
        </p>
      </section>
    </main>
  );
};

export default Blog;
