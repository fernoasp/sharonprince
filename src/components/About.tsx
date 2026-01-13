const About = () => {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-10">

        <h2 className="text-4xl font-medium mb-16 fade-up">
          About Sharon
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Academics",
              text: "NET-qualified educator with experience teaching Social Work at Rajagiri College of Social Sciences."
            },
            {
              title: "Wellness",
              text: "Certified Yoga and Zumba trainer promoting physical and mental well-being."
            },
            {
              title: "Creativity",
              text: "Freelance content writer with experience in theatre and television advertisements."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="text-xl font-medium mb-4 text-[#9B8AFB]">
                {item.title}
              </h3>
              <p className="text-[#6B6875] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
