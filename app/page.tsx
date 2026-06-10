import { Hero } from '@/components/hero'
import { DayCard } from '@/components/day-card'
import { SocialSection } from '@/components/social-section'
import { SiteFooter } from '@/components/site-footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { Sparkles } from '@/components/sparkles'

export default function Page() {
  return (
    <div className="relative">
      {/* full-page futuristic backdrop */}
      <div
        aria-hidden="true"
        className="mesh-bg-page pointer-events-none fixed inset-0 z-0"
      />
      <Sparkles />

      <div className="relative z-[1]">
        <ThemeToggle />
        <Hero />

      <main className="relative mx-auto max-w-[870px] px-4 py-14 sm:px-7">
        {/* vertical timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-6 top-0 z-0 h-[96%] w-0.5 rounded-full bg-gradient-to-b from-transparent via-primary/30 to-transparent sm:left-[60px]"
        />

        <div className="relative z-[1]">
          <DayCard
            mission="Mission 01"
            title="Prompt Yourself"
            delay="0.1s"
            description="Every agent boots with an initial prompt. Yours starts now."
            dayLabel="Day 1"
            date="June 8, 2026"
            image={{
              src: '/images/day1-tencent.jpg',
              alt: 'Joelle standing in front of the Tencent headquarters sign in Shenzhen',
            }}
            body={
              <>
                <p>
                  On day 1, we started with an opening ceremony where we
                  received our agent handbooks and future close-up swag bags! We
                  competed in a Kahoot quiz on Tencent facts where I placed in
                  5th, making me a team captain for the next activity. Our main
                  challenge was playing a team-based PowerPoint game based on a
                  viral Chinese trend. Each team was assigned a Tencent product
                  to pitch: (1) Qclaw, (2) YuanBao, (3) HunYuan 3D, (4)
                  Workbuddy, and (5) ima. But there&apos;s a catch, we
                  don&apos;t get to prepare the slideshow that goes with it. We
                  are given joke slides that we have to present on the spot
                  while maintaining a serious composure. Our team was assigned
                  to pitch HunYuan3D, a text-to-3D and image-to-3D model AI
                  tool. Our presentations were judged by a panel of Tencent
                  developers who helped make the products we were pitching. Our
                  team was able to come in first place in the challenge by
                  demonstrating our experimentation with the HunYuan3D tool.
                  Through text and image generation, we were able to create 3D
                  avatars of ourselves and 3D models for the Tencent logos in
                  only a couple of minutes. With the following Q&amp;A with the
                  judging panel, the overall theme of these presentations was
                  the potential for AI to be implemented in people&apos;s daily
                  lives, making everyday tasks more efficient and manageable.
                </p>
                <p>
                  Following the onboarding, we went to BYD Pingshan Factory
                  where we received a tour of the showroom describing the
                  history and innovation of BYD automotives. BYD, an acronym for
                  &quot;Build Your Dreams&quot; was founded in Shenzhen, China in
                  1994 developing rechargeable batteries before entering the
                  lithium-ion battery business in 1996. BYD didn&apos;t enter
                  the automobile industry until 2003 and began focusing on
                  renewable energy powered vehicles in 2008. BYD discontinued
                  gas vehicles in 2022 and has since been producing all hybrid
                  and electric vehicles. In the showroom, we were able to see
                  models for their luxury cars and premium features, including a
                  water-proof car that is able to float in water for 30 minutes,
                  a drone-flying car, and a jumping car that is able to smoothly
                  jump through the air. The showroom includes a -30 degrees
                  Celsius room that demonstrates the charging capabilities of
                  the BYD car in extreme temperatures, a critical feature for
                  the cold climate of Northern China. To the side of the freeze
                  room is a battery-puncturing room that provides a
                  demonstration that compares a BYD battery being punctured by a
                  nail to an NCM battery that blows up into flames upon being
                  punctured.
                </p>
                <p>
                  My main takeaway from day 1 is the emphasis on environmental,
                  social, and governance benefits from technological innovation
                  in China. When considering &quot;AI for a Shared Future&quot;
                  it&apos;s essential that environmental sustainability is at the
                  forefront of these conversations. As AI chatbots and AI agents
                  become more regular in industry and daily use, how is this
                  increased energy consumption going to affect our climate? How
                  are these companies going to be held responsible for the
                  damages their products may cause? BYD and Tencent both
                  expressed the imminent danger of rising global temperatures,
                  especially BYD stating their goal to reduce the global
                  temperature by 1 degree Celsius in coordination with UN
                  climate goals. However, I want to learn more about why this
                  works. What holds these products accountable?
                </p>
                <p>
                  Follow the rest of my journey in Shenzhen and Chengdu on
                  rednote!
                </p>
              </>
            }
          />

          <DayCard
            mission="Mission 02"
            title="Debug Yourself"
            delay="0.22s"
            description="Every agent carries biases from its training data. Today, China just gave you new data."
            dayLabel="Day 2"
            date="June 9, 2026"
            image={{
              src: '/images/day2-aviation-museum.jpg',
              alt: 'Joelle seated in the cockpit of a retired aircraft at the Sichuan Aviation Science and Technology Museum',
            }}
            body={
              <>
                <p>
                  We started bright and early to catch a flight from Shenzhen to
                  our next destination, Chengdu. Chengdu is the capital of
                  Sichuan province and it is known for its fertile farmland in
                  southwestern China. It is a major economic hub and also the
                  location of Tencent&apos;s HQ which we will be visiting on the
                  final day of the program. After arriving in Chengdu, we took a
                  bus to Pengzhou, a city under the Chengdu prefecture. Here, we
                  took a tour of the Sichuan Aviation Science and Technology
                  Museum.
                </p>
                <p>
                  This museum presents an impressive collection of model
                  airplanes, genuine retired airplanes from across all of
                  aviation history, and informative exhibits and simulations to
                  demonstrate the significance and military power of aviation in
                  China. There&apos;s a large emphasis on military technology,
                  including a diorama collection of different aviation-involved
                  political conflicts like the pearl harbor attacks, a 3D
                  animated video displaying the structured stages and strategy
                  behind air attacks, and a moving birds-eye-view map that shows
                  how planes and other military vehicles were camouflaged as
                  civilian residential areas. This map displayed 3D plaster
                  models of ordinary homes, but it was revealed by a projected
                  image that these buildings actually housed tanks, explosives,
                  and other military vehicles to avoid detection from aerial
                  view. This display forced me to reflect on how these
                  strategies lead to the purposeful bombing and destruction of
                  innocent civilians in warfare. When considering AI for the
                  shared future, we must address the role that AI has in
                  augmenting destructive and inhumane political conflict,
                  especially in the context of the recent controversial contract
                  between OpenAI and the U.S. Department of War.
                </p>
                <p>
                  Today&apos;s program mission, &quot;Debug Yourself,&quot;
                  focuses on reflecting on our biases. Individuals,
                  organizations, and societies all possess biases. As a result,
                  our AI algorithms will also possess bias. This reflection had a
                  twofold purpose. The primary purpose was to reflect on our
                  first impressions and initial perceptions of Chinese
                  technology and innovation and to consider how our opinions have
                  changed since spending a couple of days immersed in Chinese
                  tech, and secondarily, to reflect on bias in AI algorithms and
                  how it can be addressed with social responsibility in tech
                  development.
                </p>
              </>
            }
          />

          <DayCard
            mission="Mission 03"
            title="Data Collection"
            delay="0.34s"
            description='Every agent needs domain-specific training data. Today, you will switch to the "specialize mode".'
            comingSoon
          />

          <DayCard
            mission="Mission 04"
            title="Reinforcing Learning"
            delay="0.46s"
            description="The strongest agent still needs reinforcement learning from human feedback. Today, your humans are Chinese grandpas."
            comingSoon
          />

          <DayCard
            mission="Mission 05"
            title="v7.0 Agent Release"
            delay="0.58s"
            description="This is launch day. All training, debugging, collecting, aligning — converges here."
            comingSoon
          />
        </div>
      </main>

      <SocialSection />
      <SiteFooter />
      </div>
    </div>
  )
}
