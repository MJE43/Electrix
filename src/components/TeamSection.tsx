export function TeamSection() {
  const teamMembers = [
    {
      name: "Kyle Power",
      role: "Founder & Master Electrician",
      image: "/images/kyle-power.jpg",
    },
    {
      name: "Jane Doe",
      role: "Senior Electrician",
      image: "/images/jane-doe.jpg",
    },
    {
      name: "John Smith",
      role: "Commercial Projects Lead",
      image: "/images/john-smith.jpg",
    },
  ]

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 h-48 w-48 rounded-full"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
