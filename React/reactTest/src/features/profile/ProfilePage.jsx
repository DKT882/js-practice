import { useState } from 'react'
import HeroSection from './components/HeroSection'
import SkillsCard from './components/SkillsCard'
import ProfileStats from './components/ProfileStats'
import AboutSection from './components/AboutSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const skills = [
    {
        title: 'Web Development',
        description: 'Building responsive pages with HTML, CSS, JavaScript, and React.',
        projects: ['Portfolio Page', 'IICS Website', 'Profile App'],
    },
    {
        title: 'JavaScript',
        description: 'Working with arrays, functions, events, and reusable UI logic.',
        projects: ['Todo List', 'Counter App', 'Form Practice'],
    },
    {
        title: 'Problem Solving',
        description: 'Creating small projects that make concepts easier to understand.',
        projects: ['MediSign', 'Practice Dashboard', 'Learning Notes'],
    },
]

function ProfilePage() {
    const [liked, setLiked] = useState(false)
    const [views, setViews] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const [message, setMessage] = useState('')
    const [confirmation, setConfirmation] = useState('')

    const handleToggleLike = () => {
        setLiked(!liked)
    }

    const handleAddView = () => {
        setViews(views + 1)
    }

    const handleToggleShowMore = () => {
        setShowMore(!showMore)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setConfirmation(`Thanks for your message: "${message}"`)
        setMessage('')
    }

    return (
        <main>
            <HeroSection />
            <AboutSection showMore={showMore} onToggleShowMore={handleToggleShowMore} />
            <section className="skillsSection" id="skills">
                <div className="sectionHeader">
                    <h2>{skills.length} Skills</h2>
                    <p>These are the areas I am currently practicing.</p>
                </div>
                <div className="cardsSection">
                    {skills.map((skill) => (
                        <SkillsCard
                            key={skill.title}
                            title={skill.title}
                            description={skill.description}
                            projects={skill.projects}
                        />
                    ))}
                </div>
            </section>
            <ProfileStats
                liked={liked}
                onToggleLike={handleToggleLike}
                views={views}
                onAddView={handleAddView}
            />
            <ContactForm
                message={message}
                confirmation={confirmation}
                onMessageChange={handleMessageChange}
                onSubmit={handleSubmit}
            />
            <Footer />
        </main>
    )
}

export default ProfilePage
