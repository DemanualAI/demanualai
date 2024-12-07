const stats = [
    { number: "50+", text: "Projects Completed", subtext: "*as a team" },
    { number: "500+", text: "Processes Automated" },
    { number: "100%", text: "On-Time Delivery" }
  ]
  
  const Stats = () => {
    return (
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">{stat.text}</div>
                {stat.subtext && <div className="text-sm text-muted-foreground">{stat.subtext}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Stats
  
  