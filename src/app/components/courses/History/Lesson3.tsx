/* eslint-disable react/no-unescaped-entities */
import {Shield} from "lucide-react";

function HistoryLesson3() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Shield className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              History of Books and Their Corruption
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Understanding how previous divine revelations were altered over time helps us appreciate the unique preservation of the Quran.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Process of Corruption
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Historical evidence shows that previous divine books underwent changes over time. The Quran acknowledges this while maintaining respect for the original revelations:
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic mb-4">
                "So woe to those who write the 'scripture' with their own hands, then say, 'This is from Allah,' in order to exchange it for a small price. Woe to them for what their hands have written and woe to them for what they earn." (Quran 2:79)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Torah (Old Testament)
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Original Revelation
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  The Torah was originally revealed to Prophet Musa (Moses), peace be upon him, containing divine laws and guidance for the Children of Israel.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Evidence of Alteration
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Multiple Authors:</strong> Biblical scholars acknowledge that the Torah contains writings from multiple authors over centuries, not just Moses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Historical Inconsistencies:</strong> Contains accounts that contradict established historical facts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Human Attributes to God:</strong> Contains descriptions of Allah that contradict His perfection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Lost Original:</strong> The original text revealed to Moses is no longer available</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Gospel (New Testament)
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Original Revelation
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  The Injeel (Gospel) was originally revealed to Prophet Isa (Jesus), peace be upon him, confirming the Torah and bringing new guidance.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Evidence of Alteration
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Written Decades Later:</strong> The Gospels were written 30-70 years after Jesus, not during his lifetime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Multiple Versions:</strong> Four different Gospels exist with conflicting accounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Human Authors:</strong> Written by human followers, not directly revealed to Jesus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Lost Original:</strong> The original Gospel revealed to Jesus is not available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Contradictions:</strong> Contains contradictions between different books</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Methods of Corruption
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Intentional Changes
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Adding human interpretations as divine text</li>
                  <li>• Removing verses that contradicted later beliefs</li>
                  <li>• Modifying meanings to fit political or religious agendas</li>
                  <li>• Combining divine revelation with human writings</li>
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Unintentional Changes
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Loss of original manuscripts</li>
                  <li>• Translation errors over time</li>
                  <li>• Oral transmission errors before writing</li>
                  <li>• Copying mistakes by scribes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Why Previous Books Were Not Preserved
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              The Quran explains that previous revelations were meant for specific communities and time periods. They were not meant to be the final, universal guidance:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic mb-4">
                "And We have revealed to you, [O Muhammad], the Book in truth, confirming that which preceded it of the Scripture and as a criterion over it." (Quran 5:48)
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Quran serves as the final criterion, confirming what is true in previous books and correcting what has been altered.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Islamic Approach
            </h2>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Respect for Original Revelations:</strong> Muslims believe in the original Torah, Psalms, and Gospel as authentic revelations from Allah</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Acknowledgment of Alteration:</strong> The Quran acknowledges that current versions may contain alterations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Quran as Criterion:</strong> The Quran serves as the final standard to judge what aligns with truth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Respectful Dialogue:</strong> Muslims are instructed to engage respectfully with People of the Book</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Key Takeaway
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              The corruption of previous books does not diminish their original value or the respect Muslims have for the original revelations. Rather, it highlights the unique miracle of the Quran's perfect preservation and its role as the final, complete guidance for all of humanity.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default HistoryLesson3;
