import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompationList from "@/components/CompationList";
import Cta from "@/components/CTA";

const Page = () => {
    return (<main>
        <h1 className="text-2xl underline">
            Popular Companions
        </h1>

        <section className="home-section">
            <CompanionCard
            id="123"
            name="111name"
            topic="topic111"
            subject="science"
            duration={46}
            color="#ffdae6"
            />
            <CompanionCard
                id="456"
                name="222name"
                topic="topic222"
                subject="science2"
                duration={46}
                color="#ffdae6"
            />
            <CompanionCard
                id="789"
                name="333name"
                topic="topic333"
                subject="science"
                duration={46}
                color="#ffdae6"
            />
        </section>

        <section className="home-section">
            <CompationList/>
            <Cta/>
        </section>

    </main>)
}

export default Page