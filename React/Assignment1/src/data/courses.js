const DUMMY_COURSES = [
    {
        id: 1,
        title: "React for Beginners",
        level: "Beginner",
        duration: "4 weeks",
        price: 2999,
        description: "Learn the fundamentals of React, including components, state, props, hooks, and basic routing. Perfect for developers starting their front-end journey.",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
        instructor: "Sarah Johnson"
    },
    {
        id: 2,
        title: "Advanced JavaScript & ES6+",
        level: "Advanced",
        duration: "6 weeks",
        price: 4999,
        description: "Deep dive into closures, prototypes, asynchronous programming, promises, async/await, and modern ES6+ features to write high-performance JS.",
        thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
        instructor: "Michael Chen"
    },
    {
        id: 3,
        title: "Node.js & Express Backend",
        level: "Intermediate",
        duration: "8 weeks",
        price: 5999,
        description: "Build robust REST APIs, handle authentication, work with databases, and structure backend servers using Express.js and Node.js.",
        thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
        instructor: "Aisha Patel"
    },
    {
        id: 4,
        title: "Full Stack Web BootCamp",
        level: "Advanced",
        duration: "12 weeks",
        price: 12999,
        description: "The ultimate program covering React, Node.js, Express, databases, deployment, and best practices to build production-grade web applications.",
        thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
        instructor: "David Kim"
    },
    {
        id: 5,
        title: "Tailwind CSS Masterclass",
        level: "Beginner",
        duration: "3 weeks",
        price: 1999,
        description: "Master modern utility-first CSS styling. Learn responsive design, flexbox, grid, and custom configurations to build beautiful interfaces quickly.",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        instructor: "Priya Shah"
    },
    {
        id: 6,
        title: "Python for Data Science",
        level: "Intermediate",
        duration: "10 weeks",
        price: 8999,
        description: "An introduction to Python programming with a focus on data analysis, including NumPy, Pandas, Matplotlib, and data manipulation techniques.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        instructor: "Daniel Brooks"
    },
    {
        id: 7,
        title: "UI/UX Design Fundamentals",
        level: "Beginner",
        duration: "5 weeks",
        price: 3499,
        description: "Learn core design principles, wireframing, prototyping, and user-centered thinking to create intuitive interfaces.",
        thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
        instructor: "Liam Roberts"
    },
    {
        id: 8,
        title: "TypeScript Pro",
        level: "Intermediate",
        duration: "6 weeks",
        price: 4499,
        description: "Master TypeScript concepts such as types, interfaces, generics, and advanced tooling for scalable applications.",
        thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
        instructor: "Nina Alvarez"
    },
    {
        id: 9,
        title: "MongoDB for Developers",
        level: "Intermediate",
        duration: "4 weeks",
        price: 3999,
        description: "Understand document databases, schema design, querying, and indexing with MongoDB in modern apps.",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        instructor: "Rohan Mehta"
    },
    {
        id: 10,
        title: "GraphQL API Development",
        level: "Advanced",
        duration: "7 weeks",
        price: 6999,
        description: "Build efficient and flexible APIs with GraphQL, schema design, resolvers, subscriptions, and performance tuning.",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        instructor: "Ella Martinez"
    }
];
export default DUMMY_COURSES