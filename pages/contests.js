
import Head from "next/head"
import ContestItem from "../components/ContestsPage/ContestItem"
import Hero from "../components/ContestsPage/Hero"
import Level from "../components/ContestsPage/Level"
import Rules from "../components/ContestsPage/Rules"
import Footer from "../components/UI/Footer"
import Navbar from "../components/UI/Navbar"
import StarsBackground from "../components/UI/Stars"

export default function Contests() {
    return (
        <>
            <Head>
                <title>Contests</title>
            </Head>
            <StarsBackground />
            <div style={{ background: "linear-gradient(180deg, rgba(255, 128, 0, 0.84) 0%, #FF8000 0.01%, rgba(254, 1, 153, 0.33) 100%)" }}>
                <Navbar />
                <main style={{ position: 'relative', zIndex: 2 }}>
                    <Hero />
                    <Rules />
                    <Level
                        title="Beginner Level"
                        description="What is the best way to start your coding journey than testing up your coding skills
                        So take a plunge and start it now!!"
                        date="2 Feb"
                        time="5:00"
                        duration="1 hour" />
                    <Level
                        title="Intermediate Level"
                        description="Learned enough of coding 
                        Then show some confidence and test up your skills!"
                        date="2 Feb"
                        time="5:00"
                        duration="1 hour" />
                    <Level
                        title="Expert Level"
                        description="If you consider yourself a coding maestro then here's a chance to prove it !!"
                        date="2 Feb"
                        time="5:00"
                        duration="1 hour" />

                    <ContestItem title="CallistO"
                        description="Writing up the technical content is the perfect combination in the field of study, and is a fabulous way of sharing the accumulated knowledge by giving it a theoretical perspective with an interesting touch.  (concluding line missing)"
                        topics={["Coming Soon"]}
                        image="writing.png"
                        prize1="book1.png"
                        prize2="book2.png"
                        link="https://forms.gle/Cai3YZhCgPGMU8gbA"
                        guidelines={[
                            "The article should not get deviated from the basic theme.",
                            "Proofread the article before the final submission to avoid any grammatical or spelling errors. You can use the Grammarly extension to avoid such mistakes.",
                            "The articles which are incorrect or promotional or plagiarized  may lead to rejection",
                            "The article should be well-formatted such as proper use of headings, bullet points etc.",
                            "Attaching images is not mandatory but appreciated.",
                            "If image is attached make sure it is license, If you have taken free images from the internet, mention the Url as a reference underneath the image.",
                            "The blog should have minimum 300 and maximum 1000 words.",
                            "Late Submissions are strictly not allowed."
                        ]}
                        disqualified={null}
                        date="11th Feb"
                        time="8:00PM"
                    />

                    <ContestItem title="Kalpana"
                        description="To give the series of competitions an aesthetic touch there will be a poster/digital art competition. Exhibit your creativity through it!!"
                        topics={["Coming Soon"]}
                        image="poster.png"
                        prize1="poster1.png"
                        prize2="poster2.png"
                        link="https://forms.gle/VZ1C6QRMFKSMyqmg6"
                        guidelines={[
                            "All artwork submitted must be digital paintings created with illustration software.",
                            "There is no limitation regarding the software used to create the artworks.",
                            "All entries must follow the Competition theme.",
                            "Theme will be revealed on 12th Feb.",
                            "Participants can only submit one artwork.",
                            "Only png,jpeg image file formats will be accepted",
                            "You have to register separately for the digital art competition,  In case you are facing issue you can  ping us on our discord",
                            "Winner declared by the team will be final and will not be changed"
                        ]}
                        disqualified={[
                            "Manually drawn or painted and scanned into digital format",
                            "Edited photos, collages or animation.",
                            "Submitted in previous competitions or used for commercial purposes.",
                            "Artwork that infringe on intellectual property rights of other individuals.",
                            "Works containing pornography or promoting violence."
                        ]}
                        date="12th Feb"
                        time="12:30PM"
                    />
                </main>
                <Footer />
            </div>
        </>
    )
}
