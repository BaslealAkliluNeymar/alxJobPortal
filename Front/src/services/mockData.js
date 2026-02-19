export const MOCK_TALENTS = [
    {
        _id: '101',
        name: 'Alice Johnson',
        position: 'Senior Fullstack Developer',
        role: 'Professional',
        location: 'Kigali, Rwanda',
        status: 'Approved',
        experience: '6',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        bio: 'Passionate Senior Fullstack Developer with over 6 years of experience building scalable web applications. Expert in architectural design, cloud infrastructure, and mentoring high-performing engineering teams.',
        description: 'Passionate Senior Fullstack Developer with over 6 years of experience building scalable web applications. Expert in architectural design, cloud infrastructure, and mentoring high-performing engineering teams.',
        skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS', 'Docker', 'System Design'],
        email: 'alice.johnson@example.com',
        workHistory: [
            {
                position: 'Senior Software Engineer',
                placeofWork: 'TechSolv Africa',
                summary: 'Led the migration of a legacy monolithic platform to a modern microservices architecture using React and Node.js. Improved system performance by 40% and reduced server costs by 25%.',
                years: '3',
                technologies: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB']
            },
            {
                position: 'Full-stack Developer',
                placeofWork: 'Global Connect',
                summary: 'Developed and maintained various client-facing web applications. Implemented real-time messaging features using WebSockets and optimized database queries for faster load times.',
                years: '3',
                technologies: ['JavaScript', 'Express', 'PostgreSQL', 'Redux']
            }
        ],
        projects: [
            {
                id: 'p1',
                nameofProject: 'EduStream Web App',
                durationofProject: '8 months',
                summary: 'A comprehensive learning management system designed for remote education in East Africa. Features offline-first capabilities and interactive video streaming.',
                technologies: ['React Native', 'Firebase', 'WebRTC']
            }
        ],
        education: [
            {
                nameofDegree: 'BSc in Computer Science',
                placeofEducation: 'University of Rwanda',
                years: '2016 - 2020'
            }
        ]
    },
    {
        _id: '102',
        name: 'Bob Smith',
        position: 'DevOps Engineer',
        role: 'Professional',
        location: 'Lagos, Nigeria',
        status: 'Approved',
        experience: '4',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        bio: 'Infrastructure and automation specialist focused on Kubernetes, CI/CD, and site reliability engineering. Helping startups scale with robust cloud-native solutions.',
        description: 'Infrastructure and automation specialist focused on Kubernetes, CI/CD, and site reliability engineering. Helping startups scale with robust cloud-native solutions.',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Python', 'Prometheus'],
        email: 'bob.smith@cloudops.io',
        workHistory: [
            {
                position: 'DevOps Specialist',
                placeofWork: 'Andela',
                summary: 'Automated infrastructure provisioning using Terraform and managed large-scale Kubernetes clusters across multiple AWS regions.',
                years: '2',
                technologies: ['Terraform', 'EKS', 'Helm']
            }
        ],
        projects: [
            {
                id: 'p2',
                nameofProject: 'Zero Downtime Deployer',
                durationofProject: 'Ongoing',
                summary: 'A custom tool built to facilitate blue-green deployments for legacy applications moving to the cloud.',
                technologies: ['Go', 'Kubernetes API', 'GitHub Actions']
            }
        ],
        education: [
            {
                nameofDegree: 'BSc in Software Engineering',
                placeofEducation: 'University of Lagos',
                years: '2015 - 2019'
            }
        ]
    },
    {
        _id: '103',
        name: 'Charlie Mwangi',
        position: 'Data Scientist',
        role: 'Professional',
        location: 'Nairobi, Kenya',
        status: 'Pending',
        experience: '3',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        bio: 'Extracting actionable insights from complex datasets. Specializing in machine learning, statistical modeling, and data visualization using Python and R.',
        description: 'Extracting actionable insights from complex datasets. Specializing in machine learning, statistical modeling, and data visualization using Python and R.',
        skills: ['Python', 'SQL', 'TensorFlow', 'Scikit-learn', 'Tableau', 'R', 'A/B Testing'],
        email: 'charlie.mwangi@data.ke',
        workHistory: [
            {
                position: 'Junior Data Analyst',
                placeofWork: 'Safaricom',
                summary: 'Analyzed customer churn patterns and developed predictive models that helped reduce churn by 12%. Created automated reporting dashboards for executive stakeholders.',
                years: '2',
                technologies: ['Python', 'PowerBI', 'SQL Server']
            }
        ],
        projects: [
            {
                id: 'p3',
                nameofProject: 'Market Trend Predictor',
                durationofProject: '4 months',
                summary: 'Utilized Prophet and LSTM models to predict retail market fluctuations in East Africa based on historical sales data.',
                technologies: ['Keras', 'Flask', 'PostgreSQL']
            }
        ],
        education: [
            {
                nameofDegree: 'BSc in Statistics',
                placeofEducation: 'Nairobi University',
                years: '2017 - 2021'
            }
        ]
    },
    {
        _id: '104',
        name: 'Diana Prince',
        position: 'UI/UX Designer',
        role: 'Professional',
        location: 'Accra, Ghana',
        status: 'Approved',
        experience: '5',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        bio: 'Crafting user-centric digital experiences that blend aesthetics with functionality. Expert in user research, wireframing, and interactive prototyping.',
        description: 'Crafting user-centric digital experiences that blend aesthetics with functionality. Expert in user research, wireframing, and interactive prototyping.',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping', 'Accessibility'],
        email: 'diana.p@design.gh',
        workHistory: [
            {
                position: 'Senior Product Designer',
                placeofWork: 'Hubtel',
                summary: 'Redesigned the core mobile application, resulting in a 30% increase in daily active users and a significant improvement in NPS scores.',
                years: '3',
                technologies: ['Figma', 'Miro', 'Hotjar']
            }
        ],
        projects: [
            {
                id: 'p4',
                nameofProject: 'EcoTrack Mobile',
                durationofProject: '6 months',
                summary: 'An award-winning app design focused on helping urban households track and reduce their carbon footprint.',
                technologies: ['Figma', 'ProtoPie', 'User Testing']
            }
        ],
        education: [
            {
                nameofDegree: 'BFA in Graphic Design',
                placeofEducation: 'KNUST',
                years: '2014 - 2018'
            }
        ]
    },
    {
        _id: '105',
        name: 'Emmanuel Adebayo',
        position: 'DevOps Engineer',
        role: 'Professional',
        location: 'London, UK',
        status: 'Approved',
        experience: '7',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        bio: 'Seasoned SRE and DevOps Lead with a deep focus on observability and self-healing systems. Proficient in Go and cloud-native architecture.',
        description: 'Seasoned SRE and DevOps Lead with a deep focus on observability and self-healing systems. Proficient in Go and cloud-native architecture.',
        skills: ['Kubernetes', 'Istio', 'Go', 'GCP', 'Azure', 'Ansible', 'Grafana'],
        email: 'e.adebayo@sre-experts.com',
        workHistory: [
            {
                position: 'SRE Lead',
                placeofWork: 'Monzo',
                summary: 'Managed high-availability banking infrastructure serving millions of users. Implemented robust slo/sli tracking and automated incident response workflows.',
                years: '4',
                technologies: ['Kubernetes', 'Prometheus', 'Go', 'Cassandra']
            }
        ],
        projects: [
            {
                id: 'p5',
                nameofProject: 'KubeGuard',
                durationofProject: 'Open Source',
                summary: 'An open-source policy enforcer for Kubernetes clusters that ensures resource compliance and security best practices.',
                technologies: ['Go', 'Rego/OPA', 'Kubernetes']
            }
        ],
        education: [
            {
                nameofDegree: 'MSc in Cloud computing',
                placeofEducation: 'Imperial College London',
                years: '2015 - 2016'
            }
        ]
    }
];

