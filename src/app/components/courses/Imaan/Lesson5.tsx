/* eslint-disable react/no-unescaped-entities */
import { ChevronDown } from "lucide-react";

function ImaanLesson5() {
  return (
    <article className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed prose-p:text-foreground/90">
          {/* Requirements Section */}
          <section
            className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8"
            aria-labelledby="requirements"
          >
            <h3
              id="requirements"
              className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Before You Begin This Journey
            </h3>
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              To fully engage with this exploration and derive maximum benefit,
              please ensure you meet the following requirements:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                    1
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 dark:text-amber-200">
                    15 Minutes of Undivided Attention
                  </h4>
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    Find a quiet space free from distractions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                    2
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 dark:text-amber-200">
                    Ambivert Personality
                  </h4>
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    Balance between introversion and extroversion
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                    3
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 dark:text-amber-200">
                    Understanding of English
                  </h4>
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    Proficient reading comprehension
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                    4
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 dark:text-amber-200">
                    Open Mind Without Biases
                  </h4>
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    Willingness to consider new perspectives
                  </p>
                </div>
              </div>
            </div>
          </section>

          <p className="text-xl leading-relaxed text-muted-foreground mb-8">
            There are around 8 billion people in the world, including you.
            Everyone has their own goals and objectives in life, but these are
            often shaped by where they live and whom they interact with.
            However, there are certain things that are common to all of us.
          </p>

          <p className="mb-8">
            For example, a mother's love for her child, the attraction toward
            the opposite gender, the longing for a clean environment, and the
            desire for peace and stability in both personal and professional
            life, these are universal feelings.
          </p>

          <section aria-labelledby="maslows-hierarchy-of-needs">
            <h2
              id="maslows-hierarchy-of-needs"
              className="text-3xl font-bold mt-12 mb-6"
            >
              Maslow's Hierarchy of Needs
            </h2>
            <p className="mb-6">
              I would like to refer to research of Maslow's hierarchy of needs
              when it comes down the needs of a human on personal level.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">The Five Levels:</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </span>
                  <div>
                    <strong>Physiological Needs:</strong> These are the
                    fundamental biological requirements for survival, such as
                    air, water, food, warmth, and sleep.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </span>
                  <div>
                    <strong>Safety Needs:</strong> Once physiological needs are
                    met, people are driven to seek security and stability. This
                    includes needs like personal security, freedom from fear,
                    financial security, and health and wellbeing.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                  <div>
                    <strong>Love and Belonging Needs:</strong> After
                    physiological and safety needs, the desire for social
                    connection emerges. This level includes needs like
                    friendship, intimacy, family bonds, and a sense of belonging
                    to a group.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </span>
                  <div>
                    <strong>Esteem Needs:</strong> These needs involve the
                    desire for self-esteem and respect from others. This
                    encompasses self-respect, achievement, recognition, status,
                    and prestige.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    5
                  </span>
                  <div>
                    <strong>Self-Actualization Needs:</strong> This is the
                    highest level of the hierarchy, representing the desire to
                    fulfill one's full potential and become the best version of
                    oneself. It involves personal growth, seeking knowledge,
                    creativity, and experiencing peak moments of joy and wonder.
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <p className="mb-8">
            There are many such innate desires that are common among humans,
            regardless of their location or mentality. My argument is that these
            innate feelings and the motivation to bring peace and prosperity
            into one's life led to the creation of communities, groups of people
            living together and supporting one another. However, this can
            sometimes become problematic, leading to the need for rules, which
            were established by the responsible members of the community.
          </p>

          <p className="mb-8">
            While I have mentioned the positive desires of humans, the issue
            arises with desires that drive individuals to break the rules set by
            the community, for example, the desire for power, respect, and
            wealth. These lead to many problems. Communities become divided over
            which rules are best, and eventually, a single community splits into
            multiple parts.
          </p>

          <p className="mb-8">
            This gives rise to different countries, languages, philosophies,
            religions, castes, and so on. Each group believes they are on the
            right path. This belief continues for generations. A child follows
            the path of the parent, and the biases instilled in the child's mind
            become so deeply rooted that it becomes almost impossible for them
            to question their inherited way of life.
          </p>

          <p className="mb-8">
            Differences in customs, rituals, ethics, and rules can coexist.
            However, the consequence of this is subjective morality, which
            history has repeatedly shown cannot truly coexist. Time and again,
            one group declares war on another because they disagree on moral
            grounds. Each person believes their version of morality is true,
            often worsening the situation, whether due to negative desires or
            not.
          </p>

          <aside
            className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
            role="note"
          >
            <p className="text-lg font-semibold mb-2">One thing is certain:</p>
            <p>
              No matter how many times humanity is reset by an apocalypse, we
              are always bound to end up in the same place due to our innate
              dispositions. There seems to be no alternative, unless we develop
              a system that eliminates subjective morality and governs the Line
              of Existence at level where there is chaos.
            </p>
          </aside>

          <section aria-labelledby="the-central-question">
            <h2
              id="the-central-question"
              className="text-3xl font-bold mt-12 mb-6"
            >
              The Central Question
            </h2>
            <p className="mb-6">
              The question remains: What breaks this loop? What is that one
              thing that fulfills the innate disposition of humans? What
              promises a stable system at every level? What allows multiple
              systems to coexist despite the historical divisions in society?
              What can solve modern problems like obesity, poverty, organized
              crime, general crime, drugs, public obscenity, and the
              degeneration of the entertainment industry? What can offer
              sustainable economic development without infringing on personal
              freedom? What can ensure a proper division of duties between the
              government and the citizen?
            </p>
          </section>

          <p className="mb-8">
            To solve any issues, we have to dig deep into the details and
            workings of the current nature, beginning from the atom to the
            functioning of the space-time continuum.
          </p>

          <section aria-labelledby="the-line-of-existence">
            <h2
              id="the-line-of-existence"
              className="text-3xl font-bold mt-12 mb-6"
            >
              The Line of Existence
            </h2>
            <p className="mb-6">
              For easier and quicker understanding, let's print a line that
              summarizes the structure of our existence:
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <div className="text-center space-y-2 font-mono text-sm">
                <div>Atom (Neutrinos – Protons – Electrons)</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Compound</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>DNA</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Cell</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Tissue</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Organ</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Organ System</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Human</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Family</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Community</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Street</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Locality</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>State</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Country</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Earth (Planet)</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Star System</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Galaxies</div>
                <ChevronDown className="mx-auto h-4 w-4" />
                <div>Universe</div>
              </div>
            </div>

            <p className="mb-8">
              This is the Line of Existence. If you are a person of knowledge,
              you will be able to understand exactly where there is chaos and
              where there is order.
            </p>

            <p className="mb-8">
              Let me elaborate further: On the Existence Line, if we go before
              Human, we see order, constants, and systems that work well
              together. Similarly, if we go after Country, we see stability.
            </p>

            <p className="mb-8">
              The stability and constants found in those parts of the Existence
              Line are so perfect and detailed that humans have convinced
              themselves there must be a designer behind them. It is common
              sense to conclude the existence of a designer after seeing a
              perfect design. Thus, we have multiple religions and philosophies,
              each claiming they have a message from this designer.
            </p>

            <p className="mb-8">
              But why is this notion important for our discussion, where we are
              trying to figure out a stable system? It is important because, if
              you observe the Existence Line once more, the place where there is
              chaos needs a proper system. So, if such a designer does exist,
              then it must have provided the ideal system.
            </p>
          </section>

          <section aria-labelledby="the-concept-of-god">
            <h2
              id="the-concept-of-god"
              className="text-3xl font-bold mt-12 mb-6"
            >
              The Concept of God
            </h2>
            <p className="mb-6">
              The idea of there being a Creator/Designer/God or Supreme Being is
              one that has kept many people awake at night. Let's try to figure
              out the right questions to ask before we draw any conclusions.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Questions:</h3>
              <ol className="space-y-3">
                <li>How did the concept of God come into existence?</li>
                <li>What do you mean by God?</li>
                <li>Do we need God to explain our existence? Why God?</li>
                <li>Can there be more than one God?</li>
                <li>
                  Do logic, reasoning, mathematics, and science align with the
                  concept of God, or are we going for a "God of the gaps"?
                </li>
                <li>Where is God?</li>
                <li>
                  Doesn't the existence of evil negate the existence of an
                  all-perfect God?
                </li>
                <li>What is the purpose of all this?</li>
              </ol>
            </div>

            <aside
              className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
              role="note"
            >
              <p className="font-semibold mb-2">
                Tool:{" "}
                <a
                  href="https://doses-of-imaan.vercel.app/spiritual-journey"
                  className="text-primary hover:underline"
                >
                  Spiritual Journey
                </a>
              </p>
            </aside>
          </section>

          <section aria-labelledby="conclusion">
            <h2 id="conclusion" className="text-3xl font-bold mt-12 mb-6">
              Conclusion
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <ol className="space-y-3">
                <li>Design requires a designer.</li>
                <li>
                  All-powerful, all-knowledgeable, ever-existing, independent,
                  and outside of space-time.
                </li>
                <li>Yes, infinite regression does not lead to creation.</li>
                <li>
                  There is one God. Multiple gods would lead to chaos, but we
                  see stability. Logically speaking, there cannot be two equally
                  powerful entities.
                </li>
                <li>
                  Yes, we are not appealing to a "God of the gaps." In fact,
                  each law and each constant we find in any field of study
                  implies the existence of a designer.
                </li>
                <li>
                  No idea. One thing is certain: since space-time is the
                  creation of God, He is outside of it, just like a software
                  developer doesn't live inside the software.
                </li>
                <li>
                  To understand the existence of free will to do good and bad,
                  the concept of good and bad, the concept of day and night, and
                  many similar signs, we need to understand the purpose of
                  creation. This requires further study of the current world and
                  a search for that purpose. And, that is our next step so strap
                  in we are going for hunting the best religion.
                </li>
              </ol>
            </div>
          </section>

          <section aria-labelledby="the-crossroads">
            <h2 id="the-crossroads" className="text-3xl font-bold mt-12 mb-6">
              The Crossroads
            </h2>
            <p className="mb-8">
              Now, we are at a thrilling yet daunting crossroads, forced to
              examine the systems and religions that dominate the 21st century.
              The stakes are high, and the complexity is staggering.
            </p>

            <p className="mb-8">
              To truly grasp the matter, we must plunge fearlessly into the
              depths of existing systems that attempt to answer life's most
              profound questions, religions and philosophies. But in 2025, the
              challenge is greater than ever. The rigid separation of religion
              and state adds layers of complexity, and the modern trend of
              portraying religion as nothing more than "backward thinking" has
              created a hostile climate. These attitudes don't just discourage
              open dialogue, they actively choke the oxygen needed for unbiased,
              honest research.
            </p>

            <p className="mb-8">
              Still, we must proceed. First, we will explore religions broadly,
              then compare them, and finally, take a deep dive into the one that
              offers the most relevant and sustainable framework for the world
              of 2025.
            </p>

            <p className="mb-8">
              But even if we discover the "right" religion or philosophy, our
              work doesn't end there. We will have to scour history for examples
              of systems that were successfully woven into everyday life,
              systems that genuinely solved the issues of chaos and instability
              outlined earlier. And this will not be easy, because the current
              global framework, often referred to as the "New World Order," has
              been masterful at burying or erasing any competing alternative
              before it has the chance to take root. This is not just research,
              it's a battle for truth under layers of suppression.
            </p>
          </section>

          <section aria-labelledby="historical-context">
            <h2
              id="historical-context"
              className="text-3xl font-bold mt-12 mb-6"
            >
              Historical Context
            </h2>
            <p className="mb-6">
              After looking into human history, we find that our recorded data
              begins around 3500 BC. Yet, we must remember that Homo sapiens
              have walked this planet for 200,000–300,000 years, according to
              fossil evidence. For that vast prehistoric span, we have no
              written records, no clear window into how our ancestors lived,
              thought, and organized themselves.
            </p>

            <p className="mb-6">
              From 3500 BC to 2025 AD, a wide variety of religions emerged:
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Categories of Religion
              </h3>
              <ol className="space-y-4">
                <li>
                  <strong>Prehistoric Religions</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>Ancient Egyptian Polytheism</li>
                    <li>Ancient Mesopotamian Polytheism</li>
                    <li>Indo-European Polytheism</li>
                    <li>Indus Valley Civilization Religion</li>
                  </ul>
                </li>
                <li>
                  <strong>Canaanite Religion</strong>
                </li>
                <li>
                  <strong>Vedic Religion</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>Brahminism → Hinduism</li>
                    <li>Shramana Movements → Buddhism, Jainism</li>
                  </ul>
                </li>
                <li>
                  <strong>Abrahamic Religions</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>Judaism</li>
                    <li>Christianity</li>
                    <li>Islam</li>
                  </ul>
                </li>
              </ol>
            </div>

            <p className="mb-8">
              The sheer diversity of belief systems makes our task vastly more
              difficult.
            </p>
          </section>

          <section aria-labelledby="comparison-parameters">
            <h2
              id="comparison-parameters"
              className="text-3xl font-bold mt-12 mb-6"
            >
              Comparison Parameters
            </h2>
            <p className="mb-6">
              To navigate this complexity, we must establish clear, unbiased
              comparison parameters:
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <ol className="space-y-3">
                <li>
                  <strong>Belief in God</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>Count (number of deities)</li>
                    <li>
                      Disparity between the actual definition of God and the
                      religion's definition
                    </li>
                    <li>Claimed attributes vs. actual attributes</li>
                  </ul>
                </li>
                <li>
                  <strong>Scripture</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>Count</li>
                    <li>Authenticity</li>
                  </ul>
                </li>
                <li>
                  <strong>Denominations</strong>
                </li>
                <li>
                  <strong>Timeline of the religion</strong>
                </li>
                <li>
                  <strong>
                    Disparity between religious claims and actual history
                  </strong>
                </li>
                <li>
                  <strong>
                    Disparity between human innate needs and the ways prescribed
                    by the religion
                  </strong>
                </li>
                <li>
                  <strong>Ethical & social teachings</strong>
                </li>
                <li>
                  <strong>Rituals</strong>
                </li>
                <li>
                  <strong>Social institutions</strong>
                </li>
                <li>
                  <strong>Inner experiences</strong>
                </li>
                <li>
                  <strong>Sentiments</strong>
                </li>
                <li>
                  <strong>Growth of religion</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>Birth rate</li>
                    <li>Conversion rate</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <aside
            className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
            role="note"
          >
            <p className="font-semibold mb-2">
              Tool Used for Research:{" "}
              <a
                href="https://which-religion.vercel.app"
                className="text-primary hover:underline"
              >
                Which Religion
              </a>
            </p>
            <p>
              <strong>Conclusion:</strong> After an in-depth study using the
              above parameters, we conclude that the only religion which fully
              answers all the questions raised earlier in the "New Community"
              scenario, and which fulfills the criteria for the attributes of
              God without ambiguity, is Islam.
            </p>
          </aside>

          <p className="mb-8">
            We have found the religion. But the real question remains: How can
            it solve today's problems, and how can it possibly be implemented in
            the complex reality of 2025?
          </p>

          <section aria-labelledby="personal-commitment">
            <h2
              id="personal-commitment"
              className="text-3xl font-bold mt-12 mb-6"
            >
              Personal Commitment
            </h2>
            <p className="mb-8">
              Before we continue, I want to pause for a moment and acknowledge
              your commitment to walking this path with me. This journey is not
              just about collecting facts; it's about confronting reality — and
              remembering why we started in the first place.
            </p>
          </section>

          <section aria-labelledby="the-current-state-of-affairs">
            <h2
              id="the-current-state-of-affairs"
              className="text-3xl font-bold mt-12 mb-6"
            >
              The Current State of Affairs
            </h2>
            <p className="mb-8">
              We are witnessing the cracks of the "New World Order" in 2025. It
              is failing at the most fundamental level — meeting the basic
              physiological needs of human beings. Inflation is pushing millions
              into poverty.
            </p>

            <p className="mb-8">
              An interest-based economy traps the poor in perpetual debt while
              making the wealthy even richer. The judicial system bends toward
              those with money and power. Women are objectified in marketing and
              entertainment, reduced to tools for profit. Family structures are
              collapsing, children are being exploited, and violence is rising.
            </p>

            <p className="mb-8">
              Every move by governments feels like a calculated step toward
              World War III. Politicians play an endless game of musical chairs
              in the name of democracy, but the seats are controlled by hidden
              hands. Mainstream media, owned by elites, spins narratives to fit
              their agendas, turning lies into truths and truths into lies.
            </p>

            <p className="mb-8">
              Intoxicants spread unchecked among the youth. Birth rates are
              falling at alarming rates. Nature is being stripped and destroyed
              in the name of "development."
            </p>

            <aside
              className="bg-destructive/10 border-l-4 border-destructive p-6 my-8 rounded-r-lg"
              role="note"
              aria-label="Alert"
            >
              <p className="mb-2">
                These are only a fraction of the problems, yet they are enough
                for any rational human — or even an AGI — to see: the collapse
                of this "New World Order" is happening before our eyes. Time is
                running out.
              </p>
              <p>
                If this system is not replaced soon, it will drag the entire
                world down with it.
              </p>
            </aside>

            <p className="mb-8">
              The so-called leaders — presidents, prime ministers, ministers —
              are pawns in a much larger game. Many of them may not even
              understand who the real players are. But one truth is certain:
              illusions don't last forever. When they fall, the truth will come
              out — revealing who were the architects of chaos and who were the
              peacemakers.
            </p>

            <p className="mb-8">
              Now, the choice is yours: turn away and ignore the collapsing roof
              over your head, or step forward to repair it.
            </p>

            <p className="mb-8">
              But here lies the challenge: How can a single citizen fight a
              system that has been carefully and strategically built since the
              17th century?
            </p>

            <p className="mb-8">
              To answer this, we must go back and examine how the New World
              Order took root — piece by piece — between the 17th and 21st
              centuries.
            </p>
          </section>

          <section aria-labelledby="the-rise-of-the-new-world-order">
            <h2
              id="the-rise-of-the-new-world-order"
              className="text-3xl font-bold mt-12 mb-6"
            >
              The Rise of the New World Order
            </h2>
            <p className="mb-8">
              Looking back over the last two millennia, humanity witnessed
              staggering developments, technology, governance systems, medicine,
              political structures, industrial growth, and deeper understanding
              of the natural world through biology, chemistry, physics, and
              mathematics.
            </p>

            <p className="mb-8">
              Knowledge became the catalyst for technological leaps and better
              living standards. But these gains came at a heavy cost: two
              catastrophic World Wars (1914–1945). These wars, while
              destructive, also accelerated advancements in medicine,
              engineering, and communication.
            </p>

            <p className="mb-8">
              In their aftermath, the post-war international order emerged,
              building institutions like the United Nations, WHO, and IMF,
              bodies intended to stabilize global relations, though not without
              bias or hidden agendas.
            </p>

            <p className="mb-8">
              The advent of nuclear weapons reshaped geopolitics. Fear of mutual
              annihilation forced superpowers to negotiate rather than escalate,
              preventing another world war. Large-scale violence declined, but
              small-scale conflicts never vanished.
            </p>

            <p className="mb-8">
              The discovery of antibiotics dramatically improved public health.
              Meanwhile, the discovery of crude oil, though sparking
              resource-driven wars, especially in the Middle East, fueled the
              internal combustion engine, revolutionizing transportation and
              industry.
            </p>

            <p className="mb-8">
              The industrial age transformed work life, drawing masses into
              factories. Later, the advent of the Internet shattered
              communication barriers and democratized access to information.
            </p>

            <p className="mb-8">
              These factors undeniably improved life, better health, political
              stability, organized governance, and technological abundance. Yet,
              success came with its own trap: the population boom. Longer
              lifespans and fewer conflicts swelled human numbers, demanding new
              food systems. The Green Revolution answered with high-yield crops,
              synthetic fertilizers, and mechanization.
            </p>

            <p className="mb-6">
              But beneath these visible changes, hidden structural shifts were
              being engineered, often unnoticed amidst the noise of wars and
              innovation:
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <ul className="space-y-3 list-disc list-outside">
                <li>Discovery of oil in the Middle East</li>
                <li>
                  Strategic splitting of countries to seed future conflicts
                </li>
                <li>Fall of the Ottoman Empire</li>
                <li>
                  Shift from the gold standard to a dollar-based economy (birth
                  of inflation as a permanent reality)
                </li>
                <li>
                  Debt traps, nations borrowing heavily from private and
                  institutional banks
                </li>
                <li>Advent of nuclear weapons (US military hegemony)</li>
                <li>
                  Establishment of biased global organizations (WHO, UN, etc.)
                </li>
                <li>
                  French Revolution, planting radical nationalism, separation of
                  church and state, liberalism, and radical feminism to expand
                  the workforce
                </li>
                <li>
                  Transition from nuclear family to joint family structures
                </li>
                <li>
                  Destabilization of the Middle East to control oil flows, often
                  via puppet governments or "liberation" campaigns, Reputation
                  threats
                </li>
                <li>
                  Mass social engineering of women and girls through media and
                  entertainment to expand the industrial workforce
                </li>
              </ul>
            </div>

            <p className="mb-8">
              These were not isolated events. Together, they shaped a global
              order designed to centralize control, limit alternatives, and mold
              public thought, any new framework must face head-on if it is to
              take root in our era.
            </p>
          </section>

          <section aria-labelledby="next-steps">
            <p>combining t</p>
          </section>
        </div>
      </div>
    </article>
  );
}

export default ImaanLesson5;
