import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
    return (
        <Container>
            <FeatureImage />
            <Content>
                <ContentCard 
                    title="I don't know what's happening here"
                    description="Lorem your Ipsum"
                    slug="test"
                />
            </Content>
        </Container>
    )
}

export default IndexPage
