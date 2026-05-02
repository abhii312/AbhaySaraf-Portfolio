export const Bio = {
    name: 'Abhay Saraf',
    roles: [
        "Software Engineer",
        "Backend Developer",
        "Java Full Stack Developer",
        "Microservices Architect",
    ],
    description: 
    "I am a results-oriented Software Engineer with a passion for building high-performance, scalable backend systems. Specialized in Java and Spring Boot, I have a proven track record of refactoring monolithic architectures into microservices, optimizing database performance, and delivering robust REST APIs. My focus is on clean code, SOLID principles, and leveraging cloud-native technologies to solve complex engineering challenges.",
    github: "https://github.com/abhii312",
    linkedin: "https://www.linkedin.com/in/abhaysaraf",
    twitter: "https://twitter.com/abhaysaraf",
    email:"mailto:sarafabhay721@gmail.com",
    resume: "#",
};

export const skills = [
    {
      title: "Backend Development",
      skills: [
        {
          name: "Java",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
        },
        {
          name: "Hibernate",
          image: "/hibernate.png",
        },
        {
          name: "REST APIs",
          image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Maven",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg",
        }
      ],
    },
    {
      title: "Databases & Caching",
      skills: [
        {
          name: "MySQL",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "PostgreSQL",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Redis",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
        },
        {
          name: "Elasticsearch",
          image: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
        }
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "AWS (Lambda, S3, EC2)",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Docker",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        },
        {
          name: "Git & GitHub",
          image: "https://github.com/fluidicon.png",
        },
        {
          name: "Jira",
          image: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
        }
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        {
          name: "JUnit",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", 
        },
        {
          name: "Kafka",
          image: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
        },
        {
          name: "Hoverfly",
          image: "/hoverfly.png",
        },
        {
          name: "Pactflow",
          image: "/pactflow.png",
        },
        {
            name: "BitBucket",
            image: "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg",
        }
      ],
    }
];

export const experiences = [
    {
      id: 0,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tech_Mahindra_new_logo.svg/1280px-Tech_Mahindra_new_logo.svg.png",
      role: "Software Engineer",
      company: "TechMahindra (Client: Thomson Reuters)",
      date: "Dec 2023 - Present",
      desc: [
        "Refactored tightly coupled modules into Spring Boot microservices, reducing code duplication by 30% and improving service maintainability and independent deployment.",
        "Built 8+ Spring Boot REST APIs serving 10k+ daily requests, improving response time by 25% through async processing.",
        "Reduced API latency by 40% by using CompletableFuture for parallel REST calls, leading to significant performance gains in the system.",
        "Implemented Hibernate ORM querying to optimize database access and improve query execution time.",
        "Containerized applications using Docker, enabling consistent environments across development and deployment.",
        "Developed unit and integration tests using JUnit, improving API test coverage and reducing production defects.",
        "Utilized Pactflow and Hoverfly for integration and component testing, ensuring reliable service communication.",
        "Optimized MySQL queries using indexing and query refactoring, reducing average query execution time from 350ms to 120ms.",
        "Collaborated with the Product Owner to create detailed Jira stories and enhance sprint planning, improving story accuracy and reducing sprint cycle time.",
        "Assisted in deploying backend services on AWS infrastructure, gaining exposure to cloud-based deployment and monitoring workflows.",
        "Created technical documentation and conducted knowledge-transfer sessions to support onboarding and team knowledge sharing."
      ],
      skills: [
        "Java", "Spring Boot", "Hibernate", "REST APIs", "MySQL", "Docker", "AWS", "Kafka", "Redis", "JUnit", "Pactflow", "Hoverfly"
      ],
      stats: [
        { num: "30%", label: "Code Duplication Reduced" },
        { num: "8+", label: "REST APIs Built" },
        { num: "40%", label: "API Latency Reduced" },
        { num: "10k+", label: "Daily Requests Served" }
      ],
      achievements: [
        "Standing Ovation Award (2x) for high-quality backend delivery",
        "Client recognition for microservice architecture improvements"
      ]
    },
];

export const education = [
    {
      id: 0,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Ramaiah_University_of_Applied_Sciences_logo.png/220px-Ramaiah_University_of_Applied_Sciences_logo.png",
      school: "M S Ramaiah University of Applied Sciences, Bengaluru",
      date: "2019 - 2023",
      grade: "8.8 GPA",
      desc: "Relevant Courses: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.",
      degree: "Bachelor of Technology - Computer Science and Engineering",
    },
];

export const projects = [
    {
      id: 0,
      title: "Distributed URL Shortener",
      date: "2024",
      description: "Built a distributed URL shortening service with Base62 encoding for short link generation. Implemented Redis caching to reduce database lookups and improve response latency. Designed MySQL schema to store URL mappings and analytics. Containerized application using Docker.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      tags: ["Java", "Spring Boot", "Redis", "MySQL", "Docker", "Base62"],
      category: "Backend Development",
      github: "https://github.com/abhii312",
      webapp: "https://github.com/abhii312",
    },
    {
      id: 1,
      title: "Rate Limiter Service",
      date: "2024",
      description: "Implemented Token Bucket rate limiting algorithm using Redis. Built REST APIs to enforce request limits across services. Prevented excessive traffic spikes and improved backend reliability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      tags: ["Java", "Spring Boot", "Redis", "Token Bucket"],
      category: "Infrastructure",
      github: "https://github.com/abhii312",
      webapp: "https://github.com/abhii312",
    },
];