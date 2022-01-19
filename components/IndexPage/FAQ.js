import FAQItem from './FAQ-item';
import classes from './FAQ.module.css';

const FAQS = [
    {
        question: "Where can we register for the event?",
        answer: "The registration link for every event is there on that particular competition page of the website."
    },
    {
        question: "Is there any registration fee?",
        answer: "No, the registrations are completely free."
    },
    {
        question: "In how many competitions one can participate?",
        answer: "One can participate in as many competitions as he/she wants."
    },
    {
        question: "What is the eligibility criteria for different competitions?",
        answer: " There is no eligibility criteria for any competition. You just need to register for that particular competition."
    },
    {
        question: "What will be the time duration for the workshops?",
        answer: "The workshops will be for 2 to 3 hours."
    },
    {
        question: "Do I have to register separately for hackathons and other events?",
        answer: "Yes, you need to register separately for hackathons and other events."
    },
    {
        question: "What are the perks for participating in these events?",
        answer: "These events will increase your knowledge and skills. Prizes and swags for different competitions is another perk of the event."
    },
    {
        question: "Will I get any certificate for participating in the fest?",
        answer: "Yes, you will get the certificate for participating in the fest."
    },
    {
        question: "How can I solve my queries?",
        answer: "Reach us out at mugdsc@gmail.com",
        email: "mugdsc@gmail.com"
    },
    {
        question: "Is this event online/offline?",
        answer: "The whole event will be online."
    },
    {
        question: "How do I join your community?",
        answer: "You can join our discord and telegram channels. You can find us on all social media platforms."
    },
]
const FAQ = () => {
    return (
        <section className={classes.faq} id='FAQs'>
            <h2>Frequetly Asked Questions</h2>
            <div className={classes.faq_container}>
                {FAQS.map((item, index) => <FAQItem key={index} question={item.question} answer={item.answer} />)}
                <div className={classes.discord}>
                    <p>Have more questions? Join our  <a href="https://discord.gg/ZNeAcpv66y" target="_blank" rel="noopener noreferrer">discord server</a> </p>
                </div>
            </div>
        </section>
    )
}
export default FAQ;