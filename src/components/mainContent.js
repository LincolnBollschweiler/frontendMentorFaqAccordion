export const mainContent = `    
    <section class="main-content flex">
        <h1 tabindex="0" class="flex" aria-label="F A Qs">
            <img src="images/icon-star.svg" alt="star logo">
            <span>FAQs</span>
        </h1>
        <ul class="faq-list" role="list" aria-label="Frequently Asked Questions">
            <li>
                <button aria-expanded="false" aria-controls="faq1">
                    <div class="button-text flex">
                        What is Frontend Mentor, and how will it help me?
                        <img src="images/icon-plus.svg" alt="arrow down" />
                    </div>
                </button>
                <p id="faq1" hidden tabindex="0">                    
                    Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
                </p>
            </li>
            <li>
                <button aria-expanded="false" aria-controls="faq2">
                    <div class="button-text flex">
                        Is Frontend Mentor free?
                        <img src="images/icon-plus.svg" alt="arrow down" />
                    </div>
                </button>
                <p id="faq2" hidden tabindex="0">
                    Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.
                </p>
            </li>
            <li>
                <button aria-expanded="false" aria-controls="faq3">
                    <div class="button-text flex">
                        Can I use Frontend Mentor projects in my portfolio?
                        <img src="images/icon-plus.svg" alt="arrow down" />
                    </div>
                </button>
                <p id="faq3" hidden tabindex="0">
                    Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
                </p>
            </li>
            <li>
                <button aria-expanded="false" aria-controls="faq4">
                    <div class="button-text flex">
                        How can I get help if I'm stuck on a challenge?
                        <img src="images/icon-plus.svg" alt="arrow down" />
                    </div>
                </button>
                <p id="faq4" hidden tabindex="0">
                    The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
                </p>
            </li>
        </ul>
    </section>
`;
