import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 animate-in fade-in duration-700">
      <div className="space-y-12">
        {/* Profile Header */}
        <div>
          <h1 className="text-2xl font-medium text-stone-900 mb-6">About Me</h1>
          <div className="h-px w-12 bg-stone-300 mb-8"></div>
          
          <p className="text-base text-stone-600 leading-relaxed mb-6">
            こんにちは。中村と申します。<br />
            日常の些細な瞬間や、光と影のコントラストを捉えるのが好きです。<br />
            デザインと写真を通じて、静かで美しい物語を紡ぐことを目指しています。
          </p>
          
          <p className="text-base text-stone-600 leading-relaxed">
            このポートフォリオは、私が撮影した写真や、noteで執筆した記事のサムネイルを中心にまとめた場所です。<br />
            ミニマリズムと余白を大切にし、作品そのものが主役になるような空間を作りました。
          </p>
        </div>

        {/* Contact / Links */}
        <div>
          <h2 className="text-sm font-medium text-stone-900 tracking-wider uppercase mb-6">Connect</h2>
          <ul className="space-y-4">
            <li>
              <a href="https://x.com/your_account" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors inline-block">
                X (Twitter) ↗
              </a>
            </li>
            <li>
              <a href="https://instagram.com/your_account" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors inline-block">
                Instagram ↗
              </a>
            </li>
            <li>
              <a href="https://note.com/your_account" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors inline-block">
                note ↗
              </a>
            </li>
            <li>
              <a href="mailto:hello@example.com" className="text-stone-500 hover:text-stone-900 transition-colors inline-block mt-4">
                hello@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
