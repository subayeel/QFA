/* eslint-disable react/no-unescaped-entities */
import {AlertCircle} from "lucide-react";

function TawheedLesson2() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <AlertCircle className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Shirk: The Greatest Sin
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Understanding Shirk (associating partners with Allah) and its various forms is crucial for maintaining pure Tawheed.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              What is Shirk?
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic mb-4">
                "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills." (Quran 4:48)
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Shirk means associating partners with Allah in His lordship, worship, names, or attributes. It is the only sin that Allah will never forgive if one dies upon it without repenting.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Major Shirk (Shirk al-Akbar)
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Major Shirk removes a person from Islam and leads to eternal punishment in Hellfire if not repented from:
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Shirk in Worship
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Directing any act of worship to other than Allah:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• Praying to idols, saints, or graves</li>
                  <li>• Making supplication (dua) to other than Allah</li>
                  <li>• Sacrificing animals for other than Allah</li>
                  <li>• Making vows to other than Allah</li>
                  <li>• Prostrating to other than Allah</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Shirk in Lordship
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Believing that others share Allah's unique attributes:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• Believing others can create independently</li>
                  <li>• Believing others control life and death</li>
                  <li>• Believing others have knowledge of the unseen</li>
                  <li>• Believing others can provide independently</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Shirk in Names and Attributes
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Attributing to creation what belongs only to Allah:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• Calling someone "Lord" or "God"</li>
                  <li>• Attributing divine attributes to creation</li>
                  <li>• Claiming to have knowledge of the unseen</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Minor Shirk (Shirk al-Asghar)
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Minor Shirk does not remove one from Islam but is still a major sin. It includes:
            </p>
            <div className="space-y-4">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Showing Off (Riya)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Performing acts of worship to be seen by people rather than solely for Allah. The Prophet (PBUH) called this "the hidden Shirk."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Ahmad, Tirmidhi
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Swearing by Other Than Allah
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The Prophet (PBUH) said: "Whoever swears by other than Allah has committed Shirk." This includes swearing by the Prophet, parents, or anything else.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Tirmidhi, Abu Dawud
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Wearing Amulets and Charms
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Wearing amulets, charms, or talismans believing they have power to protect or bring benefit, rather than relying on Allah alone.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Hidden Shirk
            </h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                The Prophet (PBUH) warned about hidden Shirk, which is more subtle:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Relying on means instead of Allah:</strong> Trusting in the means rather than the One who created the means</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Seeking praise:</strong> Doing good deeds primarily to gain people's admiration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Fear of people:</strong> Being more afraid of people's reaction than Allah's displeasure</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Protection from Shirk
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Knowledge
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Learning about Tawheed and Shirk helps us recognize and avoid it.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Sincere Intention
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Purifying our intention to worship only Allah, not for show or praise.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Supplication
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Regularly asking Allah to protect us from Shirk, as the Prophet (PBUH) did.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Self-Reflection
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Regularly examining our actions and intentions to ensure they're purely for Allah.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Prophet's Supplication Against Shirk
            </h2>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
              <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                Allāhumma innī a'ūdhu bika an ushrika bika wa anā a'lam, wa astaghfiruka li-mā lā a'lam
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                "O Allah, I seek refuge with You from knowingly associating partners with You, and I seek Your forgiveness for what I do not know."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                Reference: Bukhari
              </p>
            </div>
          </section>

          <section className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border-l-4 border-red-400">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Important Note
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Shirk is the greatest sin and the only unforgivable sin if one dies upon it. However, Allah is Most Merciful and Forgiving. If someone commits Shirk and repents sincerely before death, Allah will forgive them. The key is to recognize Shirk, avoid it, and seek Allah's protection from it.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default TawheedLesson2;
