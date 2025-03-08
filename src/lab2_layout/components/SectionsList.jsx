import React from 'react'
import Section from './Section'
import img8 from "../../assets/section1.jpg"
import img9 from "../../assets/section2.jpg"
import img10 from "../../assets/section3.jpg"
export default function SectionsList() {
    return (
        <>
            <Section
                direction="left"
                imageSrc={img8}
                title="AS LOW AS 10% APR FINANCING UPON APPROVAL WITH AFFIRM"
                description="Affirm provides flexible payment solutions, allowing you to buy better and pay over time."
            />
            <Section
                imageSrc={img9}
                title="AS LOW AS 10% APR FINANCING UPON APPROVAL WITH AFFIRM"
                description="Affirm provides flexible payment solutions, allowing you to buy better and pay over time."
            />
            <Section
                direction="left"
                imageSrc={img10}
                title="AS LOW AS 10% APR FINANCING UPON APPROVAL WITH AFFIRM"
                description="Affirm provides flexible payment solutions, allowing you to buy better and pay over time."
            />
        </>
    )
}
