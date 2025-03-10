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
      className='space-y-8 px-4 md:px-6 lg:px-12 pt-12'
    >
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className='flex items-center'
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Hand size={60} color='#009EDB' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#009EDB] ml-4'>
          A World at a Crossroads
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        The <i>New Agenda for Peace</i> arises amid a pivotal moment for global
        cooperation, as pledged in the{' '}
        <a href='https://www.un.org/pga/75/wp-content/uploads/sites/100/2021/06/GA75-Declaration-on-the-Commemoration-of-the-75th-Anniversary.pdf'>
          75th anniversary declaration
        </a>
        . The post-Cold War unity that once strengthened the UN has dissipated,
        replaced by a fragmented geopolitical landscape. Global military
        spending soared to <b>$2.24 trillion in 2022</b> (
        <a href='https://www.sipri.org/publications/2023/sipri-fact-sheets/trends-world-military-expenditure-2022'>
          SIPRI
        </a>
        ), while conflict-related deaths hit a 28-year high (
        <a href='https://www.prio.org/Publications/Publication/?x=13395'>
          PRIO
        </a>
        ). Launched under <i>Our Common Agenda</i> (A/75/982), this agenda
        responds to a world where trust between nations, particularly the global
        North and South, has eroded, intensified by events like the COVID-19
        pandemic and the war in Ukraine.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='flex items-start'
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Bird size={40} color='#009EDB' />
        </motion.div>
        <p className='text-lg mb-6 ml-4'>
          Grounded in the 1945 UN Charter, the agenda tackles pressing crises:{' '}
          <b>108 million people forcibly displaced</b> (
          <a href='https://www.unhcr.org/global-trends-report-2022'>UNHCR</a>)
          due to conflict, climate change, and inequality; and{' '}
          <b>3.1 million homicides from 2015–2021</b> (
          <a href='https://www.unodc.org/unodc/en/data-and-analysis/global-study-on-homicide.html'>
            UNODC
          </a>
          ). Regions like the Horn of Africa suffer from compounded instability
          (
          <a href='https://www.unep.org/news-and-stories/story/climate-change-and-conflict-horn-africa'>
            UNEP
          </a>
          ). The 2024 Summit of the Future aims to address these, building on
          the UN’s legacy of preventing global wars while facing new threats
          like technology misuse and rising violence outside conflict zones.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex items-start'
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Shield size={40} color='#009EDB' />
        </motion.div>
        <p className='text-lg mb-6 ml-4'>
          The shift to a multipolar world sees new power blocs and geoeconomic
          tensions, with military expenditures reflecting heightened
          competition. Arms control frameworks have weakened, raising nuclear
          risks. The agenda notes that even during the Cold War, cooperation
          persisted; today, the UN’s counter-terrorism efforts show states can
          unite against shared threats. Yet, persistent violence—terrorism,
          organized crime, and gender-based violence—claims lives beyond
          battlefields, with{' '}
          <b>one in two children experiencing violence annually</b> (
          <a href='https://www.unicef.org/reports/state-worlds-children-2020'>
            UNICEF
          </a>
          ).
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='flex items-start'
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <AlertTriangle size={40} color='#009EDB' />
        </motion.div>
        <p className='text-lg mb-6 ml-4'>
          Emerging technologies—drones, AI, cyber warfare—pose novel dangers,
          accessible to non-state actors like terrorists. Social media fuels
          misinformation and hate, exacerbating instability. Inequalities widen,
          with only <b>12% of SDG targets on track</b> by 2030, worsened by
          pandemics and wars. Climate change, driving displacement and resource
          conflicts, threatens vulnerable states most, with a{' '}
          <b>1.1°C temperature rise in 2022</b> (
          <a href='https://www.ipcc.ch/report/ar6/syr/'>IPCC</a>) destabilizing
          areas like the Sahel (
          <a href='https://www.un.org/africarenewal/magazine/january-2022/climate-change-and-conflict-sahel'>
            UN
          </a>
          ).
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-lg mb-6'
      >
        International norms face challenges, exemplified by Russia’s invasion of
        Ukraine, eroding trust in sovereignty and human rights. The agenda
        highlights a global retreat in rights, with growing polarization over
        their interpretation. Despite this, the UN’s normative role remains
        vital, rooted in the Charter and Universal Declaration of Human Rights,
        pushing back against patriarchal structures and double standards to
        ensure peace is equitable and universal.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='text-lg mb-6'
      >
        This crossroads demands action. The UN’s past successes—averting world
        wars, advancing development—contrast with today’s complex conflicts,
        often internationalized and tech-driven. States must navigate this
        transition, balancing competition with cooperation, as the agenda urges
        a recommitment to peace amid rising distrust and global threats.
      </motion.p>
    </motion.div>
  )
}
