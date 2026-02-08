/* eslint-disable react/no-unescaped-entities */
import {Sparkles} from "lucide-react";

function AzkaarLesson1() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Sparkles className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Understanding Azkaar (Remembrances)
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Azkaar are remembrances and supplications from the Quran and Sunnah that help us maintain constant connection with Allah.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              What are Azkaar?
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic mb-4">
                "And remember your Lord within yourself in humility and in fear without being apparent in speech - in the mornings and the evenings." (Quran 7:205)
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Azkaar (singular: Dhikr) are words of remembrance, praise, and supplication that help us remember Allah throughout our daily lives.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Importance of Azkaar
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Constant Connection with Allah
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Azkaar help maintain awareness of Allah throughout the day, not just during formal prayers.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Protection from Evil
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Regular remembrance protects from Satan's whispers and evil influences.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Purification of the Heart
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Azkaar purify the heart and remove sins, as mentioned in the hadith: "Whoever says 'Subhanallahi wa bihamdihi' 100 times, his sins will be forgiven even if they are like the foam of the sea." (Bukhari)
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Peace and Tranquility
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "Unquestionably, by the remembrance of Allah hearts are assured." (Quran 13:28) Azkaar bring peace to the heart.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Types of Azkaar
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Morning and Evening Azkaar
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Specific remembrances to be recited in the morning and evening for protection and blessings.
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Azkaar After Salah
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Remembrances to be recited after completing the five daily prayers.
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Daily Azkaar
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  General remembrances that can be said throughout the day, such as "Subhanallah," "Alhamdulillah," and "Allahu Akbar."
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Situation-Specific Azkaar
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Azkaar for specific situations like entering/exiting home, before eating, when traveling, etc.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Basic Azkaar to Memorize
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">سُبْحَانَ اللَّهِ</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic">Subhanallah</p>
                <p className="text-gray-700 dark:text-gray-300">"Glory be to Allah" - Said 33 times after prayers</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">الْحَمْدُ لِلَّهِ</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic">Alhamdulillah</p>
                <p className="text-gray-700 dark:text-gray-300">"Praise be to Allah" - Expression of gratitude</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">اللَّهُ أَكْبَرُ</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic">Allahu Akbar</p>
                <p className="text-gray-700 dark:text-gray-300">"Allah is the Greatest" - Reminder of Allah's greatness</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">لَا إِلَٰهَ إِلَّا اللَّهُ</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic">La ilaha illa-llah</p>
                <p className="text-gray-700 dark:text-gray-300">"There is no deity except Allah" - Declaration of faith</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              How to Practice Azkaar
            </h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Start with a few basic Azkaar and memorize them well</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Recite them with understanding and presence of heart</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Be consistent - even a little done regularly is better than a lot done occasionally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Use prayer beads (tasbih) or fingers to count if needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Gradually add more Azkaar as you become comfortable</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Conclusion
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Azkaar are a powerful way to maintain constant connection with Allah throughout the day. They purify the heart, bring peace, and protect from evil. Start with the basics, be consistent, and gradually build your practice. Remember, the quality of your remembrance (with understanding and presence of heart) is more important than the quantity.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default AzkaarLesson1;
