import type { NextPage } from 'next'
import Navigation from '@/components/Navigation'
import Terminal from '@/components/terminal-like'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import 'animate.css'
import Card from '@/components/Card'
import MiniCard from '@/components/MiniCard'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ParticlesParams from '@/public/particlesjs-config.json'
import { Engine } from 'tsparticles-engine'
import ExternalLinkIcon from '@/components/ExternalLinkIcon'

const Home: NextPage = () => {
  const [refAboutMe, inViewAboutMe] = useInView({
    rootMargin: '-100px',
    triggerOnce: true
  })
  const [refWorksTeleLabo, inViewWorksTeleLabo] = useInView({
    rootMargin: '-100px',
    triggerOnce: true
  })
  const [refWorksMyNote, inViewWorksMyNote] = useInView({
    rootMargin: '-100px',
    triggerOnce: true
  })
  const particlesInit = async (main: Engine) => {
    await loadFull(main)
  }

  return (
    <div>
      <Navigation />
      <main className="w-full">
        <Particles
          init={particlesInit}
          options={ParticlesParams as any}
          className="-z-10 absolute"
        />

        <div className="h-screen pb-16 flex items-center justify-center">
          <Terminal
            outerClassName="h-56 w-4/5 sm:w-2/3 lg:w-1/3 p-7 rounded bg-white"
            lineClassName=""
            lines={[
              { type: 'cmd', text: 'pwd' },
              { type: 'res', text: "おおのひろき" },
              { type: 'cmd', text: 'ls' },
              {
                type: 'res',
                text: 'about-me\u2003works\u2003Links'
              },
              { type: 'cmd', text: 'view all' },
              { type: 'res', text: 'スクロールしてちょ...' },
              { type: 'cmd', text: '' }
            ]}
            canStart={true}
          />
        </div>

        <div className="bg-white pb-6">
          <div className="mx-auto max-w-5xl sm:w-3/5 px-8">
            <div
              ref={refAboutMe}
              className="py-28"
              style={{ minHeight: '600px' }}>
              <a id="about-me">
                <h2 className="text-5xl mb-6 w-full">About Me</h2>
              </a>
              {inViewAboutMe && (
                <div className="animate__animated animate__fadeInUp w-full grid md:grid-cols-2">
                  <div className="my-auto">
                    <p>
                      芝浦工業大学数理科学科、現在学部3年。
                    </p>
                    <a
                      href="https://github.com/ono-hiroki"
                      target="_blank"
                      rel="noopener noreferrer">
                      <div className="flex my-6 transform duration-200 hover:opacity-50">
                        <img
                          alt="github"
                          src="/GitHub-Mark-64px.png"
                          className="w-6 mr-2"
                        />
                        <p className="underline">@ono-hiroki</p>
                        <ExternalLinkIcon />
                      </div>
                    </a>
                  </div>

                  <div className="pt-10 md:pl-10 md:pt-0 flex">
                    <img
                      className="rounded-full border-8 m-auto w-60 md:max-w-xs md:w-full"
                      src="/profile.jpg"
                      alt="プロフィール画像"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="py-10" style={{ minHeight: '800px' }}>
              <a id="works">
                <h2 className="text-5xl mb-3 w-full">Works</h2>
              </a>

              <div ref={refWorksTeleLabo} className="mb-10">
                {inViewWorksTeleLabo && (
                  <div className="animate__animated animate__fadeInUp">
                    <Card
                      ImageSrc="/tele_labo_image.jpeg"
                      ImageAlt="テレラボのイメージ"
                      leading="テレラボ"
                      content="リモートワークや在宅勤務など、新しい働き方に特化した求人サイト。
                10ヶ月にして月間10万PV、累計55万PVを達成、求人掲載企業数も35社を超え、総額4500万円の資金調達も達成しました。
                業界最大級の規模のリモートワーク特化メディアとなっています。
                本プロダクトには、株式会社Draftyのエンジニアとして、バックエンド、フロントサイドまで幅広く担当しました。
                "
                      tags={['Laravel', 'PHP', 'JavaScript', 'AWS', 'MySQL']}
                      link="https://tele-labo.jp/"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="py-10">
              <a id="links" />
              <h2 className="text-5xl mb-3 w-full">Links</h2>
              <div className="mb-6">
                <MiniCard
                  title="リモートワーカーのための求人メディア「テレラボ」を展開する株式会社Drafty、第三者割当増資により総額4500万円の資金調達を実施"
                  link="https://prtimes.jp/main/html/rd/p/000000004.000067180.html"
                />
              </div>
            </div>

            <div className="text-gray-400 text-center">
              © 2022 Hiroki Ono. All Rights Reserved.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
