/* eslint-disable react/no-unescaped-entities */
import {Book} from "lucide-react";

function HistoryLesson1() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Book className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Revelations from God
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Throughout history, Allah has sent divine guidance to humanity through His messengers and revelations.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Purpose of Divine Revelation
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              Allah, in His infinite wisdom and mercy, has sent revelations to guide humanity throughout history. These revelations serve multiple purposes:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                <span><strong>Guidance:</strong> To show humanity the right path and distinguish between truth and falsehood</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                <span><strong>Mercy:</strong> To provide a framework for living that brings peace and fulfillment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                <span><strong>Clarification:</strong> To explain the purpose of creation and our relationship with the Creator</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                <span><strong>Justice:</strong> To establish laws and principles that ensure fairness and justice</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Major Revelations Mentioned in the Quran
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Scrolls of Abraham (Suhuf Ibrahim)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Revealed to Prophet Ibrahim (Abraham), peace be upon him. These scrolls contained guidance about monotheism and the worship of Allah alone.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 87:19
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Torah (Tawrat)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Revealed to Prophet Musa (Moses), peace be upon him. The Torah contained laws, guidance, and the story of the Children of Israel. It emphasized monotheism and moral conduct.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 3:3, 5:44
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Psalms (Zabur)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Revealed to Prophet Dawud (David), peace be upon him. The Psalms contained praises, supplications, and wisdom for the believers.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 4:163, 17:55
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Gospel (Injeel)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Revealed to Prophet Isa (Jesus), peace be upon him. The Gospel confirmed the Torah and brought guidance and light. It emphasized love, compassion, and the worship of Allah alone.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 3:3, 5:46
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Quran
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Revealed to Prophet Muhammad (peace be upon him), the Quran is the final and complete revelation from Allah. It confirms previous revelations and provides comprehensive guidance for all of humanity until the Day of Judgment.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 5:3, 33:40
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Common Themes in All Revelations
            </h2>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Oneness of Allah (Tawheed):</strong> All revelations emphasized worshiping Allah alone without partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Moral Conduct:</strong> All emphasized justice, honesty, compassion, and good character</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Accountability:</strong> All taught about the Day of Judgment and accountability for one's actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Prophethood:</strong> All were delivered through chosen messengers who were human beings</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Continuity of Divine Guidance
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              The Quran makes it clear that Allah's guidance has been consistent throughout history. Each revelation built upon previous ones, addressing the specific needs of different communities while maintaining the core message of monotheism and righteous living.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
                "Indeed, We sent down the Torah, in which was guidance and light. The prophets who submitted [to Allah] judged by it for the Jews..." (Quran 5:44)
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default HistoryLesson1;