export const MOCK_JOBS = [
    {
        _id: '1',
        position: 'Frontend Developer',
        company: 'Google',
        location: 'Mountain View, CA',
        jobTitle: 'Senior React Developer',
        type: 'Full-time',
        experience: '5+ years',
        logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        description: ['Build amazing web apps', 'Collaborate with cross-functional teams'],
        responsibilities: ['Write clean code', 'Mentor junior devs'],
        qualifications: ['BS in Computer Science', 'Strong JS skills'],
        students: ['101', '104']
    },
    {
        _id: '2',
        position: 'Backend Developer',
        company: 'Meta',
        location: 'Menlo Park, CA',
        jobTitle: 'Distributed Systems Engineer',
        type: 'Full-time',
        experience: '3+ years',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png',
        description: ['Scale infrastructure', 'Optimize databases'],
        responsibilities: ['Design APIs', 'Improve performance'],
        qualifications: ['MS in Computer Science', 'Experience with Go or Java'],
        students: ['102']
    },
    {
        _id: '3',
        position: 'DevOps Engineer',
        company: 'Amazon Web Services',
        location: 'Cape Town, SA',
        jobTitle: 'Cloud Architect',
        type: 'Full-time',
        experience: '7+ years',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        description: ['Design cloud-native architectures', 'Lead infrastructure migrations'],
        responsibilities: ['Build robust CI/CD pipelines', 'Optimize cloud spends'],
        qualifications: ['AWS Solution Architect Professional', 'Experience with Terraform'],
        students: ['105', '102']
    }
];

