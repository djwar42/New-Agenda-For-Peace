'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Users, UsersRound, Globe2, Heart, Scale } from 'lucide-react'

export default function PrinciplesSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-8 px-4 md:px-6 lg:px-12'
    >
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className='flex items-center'
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Users size={60} color='#009EDB' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#009EDB] ml-4'>
          Principles for Collective Security
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        The <i>New Agenda for Peace</i> hinges on three core principles—Trust,
        Solidarity, and Universality—as detailed in the{' '}
        <a href='https://dppa.un.org/sites/dppa.un.org/files/a_new_agenda_for_peace_policy_brief.pdf'>
          policy brief
        </a>
        . These underpin a revitalized collective security system, addressing
        global threats and fostering cooperation amid division.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6'
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Users size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>Trust</h3>
          <p className='text-lg'>
            Essential for cooperation, trust is fragile amid{' '}
            <b>60% of conflicts occurring outside war zones</b> (
            <a href='https://www.un.org/peacekeeping/documents/2022_SG_Report_on_Peace_and_Security.pdf'>
              UN
            </a>
            ). The{' '}
            <a href='https://news.un.org/en/story/2022/07/1122782'>
              Black Sea Initiative
            </a>{' '}
            exemplifies trust-building through dialogue, reducing tensions in
            volatile regions.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <UsersRound size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Solidarity
          </h3>
          <p className='text-lg'>
            With <b>80% of UN missions</b> addressing climate risks (
            <a href='https://www.un.org/peacekeeping/sites/www.un.org.peacekeeping/files/210614_final_dpo_climate_security_factsheet.pdf'>
              UN
            </a>
            ), solidarity demands collective action to rectify inequities, like
            the global financial system’s imbalances, supporting vulnerable
            states.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Globe2 size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Universality
          </h3>
          <p className='text-lg'>
            Facing a <b>30% rise in violations</b> (
            <a href='https://www.un.org/en/ga/search/view_doc.asp?symbol=A/77/335'>
              UN
            </a>
            ), universality ensures equitable norm application, countering
            selective enforcement to uphold the Charter universally.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg mb-6'
      >
        Trust is vital as <b>30% more protests erupted in 2021</b> (
        <a href='https://carnegieendowment.org/2022/02/15/global-protest-tracker-pub-86335'>
          Carnegie
        </a>
        ), reflecting citizen alienation. The UN’s military transparency
        initiatives (
        <a href='https://www.un.org/disarmament/convarms/milex/'>
          UN Report on Military Expenditures
        </a>
        ) foster confidence, while peacekeeping rebuilds trust in institutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6'
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Trust in Action
          </h3>
          <p className='text-lg'>
            UN mediation and good offices, as in the Black Sea Initiative,
            bridge divides, supported by transparency tools like the{' '}
            <a href='https://www.un.org/disarmament/convarms/register/'>
              Register of Conventional Arms
            </a>
            .
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Scale size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Solidarity Examples
          </h3>
          <p className='text-lg'>
            The global partnership for peacekeeping exemplifies solidarity, with
            states deploying forces to aid those in crisis, aligning with SDG
            17’s call for equitable burden-sharing.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Globe2 size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Universality Cases
          </h3>
          <p className='text-lg'>
            Universality counters double standards, ensuring all
            states—developed or developing—address threats like climate and
            violence equitably, per the 2030 Agenda’s universal promise.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-lg mb-6'
      >
        These principles address a world where trust wanes, solidarity falters
        under inequality, and universality is tested by selective norm
        enforcement. They build on the UN’s successes—decolonization,
        disarmament—while urging states to recommit to cooperative security.
      </motion.p>
    </motion.div>
  )
}
