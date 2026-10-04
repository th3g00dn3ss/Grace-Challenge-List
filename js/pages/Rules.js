
export default {
    template: `
        <main class="rules-page">
            <header class="rules-hero">
                <span class="rules-badge">GRACE CHALLENGE</span>
                <h1>Rules & Guidelines</h1>
                <p>
                    Everything you need to know before submitting
                    a record to Grace Challenge.
                </p>
            </header>

            <section class="rules-notice">
                <h2>📌 Before you submit</h2>
                <p>
                    Please read all rules carefully. Submissions that
                    do not meet the requirements may be rejected.
                </p>
            </section>

            <section class="rules-grid">
                <article class="rules-card">
                    <span class="rules-number">01</span>
                    <h2>🎥 Video Evidence</h2>
                    <ul>
                        <li>Your record must include video evidence.</li>
                        <li>The gameplay must be clearly visible.</li>
                        <li>Include the original game audio or audible clicks/taps.</li>
                        <li>Edited audio alone does not count as click evidence.</li>
                        <li>Show the completion clearly, including the end wall.</li>
                    </ul>
                </article>

                <article class="rules-card">
                    <span class="rules-number">02</span>
                    <h2>🎮 Legitimate Records</h2>
                    <ul>
                        <li>Hacks and cheats are not allowed.</li>
                        <li>FPS bypass is allowed up to 360 FPS under the existing list rules.</li>
                        <li>Easy mode and modified versions of a level do not qualify.</li>
                        <li>Secret routes and bug routes are not allowed.</li>
                    </ul>
                </article>

                <article class="rules-card">
                    <span class="rules-number">03</span>
                    <h2>🧩 Correct Level</h2>
                    <ul>
                        <li>Your record must be on the exact level listed.</li>
                        <li>Check the level ID before submitting.</li>
                        <li>Make sure your completion meets the required percentage.</li>
                    </ul>
                </article>

                <article class="rules-card">
                    <span class="rules-number">04</span>
                    <h2>🏆 Legacy Levels</h2>
                    <ul>
                        <li>Levels on the Legacy List do not accept new records.</li>
                        <li>Records are accepted for 24 hours after a level leaves the main list.</li>
                        <li>After that period, new records for that level are no longer accepted.</li>
                    </ul>
                </article>

                <article class="rules-card">
                    <span class="rules-number">05</span>
                    <h2>🔍 Verification</h2>
                    <ul>
                        <li>Make sure your video supports the submitted percentage.</li>
                        <li>Incomplete or unclear evidence may be rejected.</li>
                        <li>List staff may review a submission before accepting it.</li>
                    </ul>
                </article>

                <article class="rules-card">
                    <span class="rules-number">06</span>
                    <h2>⚠️ Invalid Submissions</h2>
                    <ul>
                        <li>Records that break the rules can be rejected.</li>
                        <li>Do not submit misleading or edited gameplay as proof.</li>
                        <li>If you're unsure about a rule, ask the list staff before submitting.</li>
                    </ul>
                </article>
            </section>

            <footer class="rules-footer">
                <h2>Ready to submit?</h2>
                <p>Double-check your video and make sure your record follows every rule.</p>
                <a class="nav__cta type-label-lg" href="#" target="_blank">
                    Submit Record
                </a>
            </footer>
        </main>
    `,
};