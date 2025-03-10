'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Hand, Shield, Bird, AlertTriangle } from 'lucide-react'

export default function OriginsSection() {
  return (
    <motion.div
      id='origins-content'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='pt-16'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-12 space-y-12'>
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className='flex items-center'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Hand size={70} color='#009EDB' />
          </motion.div>
          <h2 className='text-5xl md:text-6xl font-extrabold text-[#009EDB] ml-6'>
            A World at a Crossroads
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-lg mb-8'
        >
          The <i>New Agenda for Peace</i> emerges at a critical juncture for
          global cooperation, as pledged in the{' '}
          <a href='https://www.un.org/pga/75/wp-content/uploads/sites/100/2021/06/GA75-Declaration-on-the-Commemoration-of-the-75th-Anniversary.pdf'>
            75th anniversary declaration
          </a>
          . The post-Cold War unity that once bolstered the United Nations has
          faded, giving way to a fragmented geopolitical landscape. Global
          military spending surged to <b>$2.24 trillion in 2022</b> (
          <a href='https://www.sipri.org/publications/2023/sipri-fact-sheets/trends-world-military-expenditure-2022'>
            SIPRI
          </a>
          ), while conflict-related deaths reached a 28-year high (
          <a href='https://www.prio.org/Publications/Publication/?x=13395'>
            PRIO
          </a>
          ). Launched under <i>Our Common Agenda</i> (A/75/982), this agenda
          addresses a world of eroded trust between the global North and South,
          exacerbated by the COVID-19 pandemic and the war in Ukraine. It calls
          for a united front, with the UN collaborating with NATO to strengthen
          security, the African Union to enhance regional stability, and the
          European Union to support humanitarian responses, fostering a
          collective effort to navigate these challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex items-start mt-15'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Bird size={50} color='#009EDB' />
          </motion.div>
          <p className='text-lg mb-8 ml-6'>
            Rooted in the 1945 UN Charter, the agenda confronts urgent crises:
            <b>108 million people forcibly displaced</b> (
            <a href='https://www.unhcr.org/global-trends-report-2022'>UNHCR</a>)
            due to conflict, climate change, and inequality; and{' '}
            <b>3.1 million homicides from 2015–2021</b> (
            <a href='https://www.unodc.org/unodc/en/data-and-analysis/global-study-on-homicide.html'>
              UNODC
            </a>
            ). Regions like the Horn of Africa face compounded instability (
            <a href='https://www.unep.org/news-and-stories/story/climate-change-and-conflict-horn-africa'>
              UNEP
            </a>
            ), where the African Union’s peacekeeping missions complement UN
            efforts. The 2024 Summit of the Future seeks to build on this
            legacy, uniting global and regional bodies to address new threats
            like technology misuse and violence outside conflict zones, driven
            by a shared commitment to peace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='flex items-start'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Shield size={50} color='#009EDB' />
          </motion.div>
          <p className='text-lg mb-8 ml-6'>
            The transition to a multipolar world brings new power blocs and
            geoeconomic tensions, with military spending reflecting intensified
            competition. Arms control frameworks have weakened, heightening
            nuclear risks, yet NATO’s strategic alliances provide a
            counterbalance to these threats. The agenda recalls Cold War
            cooperation and notes the UN’s counter-terrorism efforts, bolstered
            by NATO and regional partners, as proof of states uniting against
            common dangers. Persistent violence—terrorism, organized crime, and
            gender-based violence—claims lives beyond battlefields, with{' '}
            <b>one in two children experiencing violence annually</b> (
            <a href='https://www.unicef.org/reports/state-worlds-children-2020'>
              UNICEF
            </a>
            ), underscoring the need for a coordinated global response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex items-start'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <AlertTriangle size={50} color='#009EDB' />
          </motion.div>
          <p className='text-lg mb-8 ml-6'>
            Emerging technologies—drones, AI, cyber warfare—pose unprecedented
            risks, accessible to non-state actors like terrorists, prompting
            NATO and the EU to develop cybersecurity norms alongside UN
            initiatives. Social media amplifies misinformation and hate,
            destabilizing societies, while only <b>12% of SDG targets</b> remain
            on track by 2030, hampered by pandemics and conflicts. Climate
            change, with a <b>1.1°C temperature rise in 2022</b> (
            <a href='https://www.ipcc.ch/report/ar6/syr/'>IPCC</a>), drives
            displacement and resource conflicts, hitting vulnerable regions like
            the Sahel hardest, where the AU and UN collaborate to mitigate
            impacts.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-lg mb-8'
        >
          International norms face strain, as seen in Russia’s invasion of
          Ukraine, which undermines sovereignty and human rights. The agenda
          notes a global retreat in rights, with polarization growing, yet the
          UN’s normative leadership persists. Supported by NATO’s defense
          frameworks, the EU’s human rights advocacy, and the AU’s regional
          governance, this effort counters patriarchal structures and double
          standards, striving for equitable peace rooted in the Charter and
          Universal Declaration of Human Rights.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='text-lg mb-8'
        >
          This crossroads demands decisive action. The UN’s historical
          achievements—preventing world wars, advancing development—contrast
          with today’s complex, often internationalized conflicts. States,
          guided by a coalition including NATO, the AU, and the EU, must balance
          competition with cooperation. The agenda urges a renewed commitment to
          peace, tackling rising distrust, technological risks, and global
          threats through this united front.
        </motion.p>
      </div>
    </motion.div>
  )
}
