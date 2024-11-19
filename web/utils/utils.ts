const features = [
    {
        title: 'Real-Time Duels',
        description:
            'Challenge anyone, anywhere in real-time coding battles. See who’s the better coder!',
        icon: '💻',
    },
    {
        title: 'Track Progress',
        description:
            'Keep track of your contests, wins, and challenges to monitor your growth.',
        icon: '📊',
    },
    {
        title: 'Live Contests',
        description:
            'Join live contests happening now and compete with developers globally.',
        icon: '⚡',
    },
    {
        title: 'Upcoming Challenges',
        description:
            'Plan ahead and join upcoming challenges to prepare and improve your skills.',
        icon: '⏳',
    },
];

const steps = [
    {
        title: 'Sign Up',
        description:
            'Create an account to join the community and track your progress.',
        icon: '📝',
    },
    {
        title: 'Challenge Your Opponent',
        description:
            'Select a challenge and start coding to compete in real-time.',
        icon: '🤖',
    },
    {
        title: 'Track Your Results',
        description: 'Monitor your performance, wins, and overall stats.',
        icon: '📈',
    },
];

interface Data {
    title: string;
    para: string;
    quote: string;
    author: string;
}

const LoginPageData: Data = {
    title: "Welcome Back",
    para: "Login to access your account and continue your journey with us.",
    quote: "The best investment you can make is in yourself.",
    author: "Warren Buffett"
}

const SignUpPageData: Data = {
    title: "Join Us",
    para: "Start your journey with us today and explore endless possibilities.",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
}

export { features, steps, SignUpPageData, LoginPageData };