import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from "../elements"

export const Footer = () => {

const data = useStaticQuery(graphql`
query {
    facebook: file(relativePath: {eq: "facebook.svg"}) {
        publicURL
    }
    amazon: file(relativePath: {eq: "amazon.svg"}) {
        publicURL
    }
    roku: file(relativePath: {eq: "roku.svg"}) {
        publicURL
    }
    imdb: file(relativePath: {eq: "imdb.svg"}) {
        publicURL
    }
    youtube: file(relativePath: {eq: "youtube.svg"}) {
        publicURL
    }
}
`)
    return (
    <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https://facebook.com/MegaUltraPro" target="_blank" rel="noopener noreferrer">
                    <img src={data.facebook.publicURL} alt="Facebook logo" />
                </a>
                <a href="https://www.amazon.com/v/megaultra" target="_blank" rel="noopener noreferrer">
                    <img src={data.amazon.publicURL} alt="Amazon logo" />
                </a>
                <a href="https://my.roku.com/account/add?channel=megaultra" target="_blank" rel="noopener noreferrer">
                    <img src={data.roku.publicURL} alt="Roku logo" />
                </a>
                <a href="https://www.imdb.com/search/title/?companies=co0469320" target="_blank" rel="noopener noreferrer">
                    <img src={data.imdb.publicURL} alt="IMDB logo" />
                </a>
                <a href="https://www.youtube.com/megaultrastudios" target="_blank" rel="noopener noreferrer">
                    <img src={data.youtube.publicURL} alt="YouTube logo" />
                </a>
            </FooterSocialIcons>
            <p>&copy; {new Date().getFullYear()} Mega Ultra Studios</p>
        </FooterSocialWrapper>
        </FooterWrapper>
    )
}