import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../../assets/files/resume_updated.pdf';
import './style.css';

const CompAudit = () => {
    return (
        <article id="mg-comp-audit">
            <h2>A Competitive Audit of AI Ghostwriting Tools</h2>

            An audit was conducted to compare the usefulness and usability of competing ghostwriting and writing assistant apps. The key competitors based on the desired functionality are Ghostwriter AI and Grammarly. Other apps researched in the audit include Ulysses and Virtual Ghost Writer.
            <br/> <br/>
            The primary version of Ghostwriter AI, a mobile app, was examined for this study, but the company also offers several add-ins for word-processing software. The Ghostwriter AI app is exceedingly simple and intuitive to use. The UI is just a line of type that autocompletes based on the user's selections. The core function is content generation. Ghostwriter AI markets itself as a fix for writer's block.
            <br/> <br/>
            Both the desktop and mobile versions of Grammarly were audited, but the primary focus was placed on the desktop version because it provided far more functionality. It's a typing assistant that actively analyzes pieces of text input according to a set of goals that the user can modulate based on their intention towards business, academic, general, email, casual, or creative tones. It makes recommendations based on said goals to improve phrasing, sentence structure, grammar, and word choice. It feels like a beefed-up version of a word processor. In effect, the tools allow the user to concurrently compose, proofread, and optimize their use of language-- theoretically. 
            <br/> <br/>
            In practice, the innovation that makes these products powerful also defines their limitations. This iteration of AI requires a grain of salt. It is useless without human insight.
            <br/> <br/>
            If the AI worked flawlessly, auto-generation, tone, and intent settings might be all a person needed to generate a text without typing more than a few words. Of course, the tech does not provide such effective functionality. Furthermore, we must consider the user's intentions. Writers want to write. They want to provide unique value.
            <br/> <br/>
            There are hindrances to this goal built into the products that were audited. Ghostwriter AI generally appears more of an amusement than an accurate, effective writing tool. Given the general distrust of content generated through AI, the tool is limited according to the user's willingness to fact-check and edit. 
            <br/> <br/>
            Grammarly is also limited by the capacities of AI. Incorrect suggestions or suggestions which may limit the creativity of the user occur often. This means the user must decide which suggestions are correct and desirable. 
            <br/> <br/>
            These issues are rooted in user preference. Idiosyncracies in word usage, tone, and even grammar are components of personality. Knowingly breaking the rules of language begets a dynamic voice, a function of creativity. For AI tools to work well for the user, in this context, the user must be able to set the parameters of the tool. If chatGPT can emulate the voice of a writer from a database of samples scraped from the four corners of the internet, then an AI tool could recreate an individual user's voice. A writing tool could auto-generate and offer suggestions, knowing its user, that would echo their personal use of language. 
            <br/> <br/>
            This is my recommendation on improving the user experience in an AI writing assistant. Let the tool get to know the user, and emulate their dynamic voice.

        </article>


    )
};

export default CompAudit;