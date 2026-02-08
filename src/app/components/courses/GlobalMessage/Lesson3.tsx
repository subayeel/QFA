/* eslint-disable react/no-unescaped-entities */
import {Heart} from "lucide-react";

function GlobalMessageLesson3() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Heart className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Universal Values and Ethics
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            The Quran establishes universal moral principles that apply to all humanity, regardless of faith or background.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Core Universal Values
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              The Quran emphasizes values that resonate with all people, regardless of their religious or cultural background:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Justice
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  "O you who have believed, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives." (Quran 4:135)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Justice must be maintained even when it goes against our personal interests or loved ones.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Compassion
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  "And We have not sent you, [O Muhammad], except as a mercy to the worlds." (Quran 21:107)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Mercy and compassion are central to the Islamic message, extending to all creation.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Honesty
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  "O you who have believed, fear Allah and be with those who are true." (Quran 9:119)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Truthfulness is essential in all dealings, whether with believers or non-believers.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Kindness
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  "And speak to people good [words]." (Quran 2:83)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Kind words and good treatment are required towards all people.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Universal Prohibitions
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Certain actions are universally recognized as wrong, and the Quran explicitly prohibits them:
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Murder
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "And do not kill the soul which Allah has forbidden, except by right." (Quran 17:33) - Taking innocent life is universally condemned.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Theft
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "And do not consume one another's wealth unjustly." (Quran 2:188) - Stealing and fraud are universally recognized as wrong.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Oppression
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "And do not oppress and do not be oppressed." (Quran 2:279) - Oppression of any kind is forbidden.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  False Testimony
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "And do not conceal testimony, for whoever conceals it - his heart is indeed sinful." (Quran 2:283) - Lying under oath is universally condemned.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Rights and Responsibilities
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Rights of Parents
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                  "And your Lord has decreed that you not worship except Him, and to parents, good treatment." (Quran 17:23)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Respecting and caring for parents is a universal value emphasized in the Quran.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Rights of Orphans
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                  "And give to the orphans their properties and do not substitute the defective [of your own] for the good [of theirs]." (Quran 4:2)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Protecting and caring for orphans is repeatedly emphasized as a universal duty.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Rights of Neighbors
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                  "Worship Allah and associate nothing with Him, and to parents do good, and to relatives, orphans, the needy, the near neighbor, the neighbor farther away..." (Quran 4:36)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Good treatment of neighbors, regardless of their faith, is a universal principle.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Rights of the Poor
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                  "And in their wealth is a recognized right for the needy and the deprived." (Quran 51:19)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Caring for the poor and needy is a universal responsibility, not limited to Muslims.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Environmental Ethics
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                The Quran teaches responsibility towards the environment, a concern that affects all humanity:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Stewardship:</strong> Humans are caretakers (khalifah) of the earth, responsible for its preservation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Balance:</strong> "And the heaven He raised and imposed the balance. That you not transgress within the balance." (Quran 55:7-8)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Waste Prevention:</strong> "Indeed, the wasteful are brothers of the devils." (Quran 17:27)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Respect for Creation:</strong> All creation has rights and deserves respect</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Universal Application
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              These values are not exclusive to Muslims but are universal principles that benefit all of humanity:
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>When Muslims practice justice, it benefits everyone in society</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Compassion towards all people creates a better world for everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Honesty in business and dealings benefits the entire economy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Environmental responsibility protects the planet for all future generations</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Conclusion
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              The Quran's ethical framework addresses universal human concerns and establishes principles that resonate across cultures and religions. These values - justice, compassion, honesty, and responsibility - are not uniquely Islamic but are universal truths that the Quran emphasizes and clarifies. When practiced, they create a better world for all of humanity.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default GlobalMessageLesson3;