export const MOCK_PROJECTS = [
    {
        _id: 'p_101',
        title: 'Office Management App for ALX Reception',
        description: 'Design and develop a complete visitor management system for ALX reception. The app should track guest entries, host notifications, and generate daily reports. Focus on a clean, fast-loading UI.',
        rewards: '1500 Legacy Points',
        required_candidates: 30,
        added_candidates: 12,
        status: 'Active',
        category: 'Software Development',
        deadline: '2024-06-30',
        mentors: ['Alice Johnson', 'Bob Smith'],
        techStack: ['React', 'Firebase', 'Tailwind CSS'],
        requirements: [
            'Experience with React and State Management',
            'Strong understanding of UI/UX principles',
            'Basic knowledge of NoSQL databases'
        ],
        milestones: [
            'Phase 1: UI Mockups and Wireframes',
            'Phase 2: Database Schema & Authentication',
            'Phase 3: Core Visitor Tracking Modules',
            'Phase 4: Final Testing & Deployment'
        ]
    },
    {
        _id: 'p_102',
        title: 'Smart Campus Navigation System',
        description: 'Build an interactive 3D map for the university campus to help new students and visitors navigate buildings and facilities. Includes real-time location tracking and accessible route planning.',
        rewards: '2200 Legacy Points',
        required_candidates: 15,
        added_candidates: 8,
        status: 'Active',
        category: 'Mobile Development',
        deadline: '2024-07-15',
        mentors: ['Diana Prince'],
        techStack: ['React Native', 'Three.js', 'Mapbox API'],
        requirements: [
            'Familiarity with React Native or Flutter',
            'Experience with Map APIs',
            'Interest in 3D rendering / WebGL'
        ],
        milestones: [
            'Phase 1: Building Map Assets',
            'Phase 2: Routing Logic Implementation',
            'Phase 3: AR View Integration'
        ]
    },
    {
        _id: 'p_103',
        title: 'AI-Powered Resume Screener',
        description: 'Develop an automated tool that uses NLP to screen resumes against job descriptions. The system should rank candidates based on skill match and experience relevance.',
        rewards: '3000 Legacy Points',
        required_candidates: 10,
        added_candidates: 4,
        status: 'In Progress',
        category: 'AI / Machine Learning',
        deadline: '2024-08-01',
        mentors: ['Charlie Mwangi', 'Emmanuel Adebayo'],
        techStack: ['Python', 'OpenAI API', 'FastAPI'],
        requirements: [
            'Proficiency in Python and NLP concepts',
            'Experience working with RESTful APIs',
            'Understanding of Vector Databases'
        ],
        milestones: [
            'Phase 1: Dataset Collection & Preprocessing',
            'Phase 2: Model fine-tuning',
            'Phase 3: API Wrapper Development'
        ]
    }
];

export const MOCK_ANALYTICS = {
    totalJobs: 48,
    totalApplications: 215,
    activePostings: 14,
    recentActivity: [
        { date: '2024-03-20', activity: 'New job posted: Cloud Architect' },
        { date: '2024-03-19', activity: 'Bob Smith applied for Distributed Systems Engineer' },
        { date: '2024-03-18', activity: 'New talent registered: Emmanuel Adebayo' }
    ]
};
